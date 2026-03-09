const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const { fromBuffer } = require('file-type');
const cheerio = require('cheerio');
const crypto = require('crypto');
const fetch = require('node-fetch')



async function uploader60Minute(path) {
  const buffer = fs.readFileSync(path);
  const { ext } = await fromBuffer(buffer);

  if (!ext) {
    throw new Error('Could not determine file type from buffer');
  }

  const formData = new FormData();
  formData.append('image', buffer, { filename: `image.${ext}` });

  // Attempt upload to the first endpoint
  try {
    let apiKey = 'd331a3178925b5d3f6ba3791add58e50'; // Ganti dengan API key Anda
    let uploadUrl = `https://api.imgbb.com/1/upload?key=${apiKey}`;
    const uploadResponse = await axios.post(uploadUrl, formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });
	console.log(uploadResponse)
    return uploadResponse.data.data.url;
  } catch (error) {
    console.error('Upload ke imgbb gagal:', error.response ? error.response.data : error.message);
  }

  try {
    let form = new FormData();
    form.append("file", buffer, 'tmp.' + ext);
    const response = await axios.post('https://tmpfiles.org/api/v1/upload', form, {
      headers: {
        ...form.getHeaders(),
      },
    });
    const $ = cheerio.load(response.data);
    const url = $('a').attr('href');

    if (!response.data.data.url) throw new Error('URL not found in tempfiles response');
    let originalUrl = response.data.data.url; // Contoh: "https://tmpfiles.org/15140598/tmp.jpg"
	let modifiedUrl = originalUrl.replace("https://tmpfiles.org/", "https://tmpfiles.org/dl/");
	console.log(modifiedUrl); // Hasil: "https://tmpfiles.org/dl/15140598/tmp.jpg"
    return modifiedUrl
  } catch (error) {
    console.error('TmpFiles upload failed:', error.message);
  }

  try {
    let formData = new FormData();
    formData.append('file', buffer, 'tmp.' + ext);

    const response = await axios.post('https://uploader.nyxs.pw/upload', formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

    const $ = cheerio.load(response.data);
    const url = $('a').attr('href');

    if (!url) throw new Error('URL not found in Nyxs response');
  } catch (error) {
    console.error('Nyxs upload failed:', error.message);
  }
}


// -------------------------------------------------------------- [ UPLOADER ] ----------------------------------------------------------------


async function uploaderLebih(path) {
  const buffer = fs.readFileSync(path);
  const { ext } = await fromBuffer(buffer);
  
  if (!ext) {
    throw new Error('Could not determine file type from buffer');
  }
  
  const formData = new FormData();
  formData.append('image', buffer, { filename: `image.${ext}` });

  
  try {
    let apiKey = 'f0b146aca89cf284787f77b54299adec'; // Ganti dengan API key Anda
    let uploadUrl = `https://api.imgbb.com/1/upload?key=${apiKey}`;
    const uploadResponse = await axios.post(uploadUrl, formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });
  	console.log(uploadResponse)
    return uploadResponse.data.data.url;
  } catch (error) {
    console.error('Upload ke imgbb gagal:', error.response ? error.response.data : error.message);
  }

  try {
    const response = await axios.post("https://endpoint.web.id/server/upload", form, {
      headers: {
        ...form.getHeaders(), 
      },
    });
    return response.data.result.url
  } catch (error) {
    console.error('shan uploader upload failed:', error.message)
  }

  try {
    const response = await axios.post("https://github-cdn.us.kg/upload", form, {
      headers: {
        ...form.getHeaders(), 
      },
    });
    return response.data.url
  } catch(error) {
    console.error(error.message)
    m.reply(error)
  }
}



async function UploadFileUgu (input) {
	return new Promise (async (resolve, reject) => {
			const form = new BodyForm();
			form.append("files[]", fs.createReadStream(input))
			await axios({
				url: "https://uguu.se/upload.php",
				method: "POST",
				headers: {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
					...form.getHeaders()
				},
				data: form
			}).then((data) => {
				resolve(data.data.files[0])
			}).catch((err) => reject(err))
	})
}

function webp2mp4File(path) {
	return new Promise((resolve, reject) => {
		 const form = new BodyForm()
		 form.append('new-image-url', '')
		 form.append('new-image', fs.createReadStream(path))
		 axios({
			  method: 'post',
			  url: 'https://s6.ezgif.com/webp-to-mp4',
			  data: form,
			  headers: {
				   'Content-Type': `multipart/form-data; boundary=${form._boundary}`
			  }
		 }).then(({ data }) => {
			  const bodyFormThen = new BodyForm()
			  const $ = cheerio.load(data)
			  const file = $('input[name="file"]').attr('value')
			  bodyFormThen.append('file', file)
			  bodyFormThen.append('convert', "Convert WebP to MP4!")
			  axios({
				   method: 'post',
				   url: 'https://ezgif.com/webp-to-mp4/' + file,
				   data: bodyFormThen,
				   headers: {
						'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
				   }
			  }).then(({ data }) => {
				   const $ = cheerio.load(data)
				   const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
				   resolve({
						status: true,
						message: "Created By MRHRTZ",
						result: result
				   })
			  }).catch(reject)
		 }).catch(reject)
	})
}

async function floNime(medianya, options = {}) {
const { ext } = await fromBuffer(medianya) || options.ext
        var form = new BodyForm()
        form.append('file', medianya, 'tmp.'+ext)
        let jsonnya = await fetch('https://flonime.my.id/upload', {
                method: 'POST',
                body: form
        })
        .then((response) => response.json())
        return jsonnya
}

module.exports = { uploader60Minute, UploadFileUgu, webp2mp4File, floNime, uploaderLebih }


const { color } = require("./color");
const chalk = require('chalk');
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.bgGreen(color("[ UPDATE ]", "black")), chalk.white(`${__filename}`));
    delete require.cache[file];
    require(file);
});
