

 

 


const axios = require('axios');
const FormData = require('form-data');

 

const picsArt = {

  api: {

    base: 'https://picsart.com/image-upscale/',

    enhance: 'https://ai.picsart.com/gw1/enhancement/v0319/pipeline', 

    upload: 'https://upload.picsart.com/files',

    token: 'aHR0cHM6Ly9waWNzYXJ0LmNvbS9zdGF0aWMvYmFzZVN0b3JlLUROdGp5UGtuLUFEZEd3WFNyLmpz',

  },

 

  headers: {

    'Content-Type': 'application/json',

    'User-Agent': 'Postify/1.0.0',

  },

 

  constants: {

    default_upscale: 10,

    max_upscale: 40,

    retry_limit: 5,

    retry_delay: 5000,

    image_ext: ['.jpg', '.jpeg', '.png', '.webp'],

    default_payload: {

      sharp: { enabled: false, threshold: 5, kernel_size: 3, sigma: 1, amount: 1 },

      upscale: { enabled: true, target_scale: 10, units: 'pixels' },

      face_enhancement: { enabled: true, blending: 1, max_faces: 1000, impression: false, gfpgan: true },

      get_y: { enabled: false },

    },

  },

 

  buildToken: function() {

    return Buffer.from(this.api.token, 'base64').toString('utf-8');

  },

 

  extractAuthToken: function(a) {

    const match = a.match(/"x-app-authorization":"Bearer\s([^"]+)"/);

    return match ? match[1] : null;

  },

 

  getAuthToken: async function(manualBearer = null) {

    if (manualBearer) {

      return { status: true, code: 200, data: manualBearer.startsWith('Bearer ') ? manualBearer : `Bearer ${manualBearer}` };

    }

 

    const tokenx = this.buildToken();

    try {

      const response = await axios.get(tokenx);

      const authToken = this.extractAuthToken(response.data);

      if (!authToken) {

        return { status: false, code: 404, message: 'Token Bearernya kagak ada bree, kalo bisa mah input manual aja yak bree 👍🏻' };

      }

      return { status: true, code: 200, data: `Bearer ${authToken}` };

    } catch (error) {

      return { status: false, code: error.response?.status || 500, message: 'Kagak ngambil token bearernya bree 🗿' };

    }

  },

 

  isUrl: function(url) {

    if (!url) return false;

    try {

      new URL(url);

    } catch {

      return false;

    }

    return this.constants.image_ext.some(ext => url.toLowerCase().endsWith(ext));

  },

 

  dlImage: async function(image) {

    try {

      const response = await axios.get(image, { responseType: 'arraybuffer', timeout: 30000 });

      return { status: true, code: 200, data: Buffer.from(response.data, 'binary') };

    } catch (error) {

      if (error.message.includes('Request failed with status code 408')) {

        return { status: false, code: 408, message: 'Server timeout pas download, coba lagi nanti yak bree 🤣' };

      }

      return { status: false, code: error.response?.status || 500, message: `${error.message}` };

    }

  },

 

  upload: async function(image, auth) {

    try {

      const imageBuffer = await this.dlImage(image);

      if (!imageBuffer.status) {

        return { status: false, code: imageBuffer.code, message: imageBuffer.message };

      }

 

      const namex = image.split('/').pop() || 'image.jpeg';

 

      const form = new FormData();

      form.append('type', 'web-editor');

      form.append('file', imageBuffer.data, {

        filename: namex,

        contentType: 'image/jpeg',

      });

 

      const response = await axios.post(this.api.upload, form, {

        headers: {

          ...form.getHeaders(),

          'x-app-authorization': auth,

        },

        timeout: 60000,

      });

      return { status: true, code: 200, data: response.data };

    } catch (error) {

      if (error.message.includes('Request failed with status code 408')) {

        return { status: false, code: 408, message: 'Server timeout pas upload, coba lagi nanti yak bree 🤣' };

      }

      return { status: false, code: error.response?.status || 500, message: `${error.message}` };

    }

  },

 

  mergePayload: function(custom = {}) {

    const validKeys = ['sharp', 'upscale', 'face_enhancement', 'get_y'];

    const invalidKeys = Object.keys(custom).filter(key => !validKeys.includes(key));

 

    if (invalidKeys.length > 0) {

      throw new Error(`Payload ${invalidKeys.join(', ')} kagak ada bree. Nih pilih salah satunya: ${validKeys.join(', ')}`);

    }

 

    const validateValue = (key, value, defaults) => {

      if (typeof value !== typeof defaults) {

        throw new Error(`Tipe data ${key} salah nih. Harusnya ${typeof defaults}, ini malah ${typeof value}`);

      }

    };

 

    Object.entries(custom).forEach(([key, value]) => {

      const sectionNya = this.constants.default_payload[key];

      if (typeof value === 'object' && value !== null) {

        Object.entries(value).forEach(([subKey, subValue]) => {

          if (sectionNya[subKey] === undefined) {

            throw new Error(`Property '${subKey}' di ${key} ga ada bree 👍🏻`);

          }

          validateValue(`${key}.${subKey}`, subValue, sectionNya[subKey]);

        });

      }

    });

 

    if (custom.upscale && custom.upscale.target_scale) {

      if (custom.upscale.target_scale > this.constants.max_upscale) {

        throw new Error(`Target Scalenya kagak boleh lebih dari ${this.constants.max_upscale} ya bree ✍🏻 Catet tuh 😂`);

      }

    }

 

    const mergedPayload = {

      sharp: {

        ...this.constants.default_payload.sharp,

        ...(custom.sharp || {})

      },

      upscale: {

        ...this.constants.default_payload.upscale,

        ...(custom.upscale || {})

      },

      face_enhancement: {

        ...this.constants.default_payload.face_enhancement,

        ...(custom.face_enhancement || {})

      },

      get_y: {

        ...this.constants.default_payload.get_y,

        ...(custom.get_y || {})

      }

    };

 

    return mergedPayload;

  },

 

  enhance: async function(link, auth, payload) {

    try {

      const response = await axios.post(this.api.enhance, payload, {

        params: { picsart_cdn_url: link },

        headers: {

          'Content-Type': 'application/json',

          'x-app-authorization': auth,

        },

        timeout: 120000,

      });

 

      return { status: true, code: 200, data: response.data };

    } catch (error) {

      if (error.response?.status === 422) {

        return { status: false, code: 422, message: 'Anjaii, Enhancementnya gagal nih bree 😂\nCoba cek payloadnya dah sapa tau salah input ...' };

      } else if (error.response?.status === 408 || error.message.includes('Request failed with status code 408')) {

        return { status: false, code: 408, message: 'Server timeout nih bree, coba lagi nanti aja yak bree 🤣' };

      } else {

        return { status: false, code: error.response?.status || 500, message: `${error.message}` };

      }

    }

  },

 

  checkStatus: async function(transactionId, auth) {

    try {

      const response = await axios.get(`${this.api.enhance}/${transactionId}`, {

        headers: {

          'x-app-authorization': auth,

          'Accept': '*/*',

        },

        timeout: 30000,

      });

 

      if (response.data.results && response.data.results.tmp_url) {

        response.data.results.image = response.data.results.tmp_url;

        delete response.data.results.tmp_url;

      }

 

      return { status: true, code: 200, ...response.data };

    } catch (error) {

      if (error.response?.status === 408 || error.message.includes('Request failed with status code 408')) {

        return { status: false, code: 408, message: 'Server timeout nih bree, coba lagi nanti aja yak bree 😂' };

      } else {

        return { status: false, code: error.response?.status || 500, message: `${error.message}` };

      }

    }

  },

 

  processImage: async function(image, custom = {}, manualBearer = null) {

    if (!image) {

      return {

        status: false,

        code: 400,

        message: 'Link gambarnya mana? lu niat ngeupscale gambar kagak sih 🗿',

      };

    }

 

    if (!this.isUrl(image)) {

      return {

        status: false,

        code: 400,

        message: 'Linknya kagak valid bree, soalnya yang boleh di upscale cuman jpg, jpeg, webp, ama png doang 👍🏻',

      };

    }

 

    let final;

    let targetScale;

    try {

      final = Object.keys(custom).length > 0 ? this.mergePayload(custom) : this.constants.default_payload;

      targetScale = final.upscale.target_scale;

 

      if (custom.upscale && custom.upscale.target_scale) {

        console.log(`Target upscale diset ke ${targetScale}%`);

      } else {

        console.log(`Pake target upscale default: ${this.constants.default_upscale}`);

      }

    } catch (error) {

      return {

        status: false,

        code: 400,

        message: `${error.message}\nMending pake payload default aja kalo bingung`,

      };

    }

 

    const auth = await this.getAuthToken(manualBearer);

    if (!auth.status) {

      return { status: auth.status, code: auth.code, message: `${auth.message}` };

    }

 

    const response = await this.upload(image, auth.data);

    if (!response.status) {

      return { status: response.status, code: response.code, message: `${response.message}` };

    }

 

    const uploader = response.data?.result?.url;

    if (!uploader) {

      return { status: false, code: 500, message: 'Yaah, link gambar hasil uploadnya kagak ada 😂 kasian deh loooh' };

    }

 

    const enhance = await this.enhance(uploader, auth.data, final);

    if (!enhance.status) {

      if (enhance.code === 408) {

        return { status: false, code: enhance.code, message: enhance.message };

      }

      return { status: enhance.status, code: enhance.code, message: enhance.message };

    }

 

    const transactionId = enhance.data?.transaction_id;

    if (!transactionId) {

      return { status: false, code: 500, message: 'ID Tasknya kagak ada bree, dahlah terima nasib bae 😂' };

    }

 

    let status;

    let results;

    let retries = 0;

    const maxRetries = 10;

    const retryDelay = 3000;

 

    do {

      await new Promise(resolve => setTimeout(resolve, retryDelay));

      

      results = await this.checkStatus(transactionId, auth.data);

      if (!results.status) {

        if (retries < maxRetries) {

          retries++;

          continue;

        }

        return { status: false, code: results.code, message: results.message };

      }

 

      status = results.status;

      

      if (status === 'DONE') {

        const { transaction_id, results: imageResults } = results;

        return { 

          status: true, 

          code: 200,

          transaction_id,

          results: imageResults,

          target_scale: targetScale

        };

      }

 

      retries++;

    } while (retries < maxRetries);

 

    return { status: false, code: 408, message: 'Busyeet, Proses enhancementnya lama bet dah... Batalin aja yak bree 😂' };

  },

};

 
module.exports = {
    picsArt
};
