const axios = require("axios");
const FormData = require("form-data");
const {
	fromBuffer
} = require("file-type");
const fetch = require("node-fetch");

const Catbox = async (mediaPath) => {
	try {
		const {
			ext,
			mime
		} = (await fromBuffer(mediaPath)) || {};
		if (!ext || !mime) {
			throw new Error("Failed to determine file type.");
		}

		const form = new FormData();
		form.append("fileToUpload", mediaPath, {
			filename: `tmp.${ext}`,
			contentType: mime,
		});
		form.append("reqtype", "fileupload");
		form.append("userhash", "");

		const response = await axios.post("https://catbox.moe/user/api.php", form, {
			headers: form.getHeaders(),
		});

		return response.data;
	} catch (error) {
		console.error("Upload to Catbox failed:", error.message);
		throw error; // Throw error to handle fallback to Ugu
	}
};

const Supaa = async (buffer) => {
let { ext } = await fromBuffer(buffer);
    let bodyForm = new FormData();
    bodyForm.append("file", buffer, "file." + ext);
    let res = await fetch("https://i.supa.codes/api/upload", {
        method: "post",
        body: bodyForm,
    });
    let data = await res.json();
    let resultUrl = data
    return resultUrl.link
}

const UploadImg = async (mediaPath) => {
  try {
    // Coba unggah ke Catbox
    return await Catbox(mediaPath);
  } catch (error) {
    console.log("Fallback to Supa...");
    // Jika gagal, coba unggah ke Supaa
    return await Supaa(mediaPath);
  }
};

module.exports = {
	UploadImg
}