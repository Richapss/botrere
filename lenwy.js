/* 
Owner = Risa
Contact Telegram = https://t.me/shaaaiu 
Contact WhatsApp = https://wa.me/6288991583829
Contact Admin = 
https://t.me//tyaszahraa 
https://t.me//limitgurls 
https://t.me//haaokey245 
https://t.me//nnieetrsy 
*/

require('./len')
require('./logic') 
const { BufferJSON, WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const absenData = {}
const fs = require('fs')
const path = require('path')
const util = require('util')


let ms;
(async () => {
  ms = (await import('parse-ms')).default;
})()
const { FiturOwner } = require('./lib/sewa')
const chalk = require('chalk')
const os = require('os')
const qs = require('qs')
const md5 = require('md5');
const nou = require("node-os-utils");
const axios = require('axios')
const fsx = require('fs-extra')
const btoa = require('btoa');
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const qrcode = require('qrcode')
const { JSDOM } = require('jsdom')
const { color, bgcolor } = require('./lib/color')
const { ssweb } = require('./lib/ssweb')
const { quote } = require('./lib/quote')
const { Primbon } = require('scrape-primbon')
const { remini } = require('./lib/remini')
const { remini2 } = require('./lib/remini2')
 const { createCanvas, loadImage } = require("canvas");
const { uploader60Minute, uploaderLebih, up } = require('./lib/uploader')
const { fromBuffer } = require('file-type')
const uploadImage = require('./lib/uploadImage')
const primbon = new Primbon()
const hxz = require('hxz-api')
const jsobfus = require('javascript-obfuscator')
const cheerio = require('cheerio')
const ytdl = require("ytdl-core")
const { youtube } = require("btch-downloader");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const search = require("yt-search");
const fg = require('api-dylux')
const Anthropic = require("@anthropic-ai/sdk")
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { exec, spawn, execSync } = require("child_process")
const { mediafireDl } = require('./database/mediafire.js')
const { smsg, tanggal, getTime, formatp, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture, connect, connectAtl, connect2 } = require('./lib/myfunc')
const { pinterest2 } = require('./lib/scraper') 
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api")
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList, updateKey, readDatabasePayment, writeDatabasePayment, readDatabaseApp, writeDatabaseApp } = require('./lib/respon-list')
const { addRespons, checkRespons, deleteRespons } = require('./lib/respon')
const { addSewaGroup, getSewaExpired, getSewaPosition, checkSewaGroup, getAllPremiumUser } = require('./lib/sewa')
const pathsewa = './src/sewa.json';
const _sewa = require('./lib/sewa')
const sewa = db.data.sewa
const chatId = m.chat; 
const userId = m.sender
const _ = require('lodash')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { UploadImg } = require('./lib/uploaderRemini') 

const { mooCountry } = require("./lib/region");
const {
  validateMobileLegendsMoogold,
  validateHonkaiStarRailMoogold
} = require('./lib/validasi/validasiMoogold');

const {
    validateMobileLegendsVocagame,
    validateFreeFireVocagame,
    validateGenshinImpactVocagame,
    validateCodmVocagame,
    validateSuperSusVocagame
} = require('./lib/validasi/validasiVocagame');

const {
    ffStalk
    } = require('./lib/validasi/ffreg');

const slr = require('./lib/slr');
    const _slr = JSON.parse(fs.readFileSync('./database/slr.json'));
const isAfkOn = slr.checkAfkUser(m.sender, _slr)

const imgbb = require("imgbb-uploader");


const imgbbapi = "d331a3178925b5d3f6ba3791add58e50"


const penggunafile = fs.readFileSync('src/users.json', 'utf8');

const dbBl = JSON.parse(fs.readFileSync('./riper.json', 'utf8'));

// read database
global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})
}

let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakbendera2 =
db.data.game.bendera2
let tebakkabupaten =
db.data.game.kabupaten = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let asahotak =
db.data.game.otak = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tekateki =
db.data.game.teki = []
let tebaklirik = db.data.game.lirik = []
let susunkata = db.data.game.kata = []
let tebakbendera =
db.data.game.bendera = []
let siapakahaku =
db.data.game.aku = []
let tebaktebakan = db.data.game.tebakan = []
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'))
let reminders = {};
let openaigc = JSON.parse(fs.readFileSync('./database/openaigc.json'))
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
let m1 = '`'

const authorr = global.owner
const yts = require('./scrape/yt-search')
const { ytSearch } = require('./scrape/yt')
const thumbnail = fs.readFileSync ('./data/image/thumb.jpg')
const thumb = fs.readFileSync ('./data/image/thumb.jpg')
const kalimage = fs.readFileSync ('./data/image/thumb.jpg')
const { antispam } = require('./lib/antispam')
const { number, command } = require('yargs')
const { error } = require('console')
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
const owner = JSON.parse(fs.readFileSync('./premium.json'))
const author = JSON.parse(fs.readFileSync('./author.json'))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const chatbot = JSON.parse(fs.readFileSync("./lib/chatbot.json"))
const antidel = JSON.parse(fs.readFileSync("./lib/antidel.json"))
const banned = JSON.parse(fs.readFileSync('./data/db/banned.json'))
const imagenya = JSON.parse(fs.readFileSync('./database/Lenwytesti.json'))
const dbgcFilePath = path.join(__dirname, './database/databaseGroup.json')
global.datagc
try {
  global.datagc = JSON.parse(fs.readFileSync(dbgcFilePath, 'utf-8'));
} catch (error) {
  console.error('Terjadi kesalahan saat membaca file database:', error);
}

module.exports = lenwy = async (lenwy, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
const premiumFilePath = path.join("./premium.json")
const dbFilePath = path.join(__dirname, './src/database.json')
let secreto = JSON.parse(fs.readFileSync('./database/secreto_balas.json'))


//---------------------------------------------------------- Prefix SETTINGS *Batas* --------------------------------------------------------------------------------
// Mengambil prefix dari body
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) 
    ? body.match(/^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/gi)[0] // Ambil prefix yang ditemukan
    : '';
if (!body || !body.startsWith(prefix)) return;

const content = body.slice(prefix.length).trim()

const [commandRaw, ...args] = content.split(/ +/)
const command = commandRaw.toLowerCase()

const isCmd = body.startsWith(prefix)
const cmd = prefix + command
const chatId = m.chat;
//---------------------------------------------------------- Prefix SETTINGS *Batas* --------------------------------------------------------------------------------
     
     
/*const command = body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase()*/

// Fungsi untuk membaca nomor-nomor premium dari file
function getPremiumNumbers() {
    try {
        const data = fs.readFileSync(premiumFilePath, 'utf8')
        return JSON.parse(data).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
    } catch (err) {
        console.error('Error reading premium.json:', err)
        return []
    }
}
// Fungsi untuk mengambil data dari file JSON
function readDatabase() {
    try {
        const data = fs.readFileSync(dbFilePath, 'utf8')
        return JSON.parse(data)
    } catch (err) {
        console.error('Error reading database:', err)
        return { users: {} };
    }
}

// Fungsi untuk menyimpan data ke file JSON
function writeDatabase(data) {
    try {
        fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2))
    } catch (err) {
        console.error('Error writing database:', err)
    }
}

// Fungsi untuk memperbarui limit pengguna
function updateUserLimits(numbers, limit) {
    const data = readDatabase()
    
    // Memperbarui limit untuk setiap nomor
    numbers.forEach(number => {
        const userKey = `${number}@s.whatsapp.net`;
        if (data.users[userKey]) {
            data.users[userKey].limit = limit;
        } else {
            data.users[userKey] = {
                limit: limit,
                level: 0,
                autolevelup: true,
            };
        }
    })
    
    // Simpan perubahan
    writeDatabase(data)
    console.log(`Updated limits to ${limit} for numbers: ${numbers.join(', ')}`)
}
//
function getUserLimit(sender) {
    const data = readDatabase()
    const userKey = `${sender}`;
    return isPremiumUser(sender) ? Infinity : (data.users[userKey] ? data.users[userKey].limit : 50)
}

//Kalau Mau Single Prefix Kamu Ganti Command Diatas Pakai Ini : const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
//const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()



/*const content = JSON.stringify(m.message)*/
/*const args = body.trim().split(/ +/).slice(1)*/
const full_args = body.replace(command, '').slice(1).trim()
const spychat = body.replace().slice().trim()
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const quoted2 = (quoted.mtype == 'buttonsMessage') ? quoted[Object.keys(quoted)[1]] : (quoted.mtype == 'templateMessage') ? quoted.hydratedTemplate[Object.keys(quoted.hydratedTemplate)[1]] : (quoted.mtype == 'product') ? quoted[Object.keys(quoted)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted?.msg || quoted);
const isImage = (type == 'imageMessage')
const isQuotedMsg = qmsg.isQuotedMsg     
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isMedia = /image|video|sticker|audio|webp/.test(mime)
const from = m.key.remoteJid
const botNumber = await lenwy.decodeJid(lenwy.user.id)
const bot = [botNumber, ...global.bot]
const isCreator = [botNumber, ...author].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isBot = bot.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

// Memuat nomor premium dari file JSON
const premiumFilePathh = path.resolve(__dirname, './premium.json')
const premiumNumbers = JSON.parse(fs.readFileSync(premiumFilePathh))
// Daftar nomor premium termasuk bot dan pemilik
const isPrem = [botNumber, ...owner, ...author, ...premiumNumbers].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await lenwy.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? (groupMetadata && groupMetadata.subject) : ''
const participants = groupMetadata ? groupMetadata.participants : []
const groupAdmins = m.isGroup ? participants.filter(v => v.admin !== null).map(v => v.id.includes(".net") ? v.id : v.jid) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const ChatBot = m.isGroup ? chatbot.includes(from) : false 
const autodelete = from && isCmd ? antidel.includes(from) : false 
const isAutoAiGc = m.isGroup ? openaigc.includes(m.chat) : true
const isBan = banned.includes(m.sender)
const isUser = pengguna.includes(m.sender)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"
 /* FUNC NYA*/
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  if (d == 0 && h == 0 && m == 0) {
        return "Baru Saja"
    } else {
        return [d, 'H ', h, 'J '].map(v => v.toString().padStart(2, 0)).join('')
    }
  
} 
const isQuotedViewOnce = m.message.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2 ? true : false

const harinya = moment.tz('Asia/Jakarta').locale('id').format('dddd')
const tanggalnya = moment.tz('Asia/Jakarta').format('DD')
const bulannya = moment.tz('Asia/Jakarta').locale('id').format('MMMM')
const tahunnya = moment.tz('Asia/Jakarta').format('YYYY')
const namabulannya = moment.tz('Asia/Jakarta').format('MMMM')
const jamnya = moment.tz('Asia/Jakarta').format('HH')
const menitnya = moment.tz('Asia/Jakarta').format('mm')
const detiknya = moment.tz('Asia/Jakarta').format('ss')

const day = moment.tz('Asia/Jakarta').locale('id').format('dddd');
const hariini = moment.tz('Asia/Jakarta').locale('id').format('dddd, DD MMMM YYYY')
const hariini2 = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
const hariini3 = moment.tz('Asia/Jakarta').format('dddd')
const hariini4 = moment.tz('Asia/Jakarta').format('DD-MMMM-YYYY')
const waktubackup = moment.tz('Asia/Jakarta').format('DDMMMM')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = `${global.emoji} Selamat Malam`
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = `${global.emoji} Selamat Petang`
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = `${global.emoji} Selamat Sore`
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = `${global.emoji} Selamat Siang`
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = `${global.emoji} Selamat Pagi`
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = `${global.emoji} Selamat Subuh`
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = `${global.emoji} Selamat Tengah Malam`
        }
      
     
     
     
if (!lenwy.public) {
if (!m.key.fromMe && !isCreator) return
}
     

    const birunya = 
       { key: {
            remoteJid: 'status@broadcast',
            participant: '0@s.whatsapp.net',
        },
        message: {
            newsletterAdminInviteMessage: {
                newsletterJid: '120363315844427855@newsletter',
                newsletterName: 'ᴠᴇʀɪғɪᴄᴀᴛɪᴏɴ',
                caption: `Message: ${text}`,
                inviteExpiration: 0,
            },
        },
        }


const cap = 'LEN'
try {
pplu = await lenwy.profilePictureUrl(anu.id, 'image')
} catch {
pplu = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
const len = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                "contactMessage": {
                    'displayName': `${pushname}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Lenwy,;;;\nFN: Lenwy V2.0\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': pplu,
                    thumbnail: pplu,
                    sendEphemeral: true
                }   
            }
        }

const len2 = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "extendedTextMessage": {
            "text": ucapanWaktu,
            "title": ``,
            "thumbnailUrl": pplu
        }
    }
}

const lenwyreply = (teks) => {
lenwy.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `Halo ${global.emoji}${botname} Siap Melayani`,"body": `Hey kau, Jangan Spam`, "previewType": "PHOTO","thumbnail": thumb}}, mentions: [m.sender]}, { quoted: m })
}
// Tanpa ContextInfo : lenwy.sendMessage(from, { text: teks, }, { quoted: m })}

const onlygc = () => {
lenwy.sendMessage(m.chat, {
    text: `${global.emoji} *Bot Hanya Bisa Digunakan Didalam Grup*`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        title: `${ucapanWaktu}`,
        body: `${botname}`,
        thumbnailUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60",
        sourceUrl: "",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
   })
   } 

// Tanpa Chat : const onlygc = () => {}

if (command) {

  if (!m.isGroup) return

  }

 //FITUR SLR
if (m.isGroup && !m.key.fromMe) {
    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let ment of mentionUser) {
    if (slr.checkAfkUser(ment, _slr)) {
    let getId2 = slr.getAfkId(ment, _slr)
    let getReason2 = slr.getAfkReason(getId2, _slr)
    let getTimee = Date.now() - slr.getAfkTime(getId2, _slr)
    let heheh2 = ms(getTimee)
    m.reply(`Jangan tag dia bang, orangnya lagi slr.\n\n*Alasan :* ${getReason2}\n*Sejak :* ${heheh2.hours} jam, ${heheh2.minutes} menit, ${heheh2.seconds} detik yg lalu\n`)
    }
    }
	if (slr.checkAfkUser(m.sender, _slr)) {
    let getId = slr.getAfkId(m.sender, _slr)
    let getReason = slr.getAfkReason(getId, _slr)
    let getTime = Date.now() - slr.getAfkTime(getId, _slr)
    let heheh = ms(getTime)
    _slr.splice(slr.getAfkPosition(m.sender, _slr), 1)
    fs.writeFileSync('./database/slr.json', JSON.stringify(_slr))
    lenwy.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari slr\n\n*Alasan :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, m)
    }
}
     
  
     
 const sendPlay = async (text) => {
        if (!text) return m.reply("Masukan judul!")
        try {
        let { data } = await axios({
            "method": "GET",
            "url": "https://mannoffc-x.hf.space/search/spotify",
            "params": { "s": text }
        })
        let { name, artists, link, image, duration_ms } = data.result[0]
        let { data: _data } = await axios({
            "method": "GET",
            "url": "https://mannoffc-x.hf.space/download/spotify",
            "params": { "url": link }
        })
        let { download } = _data.result
        let resText = `• *Name:* ${name}\n• *Artist:* ${artists}\n• *Duration:* ${duration_ms}ms`
        let qq = await lenwy.sendMessage(m.chat, { image: { url: image }, caption: resText }, { quoted: m })
        lenwy.sendMessage(m.chat, { audio: { url: download }, mimetype: "audio/mpeg" }, { quoted: qq })
        } catch (e) {
        console.log(e)
        m.reply(e.message)
        }
    }
    
    const sendTxt2img = async (text) => {
        if (!text) return m.reply("Masukan teks!")
        try {
        var { data } = await axios({
            "method": "GET",
            "url": "https://hercai.onrender.com/v3/text2image",
            "params": { "prompt": text }
        })
        lenwy.sendMessage(m.chat, {
        image: { url: data.url }
        }, { quoted: m })
        } catch (e) {
        m.reply(e.message)
        console.log(e)
        }
    }   
    
    if (m.isGroup && m.key.fromMe && isAutoAiGc) {
let postData = {
    prompt: `${args.join(" ")}`,
    sessionId: `${m.sender}`,
    character: `Kamu adalah bot store developer dappa, kamu bukanlah ai atau chat bot, kamu adalah anak remaja smk, kamu memiliki sifat baik tapi suka toxic, kadang kamu memakai emoji 🖕 ketika kesal, kamu kalau ngobrol menggunakan bahasa gaul seperti lu untuk kamu dan gw untuk aku.`
  };
  
  try {
    let response = await axios({
      url: "https://elxyz.me/api/chat",
      method: "POST",
      data: new URLSearchParams(Object.entries(postData)),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    m.reply(`${response.data.data.answer}`)
  } catch (error) {
    m.reply('yah aku gak bisa jawab pertanyaan mu')
  }
}
    
// Daftar kata-kata toxic
const toxicWords = /(ewe|bangsad|mmk|koncol|puki|kontol|kintil|momok|nigga|ajg|ewean|yatim|anjing|kontol|memek|bangsat|babi|goblok|goblog|kntl|pepek|ppk|ngentod|ngentd|ngntd|kentod|kntd|bgst|anjg|anj|fuck|hitam|ireng|jawir|gay|asw|ktl|ngentot|ngewe|bokep|bkp|mmk|kntl|anjir|jir|njr|njir)/i;
     
  try {
  if (m.isGroup) {    
    if (!global.datagc[m.chat]) {
      // Jika grup belum ada, tambahkan ke dalam objek dengan format default
      global.datagc[m.chat] = {
        "text_welcome": "",
        "text_left": "",
        "text_open": "",
        "text_close": "",
        "text_proses": "",
        "text_done": "",
        "text_list": "",
        "text_list_simbol": ""
      };
    }
    fs.writeFileSync(dbgcFilePath, JSON.stringify(global.datagc, null, 2), 'utf-8');
  }
} catch (error) {
  console.error('Terjadi kesalahan saat membaca atau menulis file database:', error);
}   

// Inisialisasi database jika belum ada
try {
    let isNumber = x => typeof x === 'number' && !isNaN(x)
    let limitUser = global.limitawal.free;
    let user = global.db.data.users[m.sender]
    if (typeof user !== 'object') global.db.data.users[m.sender] = {};
    if (user) {
        if (!isNumber(user.afkTime)) user.afkTime = -1;
        if (!('afkReason' in user)) user.afkReason = '';
        if (!isNumber(user.limit)) user.limit = limitUser;
        if (!isNumber(user.level)) user.level = 0;
        if (!('autolevelup' in user)) user.autolevelup = true;
    } else global.db.data.users[m.sender] = {
        afkTime: -1,
        afkReason: '',
        limit: limitUser,
        saldo: 0,
        statusdepo: false,
        level: 0,
        autolevelup: true
    };

    let chats = global.db.data.chats[m.chat]
    if (typeof chats !== 'object') global.db.data.chats[m.chat] = {};
    if (chats) {
        if (!('mute' in chats)) chats.mute = true;
        if (!('wlcm' in chats)) chats.wlcm = true;
        if (!('left' in chats)) chats.left = true;
        if (!('antitoxic1' in chats)) chats.antitoxic1 = true;
        if (!('antitoxic2' in chats)) chats.antitoxic2 = true;
        if (!('antilink' in chats)) chats.antilink = true;
        if (!('antilinkyt' in chats)) chats.antilinkyt = true;
        if (!('antilinktt' in chats)) chats.antilinktt = false;
        if (!('antivirtex' in chats)) chats.antivirtex = true;
        if (!('antipanel' in chats)) chats.antipanel = false;
        if (!('antilinkgc' in chats)) chats.antilinkgc = true;
        if (!('antilinkgc2' in chats)) chats.antilinkgc2 = true;
        if (!('antiwame' in chats)) chats.antiwame = false;
        if (!('antibot' in chats)) chats.antibot = false;
        if (!('antitagsw' in
chats)) chats.antitagsw = true;
        if (!('linkgc' in chats)) chats.text_close = ``;
        if (!('text_left' in chats)) chats.text_left = ``;
        if (!('text_welcome' in chats)) chats.text_welcome = ``;
        if (!('text_open' in chats)) chats.text_open = ``;
        if (!('text_close' in chats)) chats.text_close = ``;
        if (!('text_done' in chats)) chats.text_done = ``;
        if (!('text_proses' in chats)) chats.text_proses = ``;
       if (!('text_bot' in chats)) chats.text_bot = ``; 
       if (!('autoai' in chats)) chats.autoai = false;
       if (!('autoshalat' in chats))
chats.autoshalat = true;
    } else global.db.data.chats[m.chat] = {
        mute: true,
        wlcm: true,
        left: true,
        antitoxic1: false,
        antitoxic2: false,
        antilink: true,
        antilinkyt: false,
        antilinktt: true,
        antivirtex: true,
        antipanel: false,
        antiwame: false,
        antilinkgc: false,
        antilinkgc2: false,
        antitagsw: true,
        antibot: false, 
        autoai: false,
        autoshalat: true,
        linkgc: ``,
        text_left: ``,
        text_welcome: ``,
        text_open: ``,
        text_close: ``, 
        text_done: ``, 
        text_proses: ``, 
        text_bot: ``        
    };

    let setting = global.db.data.settings[botNumber]
    if (typeof setting !== 'object') global.db.data.settings[botNumber] = {};
    if (setting) {
        if (!isNumber(setting.status)) setting.status = 0;
        if (!('autobio' in setting)) setting.autobio = false;          
    } else global.db.data.settings[botNumber] = {
        status: 0,
        autobio: false             
    };

} catch (err) {
    console.error(err)
}

let cron = require('node-cron')
        cron.schedule('02 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPrem ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
     



function updateId(oldId, newId, db_respon_list) {
  let newList = db_respon_list.filter(i => i.id === oldId)
  let updated = false
  if (newList.length > 0) {
    for (let i of newList) {
      let index = db_respon_list.findIndex(x => x.id === i.id && x.key === i.key)
      if (index !== -1) {
        db_respon_list.splice(index, 1)
        i.id = newId
        db_respon_list.push(i)
        updated = true
      }
    }
  }
  return updated
}
 

     

function cwr(tMatch, tWr, wrReq) {
    let tLose = tMatch * (100 - tWr) / 100;
    let seratusPersen = tLose * (100 / (100 - wrReq))
    let final = seratusPersen - tMatch;
    return Math.round(final)
  }                
        
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    password += characters[randomIndex]
  }
  return password;
}

async function jarak(dari, ke) {
    let html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
    let $ = cheerio.load(html), obj = {}
    let img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
    obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
    obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
    return obj
}

function pinterest(querry){
    return new Promise(async(resolve,reject) => {
         axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + querry, {
            headers: {
            "cookie" : "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
        }
            }).then(({ data }) => {
        const $ = cheerio.load(data)
        const result = []
        const hasil = []
         $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
            result.push(link)
        })
        result.forEach(v => {
         if(v == undefined) return
         hasil.push(v.replace(/230/g,'730'))
            })
            hasil.shift()
        resolve(hasil)
        })
    })
}

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

if (m.sender.startsWith('212')) return lenwy.updateBlockStatus(m.sender, 'block')

if (m.message) {
if (global.db.data.settings[botNumber].autoread) {
lenwy.readMessages([m.key])
}
}
     
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': global.ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${global.ownername},;;;\nFN:${global.ownername}\nitem1.TEL;waid=${global.owner}:${global.owner}\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}   

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await lenwy.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}

function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await lenwy.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}



function readSession() {
  try {
    return JSON.parse(fs.readFileSync('./database/aisesi.json', 'utf8'));
  } catch (error) {
    return {};
  }
}
function writeSession(data) {
  fs.writeFileSync('./database/aisesi.json', JSON.stringify(data, null, 2));
}


async function LenwyLD() {
    // Daftar emoji untuk dikirim sebagai reaksi
    const reactions = [
        "🕒", // Emoji pertama
        "🕕", // Emoji kedua
        "🕘", // Emoji ketiga
        "🕛"  // Emoji keempat
    ]
    // Kirim pesan awal sebagai indikasi loading
    // Kirim reaksi satu per satu dengan jeda
    for (const reaction of reactions) {
        await sleep(500) // Jeda waktu (0.75 detik) antara reaksi
        await lenwy.sendMessage(from, { react: { text: reaction, key: m.key } })
    }
}

if (autodelete) {
lenwy.sendMessage(m.chat, { delete: m.key })
}

if (m.isBaileys && m.fromMe) {
m.reply(`*Bot Lain Terdeteksi*\n\n*Bot Akan Di Keluarkan, Karena Admin Mengaktifkan Anti Bot*`)
await lenwy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}


//----------------------------------------------------------- [ CONSOLE LOG ] ---------------------------------------------------------------------------
if (isCmd) {
lenwy.readMessages([m.key]);  
const listcolor = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]
if (m.isGroup) {
    console.log(
        color(`[ ${groupName} ]`, `${randomcolor}`),
        color(`<-->`, `${randomcolor}`),
        color(`${pushname}`, `${randomcolor}`),
        color(` :`, `${randomcolor}`),
        color(`${body}`, `white`)
    )
}
else if (!m.isGroup) {
    let quotedSender = m.sender;
    console.log(
        color(`[ ${quotedSender.split("@")[0]} ]`, `${randomcolor}`),
        color(`<-->`, `${randomcolor}`),
        color(`${pushname}`, `${randomcolor}`),
        color(` :`, `${randomcolor}`),
        color(`${body}`, `white`)
    )
}
}
//----------------------------------------------------------- [ CONSOLE LOG ] ---------------------------------------------------------------------------



if (isCmd && !isUser) {
pengguna.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pengguna, null, 2))
}

if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
lenwy.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
lenwy.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}
     
    
if (db.data.chats[m.chat].antispam) {
  if (m.isGroup && m.message && antispam.isFiltered(from)) {
  console.log(`[SPAM]`, color(moment(m.messageTimestamp * 100).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
  return await lenwy.sendMessage(m.chat, { delete: m.key })
  }}   



if (db.data.chats[m.chat].antitoxic1) {
  const isToxic = toxicWords.exec(m.text)
  if (!m.key.fromMe && !isCreator && !isAdmins) {
    if (isToxic) {
      lenwy.sendMessage(m.chat, { delete: m.key })
    }
  }
}
     
 /*if (db.data.chats[m.chat].antitagsw) {

  const isTagsw = Tagsw.exec(m.text)
  if (!m.key.fromMe && !isCreator && !isAdmins) {
    if (isTagsw) {
      await lenwy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
  }
}*/
   if (db.data.chats[m.chat].antitagsw) {
    if (m.mtype === "groupStatusMentionMessage") {
        if (!(m.key.fromMe || isAdmins || isCreator)) {
            m.reply(`*[ DETECK ]*\n${pushname} Terdeteksi Tag Status WhatsApp di grup, pesan akan dihapus`);

            try {
                await lenwy.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.key.id,
                        participant: m.key.participant || m.participant || m.key.remoteJid
                    }
                });
            } catch (e) {
                console.error('Gagal menghapus pesan tag status:', e);
            }
        }
    }
} 
     

if (db.data.chats[m.chat].antitoxic2) {
  const isToxic = toxicWords.exec(m.text)
  if (!m.key.fromMe && !isCreator && !isAdmins) {
    if (isToxic) {
      await lenwy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
  }
}

// Anti Link
if (db.data.chats[m.chat].antilinkgc) {
  let storedLink = db.data.chats[m.chat].linkgc;
  let isLinkThisGc = new RegExp(storedLink, 'i') 
  let isgclink = isLinkThisGc.test(m.text) 
  if (!m.key.fromMe && !isCreator && !isAdmins && !isgclink) {
    if (budy.match(`chat.whatsapp.com`)) {
      m.reply(`*Anti Link Gc Sedang Aktif*\n⚠️ *Pesan Anda Akan Dihapus*`)
      lenwy.sendMessage(m.chat, { delete: m.key }) 
    }
  }
}

if (db.data.chats[m.chat].antilinkgc2) {
  let storedLink = db.data.chats[m.chat].linkgc;
  let isLinkThisGc = new RegExp(storedLink, 'i') 
  let isgclink = isLinkThisGc.test(m.text) 
  if (!m.key.fromMe && !isCreator && !isAdmins && !isgclink) {
    if (budy.match(`chat.whatsapp.com`)) {
      m.reply(`*Anti Link Gc2 Sedang Aktif*\n⚠️ *Pesan Anda Akan Di Hapus Dan Akan Di Keluarkan*`)
      lenwy.sendMessage(m.chat, { delete: m.key })
      await lenwy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
  }
}

if (db.data.chats[m.chat].antiwame) {
  if (!m.key.fromMe && !isCreator && !isAdmins) {
    if (budy.includes('https://wa.me') || budy.includes('wa.me') || budy.includes('Https://wa.me') || budy.includes('Wa.me') ) {
      m.reply(`*Anti Wame Sedang Aktif*\n⚠️ *Pesan Anda Akan Di Hapus*`)
      lenwy.sendMessage(m.chat, { delete: m.key })
    }
  }
}

if (db.data.chats[m.chat].antilink) {
  let storedLink = db.data.chats[m.chat].linkgc;
  let isLinkThisGc = new RegExp(storedLink, 'i') 
  let isgclink = isLinkThisGc.test(m.text) 
  if (!m.key.fromMe && !isCreator && !isAdmins && !isgclink) {
    if (budy.includes('https:') || budy.includes('http')) {
      m.reply(`*Anti Link Sedang Aktif*\n⚠️ *Pesan Anda Akan Di Hapus*`)
      lenwy.sendMessage(m.chat, { delete: m.key })
    }
  }
}

if (db.data.chats[m.chat].antipanel) {
  if (!m.key.fromMe && !isCreator && !isAdmins) {
    if (budy.includes('PANEL') || budy.includes('Panel') || budy.includes('panel') || budy.includes('pnel')) {
      m.reply(`*Anti Promosi Panel Sedang Aktif*\n⚠️ *Pesan Anda Akan Di Hapus*`)
      lenwy.sendMessage(m.chat, { delete: m.key })
    }
  }
}

if (db.data.chats[m.chat].antitiktok) {
  if (!m.key.fromMe && !isCreator && !isAdmins) {
    if (budy.match(`https://vt.tiktok.com`)) {
      m.reply(`*Anti Link Tiktok Sedang Aktif*\n⚠️ *Pesan Anda Akan Di Hapus*`)
      lenwy.sendMessage(m.chat, { delete: m.key })
    }
  }
}

if (db.data.chats[m.chat].antiyoutube) {
  if (!m.key.fromMe && !isCreator && !isAdmins) {
    if (budy.match(`https://youtube`)) {
      m.reply(`*Anti Link Youtube Sedang Aktif*\n⚠️ *Pesan Anda Akan Di Hapus*`)
      lenwy.sendMessage(m.chat, { delete: m.key })
    }
  }
}

if (db.data.chats[m.chat].antich) {
  if (!m.key.fromMe && !isCreator && !isAdmins) {
    if (budy.includes('https://whatsapp.com/channel/') || budy.includes('https://whatsapp.com/channel/') || budy.includes('https://whatsapp.com/channel/') || budy.includes('https://whatsapp.com/channel/') ) {
      m.reply(`*Anti Channel Whatsapp*\n⚠️ *Pesan Anda Akan Di Hapus*`)
      lenwy.sendMessage(m.chat, { delete: m.key })
    }
  }
}

if (db.data.chats[m.chat].antibot) {
  if (m.isBaileys && m.fromMe) {
    m.reply(`*Bot Lain Terdeteksi*\n\n*Bot Akan Di Keluarkan, Karena Admin Mengaktifkan Anti Bot*`)
    await lenwy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
}
    
    
    



let list = []
for (let i of owner) {
list.push({
displayName: await lenwy.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await lenwy.getName(i + '@s.whatsapp.net')}\n
FN:${await lenwy.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:FakeLenwy@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:Youtube : Lenwy\n
item3.X-ABLabel:Grup WangSaff\n
item4.ADR:;;Mars Area 51;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: lenwy.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, lenwy.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
lenwy.ev.emit('messages.upsert', msg)
}

if (budy.startsWith('©️')) {
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

async function sendGeekzMessage(chatId, message, options = {}){
let generate = await generateWAMessage(chatId, message, options)
let type2 = getContentType(generate.message)
if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
return await lenwy.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
)
const result = {
status: 200,
author: `${global.ownername}`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}
     
 async function upscale(buffer) {
  const blob = new Blob([buffer], { type: 'image/png' });
  let formData = new FormData();
  formData.append('image', blob, 'image.png');

  let { data } = await axios.post('https://api.imggen.ai/guest-upload', formData, {
    headers: {
      "content-type": "multipart/form-data",
      origin: "https://imggen.ai",
      referer: "https://imggen.ai/",
      "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36"
    }
  });

  let result = await axios.post('https://api.imggen.ai/guest-upscale-image', {
    image: {
      "url": "https://api.imggen.ai" + data.image.url,
      "name": data.image.name,
      "original_name": data.image.original_name,
      "folder_name": data.image.folder_name,
      "extname": data.image.extname
    }
  }, {
    headers: {
      "content-type": "application/json",
      origin: "https://imggen.ai",
      referer: "https://imggen.ai/",
      "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36"
    }
  });

  return `https://api.imggen.ai${result.data.upscaled_image}`;
}   
     
  async function validateMobileLegends(userId, zoneId) {
  try {
    const response = await fetch("https://slrmyshop.com.my/process.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({ userId, zoneId })
    });
    console.log(response);
    const responseBody = await response.text();
    console.log(responseBody);
    if (responseBody === '') {
      return { status: 'error', message: 'Response dari server kosong' };
    } else {
      try {
        const jsonData = JSON.parse(responseBody);
        return jsonData;
      } catch (error) {
        return { status: 'error', message: 'Response dari server tidak dalam format JSON' };
      }
    }
  } catch (error) {
    console.error("Fetch Error:", error);
    return { status: "error", message: "Gagal mendapatkan data dari server." };
  }
}
     
  if (budy.includes(`@${global.owner}`)) {
      m.reply('*`[ SYSTEM ]`* Mau Ngapain tag Pacar Ku ?')
}   
     
  /*
*
* [ *FUNCTION AI CHATBOT* ]
* Created By Hann
* 
* Saluran: https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
*
**/

//#📃: cobain sendiri, ngetag botmu untuk menjawab pertanyaanmu

/* if (budy.includes('@6283836068846')) {
  const q = budy.replace('@6283836068846', '').trim();
  if (q) {
try {
const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: "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" });
async function main(teks) {
  const completion = await groq.chat.completions
    .create({
      messages: [
        {
          role: "user",
          content: teks
        },
      ],
      model: "mixtral-8x7b-32768",
    })
    .then((chatCompletion) => {
      m.reply(chatCompletion.choices[0]?.message?.content || "");
    });
}
return main(text);
    } catch (error) {
      m.reply("aku gapapa kok.");
    }
  } else {
    m.reply("apasiii kamu??");
  }
}  */ 

async function aigpt(prompt) {
  try {
   const response = await axios.get("https://tools.revesery.com/ai/ai.php?query=" + prompt, {
     headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.9999.999 Safari/537.36'
      }
    })
    const res = response.data
    const evaled = res.result
    /*
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
m.reply(evaled)
*/
  } catch (error) {
  console.error(error)
  }
}
     
async function handleSimiCommand(m, chat, args) {
    if (args[1] === 'on' || args[1] === 'enable') {
        chat.simi = true;
            
                    
                    
        
        m.reply(' diaktifkan.');
        return;
    }

    if (args[1] === 'off' || args[1] === 'disable') {
        chat.simi = false;
           
                   
        m.reply('dinonaktifkan.');
        return;
    }

    if (chat.simi) {
         if (
 m.text.startsWith(".") ||
 m.text.startsWith(">") ||      
 m.text.startsWith("#") ||
 m.text.startsWith("$") ||
 m.text.startsWith("/") ||
 m.text.startsWith("\\/")
 ) return
        
        let { type, isBaileys } = m
          const isSticker = (type == 'stickerMessage')
      
if (isSticker) return console.log("!")
if (!m.quoted) return 
let teks = m.text
    
   let response = await fetch('https://api.simsimi.vn/v1/simtalk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                text: m.text,
                lc: 'id',
                key: ''
            })
        });

        let json = await response.json();
        m.reply("*`[ Simi ] :`* " + json.message);
    }
}
   
     
async function FakeReplyBiru(text) {
    const birunya = {
        key: {
            remoteJid: 'status@broadcast',
            participant: '0@s.whatsapp.net',
        },
        message: {
            newsletterAdminInviteMessage: {
                newsletterJid: '120363315844427855@newsletter',
                newsletterName: 'ᴠᴇʀɪғɪᴄᴀᴛɪᴏɴ',
                caption: `Message: ${text}`,
                inviteExpiration: 0,
            },
        },
    };

await lenwy.sendMessage(m.chat, { text: text }, { quoted: birunya });
}


function replyAI(jid, teks) {

const { generateMessageIDV2  } = require('@whiskeysockets/baileys');

const { randomBytes } = require('crypto')

const stanza = [];
stanza.push({
    attrs: {
        biz_bot: '1'
    },
    tag: "bot"
});
stanza.push({
    attrs: {},
    tag: "biz"
});

const gen = {
    conversation: teks,
    messageContextInfo: {
        messageSecret: randomBytes(32),
        supportPayload: "{\"version\": 1, \"is_ai_message\": true, \"should_show_system_message\": true, \"ticket_id\": \"1669945700536053\"}"
    }
};

lenwy.relayMessage(jid, gen, { 
    messageId: generateMessageIDV2(lenwy.user?.id), 
    additionalNodes: stanza 
});
}

//bisa kalian ubah2 lagi👍
//khusus private chat message gabisa di grup apapun
     
 async function upscaleNew(buffer, size = 2, anime = false) {
	try {
		return await new Promise((resolve, reject) => {
			if (!buffer) return reject("undefined buffer input!");
			if (!Buffer.isBuffer(buffer)) return reject("invalid buffer input");
			if (!/(2|4|6|8|16)/.test(size.toString())) return reject("invalid upscale size!");
			
			Jimp.read(Buffer.from(buffer))
				.then(image => {
					const { width, height } = image.bitmap;
					let newWidth = width * size;
					let newHeight = height * size;
					const form = new FormData();
					form.append("name", "upscale-" + Date.now());
					form.append("imageName", "upscale-" + Date.now());
					form.append("desiredHeight", newHeight.toString());
					form.append("desiredWidth", newWidth.toString());
					form.append("outputFormat", "png");
					form.append("compressionLevel", "none");
					form.append("anime", anime.toString());
					form.append("image_file", buffer, {
						filename: "upscale-" + Date.now() + ".png",
						contentType: 'image/png',
					});
					axios.post("https://api.upscalepics.com/upscale-to-size", form, {
						headers: {
							...form.getHeaders(),
							origin: "https://upscalepics.com",
							referer: "https://upscalepics.com"
						}
					})
					.then(res => {
						const data = res.data;
						if (data.error) return reject("something error from upscaler api!");
						resolve(data.bgRemoved);
					})
					.catch(reject);
				})
				.catch(reject);
		});
	} catch (e) {
		return { status: false, message: e };
	}
}   

async function ttslide(text) {
    let response = await axios.get(`https://dlpanda.com/id?url=${text}&token=G7eRpMaa`)
    const html = response.data
    const $ = cheerio.load(html)
    let asd = []
    let imgSrc = []
    let creator = 'Jikarinka'
    $('div.col-md-12 > img').each((index,
        element) => {
        imgSrc.push($(element).attr('src'))
    })
    asd.push({
        creator,
        imgSrc
    })
    let fix = imgSrc.map((e,
        i) => {
        return {
            img: e,
            creator: creator[i]
        }
    })
    for (let i of asd) {
        return i
    }
}
     
 async function tiktokDl(url) {
	return new Promise(async (resolve, reject) => {
		try {
			let data = []
			function formatNumber(integer) {
				let numb = parseInt(integer)
				return Number(numb).toLocaleString().replace(/,/g, '.')
			}
			
			function formatDate(n, locale = 'en') {
				let d = new Date(n)
				return d.toLocaleDateString(locale, {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				})
			}
			
			let domain = 'https://www.tikwm.com/api/';
			let res = await (await axios.post(domain, {}, {
				headers: {
					'Accept': 'application/json, text/javascript, */*; q=0.01',
					'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
					'Origin': 'https://www.tikwm.com',
					'Referer': 'https://www.tikwm.com/',
					'Sec-Ch-Ua': '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
					'Sec-Ch-Ua-Mobile': '?1',
					'Sec-Ch-Ua-Platform': 'Android',
					'Sec-Fetch-Dest': 'empty',
					'Sec-Fetch-Mode': 'cors',
					'Sec-Fetch-Site': 'same-origin',
					'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
					'X-Requested-With': 'XMLHttpRequest'
				},
				params: {
					url: url,
					count: 12,
					cursor: 0,
					web: 1,
					hd: 1
				}
			})).data.data
			if (res?.duration == 0) {
				res.images.map(v => {
					data.push({ type: 'photo', url: v })
				})
			} else {
				data.push({
					type: 'watermark',
					url: 'https://www.tikwm.com' + res?.wmplay || "/undefined",
				}, {
					type: 'nowatermark',
					url: 'https://www.tikwm.com' + res?.play || "/undefined",
				}, {
					type: 'nowatermark_hd',
					url: 'https://www.tikwm.com' + res?.hdplay || "/undefined"
				})
			}
			let json = {
				status: true,
				title: res.title,
				taken_at: formatDate(res.create_time).replace('1970', ''),
				region: res.region,
				id: res.id,
				durations: res.duration,
				duration: res.duration + ' Seconds',
				cover: 'https://www.tikwm.com' + res.cover,
				size_wm: res.wm_size,
				size_nowm: res.size,
				size_nowm_hd: res.hd_size,
				data: data,
				music_info: {
					id: res.music_info.id,
					title: res.music_info.title,
					author: res.music_info.author,
					album: res.music_info.album ? res.music_info.album : null,
					url: 'https://www.tikwm.com' + res.music || res.music_info.play
				},
				stats: {
					views: formatNumber(res.play_count),
					likes: formatNumber(res.digg_count),
					comment: formatNumber(res.comment_count),
					share: formatNumber(res.share_count),
					download: formatNumber(res.download_count)
				},
				author: {
					id: res.author.id,
					fullname: res.author.unique_id,
					nickname: res.author.nickname,
					avatar: 'https://www.tikwm.com' + res.author.avatar
				}
			}
			resolve(json)
		} catch (e) {
			
		}
	});
}   

async function cai(query) {
        let token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkVqYmxXUlVCWERJX0dDOTJCa2N1YyJ9.eyJnaXZlbl9uYW1lIjoiUkNTIiwiZmFtaWx5X25hbWUiOiJYWiIsIm5pY2tuYW1lIjoicmNzeHo2NDkiLCJuYW1lIjoiUkNTIFhaIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0lYbGpRdW11SWlQTjdwLUoxUk1HNjZ0ODZzTzJhMG9DcW93RTlZVDFzaj1zOTYtYyIsImxvY2FsZSI6ImlkIiwidXBkYXRlZF9hdCI6IjIwMjMtMTEtMDVUMTQ6NTM6NDkuNjM0WiIsImVtYWlsIjoicmNzeHo2NDlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vY2hhcmFjdGVyLWFpLnVzLmF1dGgwLmNvbS8iLCJhdWQiOiJkeUQzZ0UyODFNcWdJU0c3RnVJWFloTDJXRWtucVp6diIsImlhdCI6MTY5OTE5NjAzNCwiZXhwIjoxNzAyNzk2MDM0LCJzdWIiOiJnb29nbGUtb2F1dGgyfDExMDY5MjA2MTkzMTI0MTU4NTgwNSIsInNpZCI6IjVhaklfSlRJeFBZWGpzU0piWmdzRnQ4MXhaTHRhRERyIiwibm9uY2UiOiJUQzE0V2xvMVNGSmlkVU5FWVVSbFJXb3dTV3RJU25acVRtVTRVR3hoUldReU0xQm5Rbk0yYjAwNWJ3PT0ifQ.jduu283Aycw7GwUL270EkwoF71bINRrLnFzVJGpoG9uOO4A-jxtZ07XRZIr_t4lT_gt2N19BWXg7SGxRR_coFbCJLfyUHLzxx6ZaDGMqUnCPhJ6WXBHABsTsqnlQIJs1sQPJyLKw01-FU5FoB8atW3OIyjt0nJayJtMSm4NzKkGR2gBWZSNR3FIqX7r4NY_wUSc-1Za50FaMiLg3XdGkfE59wxs_NdlxxdPVVG4G4uKBWQCIy6ofRDnnb22Wfw1knt8yXMjGfq8RtSsAkGMmjp_KVICSRDCqy0cCOtUdmih5LCRyEQagIRBl90SP753C7ehiue_ucidCYh9XrxP7HQ";
    return new Promise(async (resolve, reject) => {
    try {
        LenwyLD()
  await sleep(3000)
        const request = await axios({
            method: "POST",
            url: "https://beta.character.ai/chat/streaming/",
            body: JSON.stringify(query),
            headers: {
            "authorization": "Token " + token,
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
            client: "Token " + token
            }
            })

        if (request.status() === 200) {
            const response = await JSON.parse(request)
            const replies = response.replies;

            const messages = []

            for (let i = 0; i < replies.length; i++) {
                lenwy.sendMessage(i, {text: `${text}`}, {quoted:m})
            }
            resolve(i)
            }
        } catch (error) {
      reject(error)
    }
})
}

function setReminder(time, reminder, sender) {
    let reminderTime = time * 60000;

    let reminderDate = new Date(Date.now() + reminderTime)

    reminders[sender] = {
        time: reminderTime,
        message: reminder,
        reminderDate: reminderDate
    };

    setTimeout(() => {
        delete reminders[sender]
    }, reminderTime)
}
     
 async function sendImage(imageBuffer, caption = '') {
  if (typeof caption !== 'string') {
    caption = String(caption);
  }
  const message = {
    image: {
      buffer: imageBuffer,
      caption: caption
    }
  };
  await m.reply(message);
}
     
async function addCountCmdUser(nama, sender, u) {
var posi = null
var pos = null
Object.keys(u).forEach((i) => {
if (u[i].jid === sender) {
posi = i
}
})
if (posi === null) {
u.push({jid: m.sender, db: [{nama: nama, count: 0}]})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
Object.keys(u).forEach((i) => {
if (u[i].jid === m.sender) {
posi = i
}
})
}
if (posi !== null) {
Object.keys(u[posi].db).forEach((i) => {
if (u[posi].db[i].nama === nama) {
pos = i
}
})
if (pos === null) {
u[posi].db.push({nama: nama, count: 1})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
} else {
u[posi].db[pos].count += 1
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
}
}
}     
     
async function addCountCmd(nama, sender, _db) {
addCountCmdUser(nama, m.sender, _cmdUser)
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].nama === nama) {
posi = i
}
})
if (posi === null) {
_db.push({nama: nama, count: 1})
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
} else {
_db[posi].count += 1
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
}
}   

async function tiktoks(query) {
  return new Promise(async (resolve, reject) => {
    try {
        LenwyLD()
  await sleep(3000)
      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/feed/search',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: {
          keywords: query,
          count: 50,
          cursor: 0,
          HD: 1
        }
      })
      const videos = response.data.data.videos;
      if (videos.length === 0) {
        reject("*Tidak Ada Video Yang Ditemukan* 😥")
      } else {
        const gywee = Math.floor(Math.random() * videos.length)
        const videorndm = videos[gywee] 

        const result = {
          title: videorndm.title,
          cover: videorndm.cover,
          origin_cover: videorndm.origin_cover,
          no_watermark: videorndm.play,
          watermark: videorndm.wmplay,
          music: videorndm.music
        };
        resolve(result)
      }
    } catch (error) {
      reject(error)
    }
  })
}

async function tiktok2(query) {
  return new Promise(async (resolve, reject) => {
    try {
        LenwyLD()
  await sleep(3000)
    const encodedParams = new URLSearchParams()
encodedParams.set('url', query)
encodedParams.set('hd', '1')

      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: encodedParams
      })
      const videos = response.data.data;
        const result = {
          title: videos.title,
          cover: videos.cover,
          origin_cover: videos.origin_cover,
          no_watermark: videos.play,
          watermark: videos.wmplay,
          music: videos.music
        };
        resolve(result)
    } catch (error) {
      reject(error)
    }
  })
}

const clean = (data) => {
  let regex = /(<([^>]+)>)/gi;
  data = data.replace(/(<br?\s?\/>)/gi, " \n")
  return data.replace(regex, "")
};

async function shortener(url) {
  return url;
}

async function tiktok11(query) {
  let response = await axios("https://lovetik.com/api/ajax/search", {
    method: "POST",
    data: new URLSearchParams(Object.entries({ query })),
  })

  result = {};

  result.creator = "YNTKTS";
  result.title = clean(response.data.desc)
  result.author = clean(response.data.author)
  result.nowm = await shortener(
    (response.data.links[0].a || "").replace("https", "http")
  )
  result.watermark = await shortener(
    (response.data.links[1].a || "").replace("https", "http")
  )
  result.audio = await shortener(
    (response.data.links[2].a || "").replace("https", "http")
  )
  result.thumbnail = await shortener(response.data.cover)
  return result;
}

async function filterValidImages(images, limit) {
  const validImages = []
  for (const image of images) {
    if (await isImageURL(image)) {
      validImages.push(image)
      if (validImages.length >= limit) {
        break // Hentikan jika sudah mencapai jumlah gambar yang diminta
      }
    }
  }
  return validImages;
}

async function isImageURL(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' })
    const contentType = res.headers.get('content-type')
    return contentType && contentType.startsWith('image') // Memeriksa apakah tipe file adalah gambar
  } catch (error) {
    return false; // Jika terjadi kesalahan dalam memeriksa URL, mengembalikan false
  }
}

var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
try {
ppuser = await lenwy.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true;
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`${global.emoji} *Kuis Matematika*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silakan Ketik Math Mode*`)
delete kuismath[m.sender.split('@')[0]]
} else {
m.reply('❌ *Jawaban Salah!*')
}
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true;
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
m.reply(`${global.emoji} *Tebak Gambar*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silakan Ketik Tebak Gambar*`)
delete tebakgambar[m.sender.split('@')[0]]
} else {
m.reply('❌ *Jawaban Salah!*')
}
}
     if (tekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true;
jawaban = tekateki[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
m.reply(`${global.emoji} *Teka-Teki*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silakan Ketik .teka teki*`)
delete tekateki[m.sender.split('@')[0]]
} else {
m.reply('❌ *Jawaban Salah!*')
}
}

 if (susunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true;
jawaban = susunkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
m.reply(`${global.emoji} *susunkata*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silakan Ketik .susun kata*`)
delete susunkata[m.sender.split('@')[0]]
} else {
m.reply('❌ *Jawaban Salah!*')
}
}

     
if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
lenwy.sendMessage(m.chat, { text: `${global.emoji} *Tebak Kata*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silahkan Ketik Tebak Kata*`}, {quoted:m}) 
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('❌ *Jawaban Salah!*')
}

  if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true;
jawaban = tebakkabupaten[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
m.reply(`${global.emoji} *Tebak Kabupaten*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silakan Ketik .tebak kabupaten*`)
delete tebakkabupaten[m.sender.split('@')[0]]
} else {
m.reply('❌ *Jawaban Salah!*')
}
}   
     if (siapakahaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true;
jawaban = 
siapakahaku[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
m.reply(`${global.emoji} *Siapakah Aku*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silakan Ketik .siapakah aku*`)
delete siapakahaku[m.sender.split('@')[0]]
} else {
m.reply('❌ *Jawaban Salah!*')
}
}
     
     if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true;
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
m.reply(`${global.emoji} *Tebak Lontong*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silakan Ketik Tebak Lontong*`)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else {
m.reply('❌ *Jawaban Salah!*')
}
}

if (asahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true;
jawaban = asahotak[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
m.reply(`${global.emoji} *Asah Otak*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silakan Ketik .asah otak*`)
delete asahotak[m.sender.split('@')[0]]
} else {
m.reply('❌ *Jawaban Salah!*')
}
}
 
     
if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true;
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
m.reply(`${global.emoji} *Tebak Lontong*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silakan Ketik Tebak Lontong*`)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else {
m.reply('❌ *Jawaban Salah!*')
}
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true;
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
m.reply(`${global.emoji} *Tebak Kalimat*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silakan Ketik Tebak Kalimat*`)
delete tebakkalimat[m.sender.split('@')[0]]
} else {
m.reply('❌ *Jawaban Salah!*')
}
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true;
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
m.reply(`${global.emoji} *Tebak Lirik*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silakan Ketik Tebak Lirik*`)
delete tebaklirik[m.sender.split('@')[0]]
} else {
m.reply('❌ *Jawaban Salah!*')
}
}
     if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true;
jawaban = tebakbendera[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
m.reply(`${global.emoji} *Tebak Bendera*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silakan Ketik .tebak bendera*`)
delete tebakbendera[m.sender.split('@')[0]]
} else {
m.reply('❌ *Jawaban Salah!*')
}
}
     


if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true;
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
m.reply(`${global.emoji} *Tebak Tebakan*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silakan Ketik Tebak Tebakan*`)
delete tebaktebakan[m.sender.split('@')[0]]
} else {
m.reply('❌ *Jawaban Salah!*')
}
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await lenwy.sendText(room.x, str, m, { mentions: parseMention(str) } )
await lenwy.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
lenwy.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
lenwy.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) lenwy.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) lenwy.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) lenwy.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
lenwy.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) lenwy.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) lenwy.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
lenwy.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
  let user = global.db.data.users[jid]
  if (!user) continue
  let afkTime = user.afkTime
  if (!afkTime || afkTime < 0) continue
  let reason = user.afkReason || ''
  let ygSedangAfk = await lenwy.getName(jid) || jid
  let pushnameYgNgetag = await lenwy.getName(m.sender) || m.sender

  m.reply(`⚠️ *${pushnameYgNgetag} 𝖩𝖺𝗇𝗀𝖺𝗇 𝖳𝖺𝗀 ${ygSedangAfk}! 𝖽𝗂𝖺 𝗌𝖾𝖽𝖺𝗇𝗀 𝖠𝖥𝖪*
❗❗ *𝖽𝖾𝗇𝗀𝖺𝗇 𝖺𝗅𝖺𝗌𝖺𝗇 :* ${reason ? reason : '𝖽𝗂𝖺 𝗀𝖺 𝗇𝗀𝖺𝗌𝗂𝗁 𝖺𝗅𝖺𝗌𝖺𝗇 𝗐𝗈𝗂😂'}
🕒 *Selama : ${clockString(new Date - afkTime)}*
`.trim())
}
 
if (global.db.data.users[m.sender].afkTime > -1) {
  let user = global.db.data.users[m.sender]     
  m.reply(`
*${pushname} Kembali Dari Afk*\n${'*Dengan Alasan :* ' + (user.afkReason ? user.afkReason : 'Tidak Ada')}\n*Selama : ${clockString(new Date - user.afkTime)}*
`.trim())
  user.afkTime = -1
  user.afkReason = ''
}

async function limit50(m) {
  const user = global.db.data.users[m.sender]

  // Cek apakah pengguna adalah premium
  if (isPrem(m.sender)) {
    m.reply('🎉 *Akun Premium Kamu Aktif* Limit tidak berkurang.')
    return true; // Mengembalikan true untuk menunjukkan bahwa limit tidak perlu dikurangi
  } else {
    // Jika pengguna bukan premium, periksa dan kurangi limit
    if (user.limit < 50) {
      m.reply('⚠️ *Limit Kamu Habis*')
      return false; // Mengembalikan false jika limit habis
    } else {
      user.limit -= 50;
      m.reply('50 Limit Digunakan')
      return true; // Mengembalikan true jika limit berhasil dikurangi
    }
  }
}

async function limit25(m) {
  const user = global.db.data.users[m.sender]

  // Cek apakah pengguna adalah premium
  if (isPrem(m.sender)) {
    m.reply('🎉 *Akun Premium Kamu Aktif* Limit tidak berkurang.')
    return true; // Mengembalikan true untuk menunjukkan bahwa limit tidak perlu dikurangi
  } else {
    // Jika pengguna bukan premium, periksa dan kurangi limit
    if (user.limit < 25) {
      m.reply('⚠️ *Limit Kamu Habis*')
      return false; // Mengembalikan false jika limit habis
    } else {
      user.limit -= 25;
      m.reply('25 Limit Digunakan')
      return true; // Mengembalikan true jika limit berhasil dikurangi
    }
  }
}
// Function untuk menyimpan perubahan ke database
function saveDatabase() {
  fs.writeFileSync('./src/database.json', JSON.stringify(global.db.data, null, 2))
}

// Function untuk memperbarui status welcome
async function updateWelcomeStatus(m, status) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)

  // Pastikan data grup ada di global.db.data
  if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {};

  const currentWelcmStatus = global.db.data.chats[m.chat].wlcm;

  if (status === "on") {
      if (currentWelcmStatus) return m.reply('Fitur Welcome sudah aktif di grup ini.')

      // Aktifkan fitur welcome untuk grup ini
      global.db.data.chats[m.chat].wlcm = true;
      saveDatabase() // Simpan perubahan ke file

      var groupMetadata = await lenwy.groupMetadata(m.chat)
      var members = groupMetadata['participants']
      var mems = []
      members.map(adm => {
          mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
      })
      lenwy.sendMessage(m.chat, { text: `Fitur Welcome Diaktifkan Di Grup Ini`, contextInfo: { mentionedJid: mems } }, { quoted: m })
  } else if (status === "off") {
      if (!currentWelcmStatus) return m.reply('Fitur Welcome sudah nonaktif di grup ini.')

      // Nonaktifkan fitur welcome untuk grup ini
      global.db.data.chats[m.chat].wlcm = false;
      saveDatabase() // Simpan perubahan ke file
      m.reply('Fitur Welcome berhasil dinonaktifkan.')

  } else {
      m.reply('Ketik on untuk mengaktifkan atau off untuk menonaktifkan fitur welcome.')
  }
}

async function updateLeftStatus(m, status) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)

  // Pastikan data grup ada di global.db.data
  if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {};

  const currentWelcmStatus = global.db.data.chats[m.chat].left;

  if (status === "on") {
      if (currentWelcmStatus) return m.reply('Fitur Left sudah aktif di grup ini.')

      // Aktifkan fitur left untuk grup ini
      global.db.data.chats[m.chat].left = true;
      saveDatabase() // Simpan perubahan ke file

      var groupMetadata = await lenwy.groupMetadata(m.chat)
      var members = groupMetadata['participants']
      var mems = []
      members.map(adm => {
          mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
      })
      lenwy.sendMessage(m.chat, { text: `Fitur Left Diaktifkan Di Grup Ini`, contextInfo: { mentionedJid: mems } }, { quoted: m })
  } else if (status === "off") {
      if (!currentWelcmStatus) return m.reply('Fitur Left sudah nonaktif di grup ini.')

      // Nonaktifkan fitur left untuk grup ini
      global.db.data.chats[m.chat].left = false;
      saveDatabase() // Simpan perubahan ke file
      m.reply('Fitur Left berhasil dinonaktifkan.')

  } else {
      m.reply('Ketik on untuk mengaktifkan atau off untuk menonaktifkan fitur left.')
  }
}

async function updateTextWelcome(m, message) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
    let textnya = `${message}`
    global.datagc[m.chat].text_welcome = textnya;
    fs.writeFileSync('./database/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
}

async function updateTextLeft(m, message) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
    let textnya = `${message}`
    global.datagc[m.chat].text_left = textnya;
    fs.writeFileSync('./database/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
}

async function updateTextOpen(m, message) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
    let textnya = `${message}`
    global.datagc[m.chat].text_open = textnya;
    fs.writeFileSync('./database/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
}
     
    async function updateTextClose(m, message) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
    let textnya = `${message}`
    global.datagc[m.chat].text_close = textnya;
    fs.writeFileSync('./database/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
} 
     
      async function updateTextDone(m, message) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
    let textnya = `${message}`
    global.datagc[m.chat].text_done = textnya;
    fs.writeFileSync('./database/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
}

async function updateTextProses(m, message) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
    let textnya = `${message}`
    global.datagc[m.chat].text_proses = textnya;
    fs.writeFileSync('./database/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
}

async function updateTextList(m, message) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
    let textnya = `${message}`
    global.datagc[m.chat].text_list = textnya;
    fs.writeFileSync('./database/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
}

async function updateTextListSimbol(m, message) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
    let textnya = `${message}`
    global.datagc[m.chat].text_list_simbol = textnya;
    fs.writeFileSync('./database/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
}
       
     async function updateBot(m, message) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)

      if (!global.db.data.chats[m.chat]) {
        global.db.data.chats[m.chat] = {};
    }
    let textnya = `${message}`
    global.db.data.chats[m.chat].text_bot = textnya;
    saveDatabase()
}

async function revokeGc(m) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
      
      if (!global.db.data.chats[m.chat]) {
        global.db.data.chats[m.chat] = {};
    }
    await lenwy.groupRevokeInvite(from)
    await new Promise(resolve => setTimeout(resolve, 2000))
    let newLink = await lenwy.groupInviteCode(from)
    global.db.data.chats[m.chat].linkgc = `https://chat.whatsapp.com/${newLink}`;
    saveDatabase()
    return newLink
}

async function catatLinkGc(m) {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
      
      if (!global.db.data.chats[m.chat]) {
        global.db.data.chats[m.chat] = {};
    }
    let newLink = await lenwy.groupInviteCode(from)
    global.db.data.chats[m.chat].linkgc = `https://chat.whatsapp.com/${newLink}`;
    saveDatabase()
}

async function upgradeRole(role, user) {
  if (!isCreator) return m.reply(mess.owner)

  let userTopup = {
    id: user,
    role: role,
    saldo: 0
  };
  let data = [];

  try {
    const fileData = fs.readFileSync('./scrape/dataBuyerDigi.json', 'utf8')
    if (fileData.trim()) {
      data = JSON.parse(fileData)
    }
  } catch (err) {
    console.log('Error saat membaca atau parsing file:', err.message)
  }

  const existingUserIndex = data.findIndex(item => item.id === user)
  if (existingUserIndex !== -1) {
    const existingSaldo = data[existingUserIndex].saldo;
    data[existingUserIndex].role = role;
    data[existingUserIndex].saldo = existingSaldo; 
  } else {
    data.push(userTopup)
  }
  
  fs.writeFileSync('./scrape/dataBuyerDigi.json', JSON.stringify(data, null, 2))
}

async function updateSaldo(user, saldo) {
  let data = []
  try {
    const fileData = fs.readFileSync('./scrape/dataBuyerDigi.json', 'utf8')
    if (fileData.trim()) {
      data = JSON.parse(fileData)
    }
  } catch (err) {
    console.log('Error saat membaca atau parsing file:', err.message)
  }

  const existingUserIndex = data.findIndex(item => item.id === user)
  if (existingUserIndex !== -1) {
    if (data[existingUserIndex].saldo === null || isNaN(data[existingUserIndex].saldo)) {
      data[existingUserIndex].saldo = 0; 
    } else {
      data[existingUserIndex].saldo = parseFloat(data[existingUserIndex].saldo) 
    }

    data[existingUserIndex].saldo += saldo; 

    fs.writeFileSync('./scrape/dataBuyerDigi.json', JSON.stringify(data, null, 2))
    return true; // Berhasil
  } else {
    return false; 
  }
}

function getUserRole(userId) {
  let users = JSON.parse(fs.readFileSync('./scrape/dataBuyerDigi.json', 'utf8'))
  let user = users.find(u => u.id === userId)
  return user ? user.role : null; 
}

async function getUserSaldo(userId) {
  let users = JSON.parse(fs.readFileSync('./scrape/dataBuyerDigi.json', 'utf8'))
  let user = users.find(u => u.id === userId)
  return user ? user.saldo : 0
}




const expiredCheck = async (lenwy) => {
    try {
        let rawData = fs.readFileSync(pathsewa, 'utf8')
        let sewa = JSON.parse(rawData)
		    let pathNotificationNumbers = './author.json'
        let notificationNumbers;
        try {
            notificationNumbers = JSON.parse(fs.readFileSync(pathNotificationNumbers, 'utf8'))
        } catch (error) {
            console.error('Failed to read notification numbers:', error.message)
            return
        }

        for (const [index, item] of sewa.entries()) {
            if (Date.now() >= item.expired) {
                console.log(`Sewa expired: ${item.id}`)

                const getGroups = await lenwy.groupFetchAllParticipating()
                const groupIds = Object.values(getGroups).map(v => v.id)

                if (groupIds.includes(item.groupId)) {
                    const teks = `Waktu sewa di grup ini sudah habis, bot akan keluar otomatis\nJika ingin sewa lagi silahkan ketik ${prefix}owner untuk mengetahui pemilik bot`;
                    await lenwy.sendMessage(item.groupId, { text: teks })
                    await lenwy.groupLeave(item.groupId)
                    
                    // Kirim pesan ke semua nomor dalam daftar
                    const notificationPromises = notificationNumbers.map(number => 
                        lenwy.sendMessage(`${number}@s.whatsapp.net`, { text: `Waktu sewa di grup *${item.groupName}* ini sudah habis\n\n\nID GRUP : ${item.groupId}\nNAMA GRUP : ${item.groupName}\nWAKTU DIMULAI : ${item.startDate}\nWAKTU BERAKHIR : ${item.endDate}` })
                    )
                    await Promise.all(notificationPromises)
                    await new Promise(resolve => setTimeout(resolve, 3000))
                }
                sewa.splice(index, 1)
                try {
                    fs.writeFileSync(pathsewa, JSON.stringify(sewa, null, 2), 'utf8')
                } catch (error) {
                    console.error('Failed to write to file:', error.message)
                }
            }
        }
    } catch (error) {
        console.error('Terjadi kesalahan saat memeriksa entri kedaluwarsa:', error.message)
    }
}
setInterval(() => {
    expiredCheck(lenwy)
}, 7 * 1000)






//----------------------------------------------//Case ADDCASE DLL\\------------------------------------------------------------------------

const totalfitur = () =>{
var mytext = fs.readFileSync("./lenwy.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length
return numUpper
}  

const listCase = () => {
const code = fs.readFileSync("./lenwy.js", "utf8")
var regex = /case\s+'([^']+)':/g;
var matches = []
var match;
while ((match = regex.exec(code))) {
matches.push(match[1])
}
let teks = `*Total Case*: ${matches.length} \n\n` 
matches.forEach(function (x) {
   teks += "  ◦  " + x + "\n"
})
return teks
}

const getcase = (cases) => {
  const fileContent = fs.readFileSync("./lenwy.js").toString()
  let validasii = fileContent.split(`case '${cases}'`)
  const caseSplit = validasii? validasii : fileContent.split(`case '${cases}'`)
  
  if (caseSplit.length < 2) {
      throw new Error(`Case '${cases}' tidak ditemukan.`)
  }

  const caseContent = caseSplit[1].split("break")[0]
  
  return "case " + `'${cases}'` + caseContent + "break";
}


async function dellCase(filePath, q) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Kesalahan untuk menambahkan case:", err)
      return
    }

    // Regex yang menangkap spasi di sekitar ':' dan pola case yang diinginkan
    const regex = new RegExp(`case\\s*['"]${q}['"]\\s*:.*?break?`, "gs")
    const modifiedData = data.replace(regex, "")
    if (modifiedData === data) {
      console.log(`Case '${q}' tidak ditemukan.`)
    } else {
      fs.writeFile(filePath, modifiedData, "utf8", (err) => {
        if (err) {
            m.reply(`Case ${q} Tidak Ada`)
          console.error("Terjadi kesalahan saat menulis file:", err)
          return
        }
		m.reply(`Mas, Done. Coba Cek`)
        console.log(`Teks dari case '${q}' telah dihapus dari file.`)
      })
    }
  })
}
     

//----------------------------------------------------------------------- [ GAME TEBAKANGKA ] ------------------------------------------------------------------------



const gameState = {
  angkaAcak: null,
  jumlahTebakan: 0
};


//----------------------------------------------------------------------- [ GAME TEBAKANGKA ] ------------------------------------------------------------------------

switch (command) {
        

    case 'randomanime': {
               
        let url = `https://api.autoresbot.com/api/random/anime?apikey=85f96e33aca5b3b69bc062e4`;
        await lenwy.sendMessage(m.chat, { image: { url } }, { quoted: m });
        break;
    }
  
        
  


        
    case 'cekgi': {
 if (!text) return m.reply('Masukkan UID Genshin.\nContoh: .cekgi 618285856');

 try {
 const response = await fetch(`https://deoberon-api.vercel.app/stalk/genshin?apikey=haqiayonima&uid=${encodeURIComponent(text)}`);

 if (!response.ok) {
 return m.reply(`Gagal mengambil data. Kode status: ${response.status}`);
 }

 const res = await response.json();

 if (!res || !res.status) {
 return m.reply('Data tidak ditemukan atau UID privat.');
 }

 const teks = `
╭─ 𝗖𝗘𝗞 𝗨𝗜𝗗 𝗚𝗘𝗡𝗦𝗛𝗜𝗡
> *𝗇𝗂𝖼𝗄𝗇𝖺𝗆𝖾 :* ${res.nickname}
> *𝗎𝗂𝖽 :* ${q}
> *𝖠𝖱 :* ${res.ar}
> *𝗐𝗈𝗋𝗅𝖽 𝗅𝖾𝗏𝖾𝗅 :* ${res.worldLevel}
> *𝖺𝖼𝗁𝗂𝖾𝗏𝖾𝗆𝖾𝗇𝗍 :* ${res.achievement}
> *𝖺𝖻𝗒𝗌𝗌 :* ${res.levelAbyss}
> *𝖻𝗂𝗈 :* ${res.bio || "-"}
╰──────────*ੈ𑁍༘⋆
`.trim();

 await lenwy.sendMessage(m.chat, { text: teks }, { quoted: m });

 // Kalau mau kirim avatar gambarnya juga, bisa pakai ini:
 // await lenwy.sendMessage(m.chat, { image: { url: res.avatarImage }, caption: teks }, { quoted: m });

 } catch (err) {
 console.error(err);
 return m.reply("Terjadi kesalahan saat memproses permintaan.");
 }
}
break          
   
 
case 'motivasikristen':{
{
let handler = async (m, { conn }) => 

    await lenwy.sendMessage(m.chat, {
      react: {
        text: '🙏',
        key: m.key
      }
    });

    const res = await axios.get('https://zelapioffciall.vercel.app/random/motivasi-kristen');
    const motivasi = res.data?.motivasi;

    if (!motivasi) throw '❌ Data motivasi tidak ditemukan.';

    let teks = `✝️ *Motivasi Kristen Hari Ini:*\n\n`;
    teks += `📖 *${motivasi.ayat}*\n`;
    teks += `"${motivasi.kitab}"\n`;
    if (motivasi.artinya) teks += `\n🕊️ _${motivasi.artinya}_`;

     await m.reply(teks);
   
    
}
}
break


  
     

    
   
 case 'getpastebin': {
 {       
    const link = args[0]?.trim(); 
const handler = async (m, { args }) => 
  
m.reply('mana link pastebin nya!');
  
   lenwy.sendMessage(from, {react: {text: "✍️",key:m.key}})  
     
  if (!/^https:\/\/pastebin\.com\/[a-zA-Z0-9]+$/.test(link)) 
    return m.reply('url gk valid')
  
 const pasteId = 
link.split('/').pop();
  

  try {
    const response = await fetch(`https://pastebin.com/raw/${pasteId}`);
    if (!response.ok) throw new Error('Gagal mengambil isi dari Pastebin.');
    const content = await response.text();
    if (!content) {
      return m.reply('Tidak ada isi yang ditemukan di Pastebin!');
    }
    m.reply(`${content}`);
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan saat mengambil data dari Pastebin.');
  }
}    
}
 break
        
   case 'cekongkir' : {
        {    
     let handler = async (m, { args, usedPrefix, command }) => 

     m.reply(`📦 *Cek Ongkir*\n\n📌 Contoh penggunaan:\n${usedPrefix + command} jakarta pati 1`);
  

  let [asal, tujuan, berat] = args;

  if (isNaN(berat)) return m.reply(`❌ Berat harus berupa angka dalam kilogram!\n\n📌 Contoh: 1 (1 kilo)`);

  try {
    m.reply('🚚 Sedang mencari ongkir, mohon tunggu...');

    const { data } = await axios.get(`https://www.zenz.biz.id/tools/cekongkir?asal=${encodeURIComponent(asal)}&tujuan=${encodeURIComponent(tujuan)}&berat=${berat}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });

    if (!data.status || !data.result || !data.result.couriers || data.result.couriers.length === 0) {
      return m.reply('❌ Gagal mendapatkan data ongkir.\n📝 Pastikan asal, tujuan, dan berat valid.');
    }

    const route = data.result.route;
    const couriers = data.result.couriers;

    let teks = (`✅ *Hasil Cek Ongkir:*\n\n📦 *Dari:* ${route.dari}\n📦 *Tujuan:* ${route.menuju}\n⚖️ *Berat:* ${route.berat}\n\n`);

    for (let kurir of couriers) {
      teks += `🚛 *${kurir.name}*\n`;
      for (let service of kurir.services) {
        teks += `• *${service.service}* - ${service.price}\n  📄 ${service.desc}\n  ⏱️ Estimasi: ${service.estimate || '-'}\n`;
      }
      teks += `\n`;
    }

    m.reply(teks.trim());

  } catch (e) {
    console.error('[CEKONGKIR ERROR]', e.response?.data || e.message);
    m.reply('⚠️ Gagal mengambil data ongkir.\n' + (e.response?.data?.message || e.message));
  }
}  
}
 break       
       
    
        
 








      
        
  case 'kataislami2': {    
    const res = await axios.get('https://zelapioffciall.vercel.app/random/kataislami');
    const message = res.data?.message;
 
    if (!message) throw '❌ Tidak ada pesan dari API.';
 
    await m.reply(`🕌 *Kata Islami Hari Ini:*\n\n📖 "${message}"`);
   
    
      
    const status = err.response?.status || 'Unknown';
    const msg = err.response?.data?.message || err.message;
    m.reply(`❌ Gagal mengambil kata islami.\n\nStatus: ${status}\nPesan: ${msg}`);
  
} 

break
        
case 'allmenu': {
let anu = `⠠⡢⣀     𝖽𝖺𝗋𝗄    ⣀⡶  𝖼𝗋𝗂𝗇𝗀! 𝖻𝗈𝗍𝗏𝖾𝗋'𝗌 𝗋𝗂𝗌𝖺  .ᐟ
  ⢠    ⢉⠦⠤⠤⢆⡉   ⡇  
  ⠘⡔⠁⡀⠄⡊⣀⠈ ⢒⠃  𝗄𝗎𝗋𝗈𝗆𝗂-𝖼𝗁𝖺𝗇 *𝗑𝗈𝗑𝗈*
    ⡆ ⠪⣤     ⣤⢱  ⡸  ֵ ✱ "  𝗅𝗂𝗌𝗍 𝖺𝗅𝗅 ── 𝗆𝖾𝗇𝗎! 
    ⠈⠑⠂        ⠐⠊      
     ૮ ⸝  💜 .  *𝖽𝗈𝖾𝗌𝗇'𝗍 𝗌𝗉𝖺𝗆 & 𝖼𝖺𝗅𝗅 𝗆𝖾* ! 
        "  보라   𝗌𝖾𝗍. 𝖿𝗈𝗋 𝗄𝖾𝗒𝖻𝗋𝗈𝖺𝖽  𐔤'𝗈𝗎𝗋  "
        
              ︵⏜᷼  ꒰꒱   𝗉𝗋𝗈𝖿𝗂𝗅 𝗂𝗇𝖿𝗈  ꒰꒱ㅤ᷼⏜︵       
      ┣ ━𑄝ֺ 𝅄  𝗎𝗌𝖾𝗋  ⦂  *@${m.sender.split("@")[0]}* 
      ┣ ━𑄝ֺ 𝅄  𝗆𝗈𝖽𝖾  ⦂ 𝗯𝗼𝘁 𝗮𝗰𝘁𝗶𝘃𝗲 
      ┣ ━𑄝ֺ 𝅄  𝗇𝗎𝗆𝖻𝖾𝗋  ⦂ *${m.sender.split("@")[0]}*}
      ┣ ━𑄝ֺ 𝅄  developer  ⦂ https://wa.me/6288991583829 
      
      ╰  ──────   ───  ────── ╯
      
            ︵⏜᷼  ꒰꒱   𝗈𝗐𝗇𝖾𝗋 𝗆𝖾𝗇𝗎 ꒰꒱ㅤ᷼⏜︵       
      ┣ ━𑄝ֺ 𝅄  𝗎𝗌𝖾𝗋  ⦂  ${runtime(process.uptime())}
      ┣ ━𑄝ֺ 𝅄  𝗆𝗈𝖽𝖾  ⦂ 𝗯𝗼𝘁 𝗮𝗰𝘁𝗶𝘃𝗲 
      ┣ ━𑄝ֺ 𝅄  𝗇𝗎𝗆𝖻𝖾𝗋  ⦂ wa.me/${authorr} 
      ╰  ──────    ───     ────── ╯

     ╭ ╮✦  ꒰  owner menu ꒱  ✦
     │ 𐂗  . ping
     │ 𐂗  . ping2  
     │ 𐂗  . push kontak  
     │ 𐂗  . join
     │ 𐂗  . addsewa
     │ 𐂗  . perpanjang sewa
     │ 𐂗  . delsewa
     │ 𐂗  . listgc
     │ 𐂗  . listsewa
     │ 𐂗  . cgc
     ╰ ╯


     ╭ ╮✦ ꒰ group menu ꒱ ✦
     │ 𐂗  . antich (on/off)
     │ 𐂗  . antiwame (on/off)  
     │ 𐂗  . antilink (on/off)
     │ 𐂗  . antipl (on/off)
     │ 𐂗  . antitoxic (on/off)
     │ 𐂗  . antilinktt (on/off)
     │ 𐂗  . antilinkyt (on/off) 
     │ 𐂗  . antiklinkgc1 (on/off)
     │ 𐂗  . antilinkgc2 (on/off)
     │ 𐂗  . addlist (nama 
     │ 𐂗  . list@respon)
     │ 𐂗  . updatenamelist (nama list@nama list baru)
     │ 𐂗  . updatelist 
     │ 𐂗  . hidetag (text nya)
     │ 𐂗  . spamht (text nya)
     │ 𐂗  . tagal (text nya)
     │ 𐂗  . faketag (text nya)
     │ 𐂗  . add
     │ 𐂗  . kick
     │ 𐂗  . promote
     │ 𐂗  . demote
     │ 𐂗  . sendlinkgc
     │ 𐂗  . promoteall
     │ 𐂗  . demoteall
     │ 𐂗  . setlist
     │ 𐂗  . setsimbol
     │ 𐂗  . pay (payment geser)
     │ 𐂗  . setpay
     │ 𐂗  . setbuttoncopy
     │ 𐂗  . setbuttonurl
     │ 𐂗  . delbutton
     │ 𐂗  . setdesk (on/off)
     │ 𐂗  . welcome (on/off)
     │ 𐂗  . left (on/off)
     │ 𐂗  . setwelcome
     │ 𐂗  . setleft
     │ 𐂗  . open
     │ 𐂗  . close
     │ 𐂗  . setopen
     │ 𐂗  . setclose
     │ 𐂗  . done
     │ 𐂗  . proses
     │ 𐂗  . setp (stiker proses)
     │ 𐂗  . setd (stiker done) 
     │ 𐂗  . setdone
     │ 𐂗  . setproses
     │ 𐂗  . bot
     │ 𐂗  . setbot
     │ 𐂗  . jeda
     │ 𐂗  . editsubjek
     │ 𐂗  . editdesk
     │ 𐂗  . setppgc
     │ 𐂗  . linkgc
     │ 𐂗  . resetlinkgc
     │ 𐂗  . afk
     │ 𐂗  . slr 
     │ 𐂗  . del (delete chat)
     ╰ ╯


     ╭ ╮✦  ꒰ game stalker menu ꒱  ✦
     │ 𐂗  . cekganda (cek dm ganda ml)
     │ 𐂗  . cekdm (cek dm mlbb 1d 1×)
     │ 𐂗  . cekml (cek region ml)
     │ 𐂗  . cekff (cek region ff) 
     │ 𐂗  . cekgi (genshin stalk)
     │ 𐂗  . cekpubg (pubg stalk)
     │ 𐂗  . cekhok (hok stalk)
     │ 𐂗  . ceksupersus 
     ╰ ╯
     
     
     ╭ ╮✦  ꒰ hd menu ꒱  ✦
     │ 𐂗  . hd
     │ 𐂗  . hd2
     │ 𐂗  . hdvid
     │ 𐂗  . hdr 
     │ 𐂗  . remini
     │ 𐂗  . remini ultra  
     ╰ ╯


     ╭ ╮✦  ꒰ fun menu ꒱  ✦
     │ 𐂗  . ipqc
     │ 𐂗  . mitos
     │ 𐂗  . fliptext
     │ 𐂗  . nulis 
     │ 𐂗  . rch
     │ 𐂗  . s
     │ 𐂗  . sgif
     │ 𐂗  . truth
     │ 𐂗  . dare
     │ 𐂗  . rate
     │ 𐂗  . apakah
     │ 𐂗  . kapankah
     │ 𐂗  . bisakah
     │ 𐂗  . bagaimanakah
     │ 𐂗  . cekganteng
     │ 𐂗  . cekcantik
     │ 𐂗  . cekhitam
     │ 𐂗  . jodoh
     │ 𐂗  . readmore
     │ 𐂗  . cwe
     │ 𐂗  . couple
     │ 𐂗  . meme
     │ 𐂗  . cekkhodam
     │ 𐂗  . fml
     │ 𐂗  . quotes
     │ 𐂗  . nickff
     │ 𐂗  . brat
     │ 𐂗  . bratvid
     │ 𐂗  . bratvid2
     │ 𐂗  . wm
     │ 𐂗  . qc
     │ 𐂗  . menfes (confes)
     ╰ ╯
     
     
     ╭ ╮✦  ꒰ tools menu ꒱  ✦
     │ 𐂗  . tts
     │ 𐂗  . gsmarena
     │ 𐂗  . imdb
     │ 𐂗  . savepin 
     │ 𐂗  . pin
     │ 𐂗  . pin2
     │ 𐂗  . getpp
     │ 𐂗  . getname
     │ 𐂗  . tomp3
     │ 𐂗  . reportbug
     │ 𐂗  . cekidgc
     │ 𐂗  . cekch
     │ 𐂗  . qckode
     │ 𐂗  . toimg
     │ 𐂗  . ocr
     │ 𐂗  . ssweb
     │ 𐂗  . removebg
     │ 𐂗  . rvo
     │ 𐂗  . torvo
     │ 𐂗  . sstab
     │ 𐂗  . sshp
     │ 𐂗  . ttstalk
     │ 𐂗  . reminder
     │ 𐂗  . getpic
     │ 𐂗  . tourl
     ╰ ╯
     
     
     ╭ ╮✦  ꒰ game menu ꒱  ✦
     │ 𐂗  . asah otak
     │ 𐂗  . siapakah aku
     │ 𐂗  . teka teki
     │ 𐂗  . slot 
     │ 𐂗  . suit
     │ 𐂗  . susun kata
     │ 𐂗  . ttc
     │ 𐂗  . delttc
     │ 𐂗  . tebak kata
     │ 𐂗  . tebak gambar
     │ 𐂗  . tebak lirik
     │ 𐂗  . tebak kalimat
     │ 𐂗  . tebak lontong
     │ 𐂗  . kuismath noob
     │ 𐂗  . kuismath easy
     │ 𐂗  . kuismath medium
     │ 𐂗  . kuismath hard
     │ 𐂗  . kuismath extreme
     │ 𐂗  . ytmp3
     │ 𐂗  . ytmp4
     ╰ ╯


     ╭ ╮✦  ꒰ search menu ꒱  ✦
     │ 𐂗  .  botver's v3 (botname)
     │ 𐂗  .  gpt
     │ 𐂗  .  ai
     ╰ ╯


" 🕷️. ⦅  𝖺𝗅𝗅𝗈𝗐 𝖿𝗈𝗋 𝗒𝗈𝗎 𝗍𝖺𝗉 𝖻𝗈𝗍  ⦆. 🕷️"
       ⚶┼───𝗁𝖺𝗉𝗉𝗒 !   ( *𝖾𝗏𝖾𝗋𝗒𝗈𝗇𝖾*  )
`
await lenwy.sendMessage(m.chat, { image: { url: 'https://img2.pixhost.to/images/5970/698478492_deomedia.jpg' }, caption: anu }, { quoted: m });
await lenwy.sendMessage(m.chat, { audio: fs.readFileSync('./audio/audio.mp3'), fileName: `coba aja sih`, mimetype: 'audio/mp4' })

}
break
   
       
case 'menu': {
let anu = ` 𐙚  ჰ𝗁-𝗁𝖾𝗅𝗅𝗈𝟢𝗈  devil  cutie’s   hideout   🕷️  ⟡
╰┈  𝖽𝗮𝗿𝗸  𝖼𝗎𝗍𝗂𝖾  𝗏𝗂𝖻𝖾𝗌  𝖻𝗒  𝓑𝗼𝘁𝘃𝗲𝗿'𝘀 𝓡𝗶𝘀𝗮  ☙//
.                                            ⢠⢤  
   ⡠             𝓀𝓊𝓇𝑜𝓂𝒾          ݂⡠⠔⢉⡇  
  ⠑⠏⠒⠢⠤⣀⡀ ⢀    ⢀⢰⠊        ⡇            𝓀𝓊𝓇𝑜𝓂𝒾
      ⢱      ⢀⠤⠓⠁ ⠁⡉⠁⠃⢆ ⣀⠇ 
𔓕  ⠈⣆⣠⠃        ⠆   ⠆     ⣀  ⢣ 𝅄  ֺ  𓈀𓈀 ֺ ♡  𓈀۪𓈀  ֺ         
          ⡇    ⡠⡂⡑⠘⠘⠉ ⠉⣂⢨⠂   𔓕 리사의 쿠로미 ── 💜. 
          ⠱⡀⡅                  ⠑⡡⠜⡎   
     ‧  ₊  '   ⠉⠒⠦⠤⠤⠥⠕⠜⠦⠤⠃ 𝓀𝓊𝓇𝑜𝓂𝒾
     
   ׄ 𔕬 ˓˓  panduan bot  ──────────‎╮
   ╭╮  list : for 𝗌𝗁𝗈𝗐 𝖼𝗈𝗆𝗆𝖺𝗇𝖽 𝗅𝗂𝗌𝗍 ◞
   ╰╯  menu : for 𝗌𝗂𝗆𝗉𝗅𝖾 𝗆𝖾𝗇𝗎 ◞
   ╭╮  allmenu : for full acces ◞
   ╰╯  owner :  for owner bot ◞

╭🦇╮ ┈  " owner menu " 쿠로미 ֪ 
   ╭──────────────────‎╮
   ││𝆺𝅥𝅮 ֶָ֢֪  ownermenu
   ││𝆺𝅥𝅮 ֶָ֢֪  groupmenu
   ││𝆺𝅥𝅮 ֶָ֢֪  gamestalker
   ││𝆺𝅥𝅮 ֶָ֢֪  faktamenu
   ││𝆺𝅥𝅮 ֶָ֢֪  randommenu
   ││𝆺𝅥𝅮 ֶָ֢֪  kalkulatormenu
   ││𝆺𝅥𝅮 ֶָ֢֪  toolsmenu
   ││𝆺𝅥𝅮 ֶָ֢֪  gamemenu
   ││𝆺𝅥𝅮 ֶָ֢֪  islammenu
   ││𝆺𝅥𝅮 ֶָ֢֪  kristenmenu
   ││𝆺𝅥𝅮 ֶָ֢֪  downloadmenu
   ││𝆺𝅥𝅮 ֶָ֢֪  searchmenu
   ╰──────────‎─────────

 ⤿ ֵ  handle  @𝐂𝐥𝐚𝐫𝐢𝐬𝐬𝐚  ─  𝗉𝗎𝗋𝗉𝗅𝖾  𝗇𝗂𝗀𝗁𝗍’𝗌  𝗅𝗈𝗏𝖾
ㅤㅤ ╰⸼  𝖽𝖺𝗋𝗄  𝖼𝗎𝗍𝗂𝖾 !  🖤  ‹  쿠로미와 함께하세요  ⸼ 
`
await lenwy.sendMessage(m.chat, { image: { url: 'https://img2.pixhost.to/images/5970/698478492_deomedia.jpg' }, caption: anu }, { quoted: m });
await lenwy.sendMessage(m.chat, { audio: fs.readFileSync('./audio/audio.mp3'), fileName: `coba aja sih`, mimetype: 'audio/mp4' })

}
break          

case 'searchmenu': {
m.reply(`
     ╭ ╮✦  ꒰ search menu ꒱  ✦
     │ 𐂗  .  botver's v3 (botname)
     │ 𐂗  .  gpt
     │ 𐂗  .  ai
     ╰ ╯
`)
}
break

case 'downloadmenu': {
m.reply(`

`)
}
break

case 'kristenmenu': {
m.reply(`

`)
}
break

case 'islammenu': {
m.reply(`

`)
}
break

case 'gamemenu': {
m.reply(`
     ╭ ╮✦  ꒰ game menu ꒱  ✦
     │ 𐂗  . asah otak
     │ 𐂗  . siapakah aku
     │ 𐂗  . teka teki
     │ 𐂗  . slot 
     │ 𐂗  . suit
     │ 𐂗  . susun kata
     │ 𐂗  . ttc
     │ 𐂗  . delttc
     │ 𐂗  . tebak kata
     │ 𐂗  . tebak gambar
     │ 𐂗  . tebak lirik
     │ 𐂗  . tebak kalimat
     │ 𐂗  . tebak lontong
     │ 𐂗  . kuismath noob
     │ 𐂗  . kuismath easy
     │ 𐂗  . kuismath medium
     │ 𐂗  . kuismath hard
     │ 𐂗  . kuismath extreme
     │ 𐂗  . ytmp3
     │ 𐂗  . ytmp4
     ╰ ╯
`)
}
break

// OWNER MENU
case 'ownermenu': {
m.reply(`
     ╭ ╮✦  ꒰  owner menu ꒱  ✦
     │ 𐂗  . ping
     │ 𐂗  . ping2  
     │ 𐂗  . push kontak  
     │ 𐂗  . join
     │ 𐂗  . addsewa
     │ 𐂗  . perpanjang sewa
     │ 𐂗  . delsewa
     │ 𐂗  . listgc
     │ 𐂗  . listsewa
     │ 𐂗  . cgc
     ╰ ╯

`)
}
break

// GROUP MENU
case 'groupmenu': {
m.reply(`
     ╭ ╮✦ ꒰ group menu ꒱ ✦
     │ 𐂗  . antich (on/off)
     │ 𐂗  . antiwame (on/off)  
     │ 𐂗  . antilink (on/off)
     │ 𐂗  . antipl (on/off)
     │ 𐂗  . antitoxic (on/off)
     │ 𐂗  . antilinktt (on/off)
     │ 𐂗  . antilinkyt (on/off) 
     │ 𐂗  . antiklinkgc1 (on/off)
     │ 𐂗  . antilinkgc2 (on/off)
     │ 𐂗  . addlist (nama 
     │ 𐂗  . list@respon)
     │ 𐂗  . updatenamelist (nama list@nama list baru)
     │ 𐂗  . updatelist 
     │ 𐂗  . hidetag (text nya)
     │ 𐂗  . spamht (text nya)
     │ 𐂗  . tagal (text nya)
     │ 𐂗  . faketag (text nya)
     │ 𐂗  . add
     │ 𐂗  . kick
     │ 𐂗  . promote
     │ 𐂗  . demote
     │ 𐂗  . sendlinkgc
     │ 𐂗  . promoteall
     │ 𐂗  . demoteall
     │ 𐂗  . setlist
     │ 𐂗  . setsimbol
     │ 𐂗  . pay (payment geser)
     │ 𐂗  . setpay
     │ 𐂗  . setbuttoncopy
     │ 𐂗  . setbuttonurl
     │ 𐂗  . delbutton
     │ 𐂗  . setdesk (on/off)
     │ 𐂗  . welcome (on/off)
     │ 𐂗  . left (on/off)
     │ 𐂗  . setwelcome
     │ 𐂗  . setleft
     │ 𐂗  . open
     │ 𐂗  . close
     │ 𐂗  . setopen
     │ 𐂗  . setclose
     │ 𐂗  . done
     │ 𐂗  . proses
     │ 𐂗  . setp (stiker proses)
     │ 𐂗  . setd (stiker done) 
     │ 𐂗  . setdone
     │ 𐂗  . setproses
     │ 𐂗  . bot
     │ 𐂗  . setbot
     │ 𐂗  . jeda
     │ 𐂗  . editsubjek
     │ 𐂗  . editdesk
     │ 𐂗  . setppgc
     │ 𐂗  . linkgc
     │ 𐂗  . resetlinkgc
     │ 𐂗  . afk
     │ 𐂗  . slr 
     │ 𐂗  . del (delete chat)
     ╰ ╯
`)
}
break

// STALK MENU
case 'stalkmenu': {
m.reply(`
     ╭ ╮✦  ꒰ game stalker menu ꒱  ✦
     │ 𐂗  . cekganda (cek dm ganda ml)
     │ 𐂗  . cekdm (cek dm mlbb 1d 1×)
     │ 𐂗  . cekml (cek region ml)
     │ 𐂗  . cekff (cek region ff) 
     │ 𐂗  . cekgi (genshin stalk)
     │ 𐂗  . cekpubg (pubg stalk)
     │ 𐂗  . cekhok (hok stalk)
     │ 𐂗  . ceksupersus 
     ╰ ╯
`)
}
break

// HD MENU
case 'hdmenu': {
m.reply(`
     ╭ ╮✦  ꒰ hd menu ꒱  ✦
     │ 𐂗  . hd
     │ 𐂗  . hd2
     │ 𐂗  . hdvid
     │ 𐂗  . hdr 
     │ 𐂗  . remini
     │ 𐂗  . remini ultra  
     ╰ ╯
`)
}
break

// FAKTA MENU
case 'faktamenu': {
m.reply(`

`)
}
break

// RANDOM MENU
case 'randommenu': {
m.reply(`

`)
}
break

// FUN MENU
case 'funmenu': {
m.reply(`
     ╭ ╮✦  ꒰ fun menu ꒱  ✦
     │ 𐂗  . ipqc
     │ 𐂗  . mitos
     │ 𐂗  . fliptext
     │ 𐂗  . nulis 
     │ 𐂗  . rch
     │ 𐂗  . s
     │ 𐂗  . sgif
     │ 𐂗  . truth
     │ 𐂗  . dare
     │ 𐂗  . rate
     │ 𐂗  . apakah
     │ 𐂗  . kapankah
     │ 𐂗  . bisakah
     │ 𐂗  . bagaimanakah
     │ 𐂗  . cekganteng
     │ 𐂗  . cekcantik
     │ 𐂗  . cekhitam
     │ 𐂗  . jodoh
     │ 𐂗  . readmore
     │ 𐂗  . cwe
     │ 𐂗  . couple
     │ 𐂗  . meme
     │ 𐂗  . cekkhodam
     │ 𐂗  . fml
     │ 𐂗  . quotes
     │ 𐂗  . nickff
     │ 𐂗  . brat
     │ 𐂗  . bratvid
     │ 𐂗  . bratvid2
     │ 𐂗  . wm
     │ 𐂗  . qc
     │ 𐂗  . menfes (confes)
     ╰ ╯
`)
}
break

// KALKULATOR MENU
case 'kalkulatormenu': {
m.reply(`

`)
}
break

// TOOLS MENU
case 'toolsmenu': {
m.reply(`
     ╭ ╮✦  ꒰ tools menu ꒱  ✦
     │ 𐂗  . tts
     │ 𐂗  . gsmarena
     │ 𐂗  . imdb
     │ 𐂗  . savepin 
     │ 𐂗  . pin
     │ 𐂗  . pin2
     │ 𐂗  . getpp
     │ 𐂗  . getname
     │ 𐂗  . tomp3
     │ 𐂗  . reportbug
     │ 𐂗  . cekidgc
     │ 𐂗  . cekch
     │ 𐂗  . qckode
     │ 𐂗  . toimg
     │ 𐂗  . ocr
     │ 𐂗  . ssweb
     │ 𐂗  . removebg
     │ 𐂗  . rvo
     │ 𐂗  . torvo
     │ 𐂗  . sstab
     │ 𐂗  . sshp
     │ 𐂗  . ttstalk
     │ 𐂗  . reminder
     │ 𐂗  . getpic
     │ 𐂗  . tourl
     ╰ ╯
`)
}
break


        
        
        
 case 'randomanime':{
let url = `https://api.autoresbot.com/api/random/anime?text=${q}&apikey=85f96e33aca5b3b69bc062e4`
teks = ""
teks += "*Random Meme*\n\n"
teks += `🎁 *Source Meme :* ${reis}`
teks += ""
lenwy.sendMessage(m.chat, {image: {url: url}, caption: teks}, { quoted:m })
     }
break
        
   
    
      
    case 'randomaesthetic': {
               
        let url = `https://api.autoresbot.com/api/random/aesthetic?apikey=85f96e33aca5b3b69bc062e4`;
        await lenwy.sendMessage(m.chat, { image: { url } }, { quoted: m });
        break;
        }





case 'randomcecan': {
               
        let url = `https://api.autoresbot.com/api/random/cecan?apikey=85f96e33aca5b3b69bc062e4`;
        await lenwy.sendMessage(m.chat, { image: { url } }, { quoted: m });
        break;
    }

case 'randomcogan': {
               
        let url = `https://api.autoresbot.com/api/random/cogan?apikey=85f96e33aca5b3b69bc062e4`;
        await lenwy.sendMessage(m.chat, { image: { url } }, { quoted: m });
        break;
    }

case 'randomcosplay': {
               
        let url = `https://api.autoresbot.com/api/random/cosplay?apikey=85f96e33aca5b3b69bc062e4`;
        await lenwy.sendMessage(m.chat, { image: { url } }, { quoted: m });
        break;
    }

case 'randomdarkjoke': {
               
        let url = `https://api.autoresbot.com/api/random/darkjoke?apikey=85f96e33aca5b3b69bc062e4`;
        await lenwy.sendMessage(m.chat, { image: { url } }, { quoted: m });
        break;
    }






case 'randomhacker': {
               
        let url = `https://api.autoresbot.com/api/random/hacker?apikey=85f96e33aca5b3b69bc062e4`;
        await lenwy.sendMessage(m.chat, { image: { url } }, { quoted: m });
        break;
    }


case 'randomkucing': {
               
        let url = `https://api.autoresbot.com/api/random/kucing?apikey=85f96e33aca5b3b69bc062e4`;
        await lenwy.sendMessage(m.chat, { image: { url } }, { quoted: m });
        break;
    }

case 'randommemeindo': {
               
        let url = `https://api.autoresbot.com/api/random/memeindo?apikey=85f96e33aca5b3b69bc062e4`;
        await lenwy.sendMessage(m.chat, { image: { url } }, { quoted: m });
        break;
    }

case 'randommemeworld': {
               
        let url = `https://api.autoresbot.com/api/random/memeworld?apikey=85f96e33aca5b3b69bc062e4`;
        await lenwy.sendMessage(m.chat, { image: { url } }, { quoted: m });
        break;
    }

case 'randommotivasi': {
               
        let url = `https://api.autoresbot.com/api/random/motivasi?apikey=85f96e33aca5b3b69bc062e4`;
        await lenwy.sendMessage(m.chat, { image: { url } }, { quoted: m });
        break;
    }



case 'randomprofil': {
               
        let url = `https://api.autoresbot.com/api/random/profil?apikey=85f96e33aca5b3b69bc062e4`;
        await lenwy.sendMessage(m.chat, { image: { url } }, { quoted: m });
        break;
    }

case 'randompubg': {
               
        let url = `https://api.autoresbot.com/api/random/pubg?apikey=85f96e33aca5b3b69bc062e4`;
        await lenwy.sendMessage(m.chat, { image: { url } }, { quoted: m });
        break;
    }




        



case 'randomthailand': {
               
        let url = `https://api.autoresbot.com/api/random/thailand?apikey=85f96e33aca5b3b69bc062e4`;
        await lenwy.sendMessage(m.chat, { image: { url } }, { quoted: m });
        break;
    }

case 'randomvietnam': {
               
        let url = `https://api.autoresbot.com/api/random/vietnam?apikey=85f96e33aca5b3b69bc062e4`;
        await lenwy.sendMessage(m.chat, { image: { url } }, { quoted: m });
        break;
    }

case 'randomchina': {
               
        let url = `https://api.autoresbot.com/api/random/china?apikey=85f96e33aca5b3b69bc062e4`;
        await lenwy.sendMessage(m.chat, { image: { url } }, { quoted: m });
        break;
    }


        
     case 'attp': {
				if (!text) return m.reply(`Masukkan teks!`);
				lenwy.sendMessage(from, {react: {text: "⚡",key:m.key}})

				try {
					const stickerUrl = `https://api.autoresbot.com/api/maker/attp?text=${q}&apikey=85f96e33aca5b3b69bc062e4`

					await lenwy.sendImageAsSticker(m.chat, stickerUrl, m, { packname: global.packname, author: global.author });
		
				} catch (error) {
					console.error(error);
					m.reply('Terjadi kesalahan saat membuat stiker. Silakan coba lagi nanti.');
				}
			}
			break  
        
        
        
        
    case 'randomwaifu': {
 await lenwy.sendMessage(m.chat, {
  react: { text: '⏰', key: m.key }
});
  try {
    const jumlahGambar = 8;
    let picked = [];

    // Ambil beberapa gambar dari API (loop)
    for (let i = 0; i < jumlahGambar; i++) {
      let res = await fetch('https://api.autoresbot.com/api/random/anime');
      let buffer = await res.buffer();
      picked.push({ buffer, directLink: 'https://api.autoresbot.com/api/random/anime?text=${q}&apikey=85f96e33aca5b3b69bc062e4' }); // static link
    }

    const carouselCards = await Promise.all(picked.map(async (item, index) => ({
      header: {
        title: `🎀 ʙʟᴜᴇ ᴀʀᴄʜɪᴠᴇ ${index + 1}`,
        hasMediaAttachment: true,
        imageMessage: (await generateWAMessageContent({
          image: item.buffer
        }, {
          upload: lenwy.waUploadToServer
        })).imageMessage
      },
      body: {
        text: `🖼️ ᴡᴀɪғᴜ ʀᴀɴᴅᴏᴍ ᴋᴇ - ${index + 1}`
      },
      footer: {
        text: "🔹 ɢᴇsᴇʀ ᴜɴᴛᴜᴋ ʟɪʜᴀᴛ ʟᴀɪɴɴʏᴀ"
      },
      nativeFlowMessage: {
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "🌐 ʙᴜᴋᴀ sɪᴛᴜs",
              url: item.directLink
            })
          }
        ]
      }
    })));

    const carouselMessage = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: {
              text: `🎀 ᴡᴀɪғᴜ ʀᴀɴᴅᴏᴍ ʙʟᴜᴇ ᴀʀᴄʜɪᴠᴇ`
            },
            footer: {
              text: `📂 Gambar Ke: ${jumlahGambar}`
            },
            carouselMessage: {
              cards: carouselCards
            }
          })
        }
      }
    }, {
      quoted: m
    });

    await lenwy.relayMessage(m.chat, carouselMessage.message, {
      messageId: carouselMessage.key.id
    });

  } catch (err) {
    console.error('Blue Archive random image error:', err);
    m.reply('❌ Gagal memuat waifu!');
  }
}
break    
        
        
  case 'infoml': {
  try {
    const { data } = await axios.get('https://www.gamerisme.com/events/category/mobile-legends/');
    const $ = cheerio.load(data);
    const results = [];

    $('.tribe-events-calendar-latest-past__event').each((i, el) => {
      const title = $(el).find('.tribe-events-calendar-latest-past__event-title-link').text().trim();
      const url = $(el).find('.tribe-events-calendar-latest-past__event-title-link').attr('href');
      const image = $(el).find('img.tribe-events-calendar-latest-past__event-featured-image').attr('src');
      const dateStart = $(el).find('.tribe-event-date-start').text().trim();
      const dateEnd = $(el).find('.tribe-event-date-end').text().trim();
      const description = $(el).find('.tribe-events-calendar-latest-past__event-description').text().trim();

      results.push({ title, url, image, dateStart, dateEnd, description });
    });

    if (results.length === 0) {
      await lenwy.sendMessage(m.chat, { text: '⚠️ Tidak ada event Mobile Legends yang ditemukan.' }, { quoted: m });
    }

    let teks = '*📅 Daftar Event Mobile Legends Terbaru:*\n\n';
    results.slice(0, 5).forEach((res, i) => {
      teks += `🆔 *${i + 1}.* ${res.title}\n`;
      teks += `🗓️ ${res.dateStart} - ${res.dateEnd}\n`;
      teks += `🔗 ${res.url}\n`;
      teks += `📝 ${res.description ? res.description.substring(0, 150) + '...' : '-'}\n\n`;
    });

    lenwy.sendMessage(m.chat, { text: teks.trim() }, { quoted: m });
  } catch (err) {
    console.error(err);
    lenwy.sendMessage(m.chat, {
      text: (`❌ Gagal mengambil data event Mobile Legends!\n\nError: ${err.message}`)
    }, { quoted: m });
  }
      }
  break 
  
  
  
  
  
  case 'ipqc' : {
    
  if (!q) return m.reply(`gunakan : .ipqc jam|batre|pesan\n\ncontoh : .ipqc 18:00|40|Risa jago bgt wok😎`)

  let [time, battery, ...msg] = text.split('|')
  /*if (!time||!battery||msg.length === 0) throw 'format salahh gunakan :\n.iqc jam|batre|pesan\nContoh:\n.iqc 18:00|40|hai hai'*/

lenwy.sendMessage(from, {react: {text: "⚡",key:m.key}})

  let messageText = encodeURIComponent(msg.join('|').trim())
  let buffer = await fetch (`https://api.nexray.web.id/maker/iqc?text=${encodeURIComponent(time)}&batteryPercentage=${battery}&carrierName=TELKOMSEL&messageText=${messageText}&emojiStyle=apple`)

  await lenwy.sendMessage(m.chat, { image: buffer }, { quoted: m })
        break
      }  
        
        
      case 'gsmarena': {
 if (!text) {
 return m.reply(`📱 Silakan masukkan nama HP yang ingin dicari\nContoh: ${prefix}Iphone 16 Pro Max`);
 }

 try {
 await lenwy.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });

 const apiUrl = `https://zenzxz.dpdns.org/search/gsmarena?phone=${encodeURIComponent(text)}`;
 const { data } = await axios.get(apiUrl);
 
 if (!data.status || !data.result) {
 return m.reply('❌ Tidak ditemukan informasi untuk HP tersebut');
 }

 const phone = data.result;
 
 let message = `
╭─「 *${phone.phoneName}* 」
│
│ 📷 *Gambar:* ${phone.imageUrl}
│ 💰 *Harga:* ${phone.prices?.EUR || phone.prices?.USD || 'Tidak tersedia'}
│
├─── ⋆⋅☆⋅⋆ ───
│
│ *📋 Spesifikasi Utama:*
│
├ *Jaringan:* ${phone.specs?.Network?.Technology || '-'}
├ *Layar:* ${phone.specs?.Display?.Size || '-'}
├ *Chipset:* ${phone.specs?.Platform?.Chipset || '-'}
├ *RAM/Storage:* ${phone.specs?.Memory?.Internal || '-'}
├ *Kamera Utama:* ${phone.specs?.['Main Camera']?.Dual || phone.specs?.['Main Camera']?.Single || '-'}
├ *Baterai:* ${phone.specs?.Battery?.Type || '-'} ${phone.specs?.Battery?.Charging || ''}
│
├─── ⋆⋅☆⋅⋆ ───
│
│ ℹ️ Gunakan command *${prefix}fullspec ${text}* untuk melihat spesifikasi lengkap
│
╰─「 *Data dari GSMArena* 」─
`.trim();

 // Kirim gambar HP terlebih dahulu
 if (phone.imageUrl) {
 try {
 await lenwy.sendMessage(m.chat, { 
 image: { url: phone.imageUrl },
 caption: `📱 ${phone.phoneName}`
 }, { quoted: m });
 } catch (imgError) {
 console.error('Gagal mengirim gambar:', imgError);
 }
 }

 // Kirim informasi spesifikasi
 await m.reply(message);

 await lenwy.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

 } catch (error) {
 console.error('GSMArena Error:', error);
 m.reply(`⚠️ Gagal mencari informasi HP: ${error.message}`);
 }
};
break
case 'cekroblox': {
 if (!text) {
 return m.reply(`Silakan masukkan username Roblox.\n*Contoh:*\n${prefix}Luluxdiamond`);
 }

 try {
 await lenwy.sendMessage(m.chat, { react: { text: '🎮', key: m.key } });

 const apiUrl = `https://zenzxz.dpdns.org/stalker/roblox?username=${encodeURIComponent(text)}`;
 const { data } = await axios.get(apiUrl);
 if (!data.status || !data.success) throw new Error('User tidak ditemukan.');

 const user = data.data.account;
 const presence = data.data.presence;
 const stats = data.data.stats;
 
 const caption = `
╭─ • 「 *Roblox Stalk* 」
│ 
├ 👤 *Username:* ${user.username}
├ 🏷️ *Display Name:* ${user.displayName}
├ 📝 *Bio:* ${user.description || 'Tidak ada bio'}
│ 
├ 📅 *Dibuat:* ${new Date(user.created).toLocaleString()}
├ 🚫 *Banned:* ${user.isBanned ? '✅' : '❌'}
├ ✅ *Verified:* ${user.hasVerifiedBadge ? '✅' : '❌'}
│ 
├ 🌐 *Status:* ${presence.isOnline ? '🟢 Online' : '🔴 Offline'}
├ ⏱️ *Terakhir Online:* ${presence.lastOnline || 'Tidak diketahui'}
├ 🎮 *Aktivitas Terakhir:* ${presence.recentGame}
│ 
├ 📊 *Statistik:*
├ 👥 *Friends:* ${stats.friendCount.toLocaleString()}
├ 📌 *Followers:* ${stats.followers.toLocaleString()}
├ 👀 *Following:* ${stats.following.toLocaleString()}
│ 
╰─ • *Creator:* ${data.creator}
 `.trim();

 // Kirim dengan gambar profil jika ada
 if (user.profilePicture) {
 await lenwy.sendMessage(m.chat, {
 image: { url: user.profilePicture },
 caption: caption
 }, { quoted: m });
 } else {
 await m.reply(caption);
 }

 } catch (error) {
 console.error(error);
 m.reply(`Gagal melakukan stalk pada user *${text}*. Username mungkin salah.`);
 }
};
break  

        
        
        
  
    

        
        
        
        
      case 'editfoto': {


async function editImage(imageBuffer, prompt) {
  const form = new FormData()
  form.append('image', imageBuffer, {
    filename: 'image.png',
    contentType: 'image/png'
  })
  form.append('prompt', prompt)
  form.append('model', 'gpt-image-1')
  form.append('n', '1')
  form.append('size', '1024x1024')
  form.append('quality', 'medium')

  const response = await axios.post(
    'https://api.openai.com/v1/images/edits',
    form,
    {
      headers: {
        ...form.getHeaders(),
        Authorization: `Bearer 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`
      }
    }
  )

  const base64 = response.data?.data?.[0]?.b64_json
  if (!base64) throw new Error('ga ada respon dari api open e ay')
  return Buffer.from(base64, 'base64')
}

const handler = async (m, { conn, text, command }) => {
  if (!text) return m.reply(`contoh ni : .editfoto ubah jadi anime`)

  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime.startsWith('image/')) return m.reply(`contoh ni : .editfoto ubah jadi anime`)

  try {
    m.reply('waitt bg')
    let img = await q.download()
    let resultBuffer = await editImage(img, text)
    await lenwy.sendFile(m.chat, resultBuffer, 'edit.png', 'donee', m)
  } catch (err) {
    m.reply(`Eror kak : ${err.message}`)
  }
}
}
break  
        
        
     case 'saveyt': {
  if (!text) return m.reply('Masukkan URL YouTube-nya!\n\nContoh: .saveyt https://youtube.com/watch?v=xxxx 360p')

  let [url, quality] = text.split(' ')
  quality = quality || '480p'

  const qualityMap = {
    '1080p': 'Full HD (1080p)',
    '720p': 'HD (720p)',
    '480p': 'SD (480p)',
    '360p': 'Low (360p)',
    '240p': 'Very Low (240p)',
    '144p': 'Tiny (144p)'
  }

  if (!qualityMap[quality]) return m.reply(`Kualitas tidak valid!\n\nGunakan salah satu dari:\n${Object.keys(qualityMap).join(', ')}`)

  try {
    let { data } = await axios.post('https://api.ytmp4.fit/api/video-info', { url }, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://ytmp4.fit',
        'Referer': 'https://ytmp4.fit/'
      }
    })

    if (!data || !data.title) throw new Error('Gagal mengambil info video.')

    let { title, duration, channel, views, thumbnail } = data

    await lenwy.sendMessage(m.chat, {
      text: `🎬 *Info Video YouTube:*\n\n📌 Judul: ${title}\n📺 Channel: ${channel}\n⏱ Durasi: ${duration}\n👁 Views: ${views}\n\n⏳ Mengunduh kualitas *${qualityMap[quality]}*...`,
      contextInfo: {
        externalAdReply: {
          title: title,
          body: channel,
          thumbnailUrl: thumbnail,
          mediaType: 1,
          renderLargerThumbnail: true,
          sourceUrl: url
        }
      }
    }, { quoted: m })

    let videoRes = await axios.post('https://api.ytmp4.fit/api/download', { url, quality }, {
      responseType: 'arraybuffer',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/octet-stream',
        'Origin': 'https://ytmp4.fit',
        'Referer': 'https://ytmp4.fit/',
      }
    })

    if (!videoRes.headers['content-type'].includes('video')) {
      throw new Error('Gagal mengunduh video.')
    }

    let filename = decodeURIComponent(
      (videoRes.headers['content-disposition'] || '').split("filename*=UTF-8''")[1] || `video_${quality}.mp4`
    ).replace(/[\/\\:*?"<>|]/g, '_')

    await lenwy.sendMessage(m.chat, {
      video: Buffer.from(videoRes.data),
      mimetype: 'video/mp4',
      fileName: filename,
      caption: `✅ *Berhasil mengunduh video!*\n\n📌 Judul: ${title}\n🎞️ Kualitas: ${qualityMap[quality]}\n\nPowered By risa`
    }, { quoted: m })

  } catch (err) {
    m.reply(`❌ Error: ${err.message}`)
  }
}
break  
        

   case 'savepin': {
  if (!text) return m.reply('❌ Masukkan URL Pinterest!\nContoh: .savepin https://pin.it/2NCffxXoN');

  try {
    await lenwy.sendMessage(m.chat, {
      react: { text: '⏰', key: m.key }
    });

    const res = await fetch(`https://api.nekorinn.my.id/downloader/pinterest?url=${encodeURIComponent(text)}`);
    const data = await res.json();

    if (!data.status || !data.result || !data.result.medias?.length) {
      return m.reply('❌ Tidak ditemukan media pada link tersebut.');
    }

    const media = data.result.medias.find(m => m.extension === 'mp4') ||
                  data.result.medias.find(m => m.extension === 'jpg');

    if (!media) return m.reply('❌ Tidak ditemukan media yang dapat dikirim.');

    const caption = `📌 *Pinterest Downloader*\n\n🎞️ *Judul:* ${data.result.title}\n💾 *Ukuran:* ${media.formattedSize || '-'}\n📎 *Sumber:* ${text}`;
    const type = media.extension === 'mp4' ? 'video' : 'image';

    await lenwy.sendMessage(m.chat, {
      [type]: { url: media.url },
      caption
    }, { quoted: m });

  } catch (err) {
    console.error('PinterestDL Error:', err);
    m.reply('❌ Terjadi kesalahan saat mengambil media Pinterest.');
  }
}
break    
        
case 'bluearchive': {
 await lenwy.sendMessage(m.chat, {
 react: { text: '⏰', key: m.key }
});
 try {
 const jumlahGambar = 8;
 let picked = [];

 // Ambil beberapa gambar dari API (loop)
 for (let i = 0; i < jumlahGambar; i++) {
 let res = await fetch('https://zelapioffciall.dpdns.org/random/ba');
 
 picked.push({ buffer, directLink: 'https://bluearchive.jp' }); // static link
 }

 const carouselCards = await Promise.all(picked.map(async (item, index) => ({
 header: {
 title: `🎀 𝖻𝗅𝗎𝖾 𝖺𝗋𝖼𝗁𝗂𝗏𝖾 ${index + 1}`,
 hasMediaAttachment: true,
 imageMessage: (await generateWAMessageContent({
 image: item.buffer
 }, {
 upload: lenwy.waUploadToServer
 })).imageMessage
 },
 body: {
 text: `🖼️ 𝗐𝖺𝗂𝖿𝗎 𝗋𝖺𝗇𝖽𝗈𝗆 𝗄𝖾 - ${index + 1}`
 },
 footer: {
 text: "🔹 𝗀𝖾𝗌𝖾𝗋 𝗎𝗇𝗍𝗎𝗄 𝗅𝗂𝖺𝗍 𝖺𝗅𝗅 𝖿𝗈𝗍𝗈"
 },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: JSON.stringify({
 display_text: "🌐 𝖻𝗎𝗄𝖺 𝗌𝗂𝗍𝗎𝗌",
 url: item.directLink
 })
 }
 ]
 }
 })));

 const carouselMessage = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 body: {
 text: `𝗋𝖺𝗇𝖽𝗈𝗆 𝗐𝖺𝗂𝖿𝗎 𝖻𝗅𝗎𝖾 𝖺𝗋𝖼𝗁𝗂𝗏𝖾😍`
 },
 footer: {
 text: `📂 𝗀𝖺𝗆𝖻𝖺𝗋 𝗄𝖾 : ${jumlahGambar}`
 },
 carouselMessage: {
 cards: carouselCards
 }
 })
 }
 }
 }, {
 quoted: m
 });

 await lenwy.relayMessage(m.chat, carouselMessage.message, {
 messageId: carouselMessage.key.id
 });

 } catch (err) {
 console.error('Blue Archive random image error:', err);
 m.reply('❌ Gagal memuat waifu!');
 }
}
break


        
       case 'teka': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
 if (args[0] === "teki") {
 if (tekateki.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Silahkan Jawab Pertanyaan Berikut :*\n\n📦 *${result.soal}*\n\n🕒 *Waktu : 60s*`, m).then(() => {
 
tekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tekateki.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tekateki[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik .teka teki*`}, {quoted:m}) 
 delete tekateki[m.sender.split('@')[0]]
 }
 } 
}
break
        
        
     case 'asah': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
 if (args[0] === "otak") {
 if (asahotak.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Silahkan Jawab Pertanyaan Berikut :*\n\n📦 *${result.soal}*\n\n🕒 *Waktu : 60s*`, m).then(() => {
 
asahotak[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (asahotak.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${asahotak[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik .asah otak*`}, {quoted:m}) 
 delete asahotak[m.sender.split('@')[0]]
 }
 } 
}
break  
        
        
        
       
        
        
        
        
      case 'family': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
 if (args[0] === "100") {
 if (family100.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Silahkan Jawab Pertanyaan Berikut :*\n\n📦 *${result.soal}*\n\n🕒 *Waktu : 60s*`, m).then(() => {
 
family10p[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (family10p.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${family100[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik .family 100*`}, {quoted:m}) 
 delete family100[m.sender.split('@')[0]]
 }
 } 
}
break  
      
       case 'siapakah': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
 if (args[0] === "aku") {
 if (siapakahaku.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Silahkan Jawab Pertanyaan Berikut :*\n\n📦 *${result.soal}*\n\n🕒 *Waktu : 60s*`, m).then(() => {
 
siapakahaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (siapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${siapakahaku[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik .siapakah aku*`}, {quoted:m}) 
 delete siapakahaku[m.sender.split('@')[0]]
 }
 } 
}
break
        
        
      case 'susun': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
 if (args[0] === "kata") {
 if (susunkata.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Silahkan Jawab Pertanyaan Berikut :*\n\n📦 *${result.soal}*\n\n🕒 *Waktu : 60s*`, m).then(() => {
 
susunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (susunkata.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${susunkata[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik .susun kata*`}, {quoted:m}) 
 delete susunkata[m.sender.split('@')[0]]
 }
 } 
}
break  
        
        
        
       
        
       
       
        
        
        
    case 'suit': {
				
				const userChoice = text.toLowerCase();
				const choices = ['batu', 'gunting', 'kertas'];
				const botChoice = choices[Math.floor(Math.random() * choices.length)];
				if (!choices.includes(userChoice)) {
					return m.reply('👉 Pilih antara *batu*, *gunting*, atau *kertas* ya, Kak!\n\ncontoh = .suit batu');
				}
				let hasil = '';
				if (userChoice === botChoice) {
					hasil = `🤝 Seri! Kita sama-sama pilih *${botChoice}*`;
				} else if (
					(userChoice === 'batu' && botChoice === 'kertas') ||
					(userChoice === 'gunting' && botChoice === 'kertas') ||
					(userChoice === 'kertas' && botChoice === 'gunting')
				) {
					hasil = `🎉 Kakak menang! Aku pilih *${botChoice}*`;
				} else {
					hasil = `😎🖕 Aku menang! Aku pilih *${botChoice}*`;
}
                 m.reply(hasil);
			}
				break 
        
        
        
        
      case 'ffstalk': {
 if (!text) return m.reply(`Kirim UID Free Fire!\nContoh: .${command} 2134554847`);

 try {
 m.reply("🌀 prosess sabar der");

 const uid = text.trim();
 const res = await axios.get(`https://discordbot.freefirecommunity.com/player_info_api?uid=${uid}&region=id`, {
 headers: {
 'Origin': 'https://www.freefirecommunity.com',
 'Referer': 'https://www.freefirecommunity.com/ff-account-info/',
 'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K)',
 'Accept': '*/*',
 'Accept-Encoding': 'gzip, deflate, br'
 }
 });

 const data = res.data?.player_info;
 if (!data) return m.reply('Gagal mengambil data akun Free Fire.');

 const b = data.basicInfo || {};
 const nickname = b.nickname || 'Tidak diketahui';
 const accountId = b.accountId || uid;
 const region = b.region || '-';
 const level = b.level || '-';
 const rank = b.rank || '-';
 const csRank = b.csRank || '-';
 const exp = b.exp || '-';
 const createAt = b.createAt ? moment.unix(b.createAt).format('YYYY-MM-DD HH:mm:ss') : '-';
 const lastLogin = b.lastLoginAt ? moment.unix(b.lastLoginAt).format('YYYY-MM-DD HH:mm:ss') : '-';

 const bannerImage = `https://discordbot.freefirecommunity.com/banner_image_api?uid=${uid}&region=id`;
 const caption = `🎮 *Free Fire Account Info*\n\n` +
 `👤 *Nickname:* ${nickname}\n🆔 *UID:* ${accountId}\n🌐 *Region:* ${region}\n⭐ *Level:* ${level}\n` +
 `🎖️ *Rank:* ${rank} | *CS Rank:* ${csRank}\n\n📅 *Di Buat Pada:* ${createAt}\n🕓 *TerakhirLogin:* ${lastLogin}`;

 const bannerBuffer = await getBuffer(bannerImage);

 await lenwy.sendMessage(m.chat, {
 image: bannerBuffer,
 caption
 }, { quoted: m });

 } catch (err) {
 console.error(err);
 m.reply('❌ Gagal mengambil data dari server Free Fire.');
 }
}
break
        

        case 'faktakucing': {
				
				const fakta = [
					'🐾 Kucing bisa melompat hingga 6 kali panjang tubuhnya!',
					'🐾 Lidah kucing memiliki tekstur kasar untuk membersihkan bulu.',
					'🐾 Kucing menghabiskan sekitar 70% hidupnya untuk tidur.',
					'🐾 Telinga kucing bisa berputar hingga 180 derajat!',
					'🐾 Kucing punya lima jari di kaki depan, tetapi hanya empat jari di kaki belakang.',
					'🐾 Kucing bisa berlari hingga 48 km per jam! Cepet banget, ya! 😲',
					'🐾 Kucing bisa mendengar suara frekuensi tinggi yang tidak bisa didengar manusia.',
					'🐾 Kucing bisa berkomunikasi dengan manusia lewat suara dan gerakan tubuh.',
					'🐾 Kucing memiliki 32 otot di telinga mereka untuk mengatur posisi telinga.',
					'🐾 Kucing memiliki indera penciuman yang 14 kali lebih tajam daripada manusia!',
					'🐾 Kucing menggosokkan kepala mereka ke objek sebagai tanda perkenalan dan untuk menandai wilayahnya.',
					'🐾 Beberapa kucing bisa mengingat tempat-tempat tertentu meskipun sudah bertahun-tahun berlalu.',
					'🐾 Kucing bisa melihat dengan jelas dalam kondisi cahaya yang sangat rendah, hampir gelap total!',
					'🐾 Kucing domestik punya banyak jenis suara, antara lain meong, dengkuran, dan purring!',
					'🐾 Kucing suka menjilat tangan mereka setelah makan untuk membersihkan diri dan merasa lebih tenang.',
					'🐾 Kucing sering tidur dengan mata setengah terbuka, ini untuk tetap waspada dari ancaman.',
					'🐾 Kucing punya kemampuan luar biasa dalam merasakan getaran tanah, misalnya gempa bumi!',
					'🐾 Kucing memiliki 9 kehidupan yang legendaris (tapi hanya mitos, ya)!',
					'🐾 Kucing bisa merasakan perubahan cuaca, kadang mereka lebih sensitif daripada manusia.',
					'🐾 Kucing tidak bisa merasakan rasa manis, lho! Mereka hanya suka makanan berbasis protein.'
				];
				const randomFakta = fakta[Math.floor(Math.random() * fakta.length)];
            m.reply(randomFakta);
}
				break;
        
        
        
        
        
    case 'mitos': {
				
        
				const myths = [
					'🌕 *Mitos Bulan Purnama*: Banyak orang percaya bahwa bulan purnama bisa memengaruhi perilaku manusia, menyebabkan kegilaan, dan meningkatkan angka kejahatan.',
					'🪞 *Mitos Cermin Pecah*: Memecahkan cermin dipercaya membawa nasib buruk selama 7 tahun.',
					'👻 *Mitos Hantu di Pohon Beringin*: Pohon beringin sering dikaitkan dengan makhluk halus dan dipercaya sebagai tempat tinggal roh gentayangan.',
					'🐈‍⬛ *Mitos Kucing Hitam*: Melihat kucing hitam melintas di depanmu sering dianggap sebagai pertanda sial.',
					'💍 *Mitos Cincin di Jari Tengah*: Memakai cincin di jari tengah dipercaya dapat menarik energi positif dan keberuntungan.',
					'🧂 *Mitos Menumpahkan Garam*: Menumpahkan garam dipercaya membawa nasib buruk, kecuali jika dilemparkan ke bahu kiri.',
					'🔮 *Mitos Bola Kristal*: Bola kristal sering dikaitkan dengan kemampuan meramal masa depan.',
					'🎋 *Mitos Pohon Bamboo*: Pohon bamboo di halaman rumah dipercaya bisa mengundang energi positif dan membawa keberuntungan.',
					'🌠 *Mitos Bintang Jatuh*: Jika melihat bintang jatuh dan membuat permintaan, maka permintaan itu akan terkabul.',
					'🐦 *Mitos Burung Masuk Rumah*: Burung yang masuk ke dalam rumah sering dianggap sebagai pertanda akan ada tamu atau berita penting.',
					'🌧️ *Mitos Hujan di Hari Pernikahan*: Hujan di hari pernikahan sering dianggap sebagai pertanda keberuntungan dan kebahagiaan.',
					'🍃 *Mitos Daun Jatuh di Kepala*: Jika ada daun jatuh di kepala seseorang, dipercaya orang itu akan mendapat keberuntungan.',
					'🦉 *Mitos Burung Hantu*: Burung hantu sering dianggap sebagai simbol kematian atau pertanda buruk di beberapa budaya.',
					'🖤 *Mitos Warna Hitam*: Warna hitam sering dikaitkan dengan kesialan dan energi negatif.',
					'🌈 *Mitos Ujung Pelangi*: Konon, ada harta karun di ujung pelangi, tetapi tidak ada yang bisa mencapainya.',
					'🌺 *Mitos Bunga Tumbuh di Makam*: Bunga yang tumbuh subur di makam dipercaya sebagai tanda bahwa roh orang yang dimakamkan itu damai.',
					'🏰 *Mitos Kastil Berhantu*: Banyak kastil tua di Eropa dipercaya dihantui oleh roh para penghuni masa lalu.',
					'💤 *Mitos Mimpi Gigi Copot*: Mimpi gigi copot sering dianggap sebagai pertanda akan ada kematian di keluarga.',
					'🌜 *Mitos Menghitung Bintang*: Menghitung bintang di langit dipercaya bisa membuat seseorang tumbuh jerawat.',
					'🍀 *Mitos Daun Semanggi Berdaun Empat*: Menemukan daun semanggi berdaun empat dipercaya membawa keberuntungan.',
					'🔥 *Mitos Api Menyala Sendiri*: Api yang menyala tiba-tiba di malam hari sering dikaitkan dengan kehadiran roh halus.',
					'🎵 *Mitos Siulan di Malam Hari*: Bersiul di malam hari dipercaya dapat mengundang makhluk halus.',
					'🦎 *Mitos Cicak Jatuh di Kepala*: Jika cicak jatuh di kepala seseorang, dipercaya itu adalah pertanda buruk.',
					'🌺 *Mitos Bunga Sedap Malam*: Aroma bunga sedap malam sering dianggap sebagai tanda kehadiran makhluk halus.',
					'🪦 *Mitos Makam Baru*: Mengunjungi makam yang baru dibuat di malam hari dipercaya dapat membawa energi negatif.',
					'🧟 *Mitos Zombie di Haiti*: Dalam kepercayaan Voodoo Haiti, ada mitos tentang manusia yang dihidupkan kembali sebagai zombie oleh penyihir.',
					'🌟 *Mitos Cahaya Misterius di Malam Hari*: Cahaya aneh yang terlihat di malam hari sering dianggap sebagai roh yang sedang berkeliaran.',
					'🏞️ *Mitos Danau Berhantu*: Banyak danau di dunia yang dipercaya dihuni oleh roh penjaga atau makhluk mitos.',
					'🪶 *Mitos Bulu Putih*: Menemukan bulu putih dipercaya sebagai tanda bahwa malaikat sedang menjaga kita.',
					'🍃 *Mitos Angin Berhembus Kencang Tiba-Tiba*: Angin yang tiba-tiba berhembus kencang sering dianggap sebagai tanda kehadiran makhluk halus.',
					'🎭 *Mitos Topeng Berhantu*: Beberapa topeng tradisional dipercaya memiliki roh atau energi mistis yang kuat.',
					'🗿 *Mitos Patung Tua*: Patung tua sering dianggap memiliki roh atau kutukan di dalamnya.',
					'⚰️ *Mitos Peti Mati Bergerak*: Ada mitos di beberapa budaya bahwa peti mati bisa bergerak sendiri jika ada roh yang tidak tenang.',
					'🔔 *Mitos Lonceng Berbunyi Sendiri*: Jika lonceng berbunyi sendiri tanpa ada angin atau yang memukulnya, sering dianggap sebagai tanda roh yang ingin berkomunikasi.'
				];
				const randomMyth = myths[Math.floor(Math.random() * myths.length)];
m.reply(`🪄 *mitosnya....*\n\n${randomMyth}`);
        }
				break
			    
        
        
        
    case 'savepin': {
				
        
				if (!text) return m.reply(`Example: ${prefix + command} https://pin.it/34Gef3SlC`)
				if (!text.includes('pin')) return m.reply(`Link Invalid!!`)
				try {
    lenwy.sendMessage(from, {react: {text: "⚡",key:m.key}})
					const res = await savePint(text);
					const { title, results } = res
					let media = results[0]
					let caption = `✨ *Judul*: ${title}\n📥 *Type*: ${media.type}\n📁 *Format*: ${media.format}`
					if (media.format === 'MP4') {
						await lenwy.sendMessage(m.chat, { caption, video: { url: media.downloadLink } }, { quoted: m })
					} else if (media.format === 'JPG') {
						await lenwy.sendMessage(m.chat, { caption, image: { url: media.downloadLink } }, { quoted: m })
					} else {
						return m.reply('Format media tidak didukung.')
					}
				} catch (err) {
					console.error(err)
                    m.reply('Terjadi kesalahan saat memproses permintaan.')
				}
			}
			
			break    
        
        
        
        
      case 'imdb': {
				
          
				if (!text) return m.reply(`🎬 *Judul film atau serialnya mana, Kak?*\n\nContoh:\n${prefix}${command} Snowpiercer`);
				try {
lenwy.sendMessage(from, {react: {text: "⚡",key:m.key}})
					let { data } = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${encodeURIComponent(text)}&plot=full`);
					if (data.Response === 'False') {
						return m.reply(`❌ *Film atau serial tidak ditemukan!* Coba cek lagi judulnya ya, Kak.`);
					}
					let imdbInfo = `🎬 *Judul*: ${data.Title}\n`;
					imdbInfo += `📅 *Tahun*: ${data.Year}\n`;
					imdbInfo += `⭐ *Rating*: ${data.Rated}\n`;
					imdbInfo += `📆 *Rilis*: ${data.Released}\n`;
					imdbInfo += `⏳ *Durasi*: ${data.Runtime}\n`;
					imdbInfo += `🌀 *Genre*: ${data.Genre}\n`;
					imdbInfo += `👨‍💼 *Sutradara*: ${data.Director}\n`;
					imdbInfo += `✍️ *Penulis*: ${data.Writer}\n`;
					imdbInfo += `👥 *Aktor*: ${data.Actors}\n`;
					imdbInfo += `📖 *Plot*: ${data.Plot}\n`;
					imdbInfo += `🌐 *Bahasa*: ${data.Language}\n`;
					imdbInfo += `🌍 *Negara*: ${data.Country}\n`;
					imdbInfo += `🏆 *Penghargaan*: ${data.Awards}\n`;
					imdbInfo += `💵 *Box Office*: ${data.BoxOffice || '-'}\n`;
					imdbInfo += `🏙️ *Produksi*: ${data.Production || '-'}\n`;
					imdbInfo += `🌟 *IMDb Rating*: ${data.imdbRating}\n`;
					imdbInfo += `✅ *IMDb Votes*: ${data.imdbVotes}\n`;

					await lenwy.sendMessage(m.chat, {
						image: { url: data.Poster || 'https://via.placeholder.com/300x450?text=No+Poster' },
						caption: imdbInfo,
					}, { quoted: m });

m.reply(`✅ *Berhasil menampilkan informasi film!*`);
				} catch (err) {
					console.error(err);
                    m.re0ply(`❌ *Terjadi kesalahan saat mencari film!* 😭\n${err.message || err}`);
				}
			}
			
			break;  
    
			  
        
        
        
        
        
        case 'getname': {
				
				if (!m.mentionedJid[0] && !m.quoted && !text) return m.reply(`Silahkan tag/reply orangnya ya, kak!`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				try {
					let name = lenwy.getName(users);
                    m.reply(name);
				} catch (error) {
					console.log(error);
				}
			}
			break
        
       
      case 'cgc':{
				if (!isCreator) return m.reply(`khusus owner bot kocag`)
				if (!text) return m.reply('Penggunaan: .cgc <nama grup> | <nomor anggota dipisahkan koma>\n*Kirim perintah*: .cgc Grup Baru | 62895359782772,6288229558594');
				const [groupName, members] = text.split('|').map(v => v.trim());
				if (!groupName || !members) return m.reply('Format salah!');
				const participants = members.split(',').map(num => `${num}@s.whatsapp.net`);
				try {
					const groupInfo = await lenwy.groupCreate(groupName, participants); m.reply(`*Grup berhasil dibuat*:\n- *Nama*: ${groupInfo.subject}\n- *ID*: ${groupInfo.id}`);
				} catch (err) {
					console.error(err);
                    m.reply('Gagal membuat grup.');
				}
			}
			break;
        
        
        
    case 'getpp': {

if (m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
try {
avatar = await lenwy.profilePictureUrl(users, "image")
} catch {
avatar = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
lenwy.sendMessage(m.chat, {image: {url: avatar }}, {quoted: m })
} else m.reply('reply pesan seseorang!')
}
break    
        
        
   
    case 'slot': {

try {
let _spin1 = pickRandom(['1', '2', '3', '4', '5']) 
let _spin2 = pickRandom(['1', '2', '3', '4', '5'])
let _spin3 = pickRandom(['1', '2', '3', '4', '5'])
let _spin4 = pickRandom(['1', '2', '3', '4', '5'])
let _spin5 = pickRandom(['1', '2', '3', '4', '5'])
let _spin6 = pickRandom(['1', '2', '3', '4', '5'])
let _spin7 = pickRandom(['1', '2', '3', '4', '5'])
let _spin8 = pickRandom(['1', '2', '3', '4', '5'])
let _spin9 = pickRandom(['1', '2', '3', '4', '5'])
let spin1 = (_spin1 * 1)
let spin2 = (_spin2 * 1)
let spin3 = (_spin3 * 1)
let spin4 = (_spin4 * 1)
let spin5 = (_spin5 * 1)
let spin6 = (_spin6 * 1)
let spin7 = (_spin7 * 1)
let spin8 = (_spin8 * 1)
let spin9 = (_spin9 * 1)
let spins1 = (spin1 == 1 ? '🍊' : spin1 == 2 ? '🍇' : spin1 == 3 ? '🍉' : spin1 == 4 ? '🍌' : spin1 == 5 ? '🍍' : '')
let spins2 = (spin2 == 1 ? '🍊' : spin2 == 2 ? '🍇' : spin2 == 3 ? '🍉' : spin2 == 4 ? '🍌' : spin2 == 5 ? '🍍' : '')
let spins3 = (spin3 == 1 ? '🍊' : spin3 == 2 ? '🍇' : spin3 == 3 ? '🍉' : spin3 == 4 ? '🍌' : spin3 == 5 ? '🍍' : '')
let spins4 = (spin4 == 1 ? '🍊' : spin4 == 2 ? '🍇' : spin4 == 3 ? '🍉' : spin4 == 4 ? '🍌' : spin4 == 5 ? '🍍' : '')
let spins5 = (spin5 == 1 ? '🍊' : spin5 == 2 ? '🍇' : spin5 == 3 ? '🍉' : spin5 == 4 ? '🍌' : spin5 == 5 ? '🍍' : '')
let spins6 = (spin6 == 1 ? '🍊' : spin6 == 2 ? '🍇' : spin6 == 3 ? '🍉' : spin6 == 4 ? '🍌' : spin6 == 5 ? '🍍' : '')
let spins7 = (spin7 == 1 ? '🍊' : spin7 == 2 ? '🍇' : spin7 == 3 ? '🍉' : spin7 == 4 ? '🍌' : spin7 == 5 ? '🍍' : '')
let spins8 = (spin8 == 1 ? '🍊' : spin8 == 2 ? '🍇' : spin8 == 3 ? '🍉' : spin8 == 4 ? '🍌' : spin8 == 5 ? '🍍' : '')
let spins9 = (spin9 == 1 ? '🍊' : spin9 == 2 ? '🍇' : spin9 == 3 ? '🍉' : spin9 == 4 ? '🍌' : spin9 == 5 ? '🍍' : '' )
let WinOrLose
if (spin1 == 1 && spin2 == 1 && spin3 == 1 && spin4 == 1 && spin5 == 1 && spin6 == 1 && spin7 == 1 && spin8 == 1 && spin9 == 1 || spin1 == 2 && spin2 == 2 && spin3 == 2 && spin4 == 2 && spin5 == 2 && spin6 == 2 && spin7 == 2 && spin8 == 2 && spin9 == 2 || spin1 == 3 && spin2 == 3 && spin3 == 3 && spin4 == 3 && spin5 == 3 && spin6 == 3 && spin7 == 3 && spin8 == 3 && spin9 == 3 || spin1 == 4 && spin2 == 4 && spin3 == 4 && spin4 == 4 && spin5 == 4 && spin6 == 4 && spin7 == 4 && spin8 == 4 && spin9 == 4 || spin1 == 5 && spin2 == 5 && spin3 == 5 && spin4 == 5 && spin5 == 5 && spin6 == 5 && spin7 == 5 && spin8 == 5 && spin9 == 5) {
WinOrLose = "Kamu menang lagi dan mendapatkan Mega Jackpot!"
} else if (spin4 == 1 && spin5 == 1 && spin6 == 1 || spin4 == 2 && spin5 == 2 && spin6 == 2 || spin4 == 3 && spin5 == 3 && spin6 == 3 || spin4 == 4 && spin5 == 4 && spin6 == 4 || spin4 == 5 && spin5 == 5 && spin6 == 5) {
WinOrLose = "Kamu menang dan mendapatkan Jackpot!"  
} else if (spin1 == 1 && spin2 == 1 && spin3 == 1 || spin1 == 2 && spin2 == 2 && spin3 == 2 || spin1 == 3 && spin2 == 4 && spin3 == 3 || spin1 == 4 && spin2 == 4 && spin3 == 4 || spin1 == 5 && spin2 == 5 && spin3 == 5 || spin1 == 6 && spin2 == 6 && spin3 == 6 || spin1 == 7 && spin2 == 7 && spin3 == 7 || spin1 == 8 && spin2 == 8 && spin3 == 8 || spin1 == 9 && spin2 == 9 && spin3 == 9) { 
WinOrLose = "Kamu menang dalam pertandingan ini!"
} else {
WinOrLose = "Kamu Kalah dalam pertandingan ini!"
}
m.reply(`*——— 「 GAME  SLOT 」 ———*

${spins1} ${spins2} ${spins3}
${spins4} ${spins5} ${spins6}
${spins7} ${spins8} ${spins9}

${WinOrLose}`.trim(), )
} catch (err) {
m.reply('Terjadi kesalahan')
}
}
break    
        
        
case 'cekgmail': {

  if (!quoted)  return m.reply(`❌ Masukkan email dengan benar!\n\n📍 Contoh:\n${usedPrefix + command} example@gmail.com`);
  

  try {
    await lenwy.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });

    const res = await fetch(`https://zelapioffciall.vercel.app/stalk/gmail?email=${encodeURIComponent(text)}`);
    const json = await res.json();

    if (!json?.status) return m.reply('❌ Email tidak valid atau tidak ditemukan.');

    const {
      email,
      jenis,
      name,
      domain,
      provider,
      dibuat_di_gmail,
      data_bocor,
      breached_services
    } = json;

    let teks = `📩 *Gmail Stalker Result*\n\n`;
    teks += `📧 *Email:* ${email}\n`;
    teks += `🆔 *Jenis:* ${jenis}\n`;
    teks += `👤 *Nama:* ${name}\n`;
    teks += `🌐 *Domain:* ${domain}\n`;
    teks += `📨 *Provider:* ${provider}\n`;
    teks += `✅ *Akun Gmail:* ${dibuat_di_gmail ? 'Ya' : 'Tidak'}\n`;
    teks += `🔓 *Data Bocor:* ${data_bocor ? 'Ya' : 'Tidak'}\n`;

    if (data_bocor && breached_services.length > 0) {
      teks += `🛑 *Layanan Terdampak:*\n`;
      for (let service of breached_services) {
        teks += `• ${service}\n`;
      }
    }

    m.reply(teks.trim());

  } catch (e) {
    console.error(e);
    m.reply('⚠️ Terjadi kesalahan saat mengambil data Gmail.');
  }
}
break

        
        
        
     

        
        
        
        
        
      case 'mediafire': {
if (!quoted) return m.reply(`Contoh: ${prefix+command} linknya`)
if (!text.includes('mediafire.com')) return m.reply('Harus berupa link mediafire!')
await lenwy.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
mediafireDl(text).then(async(data) => {
fileNama = decodeURIComponent(data[0].nama)
var media = await getBuffer(data[0].link)
if (data[0].mime.includes('mp4')) {
lenwy.sendMessage(m.chat, { document: media, fileName: fileNama, mimetype: 'video/mp4' }, { quoted: m })
} else if (data[0].mime.includes('mp3')) {
lenwy.sendMessage(m.chat, { document: media, fileName: fileNama, mimetype: 'audio/mp3' }, { quoted: m })
} else {
lenwy.sendMessage(m.chat, { document: media, fileName: fileNama, mimetype: 'application/'+data[0].mime }, { quoted: m })
}
}).catch((e) => {
m.reply('Terjadi kesalahan')
})}
break  
        
  case 'tambah': {
if (!text.includes('+')) return m.reply(`Contoh: ${prefix+command} angka+angka+...`);
const arg = args.join(' ');
const angkaArray = arg.split('+').map(Number);
const hasil = angkaArray.reduce((acc, num) => acc + num, 0);
if (isNaN(hasil)) {
m.reply('Angka tidak valid. Pastikan untuk memasukkan angka yang benar.');
} else {
m.reply(`Hasil: ${hasil}`);
}}
break;
             
     case 'kurang': {
if (!text.includes('-')) return m.reply(`Contoh: ${prefix+command} angka-angka-...`);
const arg = args.join(' ');
const angkaArray = arg.split('-').map(Number);
const hasil = angkaArray.reduce((acc, num) => acc - num);
if (isNaN(hasil)) {
m.reply('Angka tidak valid. Pastikan untuk memasukkan angka yang benar.');
} else {
m.reply(`Hasil: ${hasil}`);
}}
break;  
        
  case 'kali': {
if (!text.includes('*')) return m.reply(`Contoh: ${prefix+command} angka*angka*...`);
const arg = args.join(' ');
const angkaArray = arg.split('*').map(Number);
const hasil = angkaArray.reduce((acc, num) => acc * num, 1);
if (isNaN(hasil)) {
m.reply('Angka tidak valid. Pastikan untuk memasukkan angka yang benar.');
} else {
m.reply(`Hasil: ${hasil}`);
}}
break;      
  
  case 'bagi': {
if (!text.includes('/')) return m.reply(`Contoh: ${prefix+command} angka/angka/...`);
const arg = args.join(' ');
const angkaArray = arg.split('/').map(Number);
const hasil = angkaArray.reduce((acc, num) => acc / num);
if (isNaN(hasil)) {
m.reply('Angka tidak valid. Pastikan untuk memasukkan angka yang benar.');
} else {
m.reply(`Hasil: ${hasil}`);
}}
break;      
        
        
   case 'ytmp3': {
  if (!text) return m.reply('Masukkan URL YouTube\nContoh: .ytmp3 https://youtu.be/xxxxx');

  try {
    let url = text.trim();
    if (!url.match(/(youtu\.be|youtube\.com)/)) return m.reply('❌ URL YouTube tidak valid!');

    await lenwy.sendMessage(m.chat, { react: { text: '⚡', key: m.key } });

    const format = 'mp3';
    const apiKey = 'dfcb6d76f2f6a9894gjkege8a4ab232222';
    const axios = require('axios');

    // 🔗 Kirim permintaan unduhan
    const res = await axios.get(`https://p.oceansaver.in/ajax/download.php?format=${format}&url=${encodeURIComponent(url)}&api=${apiKey}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });

    if (!res.data || !res.data.success) return m.reply('❌ Gagal mendapatkan data audio.');

    const { id, title, info } = res.data;

    // ⏳ Polling hingga file siap
    let downloadUrl = '';
    for (let i = 0; i < 15; i++) { // maksimal 30 detik (15 x 2s)
      const status = await axios.get(`https://p.oceansaver.in/ajax/progress.php?id=${id}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
      });

      if (status.data?.success && status.data.progress === 1000) {
        downloadUrl = status.data.download_url;
        break;
      }

      await new Promise(r => setTimeout(r, 2000));
    }

    if (!downloadUrl) return m.reply('⚠️ Gagal menunggu proses download selesai.');

    // 📤 Kirim file ke pengguna
    await lenwy.sendMessage(m.chat, {
      audio: { url: downloadUrl },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`,
      contextInfo: {
        externalAdReply: {
          title: title,
          body: 'risa downloaded',
          thumbnailUrl: info?.image || null,
          mediaType: 2,
          mediaUrl: url
        }
      }
    }, { quoted: m });

    await m.reply(`SORRY BRE KALO MB NYA GEDE, BIAR JERNIH SOALNYA`);

  } catch (err) {
    console.error(err);
    m.reply('❌ Terjadi kesalahan saat mengunduh audio. Coba lagi nanti.');
  }
}
break;  
        
        
        
case 'song': {
 if (!text) {
 return m.reply(`🎵 *YouTube Play*\n\nContoh:\n• ${prefix}ytplay nama lagu atau judul video\n• ${prefix}ytplay https://youtu.be/dQw4w9WgXcQ\n\nBot akan mencari dan mengirim audio dari YouTube secara otomatis!`);
 }

 try {
 await lenwy.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });
 
 const apiKey = 'dd8d036269329e58e0500f5b';
 const isYouTubeUrl = text.includes('youtube.com/watch?v=') || text.includes('youtu.be/');
 
 let searchData;
 
 if (isYouTubeUrl) {
 // Jika sudah berupa URL, langsung ke step download
 searchData = {
 title: 'YouTube Audio',
 channel: 'Unknown',
 duration: 'Unknown', 
 views: 'Unknown',
 thumbnail: null,
 url: text
 };
 } else {
 // Step 1: Search lagu menggunakan yt-search module
 const yts = require('yt-search');
 const searchResults = await yts(text);
 
 if (!searchResults.all || searchResults.all.length === 0) {
 return m.reply('❌ Lagu tidak ditemukan. Coba dengan kata kunci yang berbeda.');
 }
 
 const firstResult = searchResults.all[0];
 searchData = {
 title: firstResult.title,
 channel: firstResult.author?.name || 'Unknown',
 duration: firstResult.duration || 'Unknown',
 views: firstResult.views || 'Unknown',
 thumbnail: firstResult.thumbnail,
 url: firstResult.url
 };
 }
 
 await lenwy.sendMessage(m.chat, { react: { text: '⬇️', key: m.key } });
 
 // Kirim info lagu terlebih dahulu
 const info = `🎵 *YouTube Play*\n\n` +
 `📌 *Judul:* ${searchData.title}\n` +
 `👤 *Channel:* ${searchData.channel}\n` +
 `⏱️ *Durasi:* ${searchData.duration}\n` +
 `📊 *Views:* ${searchData.views}\n\n` +
 `⏳ *Sedang mengunduh audio...*`;
 
 await m.reply(info);
 
 // Step 2: Download audio menggunakan autoresbot API dengan YouTube URL
 const downloadUrl = `https://api.autoresbot.com/api/downloader/ytplay?apikey=${apiKey}&url=${encodeURIComponent(searchData.url)}`;
 const downloadResponse = await axios.get(downloadUrl);
 
 if (downloadResponse.data && downloadResponse.data.status && downloadResponse.data.data && downloadResponse.data.data.url) {
 const audioUrl = downloadResponse.data.data.url;
 
 await lenwy.sendMessage(m.chat, {
 audio: { url: audioUrl },
 mimetype: 'audio/mpeg',
 fileName: `${searchData.title}.mp3`,
 contextInfo: {
 externalAdReply: {
 title: searchData.title,
 body: `risa Play Music`,
 thumbnailUrl: searchData.thumbnail,
 mediaType: 2,
 mediaUrl: searchData.url
 }
 }
 }, { quoted: m });
 m.reply('SORYY BRE KLO MB LAGUNYA GEDE SOALNYA BIAR JERNIH MUSIKNYA')

 await lenwy.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
 } else {
 return m.reply('❌ Gagal mengunduh audio. Link download tidak tersedia.');
 }
 
 } catch (error) {
 console.error('YTPlay Error:', error);
 await lenwy.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
 m.reply('❌ Terjadi kesalahan saat mengunduh audio. Silakan coba lagi nanti.');
 }
}
break
        
        
    
        
       
        
    case 'motivasiislami': {
  try {
    const fetch = require('node-fetch')
    let res = await fetch('https://raw.githubusercontent.com/rooxJSphire/rawFitur/refs/heads/main/IslamMotivasi.json')
    let data = await res.json()
    let item = data[Math.floor(Math.random() * data.length)]
    if (!item || !item.ARAB || !item.LATIN || !item.ARTI) return m.reply('❌ Gagal mengambil motivasi.')

    let teks = `*#ARAB*\n“${item.ARAB}”\n\n*#LATIN*\n_${item.LATIN}_\n\n*#ARTI*\n${item.ARTI}`
    m.reply(teks)
  } catch (e) {
    m.reply('❌ Terjadi kesalahan saat mengambil motivasi.')
  }
}
break   
        
        
 case 'listgc': {
if (!isCreator) return m.reply(`khusus owner bot kocak`)
let teks = `\n`
let a = await lenwy.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return m.reply(teks)
}
break 
        
   
          
    
        
        
 case 'torvo': { 
     m.reply(`send/reply image ya kak`)
        
        if (/image/.test(mime)) {
let anu = await lenwy.downloadAndSaveMediaMessage(quoted)
lenwy.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: m })
        } else if (/video/.test(mime)) {
        anu = await lenwy.downloadAndSaveMediaMessage(quoted)
        lenwy.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: m })
        }
        }
        break  
        
 case "bratvid2": case "bratvideo2":{
 if (!text) return m.reply("[❗] Input teks tidak ditemukan! Kirim perintah dengan format: .bratvid2 <teks>");
 try {
 let brat = `https://api.jerexd666.wongireng.my.id/imagecreator/brat-video?text=${encodeURIComponent(text)}&isVideo=true`;
 let response = await axios.get(brat, { responseType: "arraybuffer" });
 let videoBuffer = response.data;
 let stickerBuffer = await lenwy.sendVideoAsSticker(m.chat, videoBuffer, m, {
 packname: global.packname,
 author: global.author,
 });
 console.log("Stiker berhasil dibuat:", stickerBuffer);
 } catch (err) {
 console.error("Error:", err);
 m.reply("[❗] Maaf, terjadi kesalahan saat mencoba membuat stiker video. Silakan coba lagi.");
 }
}
break  
        
   case 'sticker': case 's': case 'stickergif': case 's':
case 'stiker': 
case 'stickergif':
case 'sgif': {
if (!quoted) return m.reply (`*Reply Video/Image Dengan Caption* ${prefix + command}`)
 m.reply(mess.wait)
 if (/image/.test(mime)) {
 let media = await quoted.download()
 let encmedia = await lenwy.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
 await fs.unlinkSync(encmedia)
 } else if (/video/.test(mime)) {
 if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maximum 10 seconds!*')
 let media = await quoted.download()
 let encmedia = await lenwy.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
 await fs.unlinkSync(encmedia)
 } else {
 return m.reply(`*Send Image/Video With Caption* ${prefix + command}\nDuration *Video 1-9 Seconds*`)
 }
 }
 break
 
        

 
        
        
/* ------------------------------------------------------------------------------------------------------------------------------------------- */
  ;     
        
 case 'banchat': {
    if (!isCreator) return m.reply('Fitur ini hanya untuk owner!')
    if (m.includes(m.chat)) return m.reply('Chat ini sudah dibanned!')
    banchat.push(m.chat)
    fs.writeFileSync(banchatPath, JSON.stringify(banchat, null, 2))
    m.reply(`Berhasil membanned chat ini! Bot tidak akan merespon di sini.`)
  }
  break

  case 'unbanchat': {
    if (!isCreator) return m.reply('Fitur ini hanya untuk owner!')
    if (!banchat.includes(m.chat)) return m.reply('Chat ini tidak dalam daftar banned!')
    banchat = banchat.filter(chat => chat !== m.chat)
    fs.writeFileSync(banchatPath, JSON.stringify(banchat, null, 2))
    m.reply(`Berhasil menghapus banned pada chat ini!`)
  }
  break
       
        
        
        



// ambil file di sc baru file db.data.users lalu tenpel  
        
        
  case 'spamht': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(`khusus admin`)
  if (!text) return m.reply(`⚠️ Contoh: .spamht 5 risa jago woi`)

  let jumlah = parseInt(args[0])
  if (isNaN(jumlah) || jumlah <= 0) return m.reply('⚠️ Masukkan jumlah spam yang valid!')

  let pesan = args.slice(1).join(' ')
  if (!pesan) return m.reply('⚠️ Masukkan isi pesan yang akan dikirim!')

  const mention = participants.map(u => u.id)

  
for (let i = 0; i < jumlah; i++) {
    await lenwy.sendMessage(m.chat, {
      text: pesan,
      mentions: mention
    }, { quoted: m })
    await delay(1000) // delay 1 detik biar ga terlalu spam
  }
    
handler.command = ['spamht']
handler.tags = ['group', 'spam']
handler.help = ['spamht <jumlah> <pesan>']
handler.group = true // hanya bisa di grup
handler.limit = false // gunakan limit kalau pakai sistem limit

module.exports = handler

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
 }

break    
        
  case 'ttinfo': {
				if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
      
				await lenwy.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
					let anu = await fetchJson(`https://api.vreden.my.id/api/tiktok?url=${text}`)
					let c = 0
					for (let imgs of anu.result.data) {
						if (imgs.type == "nowatermark") {
							lenwy.sendMessage(m.chat, {
								video: {
									url: imgs.url
								},
								caption: `*Video Info* :
- Region : ${anu.result.region}
- Duration : ${anu.result.duration}
- Taken : ${anu.result.taken_at}

*Statistik Info* :
- Views : ${anu.result.stats.views}
- Likes : ${anu.result.stats.likes}
- Comment : ${anu.result.stats.comment}
- Share : ${anu.result.stats.share}
- Download : ${anu.result.stats.download}

*Author Info* :
- Fullname : ${anu.result.author.fullname}
- Nickname : ${anu.result.author.nickname}

*Music Info* :
- Title : ${anu.result.music_info.title}
- Author : ${anu.result.music_info.author}
- Album : ${anu.result.music_info.album}

*Caption* :
${anu.result.title}
`

                                


							}, {
								quoted: m
    
                   
							})
						}
						if (imgs.type == "photo") {
							if (c == 0) await lenwy.sendMessage(m.chat, {
								image: {
									url: imgs.url
								},
								caption: `*Photo Info* :
- Region : ${anu.result.region}
- Duration : ${anu.result.duration}
- Taken : ${anu.result.taken_at}

*Statistik Info* :
- Views : ${anu.result.stats.views}
- Likes : ${anu.result.stats.likes}
- Comment : ${anu.result.stats.comment}
- Share : ${anu.result.stats.share}
- Download : ${anu.result.stats.download}

*Author Info* :
- Fullname : ${anu.result.author.fullname}
- Nickname : ${anu.result.author.nickname}

*Music Info* :
- Title : ${anu.result.music_info.title}
- Author : ${anu.result.music_info.author}
- Album : ${anu.result.music_info.album}

*Caption* :
${anu.result.title}
${m.isGroup ? anu.result.data.length > 1 ? "\n_Sisa foto dikirim ke private chat_\n" : "\n" : "\n"}`
							}, {
								quoted: m
							})
							else await lenwy.sendMessage(m.sender, {
								image: {
									url: imgs.url
								}
							}, {
								quoted: m
							})
							c += 1
							await sleep(2000)
						}
					}
				} catch (error) {
					console.log(error)
					try {
						const data = await tiktokdl(text)
						console.log(data)
						lenwy.sendMessage(m.chat, {
							video: {
								url: data.video
							},
							caption: `*[ V4 ]* Done boss ✅`
						}, {
							quoted: m
						})
					}

 catch (error) {
						await reply(util.format(error), command)
					}
				}
			}
			break   
        
        
  case 'cekdm': {
 if (args.length < 2) {
 return m.reply('Masukan user ID dan zone ID\nContoh: .cekdm 1709363716 18259');
 }
m.reply('sabar ya kak, lagi di check')
 const userId = args[0];
 const zoneId = args[1];
 const url = `https://deoberon-api.vercel.app/stalk/mlbb-first?apikey=ikancupang&userId=${userId}&zoneId=${zoneId}`;

 fetch(url)
 .then(response => {
 if (!response.ok) {
 throw new Error(`HTTP error! status: ${response.status}`);
 }
 return response.json();
 })
 .then(data => {
 if (!data.status) {
 return m.reply('User tidak ditemukan atau response gagal.');
 }

 const username = data.username || 'Tidak ditemukan';
 const country = data.country || 'Tidak diketahui';
 const firstTopup = data.firstTopup;

 let teks = `. 𖹭 ⸼“ 𝘀𝘁𝗮𝗹𝗸 𝗱𝗶𝗮𝗺𝗼𝗻𝗱 𝟭𝗶𝗱 𝟭𝘅𝅄 
 ───┈──*ੈ𑁍༘⋆──┈───\n`;
 teks += `ꢄ 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 ⨾ ${username}\n`;
 teks += `ꢄ 𝗶𝗱 𝘀𝗲𝗿𝘃𝗲𝗿 ⨾ ${userId} ${zoneId}\n`
 teks += `ꢄ 𝗻𝗲𝗴𝗮𝗿𝗮 ⨾ ${country}\n\n`;

 if (firstTopup?.packages?.length) {
 teks += `*${firstTopup.title}:*\n`;
 teks += `𝗱𝗶𝗮𝗺𝗼𝗻𝗱 𝟭𝗶𝗱 𝟭𝘅\n`;
 for (const pack of firstTopup.packages2) {
 teks += `- ${pack.name} 💎: ${pack.status}\n`;
 }

 
 } else {
 teks += `Tidak ada data First Topup.`;
 }

 m.reply(teks.trim());
 })
 .catch(error => {
 m.reply(`Terjadi kesalahan: ${error.message}`);
 });
}
 break      
        
    case 'pin2': {
  if (!text) return m.reply(`*[ ! ]* Wrong Input!\n\n*Example:* ${prefix + command} akame ga kill`);

  lenwy.sendMessage(m.chat, {
    react: {
      text: '🔎',
      key: m.key,
    }
  });

  try {
    const res = await axios.get(`https://api.siputzx.my.id/api/s/pinterest?query=${encodeURIComponent(text)}`);
    const { status, data } = res.data;

    if (!status || !Array.isArray(data) || data.length === 0) {
      return m.reply(`*[ ❌ ]* Hasil Dari *"${text}"* Tidak Ditemukan -_-`);
    }

    const cards = [];
    for (let i = 0; i < Math.min(data.length, 10); i++) {
      const item = data[i];
      const image = item.images_url;
      if (!image) continue;

      const media = await prepareWAMessageMedia(
        { image: { url: image } },
        { upload: lenwy.waUploadToServer }
      );

      const card = {
        body: proto.Message.InteractiveMessage.Body.fromObject({ text: 'SEARCH PIN' }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: `Search By ${global.botname}`}),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          title: item.grid_title || 'No Caption',
          hasMediaAttachment: true,
          ...media
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              name: "cta_url",
              buttonParamsJson: JSON.stringify({
                display_text: "Source 🔗",
                url: item.pin
              })
            },
            {
              name: "cta_copy",
              buttonParamsJson: JSON.stringify({
                display_text: "Copy URL ✅",
                copy_code: image
              })
            }
          ]
        })
      };
      cards.push(card);
    }

    const msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
              contextInfo: { mentionedJid: [m.sender] },
              carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards }),
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*sɪʟᴀʜᴋᴀɴ ᴄᴇᴋ ɢᴀᴍʙᴀʀ ᴅɪʙᴀᴡᴀʜ*\n@${m.sender.split('@')[0]}`
              })
            })
          }
        }
      },
      {
        userJid: m.chat,
        quoted: m
      }
    );

    await lenwy.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
      } catch (e) {
    console.error(e);
    return m.reply(`*[ ❌ ]* Terjadi kesalahan, coba lagi nanti.`);
  }
}
break;

case 'removebg2': {
  if (!quoted) return m.reply(`📸 Kirim atau reply gambar dengan caption *${prefix + command}*`);
  if (!/image/.test(mime)) return m.reply(`⚠️ Yang kamu kirim bukan gambar.`);

  await lenwy.sendMessage(m.chat, { react: { text: `⏱`, key: m.key } });

  try {
    const media = await lenwy.downloadAndSaveMediaMessage(quoted);
    const uploaded = await imgbb(imgbbapi, media);

    const imageUrl = uploaded?.display_url;
    if (!imageUrl) throw new Error('Gagal mengupload gambar ke imgbb.');

    const response = await fetch(`https://api.elrayyxml.web.id/api/tools/removebg?url=${encodeURIComponent(imageUrl)}`);
    const json = await response.json();

    if (!json.status || !json.result) throw new Error('Gagal memproses gambar dari API.');

    await lenwy.sendMessage(m.chat, {
      image: { url: json.result },
      caption: '🎉 *Remove Background Selesai!*',
    }, { quoted: m });

  } catch (err) {
    console.error('❌ Error RemoveBG:', err.message);
    m.reply(`⚠️ *Gagal memproses gambar!*\n*Detail:* ${err.message}`);
  }
}
break;    
        
        
        
  case 'tambahsewa': {
 if (!isCreator) return m.reply(mess.owner)

 if (!text && !m.isGroup) {
 return m.reply(`Penggunaan:\n1. ${prefix + command} [durasi] (dari dalam grup)\n2. ${prefix + command} [durasi] [link grup] (dari chat pribadi)\n\nContoh:\n${prefix + command} 30d https://chat.whatsapp.com/xxxxx`)
 }

 const { addSewaGroup } = require('./lib/sewa')
 let sewa = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))

 try {
 let duration, groupId

 if (m.isGroup && !text.includes('http')) {
 // Dari grup langsung
 [duration] = text.split(' ')
 if (!duration) return m.reply(`Durasi harus diisi!\nContoh: ${prefix + command} 30d`)
 groupId = m.chat
 } else {
 // Dari PC dengan link
 let [d, link] = text.split(' ')
 if (!d || !link) return m.reply(`Durasi dan link grup harus diisi!\nContoh:\n${prefix + command} 30d https://chat.whatsapp.com/xxxxx`)
if (link.includes('?')) link = link.split('?')[0]
 duration = d

 const coded = link.split("https://chat.whatsapp.com/")[1]
 if (!coded) return m.reply("Link tidak valid 🤔")

 try {
 await lenwy.groupAcceptInvite(coded)
 m.reply('Bot berhasil masuk ke grup.')
 } catch (err) {
 if (err.message.includes('not-authorized')) {
 return m.reply('Gagal bergabung ke grup. Bot kemungkinan baru saja dikeluarkan.')
 } else if (err.message.includes('gone')) {
 return m.reply('Link grup sudah di reset.')
 } else if (err.message.includes('conflict')) {
 m.reply('Bot sudah berada di dalam grup.')
 } else if (err.message.includes('already-exists')) {
 return m.reply('Bot sudah meminta gabung ke grup.')
 } else {
 console.log(err)
 return m.reply('Terjadi error yang tidak dikenali.')
 }
 }

 groupId = await getGroupIdFromLink(link, lenwy)
 if (!groupId) return m.reply('Gagal mendapatkan ID grup.')
 }

 if (sewa.some(entry => entry.groupId === groupId)) {
 return m.reply(`Grup sudah ada dalam daftar sewa.`)
 }

 addSewaGroup(groupId, duration, sewa)
 m.reply(`✅ Grup berhasil ditambahkan ke daftar sewa selama *${duration}*.`)
 
 // Pesan sambutan jika dari PC
 if (!m.isGroup) {
 await lenwy.sendMessage(groupId, {text: `Hallo semua, saya adalah bot ${global.botname}. Grup ini telah disewa selama *${duration}*.\n\n- Admin dapat cek sisa waktu dengan ketik *${prefix}ceksewa*\n- Untuk fitur lengkap ketik *${prefix}allmenu*`})
 }

 } catch (err) {
 console.error('Error saat addsewa:', err)
 m.reply('❌ Gagal menambahkan sewa grup.')
 }
}
break
        
    ;    
        
        
 case 'reactch':
case 'rch':
case 'reactch': {
 if (!text) return m.reply("Contoh:\n.rch https://whatsapp.com/channel/xxx/🍑\n.rch https://whatsapp.com/channel/xxx/risa");

 const hurufGaya = {
 a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖',
 h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝',
 o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤',
 v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
 '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
 '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
 };

 const [mainText, offsetStr] = text.split('|');
 const args = mainText.trim().split(" ");
 const link = args[0];

 if (!link.includes("https://whatsapp.com/channel/")) {
 return reply("Link tidak valid!\nContoh: .reactch https://whatsapp.com/channel/xxx/idpesan raidennn|3");
 }

 const channelId = link.split('/')[4];
 const rawMessageId = parseInt(link.split('/')[5]);
 if (!channelId || isNaN(rawMessageId)) return m.reply("Link tidak lengkap!");

 const offset = parseInt(offsetStr?.trim()) || 1;
 const teksNormal = args.slice(1).join(' ');
 const teksTanpaLink = teksNormal.replace(link, '').trim();
 if (!teksTanpaLink) return m.reply("Masukkan teks/emoji untuk direaksikan.");

 const emoji = teksTanpaLink.toLowerCase().split('').map(c => {
 if (c === ' ') return '―';
 return hurufGaya[c] || c;
 }).join('');

 try {
 const metadata = await lenwy.newsletterMetadata("invite", channelId);
 let success = 0, failed = 0;

 for (let i = 0; i < offset; i++) {
 const msgId = (rawMessageId - i).toString();
 try {
 await lenwy.newsletterReactMessage(metadata.id, msgId, emoji);
 success++;
 } catch (e) {
 failed++;
 }
 }

 m.reply(`✅ Berhasil kirim reaction *${emoji}* ke ${success} pesan di channel *${metadata.name}*\n❌ Gagal di ${failed} pesan`);
 } catch (err) {
 console.error(err);
 m.reply("❌ Gagal memproses permintaan!");
 }
}
break      
   
    
  case 'cekff': {
lenwy.sendMessage(from, {react:{text: "🔎", key:m.key}})
 if (!q) return m.reply('Masukkan ID Free Fire yang ingin di-stalk. Contoh:\n.cekff 123456789');

 try {
 const response = await fetch(`https://deoberon-api.vercel.app/stalk/ff?apikey=ikancupang&id=${encodeURIComponent(q)}`);

 if (!response.ok) {
 return m.reply(`Gagal mengambil data. Kode status: ${response.status}`);
 }

 const res = await response.json();

 if (!res || !res.status || !res.nickname) {
 return m.reply('Data tidak ditemukan. Pastikan ID Free Fire yang kamu masukkan benar.');
 }

 const teks = `╭─ 𝗖𝗘𝗞 𝗜𝗗 𝗙𝗙\n> Nickname: ${res.nickname}\n> Id: ${q}\n> Region: ${res.region}\n╰──────────*ੈ𑁍༘⋆`.trim();

 await lenwy.sendMessage(m.chat, { text: teks }, { quoted: m });

 } catch (err) {
 console.error(err);
 return m.reply("Terjadi kesalahan saat memproses permintaan.");
 }
 }
 break      
        
 case 'cekganda': {
 if (args.length < 2) {
 return m.reply('Masukan user ID dan zone ID\nContoh: .cekganda 1709363716 18259');
 }
m.reply('sabar ya kak, lagi di check');
 const userId = args[0];
 const zoneId = args[1];
 const url = `https://deoberon-api.vercel.app/stalk/mlbb-first?apikey=ikancupang&userId=${userId}&zoneId=${zoneId}`;

 fetch(url)
 .then(response => {
 if (!response.ok) {
 throw new Error(`HTTP error! status: ${response.status}`);
 }
 return response.json();
 })
 .then(data => {
 if (!data.status) {
 return m.reply('User tidak ditemukan atau response gagal.');
 }

 const username = data.username || 'Tidak ditemukan';
 const country = data.country || 'Tidak diketahui';
 const firstTopup = data.firstTopup;

 let teks = `. 𖹭 ⸼“ 𝘀𝘁𝗮𝗹𝗸 𝗱𝗶𝗮𝗺𝗼𝗻𝗱 𝗴𝗮𝗻𝗱𝗮𝅄 ⊃\n ───┈──*ੈ𑁍༘⋆──┈───\n`;
 teks += `ꢄ 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 ⨾ ${username}\n`;
 teks += `ꢄ 𝗶𝗱 𝘀𝗲𝗿𝘃𝗲𝗿 ⨾ ${userId} ${zoneId}\n`;
 teks += `ꢄ 𝗻𝗲𝗴𝗮𝗿𝗮 ⨾ ${country}\n\n`;

 if (firstTopup?.packages?.length) {
 teks += `*${firstTopup.title}:*\n`;
 for (const pack of firstTopup.packages) {
 teks += `- ${pack.name}: ${pack.status}\n`;
 }
 } else {
 teks += `Tidak ada data First Topup.`;
 }

 m.reply(teks.trim());
 })
 .catch(error => {
 m.reply(`Terjadi kesalahan: ${error.message}`);
 });
}
 break;
        
   
        
        
        
        


  case 'addlist2': {
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.isGroup) return m.reply(mess.group)
  if (args.length === 0) return m.reply(`*Cara Penggunaan : ${prefix}addlist2 <key>*\n*Contoh : addlist2 wdp*`)
  const key = text
  if (isAlreadyResponList(from, key, db_respon_list)) return m.reply(`⚠️ *Nama Key ${key} Sudah Ada Dalam Group Ini*`)
  if (!m.quoted) {
    m.reply(`*Silakan reply chat yang ingin dijadikan respon untuk key ${key}!*`)
  } else {
    const chat = m.quoted
    const respon = chat.text
    if (/image/.test(mime)) {
      media = await lenwy.downloadAndSaveMediaMessage(quoted)
      mem = await imgbb(imgbbapi, media)
      addResponList(from, key, respon, true, `${mem.display_url}`, db_respon_list)
      m.reply(`Successfully set list message with key : *${key}*`)
      if (fs.existsSync(media)) fs.unlinkSync(media)
    } else {
      addResponList(from, key, respon, false, '-', db_respon_list)
      m.reply(`📑 *Sukses Menambahkan Key Dengan Kode : ${key}*`)
    }
  }
break      
}

case 'hd': {
 const axios = require('axios')
 const fs = require('fs')
 const FormData = require('form-data')
 const path = require('path')

 if (!quoted) return m.reply('📸 Reply / kirim gambar')
 if (!/image/.test(mime)) return m.reply('❌ File harus berupa gambar')

 try {
 await m.reply('⏳ Upscale gambar...')

 const media = await lenwy.downloadAndSaveMediaMessage(quoted)
 const imagePath = media
 const buffer = fs.readFileSync(imagePath)

 const form = new FormData()
 form.append('files[]', buffer, {
 filename: 'image.jpg'
 })

 const upload = await axios.post(
 'https://uguu.se/upload',
 form,
 { headers: form.getHeaders() }
 )

 const imageUrl = upload.data.files[0].url
 if (!imageUrl) throw 'Gagal upload gambar'

 const apiUrl = `https://api.siputzx.my.id/api/iloveimg/upscale?image=${encodeURIComponent(imageUrl)}&scale=2`

 const res = await axios.get(apiUrl, {
 responseType: 'arraybuffer'
 })

 await lenwy.sendMessage(
 m.chat,
 {
 image: res.data,
 caption: '✅ Upscale berhasil (HD)'
 },
 { quoted: fkontak }
 )

 fs.unlinkSync(imagePath)

 } catch (err) {
 console.error('HD ERROR:', err)
 m.reply('⚠️ Upscale gagal, contact dev')
 }
}
break 
 


case 'reportbug': {
  if (!text) return m.reply(`Contoh: reportbug fitur .hd tidak jalan min`)
  
  let teks = `📢 *LAPORAN BUG*\n\n`
  teks += `👤 *Pelapor:* @${m.sender.split('@')[0]}\n`
  teks += `💬 *Pesan:* ${text}\n`
  teks += `📅 *Waktu:* ${new Date().toLocaleString('id-ID')}`

  // ID Owner Bot (bisa lebih dari satu)
  const ownerJid = ['6288991583829@s.whatsapp.net'] // ganti dengan nomor owner

  for (let id of ownerJid) {
    await lenwy.sendMessage(id, {
      text: teks,
      mentions: [m.sender]
    }, { quoted: m })
  }

  m.reply('✅ Laporan bug kamu sudah dikirim ke owner. Terima kasih!')
}
break      
        
  case 'kataislami':
case 'katakata': {
  try {
    const res = await fetch('https://raw.githubusercontent.com/rooxJSphire/islami/refs/heads/main/kata.json')
    const data = await res.json()
    if (!Array.isArray(data)) return m.reply('❌ Data tidak valid.')

    const quote = data[Math.floor(Math.random() * data.length)]
    m.reply(`🕌 *Kata-kata Islami*\n\n📜 ${quote}`)
  } catch (e) {
    console.log('Error:', e)
    m.reply('❌ Gagal mengambil kata-kata islami.')
  }
}
break      
        
 

case 'janganlah': {

  try {

    const res = await fetch('https://raw.githubusercontent.com/rooxJSphire/rawFitur/refs/heads/main/janganlah.json')

    const data = await res.json()

    if (!Array.isArray(data)) return m.reply('❌ Data tidak valid.')

    const quote = data[Math.floor(Math.random() * data.length)]

    m.reply(`*kata-kata for you*\n\n ${quote}`)

  } catch (e) {

    console.log('Error:', e)

    m.reply('❌ Gagal mengambil kata-kata motivasi.')

  }

}

break;       

 case 'reminiultra': {
 if (!quoted) return m.reply(`Fotonya Mana?`)
 if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)

 await LenwyLD()
 await sleep(200)
 try {
 let media = await lenwy.downloadAndSaveMediaMessage(quoted)
 let anu = await uploader60Minute(media)
 let result = (util.format(anu))
 const proses = await (await fetch(`https://api.maelyn.sbs/api/img2img/upscale?url=${result}&apikey=wyq3Zrsd53`)).json()
 console.log(proses)
 await lenwy.sendMessage(m.chat, { image: { url: proses.result.url }, caption: 'donee yaaa' }, { quoted: m })
 } catch (e) {
 console.error(e);
 return m.reply('Error, Coba Pakai remini')
 }
}
break      
        
case 'remini': {
if (!/image/.test(mime)) {
 return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Reply/Send Gambar Dengan Caption .${command}*`);
 }
 if (!quoted) {
 return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Reply/Send Gamba Dengan Caption .${command}*`);
 }
 m.reply('𝗐𝖺𝗂𝗍 𝗄𝖺k𝗄');
 let media = await lenwy.downloadAndSaveMediaMessage(quoted);
 let anu = await imgbb(imgbbapi, media)
 let gas = await (await fetch(`https://api.elrayyxml.web.id/api/tools/remini?url=${anu.display_url}`)).json();
 let final = gas.result;
 lenwy.sendMessage(m.chat, { image: { url: final }, caption: 'donee yaaa'}, { quoted: m})
}
break

case 'cekidgc': {
  let metadata2 = await lenwy.groupMetadata(m.chat)
  if (!metadata2) return m.reply(`*Grup tidak ditemukan!*`)
  let teks = `*Informasi Grup*\n\n`
  teks += `*Nama Group : ${metadata2.subject}*\n`
  teks += `*ID Group : ${metadata2.id}*\n`
  teks += `*Total Member Group : ${metadata2.participants.length}*\n`
  teks += `*Pemilik Grup : ${metadata2.owner}*\n`
  m.reply(teks)
    }
  break

        
 


case 'totalpesan': {
  let id = m.chat;
  let mCount = {};
  let totalM = 0;
  await lenwy.AllMessages(id, m => {
    let user = m.key.fromMe ? lenwy.user.jid : m.participant ? m.participant : id.includes('g.us') ? '' : id;
    if (!user) return;
    if (user in mCount) mCount[user]++;
    else mCount[user] = 1;
    totalM++;
  }, 1000);
  let sorted = Object.entries(mCount).sort((a, b) => b[1] - a[1]);
  let pesan = sorted.map(v => `${v[0].replace(/(\d+)@.+/, '@$1')}: ${v[1]} pesan`).join('\n');
  m.reply(`${totalM} pesan terakhir\n${pesan}`, false, {
    contextInfo: {
      mentionedJid: sorted.map(v => v[0])
    }
  });
  break;
}


  case 'cekdana': {
  if (args.length < 1) return m.reply('Silakan masukkan user_id');
  const userId = args[0]; 
  if (!userId) return m.reply('Parameter user_id diperlukan');
  const params = {
    api_req: 'deoberon',
    user_id: userId
  };
  try {
    console.log('Memeriksa akun DANA dengan data:', params);
    const response = await axios.get('https://idshopxzn.com/v2/dana', { params: params });
    const data = response.data;
    if (data.status === 'success') {
      const brand = data.data.brand;
      const nickname = data.data.nickname;
      const id = data.data.id;      
      m.reply(`Berhasil mendapatkan data Dana!\nNickname: ${nickname}\nID: ${id}`);
    } else {
      m.reply(`Gagal mendapatkan data Dana! ${data.msg}`);
        console.log(data) 
    }
  } catch (error) {
    m.reply(`Gagal mendapatkan data Dana! ${error.message}`);
    console.log(error) 
  }
  break;
}            
       
   case 'fliptext': {
if (args.length < 1) return m.reply(`Example:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
m.reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break    
        
        
case 'totalpesan': {
  let anulistp = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
  let teks = `*[ Cek Pesan Grup ]*\n\n`
  for (let i of anulistp) {
    let pesan = await store.messages.all(i)
    teks += `∘ *Grup*: ${i}\n`
    teks += `∘ *Jumlah Pesan*: ${pesan.length}\n\n`
  }
  lenwy.sendMessage(m.chat, teks)
}
break



case 'upscale2': {
  if (!quoted) return m.reply('Reply gambar yang ingin di-upscale')
  if (!/image/.test(mime)) return m.reply(`Reply gambar yang ingin di-upscale`)
  try {
    const media = await lenwy.downloadAndSaveMediaMessage(quoted);
    const mem = await imgbb(imgbbapi, media);
    const urlUpscale = `https://fastrestapis.fasturl.cloud/aiimage/upscale?imageUrl=${mem.url}&resize=16`;
    const response = await fetch(urlUpscale, {
      headers: {
        accept: 'image/jpeg'
      }
    });
    const data = await response.json();
    const imageUrl = data.result;
    const responseImage = await fetch(imageUrl);
    const blob = await responseImage.blob();
    lenwy.sendMessage(m.chat, { image: blob }, { quoted: m });
  } catch (error) {
    m.reply(`Error: ${error.message}`);
  }
  break;
}

 case 'toaudio':
            case 'tomp3': {
                if (!quoted) return m.reply(`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
                await lenwy.sendMessage(m.chat, {
                    react: {
                        text: "⏱️",
                        key: m.key,
                    }
                })
                let media = await quoted.download()
                let {
                    toAudio
                } = require('./lib/converter.js')
                let audio = await toAudio(media, 'mp4')
                lenwy.sendMessage(m.chat, {
                    audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })
            }
            
            break   
        
  


        
        
       ;
        
        
 
      
        
        
case 'cekml': {
if (args.length < 2) return m.reply('Silakan masukkan user_id dan zone_id Mobile Legends.\nContoh: .cekml 1709363716 18259');
 
 const userId = args[0];
 const zoneId = args[1];
 
 const url = `https://deoberon-api.vercel.app/stalk/mlbb-first?apikey=ikancupang&userId=${userId}&zoneId=${zoneId}`;

 try {
 const response = await fetch(url);
 if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

 const data = await response.json();

 if (!data.status) {
 return m.reply('❌ User tidak ditemukan atau gagal mengambil data MLBB.');
 }

 
 const {
 username, 
 country,
 country_flag
 } = data;

 const flag = country_flag || '🏳️';

 const teks = `╭─𝗖𝗘𝗞 𝗜𝗗 𝗘𝗠𝗘𝗟\n> Nickname: ${username}\n> Id: ${userId} ${zoneId}\n> Region: ${country}\n╰──────────*ੈ𑁍༘⋆`;

 await m.reply(teks);

 // Kirim reaksi bendera
 if (m.key?.id && country_flag) {
 await lenwy.sendMessage(m.chat, {
 react: {
 text: country_flag,
 key: m.key
 }
 });
 }

 } catch (error) {
 console.error('Error saat mengambil data MLBB:', error);
 m.reply('❌ Terjadi kesalahan saat mengambil data MLBB.');
 }
}
break;
        
  



        
   

 case 'removebg':{

	    if (!quoted) return m.reply(`Kirim/Reply Image/file Dengan Caption ${command}`)
	    if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${command}`)
	    if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${command}`)
	    let { removeBg } = require('./lib/removeBG')
	    let img = await quoted.download()
	    let image = await removeBg(img)
	    let result = await Buffer.from(image, "base64")
	    
	    lenwy.sendImage(m.chat, result, mess.success, m)
}
break


    
        
        
case 'cekwr2': {
  if (!text) return m.reply('Contoh penggunaan:\ncekwr <total_pertandingan> <win_rate_sekarang> <target_win_rate>');
  var cwl = text.split(' ');
  if (!cwl || cwl.length !== 3) return m.reply('Contoh penggunaan:\ncekwr <total_pertandingan> <win_rate_sekarang> <target_win_rate>');
  const tMatch = parseFloat(cwl[0]);
  const tWr = parseFloat(cwl[1]);
  const wrReq = parseFloat(cwl[2]);
  if (isNaN(tMatch) || isNaN(tWr) || isNaN(wrReq)) {
    return m.reply('Input tidak valid. Pastikan semua input berupa angka.');
  }
  function cwr(tMatch, tWr, wrReq) {
    let tLose = tMatch * (100 - tWr) / 100;
    let seratusPersen = tLose * (100 / (100 - wrReq));
    let final = seratusPersen - tMatch;
    return Math.round(final);
  }
  const resultNum = cwr(tMatch, tWr, wrReq);
  const tekl = `CALC WINRATE Anda memerlukan sekitar ${resultNum} win tanpa lose untuk mendapatkan win rate ${wrReq}%`;
  m.reply(tekl);
  break;
}
   
case 'cekwr': {
  try {
    if (args.length < 3) {
        m.reply(`*Format Salah!*
    
*Contoh Penggunaan:*
> cekwr <match> <wr> <wr yang dituju>`) 
        return
        }
      
    const tMatch = args[0];
    const tWr = args[1];
    const wrReq = args[2];
    const url = `https://slrmyshop.us/calcwr/?tMatch=${tMatch}&tWr=${tWr}&wrReq=${wrReq}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.status === 'success') {
      const result = `Hasil Perhitungan WR:

> Match: ${data.data.tMatch}
> WR: ${data.data.tWr}
> WR Req: ${data.data.wrReq}
> Keputusan Akhir WR: ${data.data.KeputusanAkhirWR}
`;
      m.reply(result);
    } else {
      m.reply(`Error: ${data.message}`);
    }
  } catch (error) {
    m.reply(`Error: ${error.message}`);
  }
} break;

       
        
        
    case 'cekrank': {
     let m1 = '`'
  try {
    if (args.length < 4) {
        m.reply(`*Format Salah!*
        
*Contoh Penggunaan:*
${m1}cekrank epicV 5 mythicGlory 50${m1}

${m1}Format Rank yang Bener:${m1}
> *Warrior* : warriorIII, warriorII, warriorI
> *Elite* : eliteIII, eliteII, eliteI
> *Master* : masterIV, masterIII, masterII, masterI
> *Grandmaster* : grandmasterV, grandmasterIV, grandmasterIII, grandmasterII, grandmasterI
> *Epic* : epicV, epicIV, epicIII, epicII, epicI
> *Legend* : legendV, legendIV, legendIII, legendII, legendI
> *Mythic* : mythicRomawi, mythicHonor, mythicGlory, mythicImmortal`);
        return;
    }

    const currentRank = args[0];
    const currentStars = parseInt(args[1]);
    const targetRank = args[2];
    const targetStars = parseInt(args[3]);
    const url = `https://slrmyshop.us/tools/calcrank?currentRank=${currentRank}&currentStars=${currentStars}&targetRank=${targetRank}&targetStars=${targetStars}`;

    const response = await fetch(url);
    const data = await response.json();

     if(data.status === "success") {
    const totalStarsNeeded = data.totalStarsNeeded;

    const result = `── 「 *PERKIRAAN RANK MLBB* 」 ──

> *Rank Sekarang* : ${currentRank} (${currentStars} Bintang)
> *Rank Tujuan* : ${targetRank} (${targetStars} Bintang)
> *Jumlah Bintang Diperlukan* : ${totalStarsNeeded}`;

    m.reply(result);
      } else {
      m.reply(`Gagal mendapatkan data!`);
        console.log(data) 
    }
      
  } catch (error) {
    m.reply(`*Error:* ${error.message}`);
  }
} break;  
        
case 'spausetad': {

const quo = args.length >= 1 ? args.join(" ") : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null;
//if (!m.isGroup) return Reply('*`maybee` fitur ini hanya untuk di grup*')
 if (!quo) return m.reply("masukan teksnya woii");
m.reply('wet')
 
async function brat(text) {
 try {
 return await new Promise((resolve, reject) => {
 if(!text) return reject("missing text input");
 axios.get(`https://api.taka.my.id/tanya-ustad?quest=${text}`, {
 params: {
 },
 responseType: "arraybuffer"
 }).then(res => {
 const image = Buffer.from(res.data);
 if(image.length <= 10240) return reject("failed generate brat");
 return resolve({
 success: true, 
 image
 })
 })
 })
 } catch (e) {
 return {
 success: false,
 errors: e
 }
 delete lenwy.enhancer[sender];
 lenwy.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
 }
}

const buf = await brat(quo);
await lenwy.sendImageAsSticker(m.chat, buf.image, m, { packname: global.packname, author: global.author })
}
break      
        
case 'igstalk': {
  if (!text) return m.reply('Contoh: .igstalk risa_store')

  const username = text.replace(/^@/, '') // hapus '@' jika ada
  let res
  try {
    res = await fetch(`https://api.elrayyxml.web.id/api/stalker/instagram?username=${username}`)
  } catch (e) {
    return m.reply('Gagal menghubungi server.')
  }

  const json = await res.json()
  if (!json.status || !json.result) return m.reply('Akun tidak ditemukan.')

  const ig = json.result
  const verified = ig.isVerified ? '✅ Terverifikasi' : '❌ Tidak Terverifikasi'

  const caption = `📱 *Instagram Stalk*\n\n👤 *Username:* ${ig.username}\n📛 *Nama:* ${ig.fullName}\n📄 *Bio:* ${ig.bio || 'Tidak ada'}\n📷 *Post:* ${ig.uploads}\n👥 *Followers:* ${ig.followers}\n📈 *Engagement:* ${ig.engagement}\n☑️ *Verifikasi:* ${verified}`

  lenwy.sendMessage(m.chat, {
    image: { url: ig.profileImage },
    caption,
    buttons: [
      {
        buttonId: `.igstalk ${username}`,
        buttonText: { displayText: '🔄 Cek Ulang' },
        type: 1
      }
    ],
    footer: 'Instagram Stalker by Risa',
  }, { quoted: m })
}

  break 
        
        
        
 case 'pausetad2': {
 const axios = require('axios')
 
 if (!text) return m.reply(`contoh = .pausetad bisa gak besok libur?`)

m.reply('wait ngap');
 
 await lenwy.sendMessage(m.chat, {
 image: { url: 'https://api.taka.my.id/pak-ustadv2?text=' + encodeURIComponent(text) },
 caption: ''
 }, { quoted: m })
}
break      
        
        




case 'idmcgg': {
  if (args.length < 2) return m.reply('Silakan masukkan user_id dan zone_id Mobile Legends');
  const userId = args[0];
  const zoneId = args[1];
  if (!userId || !zoneId) return m.reply('Parameter user_id dan zone_id diperlukan');
  const params = {
    api_req: 'deoberon',
    user_id: userId,
    zone_id: zoneId
  };
  try {
    console.log('Memeriksa akaun ML dengan data:', params);
    const response = await axios.get('https://idshopxzn.com/v2/mcgg', { params: params });
    const data = response.data;
    if (data.status === 'success') {
      const brand = data.data.brand;
      const nickname = data.data.nickname;
      const id = data.data.id;
      const zone = data.data.zone;      
      m.reply(`Berhasil mendapatkan data Magic Chess Go Go!\nBrand: ${brand}\nNickname: ${nickname}\nID: ${id}\nZone: ${zone}`);
    } else {
      m.reply(`Gagal mendapatkan data Magic Chess Go Go! ${data.msg}`);
        console.log(data) 
    }
  } catch (error) {
    m.reply(`Gagal mendapatkan data Magic Chess Go Go! ${error.message}`);
    console.log(error) 
  }
    }
  break 
        
 case 'paustart':
case 'paustad':
case 'pakustad':
case 'pakustad':
case 'pausetad':
case 'pausetad':
case 'pak-ustad': {
 if (!text) return m.reply(`Contoh:\n${prefix + command} Makan Sambil Kuyang Bisa Gak Pak Ustad`)
 
m.reply('wait kak');

 await lenwy.sendMessage(m.chat, {
 image: { url: 'https://flowfalcon.dpdns.org/imagecreator/pustaz?text=' + encodeURIComponent(text) }
 }, { quoted: m })
}
 break      
        
        
case 'idff': {
  if (args.length < 1) return m.reply('Silakan masukkan user_id');
  const userId = args[0]; 
  if (!userId) return m.reply('Parameter user_id diperlukan');
  const params = {
    api_req: 'deoberon',
    user_id: userId
  };
  try {
    console.log('Memeriksa akun FF dengan data:', params);
    const response = await axios.get('https://cekid.zannstore.com/v2/free-fire', { params: params });
    const data = response.data;
    if (data.status === 'success') {
      const brand = data.data.brand;
      const nickname = data.data.nickname;
      const id = data.data.id; 
      const country = data.data.country
      const flag = data.data.country_flag
      m.reply(`── 「 *Free Fire* 」 ──

> *Nickname:* ${nickname}
> *Country:* ${country} ${flag}`);
    } else {
      m.reply(`Gagal mendapatkan data Free Fire! ${data.msg}`);
        console.log(data) 
    }
  } catch (error) {
    m.reply(`Gagal mendapatkan data Free Fire! ${error.message}`);
    console.log(error) 
  }
  break;
}
        
        
case 'stalkig': {
    if (!quoted) return m.reply(`contoh :\nstalkig risa_store`);
  const url = `https://socialstats.info/report/${username}/instagram`
 
  const { data, request } = await axios.get(url, {
    maxRedirects: 5,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.5',
      'Referer': 'https://socialstats.info/',
      'Connection': 'keep-alive'
    }
  })
 
  const $ = cheerio.load(data)
 
  const title = $('title').text()
  if (!title.toLowerCase().includes(username.toLowerCase())) {
    throw new Error('ga ada respon!')
  }
 
  const name = $('h1').first().text().trim()
  const usernameText = $('a[href^="https://instagram.com/"]').first().text().trim()
  const profileUrl = $('a[href^="https://instagram.com/"]').first().attr('href')
  const avatar = $('.instagram-avatar').attr('src')
 
  const reportNumbers = $('.report-header-number').toArray().map(el => $(el).text().trim())
  const followers = reportNumbers[0] || ''
  const uploads = reportNumbers[1] || ''
  const engagement = reportNumbers[2] || ''
 
  return {
    username: usernameText,
    name,
    profileUrl,
    avatar,
    followers,
    uploads,
    engagement
  }
}        

break

case 'puskontak':
case 'pushkontak': {
 if (!isCreator) return m.reply("Fitur ini hanya untuk owner pemilik bot!");
 if (!text || !text.includes("|")) {
 return m.reply("Contoh:\n.pushkontak idgrup|pesannya");
 }

 const [idgcRaw, msgParts] = text.split("|");
 const idgc = idgcRaw.trim();
 const teks = msgParts
 const jidawal = m.chat;

 try {
 const data = await lenwy.groupMetadata(idgc);
 const participants = data.participants || [];

 const halls = participants
 .filter(v => v.id && v.id.endsWith('.net') && v.id !== botNumber && v.id.split("@")[0] !== global.owner)
 .map(v => v.id);

 if (halls.length === 0) {
 return m.reply(`Tidak ada member valid untuk dikirimi pesan di grup *${data.subject}*.`);
 }

 await m.reply(`Memproses *pushkontak* ke grup *${data.subject}*\nTotal target: *${halls.length}*`);

 for (const id of halls) {
 try {
 await lenwy.sendMessage(id, { text: teks }, { quoted: m });
 await sleep(4000);
 } catch (err) {
 console.error(`Gagal kirim ke ${id}:`, err.message);
 }
 }

 await lenwy.sendMessage(jidawal, {
 text: `*Pushkontak Berhasil ✅*\nGrup: ${data.subject}\nTotal dikirim ke: ${halls.length} member`,
 }, { quoted: m });

 } catch (e) {
 console.error("Gagal mengambil metadata grup:", e.message);
 m.reply("Gagal mengambil informasi grup. Pastikan ID grup benar dan bot sudah join grup tersebut.");
 }
}
break;
 
        
case 'cekch': {
 if (!text) return m.reply('📌 Kirim link channel WhatsApp-nya!');
 if (!text.includes("https://whatsapp.com/channel/")) return m.reply('❌ Link tidak valid! Format harus: https://whatsapp.com/channel/...');

 try {
 const channelCode = text.split('https://whatsapp.com/channel/')[1];
 const res = await lenwy.newsletterMetadata("invite", channelCode);

 if (!res?.id) return m.reply('❌ Gagal mengambil info channel.');

 const verified = res.verification === 'VERIFIED' ? '✅ Ya' : '❌ Tidak';
 const status = res.state === 'ACTIVE' ? '🟢 Aktif' : '🔴 Tidak aktif';
 
 const teks = `⬣ *INFORMASI CHANNEL*\n\n` +
 `📌 *Nama:* ${res.name || '-'}\n` +
 `🆔 *ID:* ${res.id}\n` +
 `👥 *Followers:* ${res.subscribers?.toLocaleString('id-ID') || 0}\n` +
 `📶 *Status:* ${status}\n` +
 `☑️ *Verified:* ${verified}`;

 await lenwy.sendMessage(m.chat, {
 text: teks, 
 footer: `🔹 Gunakan tombol di bawah untuk copy ID Channel`,
 title: `📡 Channel: ${res.name || 'Tidak diketahui'}`,
 interactiveButtons: [
 {
 name: 'cta_copy',
buttonParamsJson:JSON.stringify({
 teks: '📋 Copy ID Channel',
 id: res.id,
 copy_code: res.id
 })
 }
 ]
 },{quoted: m});

 } catch (err) {
 console.error(err);
 return m.reply(`❌ *Gagal mengambil data channel:*\n${err.message || 'Tidak diketahui.'}`);
 }
}
break      
        
        
    
case 'idml2': {
 if (args.length < 2) return m.reply('Silakan masukkan user_id dan zone_id Mobile Legends');
 const userId = args[0];
 const zoneId = args[1];
 if (!userId || !zoneId) return m.reply('Parameter user_id dan zone_id diperlukan');
 const params = {
 api_req: 'deoberon',
 user_id: userId,
 zone_id: zoneId
 };
 try {
 console.log('Memeriksa akaun ML dengan data:', params);
 const response = await axios.get('https://cekid.zannstore.com/v2/region-ml', { params: params });
 const data = response.data;
 console.log(data) 
 if (data.status === 'success') {
 const brand = data.data.brand;
 const nickname = data.data.nickname;
 const id = data.data.id;
 const zone = data.data.zone;
 const country = data.data.country;
 const countryFlag = data.data.country_flag;
 m.reply(`── 「 *Mobile Legends* 」 ──

> *Nickname:* ${nickname}
> *Country:* ${country} ${countryFlag}

🔗 https://deoberon.shop/mlreg.php`);
 } else {
 m.reply(`Gagal mendapatkan data Mobile Legends Region! ${data.msg}`);
 console.log(data) 
 }
 } catch (error) {
 m.reply(`Gagal mendapatkan data Mobile Legends Region! ${error.message}`);
 console.log(error) 
 }

 break
}
        
       
        
        
        
case 'idml': {
  const apiKey = 'hBaomgIqJnvgjrRM2rST'      
  const args = text.split(" ");  
  const userId = args[0]; // User ID
  const zoneId = args[1]; // Zone ID

  // Periksa sama ada userId dan zoneId sah
  if (!userId || !zoneId || isNaN(userId) || isNaN(zoneId)) {
    return m.reply(`Contoh: ${prefix + command} <user_id> <zone_id>`);
  }

  // Gunakan URLSearchParams untuk format x-www-form-urlencoded
  const params = new URLSearchParams();
  params.append('user_id', userId);
  params.append('zone_id', zoneId);

  try {
    console.log('🔍 Memeriksa akaun ML dengan data:', { user_id: userId, zone_id: zoneId });

    const response = await fetch('https://synnmlbb.com/api/v1/ml-check', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-user-key': apiKey // Tambah x-user-key di sini
      },
      body: params
    });

    const text = await response.text(); // Ambil sebagai teks dulu
    console.log('🔴 Respon API:', text); // Debug respons penuh

    let result;
    try {
      result = JSON.parse(text); // Cuba parse JSON
    } catch (parseError) {
      console.error('❌ Gagal parse JSON:', parseError);
      return m.reply('❌ Server API tidak mengembalikan format JSON yang sah.');
    }

    console.log('✅ Respons dari API ML Checker:', result);

    if (result && result.success) {
      const data = result.data;
      const nickname = data.nickname || 'Tidak Diketahui';
      const createdFrom = data.account_created_from || 'Tidak Diketahui';
      const loginFrom = data.account_login_from || 'Tidak Diketahui';
      const createdAt = data.created_at || 'Tidak Diketahui';

      // Format mesej untuk dihantar kepada pengguna
            
       const mlDetails = `── 「 *ML CHECKER* 」 ──\n\n> *Nickname* : ${nickname}\n> *Region* : ${createdFrom}\n> *Account Login From* : ${loginFrom}\n> *Dicek Pada* : ${createdAt}`

      // Hantar mesej kepada pengguna
      m.reply(mlDetails);

    } else {
      console.error('❌ Gagal mendapatkan maklumat akaun ML:', result);
      m.reply('❌ Gagal mendapatkan maklumat akaun ML. Sila cuba lagi.');
    }
  } catch (error) {
    console.error('⚠️ Ralat semasa menyemak akaun ML:', error.message);
    m.reply(`⚠️ Terjadi eror saat mengecek akun ML: ${error.message}`);
  }
  break;
}



case 'unblripper': {
  if(!isAdmins) return
  const groupId = m.chat
  let mentionedJids = m.mentionedJidList || []
  if (mentionedJids.length === 0) {
    if (!args[0]) return m.reply(`*Bukan Gitu Loh*\n\n> *Contoh : ${command} @tag1 @tag2 @tag3*`)
    mentionedJids = args.map((number) => number + '@s.whatsapp.net')
  }
  let blacklisted = dbBl.blacklist[groupId]
  if (!blacklisted) {
    m.reply(`*Tidak ada nomor yang diblacklist di grup ini*`)
  } else {
    const unblacklistNumbers = []
    for (let orgnye of mentionedJids) {
      const index = blacklisted.indexOf(orgnye)
      if (index !== -1) {
        blacklisted.splice(index, 1)
        unblacklistNumbers.push(orgnye.replace('@s.whatsapp.net', ''))
      }
    }
    if (unblacklistNumbers.length > 0) {
      dbBl.blacklist[groupId] = blacklisted
      fs.writeFileSync('./riper.json', JSON.stringify(dbBl, null, 2))
      m.reply(`*Nomor ${unblacklistNumbers.join(', ')} telah diunblacklist*`)
    } else {
      m.reply(`*Nomor yang Anda masukkan tidak ada dalam daftar blacklist*`)
    }
  }
}      
        break
        
  case 'cekhok': {
lenwy.sendMessage(from, {react:{text: "🔎", key:m.key}})
 if (!q) return m.reply('Masukkan ID HOK yang ingin di-stalk. Contoh:\n.cekhok 9373893688518913655');
      

 try {
 const response = await fetch(`https://deoberon-api.vercel.app/stalk/hok?apikey=haqiayonima&id=${encodeURIComponent(q)}`);

 if (!response.ok) {
 return m.reply(`Gagal mengambil data. Kode status: ${response.status}`);
 }

 const res = await response.json();

 if (!res || !res.status || !res.nickname) {
 return m.reply('Data tidak ditemukan. Pastikan ID HOK yang kamu masukkan benar.');
 }

 const teks = `. 𖹭 ⸼“ 𝗦𝗧𝗔𝗟𝗞 𝗚𝗔𝗠𝗘 𝗛𝗢𝗞𝅄
 ───┈──*ੈ𑁍༘⋆──┈───\nꢄ 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 ⨾ ${res.nickname}\nꢄ 𝗶𝗱 ⨾ ${q}`.trim();

 await lenwy.sendMessage(m.chat, { text: teks }, { quoted: m });

 } catch (err) {
 console.error(err);
 return m.reply("Terjadi kesalahan saat memproses permintaan.");
 }
 }
 break      
        
  case 'cekpubg': {
lenwy.sendMessage(from, {react:{text: "🔎", key:m.key}})
 if (!q) return m.reply('Masukkan ID PUBG yang ingin di-stalk. Contoh:\n.cekpubg 5178789962');
      

 try {
 const response = await fetch(`https://deoberon-api.vercel.app/stalk/pubg?apikey=haqiayonima&id=${encodeURIComponent(q)}`);

 if (!response.ok) {
 return m.reply(`Gagal mengambil data. Kode status: ${response.status}`);
 }

 const res = await response.json();

 if (!res || !res.status || !res.nickname) {
 return m.reply('Data tidak ditemukan. Pastikan ID PUBG yang kamu masukkan benar.');
 }

 const teks = `. 𖹭 ⸼“ 𝗦𝗧𝗔𝗟𝗞 𝗚𝗔𝗠𝗘  𝗣𝗨𝗕𝗚𝅄
  ───┈──*ੈ𑁍༘⋆──┈───\nꢄ 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 ⨾ ${res.nickname}\nꢄ 𝗶𝗱 ⨾ ${q}`.trim();

 await lenwy.sendMessage(m.chat, { text: teks }, { quoted: m });

 } catch (err) {
 console.error(err);
 return m.reply("Terjadi kesalahan saat memproses permintaan.");
 }
 }
 break      
        
        
   case 'ceksupersus': {
lenwy.sendMessage(from, {react:{text: "🔎", key:m.key}})
 if (!q) return m.reply('Masukkan ID SUPERSUS yang ingin di-stalk. Contoh:\n.ceksupersus 18934481');
      

 try {
 const response = await fetch(`https://deoberon-api.vercel.app/stalk/supersus?apikey=haqiayonima&id=${encodeURIComponent(q)}`);

 if (!response.ok) {
 return m.reply(`Gagal mengambil data. Kode status: ${response.status}`);
 }

 const res = await response.json();

 if (!res || !res.status || !res.nickname) {
 return m.reply('Data tidak ditemukan. Pastikan ID SUPERSUS yang kamu masukkan benar.');
 }

 const teks = `. 𖹭 ⸼“ 𝗦𝗧𝗔𝗟𝗞 𝗚𝗔𝗠𝗘  𝗦𝗨𝗣𝗘𝗥𝗦𝗨𝗦𝅄
     ───┈──*ੈ𑁍༘⋆──┈───\nꢄ 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 ⨾ ${res.nickname}\nꢄ 𝗶𝗱 ⨾ ${q}`.trim();

 await lenwy.sendMessage(m.chat, { text: teks }, { quoted: m });

 } catch (err) {
 console.error(err);
 return m.reply("Terjadi kesalahan saat memproses permintaan.");
 }
 }
 break    
  
       
        

case 'blripper': {
  if (!isAdmins) return
  const groupId = m.chat
  let mentionedJids = m.mentionedJidList || []
  if (mentionedJids.length === 0) {
    if (!args[0]) return m.reply(`*Bukan Gitu Loh*\n\n> *Contoh : ${command} @tag1 @tag2 @tag3*`)
    mentionedJids = args.map(number => number.replace(/[^0-9]/g, '') + "@s.whatsapp.net")
  }
  let blacklisted
  try {
    blacklisted = JSON.parse(fs.readFileSync('./riper.json', 'utf8'))
  } catch (err) {
    console.error('Error reading db.json:', err)
    blacklisted = {}
  }
  if (!blacklisted.blacklist) {
    blacklisted.blacklist = {}
  }
  if (!blacklisted.blacklist[groupId]) {
    blacklisted.blacklist[groupId] = []
  }
  const blacklistedNumbers = []
  const alreadyBlacklistedNumbers = []
  for (let orgnye of mentionedJids) {
    if (blacklisted.blacklist[groupId].includes(orgnye)) {
      alreadyBlacklistedNumbers.push(orgnye)
    } else {
      blacklisted.blacklist[groupId].push(orgnye)
      blacklistedNumbers.push(orgnye)
    }
  }
  try {
    fs.writeFileSync('./riper.json', JSON.stringify(blacklisted, null, 2))
    console.log('Nomor sudah masuk database:', blacklistedNumbers)
  } catch (err) {
    console.error('Error writing db.json:', err)
    return m.reply('*Gagal Menyimpan Daftar Blacklist.*')
  }
  if (blacklistedNumbers.length > 0) {
    m.reply(`*Nomor Telah Diblacklist:*\n\n${blacklistedNumbers.join('\n')}`)
  }
  if (alreadyBlacklistedNumbers.length > 0) {
    m.reply(`*Nomor Berikut Sudah Ada Dalam Daftar Blacklist:*\n\n${alreadyBlacklistedNumbers.join('\n')}`)
  }
}
        break
        
   ;    
        
        

  case 'listbl': {  
  const groupId = m.chat
  const db = JSON.parse(fs.readFileSync('./riper.json', 'utf8'))
  let blacklisted = db.blacklist[groupId]
  if (!blacklisted) {
    m.reply(`*Tidak ada nomor yang diblacklist di grup ini*`)
  } else {
    let listBlacklist = ''
    for (let i = 0; i < blacklisted.length; i++) {
      listBlacklist += `${i + 1}. ${blacklisted[i].replace('@s.whatsapp.net', '')}\n`
    }
    m.reply(`*Daftar Blacklist Grup ini:*\n\n${listBlacklist}`)
  }      
}
 break  
        
       
        
        
        
 
 case 'iqc':
       
        
        

  case 'setp': {
    if (!isAdmins) return m.reply("Khusus Admin")   
    if (!m.quoted ) return m.reply("Balas sticker dengan setp!");

    const groupId = m.chat; // Dapatkan ID kumpulan
    const groupMetadata = await lenwy.groupMetadata(from)
    const sticker = await m.quoted.download(); // Muat turun sticker yang dihantar
    const filePath = path.join(__dirname, 'sticker', `${groupMetadata.subject}-Proses.webp`); // Simpan sticker berdasarkan groupId
    
    fs.writeFileSync(filePath, sticker); // Simpan sticker ke fail

    m.reply("Sticker telah disimpan untuk kumpulan ini.");
     }
    break   
        
    case 'p': {
    if (!isAdmins) return m.reply("Khusus Admin")   
    const groupId = m.chat; // Dapatkan ID kumpulan
    const groupMetadata = await lenwy.groupMetadata(from)  
    const filePath = path.join(__dirname, 'sticker', `${groupMetadata.subject}-Proses.webp`); // Dapatkan lokasi fail sticker
    
    if (!fs.existsSync(filePath)) return m.reply("Sticker belum disimpan untuk kumpulan ini.");

    // Hantar sticker yang disimpan
    lenwy.sendMessage(groupId, { sticker: fs.readFileSync(filePath)}, {quoted: m.quoted.fakeObj} );
    }
    break;    
        
 case 'setd': {
    if (!isAdmins) return m.reply("Khusus Admin") 
    if (!m.quoted ) return m.reply("Sila balas dengan sticker untuk setdone!");

    const groupId = m.chat; // Dapatkan ID kumpulan
    const groupMetadata = await lenwy.groupMetadata(from)
    const sticker = await m.quoted.download(); // Muat turun sticker yang dihantar
    const filePath = path.join(__dirname, 'sticker', `${groupMetadata.subject}-Done.webp`); // Simpan sticker berdasarkan groupId
    
    fs.writeFileSync(filePath, sticker); // Simpan sticker ke fail

    m.reply("Sticker telah disimpan untuk kumpulan ini.");
     }
    break;


case 'd': {
    if (!isAdmins) return m.reply("Khusus Admin") 
    const groupId = m.chat; // Dapatkan ID kumpulan
            const groupMetadata = await lenwy.groupMetadata(from)
    const filePath = path.join(__dirname, 'sticker', `${groupMetadata.subject}-Done.webp`); // Dapatkan lokasi fail sticker
    
    if (!fs.existsSync(filePath)) return m.reply("Sticker belum disimpan untuk kumpulan ini.");

    // Hantar sticker yang disimpan
    lenwy.sendMessage(groupId, { sticker: fs.readFileSync(filePath)}, {quoted: m.quoted.fakeObj});
    }
    break;
      
        
  case 'setdone2': {
    try {
        if (!m.quoted) {
            return m.reply('Reply pada sticker yang ingin disimpan.');
        }

        const mime = (m.quoted.msg || m.quoted).mimetype || '';
        if (!/webp/.test(mime)) {
            return m.reply('Hanya sticker yang boleh disimpan.');
        }

        const media = await lenwy.downloadMediaMessage(m.quoted);
        if (!media) {
            return m.reply('Gagal memuat turun sticker.');
        }

        const fs = require('fs');
        const outputPath = './sticker/stickerDone.webp';

        // Simpan sticker dalam format asal (webp)
        fs.writeFileSync(outputPath, media);

        m.reply('Sticker berjaya disimpan sebagai stickerDone.webp di ./assets.');
    } catch (err) {
        console.error(err);
        m.reply('Maaf, terdapat ralat semasa menyimpan sticker.');
    }
      }
    break;
        
   case 'hai':
   case 'hi' : 
   case 'hii' :
   case 'halo' : {
m.reply(`haii juga`) 
}
break    
        
    case 'done2': {
    try {
        const fs = require('fs');
        const stickerPath = './sticker/stickerDone.webp';

        // Periksa jika fail sticker wujud
        if (!fs.existsSync(stickerPath)) {
            return m.reply('Sticker belum disimpan. Gunakan perintah setdone terlebih dahulu.');
        }

        // Hantar sticker kepada pengguna
        const media = fs.readFileSync(stickerPath);
        await lenwy.sendImageAsSticker(m.chat, media, m, {
            packname: global.botname,
            author: global.ownername
        });

        m.reply('Sticker Done dihantar!');
    } catch (err) {
        console.error(err);
        m.reply('Maaf, terdapat ralat semasa menghantar sticker.');
    }
        }
    break;


  case 'tourlslr': {
  const fs = require('fs'); // Untuk mengelola file lokal
  const FormData = require('form-data'); // Untuk mengirim form-data


  // Validasi MIME tipe (harus berupa gambar atau video)
  if (!/image|video/.test(mime)) {
    return m.reply('Mohon kirimkan foto atau video yang valid.');
  }
      
  if (!quoted) {
    return m.reply(`*PERMINTAAN ERROR!! PESAN :*\\n> *Reply/Send Gambar/Video Dengan Caption .tourl*`);
  }
          
let media = await lenwy.downloadAndSaveMediaMessage(qmsg)
    
  // Menyimpan file media sementara
  const tempFilePath = `./tourlapi_${Date.now()}.${mime.split('/')[1]}`;
  fs.writeFileSync(tempFilePath, media); // Simpan file sementara di server

  // Membuat form data untuk mengirim file ke API
  const form = new FormData();
  form.append('file', fs.createReadStream(tempFilePath)); // Menambahkan file ke form

  try {
    // Kirim file ke API tourlapi
    const response = await axios.post('https://slrmyshop.com.my/tourlapi/upload', form, {
      headers: form.getHeaders(), // Header untuk multipart/form-data
    });

    // Dapatkan URL hasil upload
    const uploadedUrl = response.data.url;

    // Kirim URL kepada pengguna
    m.reply(`File berhasil diunggah! Berikut adalah URL-nya:\n${uploadedUrl}`);

    // Hapus file sementara setelah selesai
    fs.unlinkSync(tempFilePath);
  } catch (error) {
    m.reply(`Gagal mengunggah file. Error: ${error.message}`);
    fs.unlinkSync(tempFilePath); // Hapus file sementara jika gagal
  }
}
break;                  


        
/* ------------------------------------------------------------------------------------------------------------------------------------------- */
        
    
case 'translate': {
if (!text) return m.reply(`Masukkan Teks Yang Ingin Di Translate & Tujuan Bahasa`)
let args = q.split("|")
let args1 = args[0]
let args2 = args[1]
if (!q.includes('|')) return m.reply(`Contoh\n> ${prefix+command} Hai Teman|en\n\nKetik ${prefix}kodebahasa Untuk Melihat Kode Bahasa Lainnya`)
let hasil = await (await fetch(`https://skizo.tech/api/translate?apikey=13579&text=${args1}&lang=${args2}`)).json()
let resu = `"${hasil.text}"\n\nTranslate Ke ${args2}\n\nHasil : \n*${hasil.result}*`
lenwy.sendMessage(m.chat, {text: resu}, {quoted: m})
}
break

case 'kodebahasa': {
m.reply(`📦 *Kode Bahasa*

 *⨠ Af: Afrikaans* 
 *⨠ Sq: Albanian*
 *⨠ Ar: Arabic*
 *⨠ Hy: Armenian*
 *⨠ Ca: Catalan* 
 *⨠ Zh: Chinese*
 *⨠ Zh-Cn: Chinese (Mandarin/China)*
 *⨠ Zh-Tw: Chinese (Mandarin/Taiwan)*
 *⨠ Zh-Yue: Chinese (Cantonese)*
 *⨠ Hr: Croatian*
 *⨠ Cs: Czech*
 *⨠ Da: Danish*
 *⨠ Nl: Dutch*
 *⨠ En: English*    
 *⨠ En-Au: English (Australia)*
 *⨠ En-Uk: English (United Kingdom)*
 *⨠ en-Us: English (United States)* 
 *⨠ Eo: Esperanto* 
 *⨠ Fi: Finnish* 
 *⨠ Fr: French*
 *⨠ De: German*
 *⨠ El: Greek* 
 *⨠ Ht: Haitian Creole* 
 *⨠ Hi: Hindi* 
 *⨠ Hu: Hungarian* 
 *⨠ Ss: Icelandic* 
 *⨠ Id: Indonesian* 
 *⨠ It: Italian*
 *⨠ Ja: Japanese*
 *⨠ Ko: Korean*
 *⨠ La: Latin*
 *⨠ Lv: Latvian*
 *⨠ Mk: Macedonian*
 *⨠ No: Norwegian*
 *⨠ Pl: Polish*
 *⨠ Pt: Portuguese*
 *⨠ Pt-Br: Portuguese (Brazil)*
 *⨠ Ro: Romanian*
 *⨠ Ru: Russian*
 *⨠ Sr: Serbian*
 *⨠ Sk: Slovak*
 *⨠ Es: Spanish* 
 *⨠ Es-Es: Spanish (Spain)*
 *⨠ Es-Us: Spanish (United States)*
 *⨠ Sw: Swahili*
 *⨠ Sv: Swedish*
 *⨠ Ta: Tamil*
 *⨠ Th: Thai*
 *⨠ Tr: Turkish*
 *⨠ Vi: Vietnamese* 
 *⨠ Cy: Welsh*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

/* ------------------------------------------------------------------------------------------------------------------------------------------- */


case "bratvid":
case 'bratvid': {
				if (!text) return m.reply(`Masukkan teks!`);
				lenwy.sendMessage(from, {react: {text: "⚡",key:m.key}})

				try {
					const stickerUrl = `https://api.nexray.web.id/maker/bratvid?text=${q}`

					await lenwy.sendImageAsSticker(m.chat, stickerUrl, m, { packname: global.packname, author: global.author });
		
				} catch (error) {
					console.error(error);
					m.reply('Terjadi kesalahan saat membuat stiker. Silakan coba lagi nanti.');
				}
			}
			break
case "dukun": {
    if (!text || text.trim() === "") {
        await lenwy.sendMessage(sender, { text: "Tolong tambahkan pertanyaan setelah kata 'dukun'." });
        break;
    }
    try {
        const apiUrl = `https://api.siputzx.my.id/api/ai/dukun?content=${encodeURIComponent(text)}`;
        const apiResponse = await axios.get(apiUrl);
        const botResponse = apiResponse.data?.data || "Maaf, saya tidak bisa menjawab saat ini.";
        await m.reply(`${botResponse}`)
    } catch (error) {
        console.error("Error API Dukun:", error.message);
        await m.reply("Maaf, dukun sedang bermeditasi. Coba lagi nanti.")
    }}
    break

      

        
   case 'rvo' : {
    try {
        if (!m.quoted || (!/imageMessage|videoMessage/.test(m.quoted.mtype))) {
            return lenwy.sendMessage(m.chat, { text: 'reply foto/video 1x lihat dengan caption .rvo' }, { quoted: m });
     m.reply(`utiwi`);
        }

        let media = await m.quoted.download();
        let type = m.quoted.mtype.includes('video') ? 'video' : 'image';

        await lenwy.sendMessage(m.chat, {
            [type]: media,
            caption: m.quoted.caption || ''
        }, { quoted: m });

    } catch (e) {
        console.error(e);
        lenwy.sendMessage(m.chat, { text: JSON.stringify(e, null, 2) }, { quoted: m });
    }
}

break;    
        
        
        
   case "tourl": {
if (!/image/.test(mime)) return m.reply("dengan kirim/reply foto")
let media = await lenwy.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'deomedia.png');

let teks = directLink.toString()
await lenwy.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break   
        
  case 'assalamualaikum': {
m.reply(`waalaikumsalam`) 
}
break      
     
case 'risa bot': {
            //if (!text) return m.reply(`Contoh *.ai* <on/off>`)
            if (text == "off") {
                delete lenwy.ai_sessions[m.sender]
                m.reply("[ ✓ ] Success delete session chat")
            } else if (lenwy.ai_sessions[m.sender]) {
                m.reply("[ ! ] risa bot sudah aktif lohhh kak..!!!")
            } else {
                lenwy.ai_sessions[m.sender] = { messages: [] }
                m.reply("[ ✓ ] Success create session chat\n> Ketik *.risa bot* off atau *matikan risa bot* untuk menghapus sessions chat.")
            }
        }
        break

case "pin": case 'pinterest': {
 if (!text) return m.reply(`*Contoh:* ${prefix + command} furina`)
 
 LenwyLD()
 await sleep(200)
 let push = []
 try {
 async function createImage(url) {
 const { imageMessage } = await generateWAMessageContent({
 image: { url }
 }, {
 upload: lenwy.waUploadToServer
 })
 return imageMessage;
 }

 function shuffleArray(array) {
 for (let i = array.length - 1; i > 0; i--) {
 let randIndex = Math.floor(Math.random() * (i + 1));
 [array[i], array[randIndex]] = [array[randIndex], array[i]];
 }
 }
 
 let { data } = await axios.get(`https://api.maelyn.sbs/api/pinterest/search?q=${encodeURIComponent(text)}&apikey=wyq3Zrsd53`)
 if (data.status !== "Success") throw new Error("Gagal mengambil data dari API")
 
 let res = data.result
 shuffleArray(res)

 let i = 1;
 for (let lucuy of res) {
 push.push({
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: `Image Ke ${i++}/${res.length}`
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 text: `By ${botname}`
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: '', 
 hasMediaAttachment: false,
 imageMessage: await createImage(lucuy)
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
 {
 "name": "cta_url",
 "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
 }
 ]
 })
 })
 }
 
 const bot = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 messageContextInfo: {
 deviceListMetadata: {},
 deviceListMetadataVersion: 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 body: proto.Message.InteractiveMessage.Body.create({
 text: '*P I N T E R E S T*', 
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: '*Hasil Dari:* ' + text,
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: false
 }),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
 cards: [...push]
 })
 })
 }
 }
 }, {quoted:m})

 await lenwy.relayMessage(m.chat, bot.message, {
 messageId: bot.key.id
 })

 } catch (e) {
 console.log(e) 
 m.reply('Yah error di bagian: ' + e.message) 
 }
}
break;;

  
        
case 'brat2': {
				if (!text) return m.reply(`Masukkan teks!`);
				
				try {
					const stickerUrl = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}`;
					await lenwy.sendImageAsSticker(m.chat, stickerUrl, m, { packname: global.packname, author: global.author });
		
				} catch (error) {
					console.error(error);
					m.reply('Terjadi kesalahan saat membuat stiker. Silakan coba lagi nanti.');
				}
			}
			break      

case 'brat': {
				if (!text) return m.reply(`Masukkan teks!`);
	lenwy.sendMessage(from, {react:{text: "🔎", key:m.key}})			
				try {
					const stickerUrl = `https://api.nexray.web.id/maker/brathd?text=${q}&IsAnimated=false&delay=500`

					await lenwy.sendImageAsSticker(m.chat, stickerUrl, m, { packname: global.packname, author: global.author });
		
				} catch (error) {
					console.error(error);
					m.reply('Terjadi kesalahan saat membuat stiker. Silakan coba lagi nanti.');
				}
			}
			break;
 
   case 'openai': {
/*    if (banned.includes(m.sender)) {
        return;
    }*/
    if (!text) return m.reply("Masukan query!");
    let sessions = readSession();
    let userSession = sessions[m.sender] || "";
    try {
        let question = userSession ? `${userSession}\n${text}` : text;
        var URL = "https://meitang.xyz/openai";
        let { data } = await axios({
            method: "GET",
            url: URL,
            params: { text: question }
        });
        if (data.status) {
            sessions[m.sender] = `${question}\n${data.result}`;
            writeSession(sessions);
            m.reply(data.result);
        } else {
            m.reply("Gagal mendapatkan respons dari API.");
        }
    } catch (e) {
        console.log(e);
        m.reply("Sesi sudah mencapai batas!\nketik .resetsesi dan coba lagi.");
    }
}
break;
case 'resetsesi': {
    let sessions = readSession();
    delete sessions[m.sender];
    writeSession(sessions);
    m.reply("Sesi AI berhasil direset!");
}
break;
        
     case 'superhd': {
  if (!quoted) return m.reply('Fotonya Mana?');
  if (!/image/.test(mime)) return m.reply('Fotonya Mana?');
 
  LenwyLD();  // Assuming this function is for some media download setup
  await sleep(200); // Wait for some time before proceeding

  let media = await lenwy.downloadAndSaveMediaMessage(quoted);
  let uploadedImage = await uploader60Minute(media);  // Assuming this is your upload function
  let result = util.format(uploadedImage);

  try {
    await remini2(result, 4);  // You can adjust the scale if needed, 2 is default
    await lenwy.sendMessage(m.chat, { image: { url: result }, caption: 'Selesai' }, { quoted: m });
  } catch (e) {
    return m.reply('Error, Lapor Pada Owner');
  }
}
break  
  
     case 'realhd': {
const sharp = require('sharp');
async function upscaleImage(inputPath) {
try {
const tempFilePath = path.join(__dirname, `temp_image_${time2}.jpg`);
fs.writeFileSync(tempFilePath, inputPath);
await sharp(inputPath)
.resize({ width: 1920, height: 1080, fit: 'outside', withoutEnlargement: false })
.sharpen()
.linear(1.2, + (128 * 1.2) + 128)
.modulate({ brightness: 0.98 })
await lenwy.sendMessage(m.chat, {image: fs.readFileSync(tempFilePath)})
fs.unlinkSync(tempFilePath);
} catch (error) {
console.error('Error processing image:', error);
}
}

const bufferImage = await lenwy.downloadMediaMessage(m.quoted)
return upscaleImage(bufferImage)
}
break  
        
        
        
        
        
   case 'gpt': 
case 'ai': {
lenwy.sendMessage(from, {react: {text: "🧐", key: m.key}})
 if (!text) {
 return m.reply(`apa`);
 }
 const prompt = `nama kamu adalah ${global.botname}, dan kamu di ciptakan untuk melakukan tugaskan yang diberikan oleh orang , dan kamu di di buat oleh ${global.ownername}, dan kamu harus menjawab dengan bahasa Indonesia dan mudah di pahami.`
 const requestData = { content: text, user: m.sender, prompt: prompt };
 const quoted = m && (m.quoted || m);

 try {
 let response;
 const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

 if (mimetype && /image/.test(mimetype)) {
 requestData.imageBuffer = await quoted.download();
 }

 response = (await axios.post('https://api.elrayyxml.web.id/api/ai/chatgpt?text=${q}', requestData)).data.result;
 m.reply(response);
 } catch (err) {
 m.reply(err.toString());
 }
}
break 
              
    case 'aio': {
if (!text) return m.reply('Masukkan link nya!')
LenwyLD()

try {
  let gtAu = (await axios.post("https://api.cobalt.tools/api/json", {"url": text,}, {headers: {"Content-Type": "application/json", Accept: "application/json"}})).data
  await lenwy.sendMessage(from, {video: {url: gtAu.url}, caption: `Done!`}, {quoted: m})
} catch (e) {
  m.reply('Tidak dapat mendownload video')
}

try {
  let gtAu = (await axios.post("https://api.cobalt.tools/api/json", {"url": text,"isAudioOnly":"true"}, {headers: {"Content-Type": "application/json", Accept: "application/json"}})).data
  await lenwy.sendMessage(from, {audio: {url: gtAu.url}, mimetype: 'audio/mp4', ptt: false}, {quoted: m})
} catch (e) {
  m.reply('Tidak dapat mendownload audio')
}

}
break    
/*   
case 'brat': {
				if (!text) return m.reply(`Masukkan teks!`);
	lenwy.sendMessage(from, {react:{text: "🔎", key:m.key}})			
				try {
					const stickerUrl = `https://api.nexray.web.id/maker/brathd?text=${q}&apikey=85f96e33aca5b3b69bc062e4`

					await lenwy.sendImageAsSticker(m.chat, stickerUrl, m, { packname: global.packname, author: global.author });
		
				} catch (error) {
					console.error(error);
					m.reply('Terjadi kesalahan saat membuat stiker. Silakan coba lagi nanti.');
				}
			}
			break;
} */
 
case 'claude': { 
  const Anthropic = require("@anthropic-ai/sdk");

async function apikey() {
  const antro = ["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", "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", "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", "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", "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", "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", "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", "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"]
  const apikeyRandom = pickRandom(antro)
  return apikeyRandom
} //apikey free dari hann😋

  async function upload(buffer) {
    let data = new FormData();
    data.append("files[]", buffer, "upload.jpg"); // Nama file bisa disesuaikan

    let response = await fetch("https://uguu.se/upload.php", {
        method: "POST",
        body: data
    });

    let res = await response.json()
return res.files[0].url
}

const apik = await apikey()

  const anthropic = new Anthropic({
  apiKey: apik,
});

  
  if (!m.quoted && !m.text) {
    m.reply(
      "Mohon reply pesan dengan gambar atau ketik teks untuk menghasilkan pesan.",
    );
    return;
  }

  let msg = "";

  try {
    if (m.quoted && m.quoted.mimetype.includes("image")) {
      const mediaData = await m.quoted.download();
      const up = await upload(mediaData); // Unduh gambar langsung ke buffer
      const base64Data = Buffer.from(up, "binary").toString("base64"); // Konversi buffer ke base64
      msg = await anthropic.messages.create({
        model: "claude-3-opus-20240229",
        max_tokens: 4000,
        temperature: 1,
        system: "gunakan hanya bahasa Indonesia",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: m.text || "", // Tambahkan teks jika ada
              },
              {
                type: "image",
                source: {
                  type: "base64",
                  media_type: m.quoted.mimetype, // Gunakan mimetype dari pesan yang direply
                  data: base64Data,
                },
              },
            ],
          },
        ],
      });
    } else {
      msg = await anthropic.messages.create({
        model: "claude-3-opus-20240229",
        max_tokens: 4000,
        temperature: 1,
        system: "gunakan hanya bahasa Indonesia",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: m.text || "", // Tambahkan teks jika ada
              },
            ],
          },
        ],
      });
    }

    m.reply(msg.content[0].text);
  } catch (error) {
    console.error(error);
    m.reply(error.message);
  }
}
break
 
        
       
        
                   
  case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':{
if (!qmsg) return m.reply("reply audio nya")
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await lenwy.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
lenwy.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
} catch (e) {
console.log(e)
m.reply(e)
}}
break  
   
    // absen menu 
        case 'mulaiabsen': {
if (!m.isGroup) return m.reply('Hanya Di Group')
    const chatId = m.chat; 
    

    
    if (absenData[chatId]) {
        m.reply ('Absen sudah dimulai di obrolan ini!');
    }

   
    absenData[chatId] = {
        admin: userId, 
        participants: [], 
    };

    
    m.reply('Fitur Absen telah dimulai! Gunakan perintah *.absen* untuk bergabung dalam absen ini.');
}
break;

 case 'delcase': {
if (!isCreator) return m.reply (`khusus owner bot kocak`)
if (!q)
return m.reply("Masukan nama case yang akan di hapus")
dellCase("./lenwy.js", q)
}
break      
        

case 'absen': {
 m.reply('Anda telah absen!');
}
break;

case 'cekabsen': {
if (!m.isGroup) return m.reply('Hanya Di Group')
    const chatId = m.chat;
    
    
    if (!absenData[chatId]) {
        m.reply ('Tidak ada proses absen yang sedang berlangsung di obrolan ini!');
    }

    
    const participants = absenData[chatId].participants;
    const participantTags = participants.map(id => `@${id.replace('@s.whatsapp.net', '')}`).join('\n');
    lenwy.sendMessage(m.chat, `Yang Sudah Absen:\n${participantTags}`, {
        mentions: participants,
        quoted: m
    });
}
break
    

case 'hapusabsen': {
if (!m.isGroup) return m.reply('Hanya Di Group')
    
    const chatId = m.chat;
    if (absenData[chatId] && absenData[chatId].admin === m.sender) {
      
        delete absenData[chatId];
        
        m.reply('Proses absen telah dihapus!');
    } else {
        m.reply('Anda tidak memiliki izin untuk menghapus proses absen!');
    }
}
break    
        
case 'slr': {
    if (!m.isGroup) return m.reply("FITUR UNTUK GRUB");    
    
	const cooldowns = new Map();              
    const now = Date.now();
    const cooldownTime = 5000; // Batas waktu antara eksekusi perintah AFK dalam milidetik (misalnya, 5 detik)

    if (cooldowns.has(m.sender)) {
        const lastExecutionTime = cooldowns.get(m.sender);
        const remainingTime = lastExecutionTime + cooldownTime - now;
        if (remainingTime > 0) {
            return m.reply(`Tunggu beberapa saat sebelum menggunakan perintah SLR lagi. (Sisa Waktu: ${msToDate(remainingTime)})`);
        }
    }

    let reason = text ? text : 'Nothing.';
    slr.addAfkUser(m.sender, Date.now(), reason, _slr);
    lenwy.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} sedang slr\nAlasan : ${reason}`, m);
    cooldowns.set(m.sender, now); // Catat waktu terakhir pengguna menjalankan perintah AFK
break;
};             
        
   /* case 'register': case 'daftar':{
        const istelahterdaftar = penggunafile.includes(m.sender) ? false : true
        if (!istelahterdaftar) return m.reply('ANDA TELAH TERDAFTAR')
				const nomer = m.sender;
				const balance = '0';
				const produk = {
					nomer,
					balance
				};
				let produkList = [];
				try {
					const existingData = fs.readFileSync('src/users.json', 'utf8');
					produkList = JSON.parse(existingData);
				} catch (err) {
					console.error(err);
				}
				produkList.push(produk);
				const nomernya = m.sender
				const nomerasli = nomernya.replace('@s.whatsapp.net', '')
				try {
					fs.writeFileSync('src/users.json', JSON.stringify(produkList, null, 1));
					let emot = [ '✅' ]
lenwy.sendMessage(m.chat, {
    react: {
      text: await pickRandom(emot),
      key: m.key,
    }
  })
					m.reply(`╭────〔 *Daftar Successfully* 〕─
┊・ NAMA : ${pushname}
┊・ NOMER : ${nomerasli}
┊・ SALDO : 0
╰┈┈┈┈┈┈┈┈`);
				} catch (err) {}
			}
			break    
     
 case 'akun': case 'saldo': case 'ceksaldo': {
				const nomerPengirim = m.sender;
				try {
					const penggunafile = fs.readFileSync('src/users.json', 'utf8');
					const jsonPengguna = JSON.parse(penggunafile);
					const pengguna = jsonPengguna.find(pengguna => pengguna.nomer === nomerPengirim);
					if (pengguna) {
						const saldoAkun = pengguna.balance;
						const nomernya = m.sender
						const nomerasli = nomernya.replace('@s.whatsapp.net', '')
						let emot = [ '✅' ]
lenwy.sendMessage(m.chat, {
    react: {
      text: await pickRandom(emot),
      key: m.key,
    }
  })
						m.reply(`╭────〔 *Detail Account* 〕─
┊・ NAMA : ${pushname}
┊・ NOMER : ${nomerasli}
┊・ SALDO : Rp. ${saldoAkun}
╰┈┈┈┈┈┈┈┈`);
					} else {
						m.reply('Maaf, akun tidak ditemukan. Silakan registrasi terlebih dahulu.');
					}
				} catch (error) {}
			}
			break */
        
        
        
        
  
 
//-------------------------------------------------------------------------------------------------------------------------------------------------//
   
 case 'setlist': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  
  // Mengecek apakah ada teks atau tidak
  let teks = text ? text : '';

  // Jika teks ada, lakukan pengecekan apakah ada '|||'
  if (teks) {
    let textParts = teks.split("|||");

    // Mengecek apakah jumlah bagian setelah dipisah dengan '|||' adalah 2
    if (textParts.length !== 2) {
      return m.reply("Harus ada 2 bagian yang dipisahkan oleh '|||'");
    }

    // Jika valid, update text list
    await updateTextList(m, teks);
    m.reply(mess.success);
  } else {
    // Jika tidak ada teks, kosongkan
    teks = '';
    await updateTextList(m, teks);
    m.reply(mess.success);
  }
}
break          

case 'setsimbol': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  let teks = text ? text : ''
  await updateTextListSimbol(m, text)
  m.reply(mess.success)
}
break

case 'list':
case 'list':
case 'l': {
 if (text) return;
 if (db_respon_list.length === 0) return m.reply(`*Belum Ada List Yang Ditambahkan*`);
 if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`*Belum Ada List Yang Terdaftar Di Grup Ini*`);

 try {
 let textlist = global.datagc[m.chat].text_list;
 let textsimbol = global.datagc[m.chat].text_list_simbol
	let usertag = `@${m.sender.split("@")[0]}`;
 let textParts = textlist.split("|||");
 if (textParts.length > 2) {
 return m.reply("Format list tidak valid. Harus ada 2 bagian yang dipisahkan oleh '|||'");
 }

 // Bagian header, body, dan footer
 let wordingHeader = textParts[0]
 let wordingFooter = textParts[1]

 // Penggantian tag dinamis pada bagian header, body, dan footer
 if (!wordingHeader) {
 wordingHeader = `
             ⡌⣁⢄ㅤㅤㅤ ⡠⣁⢡
𝓒.𝖺𝗍𝗍ꪗ 𝗑𝗑𝗈 𓂃 🫐 ⣠ ࣪ 𝗄𝗂𝗍𝗍𝗂──𝖻𝗅𝗎𝖾!
    𖹭 ⸼ ۫ 𝗐𝗁𝗂𝗌𝗉𝖾𝗋 𝗈𝖿 𝗍𝗁𝖾 𝖻𝗅𝗎𝖾 𝗌𝖾𝖺
    ⊂⊃ @${m.sender.split("@")[0]}⁩, ⸼ 부운! ׁ
                      ᠃ ⸼ ꉹ 𝗐𝖾𝗅𝖼𝗈𝗆𝖾 ! 

 𖦹.ᐟ 𝘁𝗶𝗺𝗲 ⵓ ${time2}
 𖦹.ᐟ 𝗱𝗮𝘁𝗲 ⵓ ${hariini2}

╭┈ ◟𑄝 ׄ 𝅄 𝓒𝗮𝘁𝗮𝗹𝗼𝗴𝘂𝗲'𝗌 𓈄 ° ִ`
 }
 if (wordingHeader.includes('@groupname')) {
 wordingHeader = wordingHeader.replace('@groupname', groupName);
 }
 if (wordingHeader.includes('@tagdiri')) {
 wordingHeader = wordingHeader.replace('@tagdiri', usertag);
 }
 if (wordingHeader.includes('@jam')) {
 wordingHeader = wordingHeader.replace('@jam', jamnya);
 }
 if (wordingHeader.includes('@menit')) {
 wordingHeader = wordingHeader.replace('@menit', menitnya);
 }
 if (wordingHeader.includes('@detik')) {
 wordingHeader = wordingHeader.replace('@detik', detiknya);
 }
 if (wordingHeader.includes('@hari')) {
 wordingHeader = wordingHeader.replace('@hari', harinya);
 }
 if (wordingHeader.includes('@tanggal')) {
 wordingHeader = wordingHeader.replace('@tanggal', tanggalnya);
 }
 if (wordingHeader.includes('@bulan')) {
 wordingHeader = wordingHeader.replace('@bulan', bulannya);
 }
 if (wordingHeader.includes('@tahun')) {
 wordingHeader = wordingHeader.replace('@tahun', tahunnya);
 }
 if (wordingHeader.includes('@namabulan')) {
 wordingHeader = wordingHeader.replace('@namabulan', namabulannya);
 }

 // Penggantian pada bagian body

 let sortedList = db_respon_list.filter(i => i.id === m.chat).sort((a, b) => a.key.localeCompare(b.key));

 let wordingBody = ''
 let simbol = textsimbol || `┃ ᨴ `
 for (let i of sortedList) {
 wordingBody += `\n${simbol} ${i.key.toLowerCase()}`;
 }
 // Penggantian pada bagian footer
 if (!wordingFooter) {
 wordingFooter =`\n╰───┈──*ੈ𑁍༘⋆──┈───
    ⤿ ◌ ׄ 𝗂, 𝗌𝗉𝖺𝗋𝗄𝗅𝖾 — 𝗻𝗼𝘁𝗲! ֵ ⓘ
‎ֺ 𑊢 𝅄 𝗍𝗒𝗉𝖾 𝗍𝗁𝖾 𝗇𝖺𝗆𝖾 𝗈𝖿 𝗍𝗁𝖾 𝗉𝗋𝗈𝖽𝗎𝖼𝗍
‎ֺ 𑊢 𝅄 𝗍𝗋𝖺𝗇𝗌𝖺𝖼𝗍𝗂𝗈𝗇𝗌 𝗈𝗇𝗅𝗒 𝗍𝗈 𝖺𝖽𝗆𝗂𝗇`
 }
 
 if (wordingFooter.includes('@groupname')) {
 wordingFooter = wordingFooter.replace('@groupname', groupName);
 }
 if (wordingFooter.includes('@tagdiri')) {
 wordingFooter = wordingFooter.replace('@tagdiri', usertag);
 }
 if (wordingFooter.includes('@jam')) {
 wordingFooter = wordingFooter.replace('@jam', jamnya);
 }
 if (wordingFooter.includes('@menit')) {
 wordingFooter = wordingFooter.replace('@menit', menitnya);
 }
 if (wordingFooter.includes('@detik')) {
 wordingFooter = wordingFooter.replace('@detik', detiknya);
 }
 if (wordingFooter.includes('@hari')) {
 wordingFooter = wordingFooter.replace('@hari', harinya);
 }
 if (wordingFooter.includes('@tanggal')) {
 wordingFooter = wordingFooter.replace('@tanggal', tanggalnya);
 }
 if (wordingFooter.includes('@bulan')) {
 wordingFooter = wordingFooter.replace('@bulan', bulannya);
 }
 if (wordingFooter.includes('@tahun')) {
 wordingFooter = wordingFooter.replace('@tahun', tahunnya);
 }
 if (wordingFooter.includes('@namabulan')) {
 wordingFooter = wordingFooter.replace('@namabulan', namabulannya);
 }

 // Gabungkan bagian header, body, dan footer
 let finalText = `${wordingHeader}${wordingBody}${wordingFooter}`;

 // Kirim pesan
 lenwy.sendMessage(m.chat, { text: finalText, mentions: [m.sender] }, { quoted: m });

 await sleep(200);
 
 let buttons = sortedList.map(i => ({
 title: i.key,
 id: i.key
 }));

 let buttonParamsJson = JSON.stringify({
 title: "[ 𝗟𝗜𝗦𝗧 ]",
 sections: [{
 title: "𝗟𝗶𝘀𝘁 𝗟𝗶𝗻𝗻𝘆",
 rows: buttons
 }]
 });

 let botakk = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: {
 body: {
 text: "𝗄𝖾𝗍𝗂𝗄 𝗇𝖺𝗆𝖺 𝗅𝗂𝗌𝗍𝗇𝗒𝖺 𝖺𝗍𝖺𝗎 𝗄𝗅𝗂𝗄 𝗍𝗈𝗆𝖻𝗈𝗅 𝖽𝗂𝖻𝖺𝗐𝖺𝗁 𝗂𝗇𝗂 𝗒𝖺𝖺.."
 },
 footer: {
 text: ""
 },
 header: {
 title: "",
 text: ""
 },
 nativeFlowMessage: {
 buttons: [{
 name: "single_select",
 buttonParamsJson: buttonParamsJson
 }]
 },
 contextInfo: {
 mentionedJid: [m.sender],
 }
 }
 }
 }
 }, { quoted: m });

 await lenwy.relayMessage(m.chat, botakk.message, { messageId: botakk.key.id }) 
 
 } catch (err) {
 console.error(err);
 m.reply(`*Terjadi Kesalahan Dalam Mengambil Nama Grup*`);
 }
}
break
                  
        
                case 'setbot': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!text) return m.reply(`Masukkan Text Bot Nya`)
await updateBot(m, text)
m.reply(mess.success)
}
break
        
        case 'bot': {
let settextbot = global.db.data.chats[m.chat]?.text_bot || `kenapa sayang aku paling cantik sedunia?${pushname}`
lenwy.sendMessage(m.chat, { text: settextbot}, { quoted: fkontak})
}
break
        
 case 'setdone': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
let teks = text ? text : ''
await updateTextDone(m, teks)
m.reply(mess.success)
}
break

case 'done': {
if (!m.isGroup) return
if (!isAdmins) return
if (!m.quoted) return m.reply('⚠️ *Reply Pesan Si Pemesan*')
const quotedSender = m.quoted.sender;
const quotedSenderTag = `@${quotedSender.split("@")[0]}`; // Format tag pengirim yang dibalas
const yangmemesan = quotedSenderTag;
const query = text ? text : (m.quoted ? m.quoted.text : '')
let teks = `                  ⢀⣄⡀           
                 ⣿⣿⣿⣷⣀    
     ⣠⣤⣄⣀⠙⠿⢛⣩⠎  𖹭 ⸼ ۫  𝗱𝗼𝗻𝗲 ›
     ⣿⣿⣿⣿⣿⣿⣿⠋ ᩡ  ׅ  부드 - 부드! ׁ
  ⠴⣿⣷⣽  ⠉⠙⠋

            ⸼   ±𝟦𝟦𝟦  ׄ⸧  *𝖽𝗈𝗇𝖾*  ⸼  ᨧ⃘ᨴ ִ ׄ 

 ╭ ───  ׄ ⸼  𖣂 .  ׁ *detail's* 🫧   ֵ  ׄ⸙ ⤾
╭╮ ‎ׄ ⤿ ֵ   ‎ׄ ⃘✿  ִֶָ   d𝖺𝗍𝖾  ⵓ ${hariini2}
││ ‎ׄ ⤿ ֵ   ‎ׄ ⃘✿  ִֶָ   𝗍𝗂𝗆𝖾  ⵓ ${time}
╰╯ ‎ׄ ⤿ ֵ   ‎ׄ ⃘✿  ִֶָ   𝗈𝗋𝖽𝖾𝗋  ⵓ ${query}         

     ‎ׄ⤿ ֵ ׄ 𖣂.)  부러분! ׁ 𝖻𝖾𝖺𝗎𝗍𝗂𝖿𝗎𝗅 𝗈𝖼𝖾𝖺𝗇`;

let settextdone = global.datagc[from].text_done
let usertag = `@${m.sender.split("@")[0]}`

if (settextdone.includes('@tagreply')) {
  if (m.quoted) {
    let userreply = `@${m.quoted.sender.split("@")[0]}`
    settextdone = settextdone.replace('@tagreply', userreply)
  } else {
    return m.reply(`Anda menggunakan @tagreply, anda harus mereply pesan seseorang untuk mengetag nya`)
  }
}

if (settextdone.includes('@pesanan')) {
  settextdone = settextdone.replace('@pesanan', query)
} 
if (settextdone.includes('@groupname')) {
  settextdone = settextdone.replace('@groupname', groupName)
} 
if (settextdone.includes('@tagdiri')) {
  settextdone = settextdone.replace('@tagdiri', usertag)
}
if (settextdone.includes('@jam')) {
  settextdone = settextdone.replace('@jam', jamnya)
}
if (settextdone.includes('@menit')) {
  settextdone = settextdone.replace('@menit', menitnya)
}
if (settextdone.includes('@detik')) {
  settextdone = settextdone.replace('@detik', detiknya)
}
if (settextdone.includes('@hari')) {
  settextdone = settextdone.replace('@hari', harinya)
}
if (settextdone.includes('@tanggal')) {
  settextdone = settextdone.replace('@tanggal', tanggalnya)
}
if (settextdone.includes('@bulan')) {
  settextdone = settextdone.replace('@bulan', bulannya)
}
if (settextdone.includes('@tahun')) {
  settextdone = settextdone.replace('@tahun', tahunnya)
}
if (settextdone.includes('@namabulan')) {
  settextdone = settextdone.replace('@namabulan', namabulannya)
}

if (!settextdone) {
  settextdone = teks
}

lenwy.sendMessage(m.chat, { text: settextdone, mentions: [quotedSender] }, { quoted: m })
}
break

case 'setproses': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
let teks = text ? text : ''
await updateTextProses(m, teks)
m.reply(mess.success)
}
break

case 'proses': {
if (!m.isGroup) return
if (!isAdmins) return
if (!m.quoted) return m.reply('⚠️ *Reply Pesan Si Pemesan*')
const quotedSender = m.quoted.sender;
const quotedSenderTag = `@${quotedSender.split("@")[0]}`; // Format tag pengirim yang dibalas
const yangmemesan = quotedSenderTag;
const query = text ? text:
(m.quoted ? m.quoted.text: '')
let teks = `‎                 ⢀⣄⡀           
‎                 ⣿⣿⣿⣷⣀    
‎     ⣠⣤⣄⣀⠙⠿⢛⣩⠎  𖹭 ⸼ ۫ 𝗽𝗿𝗼𝗰𝗲𝘀𝘀 ›
‎     ⣿⣿⣿⣿⣿⣿⣿⠋  ᩡ  ׅ  부드 - 부드! ׁ
‎  ⠴⣿⣷⣽  ⠉⠙⠋
‎ 
‎         ⸼   ±𝟦𝟦𝟦  ׄ⸧  *proses*  ⸼  ᨧ⃘ᨴ ִ ׄ 
‎
‎ ╭ ───  ׄ ⸼  𖣂 .  ׁ *detail's* 🫧   ֵ  ׄ⸙ ⤾
‎╭╮ ׄ ⤿ ֵ   ׄ ⃘✿  ִֶָ   da𝗍𝖾  ⵓ ${hariini2}
‎││ ׄ ⤿ ֵ   ׄ ⃘✿  ִֶָ   𝗍𝗂𝗆𝖾  ⵓ ${time} 
‎╰╯ ׄ ⤿ ֵ   ׄ ⃘✿  ִֶָ   order  ⵓ ${query}
‎
‎     ׄ⤿ ֵ ׄ 𖣂.)  부러분! ׁ 𝖻𝖾𝖺𝗎𝗍𝗂𝖿𝗎𝗅 𝗈𝖼𝖾𝖺𝗇`;
let settextproses = global.datagc[from].text_proses
let usertag = `@${m.sender.split("@")[0]}`

if (settextproses.includes('@tagreply')) {
  if (m.quoted) {
    let userreply = `@${m.quoted.sender.split("@")[0]}`
    settextproses = settextproses.replace('@tagreply', userreply)
  } else {
    return m.reply(`Anda menggunakan @tagreply, anda harus mereply pesan seseorang untuk mengetag nya`)
  }
}

if (settextproses.includes('@pesanan')) {
  settextproses = settextproses.replace('@pesanan', query)
} 
if (settextproses.includes('@groupname')) {
  settextproses = settextproses.replace('@groupname', groupName)
} 
if (settextproses.includes('@tagdiri')) {
  settextproses = settextproses.replace('@tagdiri', usertag)
}
if (settextproses.includes('@jam')) {
  settextproses = settextproses.replace('@jam', jamnya)
}
if (settextproses.includes('@menit')) {
  settextproses = settextproses.replace('@menit', menitnya)
}
if (settextproses.includes('@detik')) {
  settextproses = settextproses.replace('@detik', detiknya)
}
if (settextproses.includes('@hari')) {
  settextproses = settextproses.replace('@hari', harinya)
}
if (settextproses.includes('@tanggal')) {
  settextproses = settextproses.replace('@tanggal', tanggalnya)
}
if (settextproses.includes('@bulan')) {
  settextproses = settextproses.replace('@bulan', bulannya)
}
if (settextproses.includes('@tahun')) {
  settextproses = settextproses.replace('@tahun', tahunnya)
}
if (settextproses.includes('@namabulan')) {
  settextproses = settextproses.replace('@namabulan', namabulannya)
}

if (!settextproses) {
  settextproses = teks
}

lenwy.sendMessage(m.chat, { text: settextproses, mentions: [quotedSender] }, { quoted: m })
}
break
   

case 'addlist2': {
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.isGroup) return m.reply(mess.group)
  if (args.length === 0) return m.reply(`*Cara Penggunaan : ${prefix}addlist <key>*\n*Contoh : addlist wdp*`)
  const key = text
  if (isAlreadyResponList(from, key, db_respon_list)) return m.reply(`⚠️ *Nama Key ${key} Sudah Ada Dalam Group Ini*`)
  if (!m.quoted) {
    m.reply(`*Silakan reply chat yang ingin dijadikan respon untuk key ${key}!*`)
  } else {
    const chat = m.quoted
    const respon = chat.text
    if (/image/.test(mime)) {
      media = await lenwy.downloadAndSaveMediaMessage(quoted)
      mem = await imgbb(imgbbapi, media)
      addResponList(from, key, respon, true, `${mem.display_url}`, db_respon_list)
      m.reply(`Successfully set list message with key : *${key}*`)
      if (fs.existsSync(media)) fs.unlinkSync(media)
    } else {
      addResponList(from, key, respon, false, '-', db_respon_list)
      m.reply(`📑 *Sukses Menambahkan Key Dengan Kode : ${key}*`)
    }
  }
} break

case 'addlist': {
if (!isAdmins) return m.reply(mess.admin)
if (!m.isGroup) return m.reply(mess.group)
let args = q.split("@")
let args1 = args[0].toLowerCase().trim()
let args2 = args[1]
if (!q.includes('@')) return m.reply(`*Cara Pengunaan : ${prefix+command} Key@Respon*\n🎁 *Contoh : addlist wdp@harga wdp _-*`)
if (!args1 && !args2) return m.reply(`Key Dan Respon Harus Diisi!!`)
if (isAlreadyResponList(from, args1, db_respon_list)) return m.reply(`⚠️ *Nama Key ${args1} Sudah Ada Dalam Group Ini*`)
if (/image/.test(mime)) {
media = await lenwy.downloadAndSaveMediaMessage(quoted)
mem = await uploaderLebih(media)
addResponList(from, args1, args2, true, `${mem}`, db_respon_list)
m.reply(`Successfully set list message with key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
m.reply(`📑 *Sukses Menambahkan Key Dengan Kode : ${args1}*`)
}
}
break


case 'dellist': 
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (db_respon_list.length === 0) return m.reply(`*Belum Ada List Yang Ditambahkan*`)
if (!text) return m.reply(`*Ketik Nama Item Yang Ingin Dihapus*`)
  let sortedList = db_respon_list.filter(i => i.id === m.chat).sort((a, b) => {
    if (a.key < b.key) return -1;
    if (a.key > b.key) return 1;
    return 0;
})
    let buttons = sortedList.map(i => ({
        title: `${prefix}dellist ${i.key}`,
        id: `${prefix}dellist ${i.key}` // Mengubah ID di sini
    }))
let buttonParamsJson = JSON.stringify({
    title: "[ LIST ]",
    sections: [{
        title: "Daftar List",
        rows: buttons
    }]
})
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: "Ketik Nama Item Nya Atau Coba Klik List Dibawah Ini"
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: ""
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: "",
                    subtitle: "",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                        name: "single_select",
                        buttonParamsJson: buttonParamsJson
                    }/*,{
                       name: "quick_reply",
                        buttonParamsJson: `{"display_text":"Payment","id":"pay a"}`          						
                    }*/]
                }),
                contextInfo: {
                    mentionedJid: [m.sender],
                }
            })
        }
    }
}, { quoted: m })
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) {
await lenwy.sendMessage(m.chat, {
text: "Periksa Lagi List Nya Dan Ketikkan Dengan Benar Atau Gunakan Tombol Dibawah Jika Tidak Muncul.\n\nSilahkan Hubungi Owner Jika Anda Mengalami Kesulitan Dalam Penghapusan List."
}, {
quoted: m
})
await lenwy.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}
if (isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) {
delResponList(m.chat, q.toLowerCase(), db_respon_list)
m.reply(`⚠️ *Sukses Menghapus Item Dengan kode : ${q}*`)
}
break

case 'updatenamelist': {
 if (!m.isGroup) return m.reply(mess.group)
 if (!isAdmins) return m.reply(mess.admin)
 let args = q.split("@")
 if (args.length !== 2) {
 return m.reply(`*Cara Penggunaan : Updatenamelist OldKey@NewKey*\n🎁 *Contoh : Updatenamelist wdp@antri wdp*`)
 }
 let oldKey = args[0].toLowerCase().trim()
 let newKey = args[1].toLowerCase().trim()
 if (updateKey(m.chat, oldKey, newKey, db_respon_list)) {
 m.reply(`📑 *Sukses Memperbarui Kode Dari ${oldKey} Menjadi ${newKey}*`)
 } else {
 m.reply(`⚠️ *Nama Item ${oldKey} Belum Terdaftar Dalam Group Ini*`)
 }
}
break

case 'updatelist': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
let args = q.split("@")
let args1 = args[0].toLowerCase()
let args2 = args[1]
// Check if the input contains the separator '|'
if (!q.includes("@")) return m.reply(`*Cara Pengunaan : Updatelist Item@Respon*\n🎁 *Contoh : Updatelist wdp@harga wdp eaa apala*`)
// Check if the list item exists in the group
if (!isAlreadyResponList(m.chat, args1, db_respon_list)) return m.reply(`⚠️ *Nama Item ${args1} Sudah Ada Dalam Group Ini*`)
// Check if the message contains an image
if (/image/.test(mime)) {
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let mem = await uploaderLebih(media)
// Update response list with the new image
updateResponList(m.chat, args1, args2, true, `${mem}`, db_respon_list)
m.reply(`📑 *Sukses Memperbarui Item Dengan Kode : ${args1}*`)
// Clean up the media file
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
// Update response list without an image
updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
m.reply(`📑 *Sukses Memperbarui Item Dengan Kode : ${args1}*`)
}
}
break
        
 case 'resetlist': {
    if (!m.isGroup) {
        return m.reply(mess.group);
    }
    if (!isBotAdmins) {
        return m.reply(mess.botAdmin);
    }
    if (!isAdmins) {
        return m.reply(mess.admin);
    }
    
    const fs = require("fs");
    
    let groupID = m.isGroup ? m.chat : botNumber; // Mendapatkan ID grup
    let newList = db_respon_list.filter(item => item.id !== groupID); // Filter list untuk menghapus yang memiliki ID grup yang sesuai
    db_respon_list = newList; // Update db_respon_list dengan newList
    fs.writeFileSync('./database/list-message.json', JSON.stringify(newList, null, 3)); // Menulis ulang file dengan data list yang baru
    m.reply("Seluruh data list di grup ini telah direset.");
    break;
}      

case 'addtesti': {
if (!isCreator) return m.reply(mess.owner)
if (!/image/.test(mime)) return m.reply(`*Mana Fotonya?*`)    
if (args.length < 1) return m.reply('*Berikan Nama Pada Image*')
if (imagenya.includes(q)) return m.reply("⚠️ *Nama Tersebut Sudah Tersedia*")
let TestiLenwy = await lenwy.downloadAndSaveMediaMessage(quoted)
imagenya.push(q)
await fsx.copy(TestiLenwy, `./database/Testilenwy/${q}.jpg`)
fs.writeFileSync('./database/Lenwytesti.json', JSON.stringify(imagenya))
fs.unlinkSync(TestiLenwy)
m.reply(`📦 *Sukses Menambahkan ${q} Kedalam Database*`)
}
break

case 'testi':
case 'testimoni':
if (!q) return m.reply(`*Masukkan Nama Testimoni Yang Tersedia*`)
let LenwyTesti = `📑 *Testimoni Dalam Database Berhasil Dikirimkan*`     
lenwy.sendMessage(m.chat, {
image: fs.readFileSync(`./database/Testilenwy/${q}.jpg`), caption: LenwyTesti }, { quoted: m
})
break

case 'listtesti':
case 'listtestimoni': {
let teks = '📦 *List Testimoni*\n'
for (let LenTesti of imagenya) {
teks += ` *⨠ ${LenTesti}*\n`
}
teks += `\n*📑 Total : ${imagenya.length} Testimoni*`
m.reply(teks)
}
break

case 'deltesti': {
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return m.reply('*Masukkan Nama Imagenya*')
if (!imagenya.includes(q)) return m.reply(`⚠️ *${q} Tidak Ditemukan Dalam Database*`)
let wanu = imagenya.indexOf(q)
imagenya.splice(wanu, 1)
fs.writeFileSync('./database/Lenwytesti.json', JSON.stringify(imagenya))
fs.unlinkSync(`./database/Testilenwy/${q}.jpg`)
m.reply(`⚠️ *Sukses Menghapus ${q} Dalam Database*`)
}
break 

case 'kalkulator': 
case 'calculator': {
    // Definisikan operator yang valid
    const operators = {
        '/': '/',
        '*': '*',
        '+': '+',
        '-': '-',
    };

    // Ambil input pengguna, pastikan ini diinisialisasi dengan benar
    let text = q; // Misalnya, q adalah input dari pengguna

    // Temukan operator yang digunakan
    let operator = null;
    for (const key in operators) {
        if (text.includes(key)) {
            operator = operators[key]
            break
        }
    }

    if (!operator) {
        return m.reply(`*Contoh:*
> *Pembagian: kalkulator 12/2*
> *Perkalian: kalkulator 12*2*
> *Pertambahan: kalkulator 12+2*
> *Pengurangan: kalkulator 12-2*`)
    }

    // Pisahkan argumen berdasarkan operator yang ditemukan
    let [lenwy1, lenwy2] = text.split(operator).map(part => part.trim())

    // Cek jika lenwy1 dan lenwy2 ada dan valid
    if (lenwy1 === undefined || lenwy2 === undefined || isNaN(lenwy1) || isNaN(lenwy2)) {
        return m.reply(`*Pastikan format input benar, contoh: 1200 + 200*`)
    }

    let lenwy_1 = Number(lenwy1)
    let lenwy_2 = Number(lenwy2)

    // Lakukan perhitungan berdasarkan operator
    let result;
    switch (operator) {
        case '+':
            result = lenwy_1 + lenwy_2;
            break
        case '-':
            result = lenwy_1 - lenwy_2;
            break
        case '*':
            result = lenwy_1 * lenwy_2;
            break
        case '/':
            if (lenwy_2 === 0) {
                return m.reply(`*Pembagian dengan nol tidak diperbolehkan!*`)
            }
            result = lenwy_1 / lenwy_2;
            break
    }

    m.reply(`🎁 *Hasil :* ${result}`)
}
break

case 'huft': case 'hmmph': {
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break
        
 case 'cekhitam': case 'hitamcek': {
    ;
    if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisa`);
    
    // Jika nama adalah "rifvky", langsung 100% hitam
    if (q.toLowerCase() === 'Lisa') {
        m.reply(`Nama : ${q}\nJawaban : *100% Wah Awoaowowow ireng bet*`);
    } else {
        const can = ['10% Yahaha Hitam Lawak Hitam wkwkw Hitam', 
                     '30% Semangat Kaka Merawat Dirinya><', 
                     '20% Semangat Ya Kaka👍', 
                     '40% Wahh Kaka><', 
                     '50% Kaka Hitam deh><', 
                     '60% Hai Hitam🐊', 
                     '70% Hai Ukhty🐊', 
                     '62% Kakak Hitam><', 
                     '74% Kakak ni Hitam deh><', 
                     '83% Love You Kakak><', 
                     '97% Assalamualaikum Ukhty🐊', 
                     '100% Wah Awoaowowow ireng bet', 
                     '29% Semangat Kakak:)', 
                     '94% Hai Hitam><', 
                     '75% Hai Kakak Hitam', 
                     '82% Wihh Kakak Pasti Sering Perawatan kan??', 
                     '41% Semangat:)', 
                     '39% Lebih Semangat🐊'];
        
        const tik = can[Math.floor(Math.random() * can.length)];
        m.reply(`Nama : ${q}\nJawaban : *${tik}*`);
    }
    
}

break  
        
        case 'cekkhodam': {
if (!text) return m.reply("ketik nama lu woi")
  
	const khodam = pickRandom([
	  "Kaleng Cat Avian",
	  "Pipa Rucika",
	  "Botol Tupperware",
	  "Badut Mixue",
	  "Sabun GIV",
	  "Sandal Swallow",
	  "Jarjit",
	  "Ijat",
	  "Fizi",
	  "Mail",
	  "Ehsan",
	  "Upin",
	  "Ipin",
	  "sungut lele",
	  "Tok Dalang",
	  "Opah",
	  "Opet",
	  "Alul",
	  "Pak Vinsen",
	  "Maman Resing",
	  "Pak RT",
	  "Admin ETI",
	  "Bung Towel",
	  "Lumpia Basah",
	  "Martabak Manis",
	  "Baso Tahu",
	  "Tahu Gejrot",
	  "Dimsum",
	  "Seblak Ceker",
	  "Telor Gulung",
	  "Tahu Aci",
	  "Tempe Mendoan",
	  "Nasi Kucing",
	  "Kue Cubit",
	  "Tahu Sumedang",
	  "Nasi Uduk",
	  "Wedang Ronde",
	  "Kerupuk Udang",
	  "Cilok",
	  "Cilung",
	  "Kue Sus",
	  "Jasuke",
	  "Seblak Makaroni",
	  "Sate Padang",
	  "Sayur Asem",
	  "Kromboloni",
	  "Marmut Pink",
	  "Belalang Mullet",
	  "Kucing Oren",
	  "Lintah Terbang",
	  "Singa Paddle Pop",
	  "Macan Cisewu",
	  "Vario Mber",
	  "Beat Mber",
	  "Supra Geter",
	  "Oli Samping",
	  "Knalpot Racing",
	  "Jus Stroberi",
	  "Jus Alpukat",
	  "Alpukat Kocok",
	  "Es Kopyor",
	  "Es Jeruk",
	  "Cappucino Cincau",
	  "Jasjus Melon",
	  "Teajus Apel",
	  "Pop ice Mangga",
	  "Teajus Gulabatu",
	  "Air Selokan",
	  "Air Kobokan",
	  "TV Tabung",
	  "Keran Air",
	  "Tutup Panci",
	  "Kotak Amal",
	  "Tutup Termos",
	  "Tutup Botol",
	  "Kresek Item",
	  "Kepala Casan",
	  "Ban Serep",
	  "Kursi Lipat",
	  "Kursi Goyang",
	  "Kulit Pisang",
	  "Warung Madura",
	  "Gorong-gorong",
	])
  
	const response = `
╭━━━━°「 *Cekkodam* 」°
┃
┊• *Nama :* ${text}
┃• *Khodam :* ${khodam}
╰═┅═━––––––๑
	  `
  
	m.reply(response)
  }
break
 case 'cekmemek': {
if (!text) return m.reply('Ketik Namanya Tolol!')
m.reply(`
╭━━━━°「 *Memek ${text}* 」°
┃
┊• Nama : ${text}
┃• memek : ${pickRandom(['ih item','Belang wkwk','Muluss','Putih Mulus','Black Doff','Pink wow','Item Glossy'])}
┊• lubang : ${pickRandom(['perawan','ga perawan','udah pernah dimasukin','masih rapet','tembem'])}
┃• jembut : ${pickRandom(['lebat','ada sedikit','gada jembut','tipis','muluss'])}
╰═┅═━––––––๑`)
}
break
case 'cekkontol': { 
if (!text) return m.reply('Ketik Namanya Tolol!')
m.reply(`
╭━━━━°「 *Komtol ${text}* 」°
┃
┊• Nama : ${text}
┃• komtol : ${pickRandom(['ih item','Belang wkwk','Muluss','Putih Mulus','Black Doff','Pink wow','Item Glossy'])}
┊• ukuran : ${pickRandom(['5cm','10cm','7cm','9cm','15cm','100cm'])}
┃• jembut : ${pickRandom(['lebat','ada sedikit','gada jembut','tipis','muluss'])}
╰═┅═━––––––๑`)
}
break

   case 'jodoh': {
            if (!m.isGroup) return m.reply('khusus grup oyy')                         
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
lenwy.sendMessage(m.chat,
{ text: `👩‍❤️‍👨 Jodohmu Adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh]}},
{ quoted: m})        
            }
            break    

case 'rate': {
if (!q) return m.reply(`*Contoh: ${prefix + command} Penampilan gw*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
m.reply(`*Rate : ${q}*\n🎁 *Jawaban : ${te}%*`)
}
break


case 'rch':
case 'reactch': {
if (!isAdmins) return m.reply(`khusus admin😂`)
 if (!text) return m.reply("Contoh:\n.rch https://whatsapp.com/channel/xxx/ 🍑\n.rch https://whatsapp.com/channel/xxx/ risa");

 const hurufGaya = {
 a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖',
 h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝',
 o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤',
 v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
 '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
 '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
 };

 const [mainText, offsetStr] = text.split('|');
 const args = mainText.trim().split(" ");
 const link = args[0];

 if (!link.includes("https://whatsapp.com/channel/")) {
 return reply("Link tidak valid!\nContoh: .reactch https://whatsapp.com/channel/xxx/idpesan raidennn|3");
 }

 const channelId = link.split('/')[4];
 const rawMessageId = parseInt(link.split('/')[5]);
 if (!channelId || isNaN(rawMessageId)) return m.reply("Link tidak lengkap!");

 const offset = parseInt(offsetStr?.trim()) || 1;
 const teksNormal = args.slice(1).join(' ');
 const teksTanpaLink = teksNormal.replace(link, '').trim();
 if (!teksTanpaLink) return m.reply("Masukkan teks/emoji untuk direaksikan.");

 const emoji = teksTanpaLink.toLowerCase().split('').map(c => {
 if (c === ' ') return '―';
 return hurufGaya[c] || c;
 }).join('');

 try {
 const metadata = await lenwy.newsletterMetadata("invite", channelId);
 let success = 0, failed = 0;

 for (let i = 0; i < offset; i++) {
 const msgId = (rawMessageId - i).toString();
 try {
 await lenwy.newsletterReactMessage(metadata.id, msgId, emoji);
 success++;
 } catch (e) {
 failed++;
 }
 }

 m.reply(`✅ Berhasil kirim reaction *${emoji}* ke ${success} pesan di channel *${metadata.name}*\n❌ Gagal di ${failed} pesan`);
 } catch (err) {
 console.error(err);
 m.reply("❌ Gagal memproses permintaan!");
 }
}
break


case 'apakah': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw lagi marah*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
m.reply(`*Pertanyaan : Apakah ${q}*\n🎁 *Jawaban : ${kah}*`)
}
break

case 'kapankah': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw masuk rsj*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
m.reply(`*Pertanyaan : Kapankah ${q}*\n🎁 *Jawaban : ${kapankah}*`)
}
break

case 'bisakah': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw hamil*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Awokawok', 'TENTU KAMU PASTI BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
m.reply(`*Pertanyaan : Bisakah ${q}*\n🎁 *Jawaban : ${ga}*`)
}
break

case 'bagaimanakah': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw kuyang*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const gimana = ['Ya Begitulah', 'Gak Normal', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'Kayaknya Lanjut Part 2', 'Kepo Kamu', 'Gimana Aja']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
m.reply(`*Pertanyaan : Bagaimanakah ${q}*\n🎁 *Jawaban : ${ya}*`)
}
break

case 'gantengcek': case 'cekganteng': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const gan = ['Normal','Ganteng Njir','Ganteng Amat Bang','Jaga Penampilan Ya','Kurang :c','Lumayan','Boleh Juga']
const teng = gan[Math.floor(Math.random() * gan.length)]
m.reply(`*Nama* ${q}\n🎁 *Jawaban : ${teng}*`)
}
break

case 'cantikcek': case 'cekcantik': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const can = ['Normal','Cantik Njir','Cantik Amat Sih','Jaga Penampilan Ya','Kurang :c','Lumayan','Boleh Juga']
const tik = can[Math.floor(Math.random() * can.length)]
m.reply(`*Nama* ${q}\n🎁 *Jawaban : ${tik}*`)
}
break

case 'createqr': {
if (!isCreator) return m.reply(mess.owner)
LenwyLD()
await sleep(3000)
const qrcode = require('qrcode')
if (!text) return m.reply(`*Contoh : Createqr ${botname}*`)
const qyuer = await qrcode.toDataURL(text, { scale: 8 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
lenwy.sendMessage(from, { image: data, caption: mess.success }, { quoted: m })
}
break

case 'detectqr': {
if (!isCreator) return m.reply(mess.owner)
LenwyLD()
await sleep(3000)
try {
mee = await lenwy.downloadAndSaveMediaMessage(quoted)
mem = await uploader60Minute(mee)
const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res.json()
  LenwyLD()
  await sleep(3000) 
m.reply(util.format(data[0]))
} catch (err) {
m.reply(`*Mana Qrnya?*`)
}
}
break
  
  case 'public': {
  if (!isCreator) return m.reply(mess.owner) 
  lenwy.public = true
  m.reply('Sukses Change To Public')
  }
  break
  
  case 'self': {
  if (!isCreator) return m.reply(mess.owner) 
  lenwy.public = false
  m.reply('Sukses Change To Self')
  }
  break
  
  case 'enc': {
  if (!isCreator) return m.reply(mess.owner)
  if (!q) return m.reply(`Contoh ${prefix+command} const hai = 'Aku Merlinus'`)
  let res = await (await fetch (`https://endpoint.web.id/tools/encrypt?key=315602&query=${q}`)).json()
  m.reply(res.result)
  }
  break

//=============================================================================================================================================================//

case 'addallprem': {
  if (!isCreator) return m.reply(mess.owner)
  if (!m.isGroup) return m.reply(`*Perintah Ini Hanya Dapat Digunakan Di Dalam Grup.*`)

  // Mengambil metadata grup
  let groupMetadata;
  try {
      groupMetadata = await lenwy.groupMetadata(from)
  } catch (e) {
      console.error('Error fetching group metadata:', e)
      return m.reply('*Gagal Mengambil Metadata Grup.*')
  }

  // Mendapatkan peserta grup
  let participants;
  try {
      participants = groupMetadata.participants;
  } catch (e) {
      console.error('Error fetching group participants:', e)
      return m.reply('*Gagal Mengambil Daftar Peserta Grup.*')
  }

  if (!participants || participants.length === 0) return m.reply('Tidak ada peserta dalam grup.')

  // Membaca daftar premium dari file
  let owner;
  try {
      owner = JSON.parse(fs.readFileSync('./premium.json', 'utf8'))
  } catch (err) {
      console.error('Error reading premium.json:', err)
      return m.reply('*Gagal Memuat Daftar Premium.*')
  }

  let addedNumbers = []
  let existingNumbers = []

  // Proses setiap peserta
  for (let participant of participants) {
      let number = participant.id.replace('@s.whatsapp.net', '').replace(/[^0-9]/g, '')
      if (number.length > 0 && !owner.includes(number)) {
          owner.push(number)
          addedNumbers.push(number)
      } else if (owner.includes(number)) {
          existingNumbers.push(number)
      }
  }

  // Simpan daftar premium yang telah diperbarui
  try {
      fs.writeFileSync('./premium.json', JSON.stringify(owner, null, 2))
  } catch (err) {
      console.error('Error writing premium.json:', err)
      return m.reply('*Gagal Menyimpan Daftar Premium.*')
  }

  // Kirimkan pesan balasan
  if (addedNumbers.length > 0) {
      m.reply(`*Nomor Berikut Telah Ditambahkan Ke Daftar Premium:*\n\n${addedNumbers.join('\n')}`)
  }
  if (existingNumbers.length > 0) {
      m.reply(`*Nomor Berikut Sudah Ada Di Daftar Premium:*\n\n${existingNumbers.join('\n')}`)
  }
}
break


case 'delallprem': {
    if (!isCreator) return m.reply(mess.owner)
    if (!m.isGroup) return m.reply(`Perintah ini hanya dapat digunakan di dalam grup.`)

    // Mengambil metadata grup
    let groupMetadata;
    try {
        groupMetadata = await lenwy.groupMetadata(from)
    } catch (e) {
        console.error('Error fetching group metadata:', e)
      return m.reply('*Gagal Mengambil Metadata Grup.*')
    }

    // Mendapatkan peserta grup
    let participants;
    try {
        participants = groupMetadata.participants;
    } catch (e) {
        console.error('Error fetching group participants:', e)
      return m.reply('*Gagal Mengambil Daftar Peserta Grup.*')
    }

    if (!participants || participants.length === 0) return m.reply('Tidak ada peserta dalam grup.')

    // Membaca daftar premium dari file
    let owner;
    try {
        owner = JSON.parse(fs.readFileSync('./premium.json', 'utf8'))
    } catch (err) {
        console.error('Error reading premium.json:', err)
      return m.reply('*Gagal Memuat Daftar Premium.*')
    }

    let removedNumbers = []
    let notFoundNumbers = []

    // Proses setiap peserta
    for (let participant of participants) {
        let number = participant.id.replace('@s.whatsapp.net', '').replace(/[^0-9]/g, '')
        if (number.length > 0) {
            let index = owner.indexOf(number)
            if (index !== -1) {
                owner.splice(index, 1)
                removedNumbers.push(number)
            } else {
                notFoundNumbers.push(number)
            }
        }
    }

    // Simpan daftar premium yang telah diperbarui
    try {
        fs.writeFileSync('./premium.json', JSON.stringify(owner, null, 2))
    } catch (err) {
        console.error('Error writing premium.json:', err)
      return m.reply('*Gagal Menyimpan Daftar Premium.*')
    }

    // Kirimkan pesan balasan
    if (removedNumbers.length > 0) {
        m.reply(`*Nomor Berikut Telah Dihapus Dari Daftar Premium.*\n\n${removedNumbers.join('\n')}`)
    }
    if (notFoundNumbers.length > 0) {
        m.reply(`*Nomor Berikut Tidak Ditemukan Di Daftar Premium:*\n\n${notFoundNumbers.join('\n')}`)
    }
}
break


case 'addprem': {
  if (!isCreator) return m.reply(mess.owner)
  if (!args[0]) return m.reply('*Mana Nomornya?*')

  // Ambil semua nomor dari args
  let numbers = text.split('|')[0].split(/\s+/).map(number => number.replace(/[^0-9]/g, ''))

  if (numbers.length === 0) return m.reply('*Tidak Ada Nomor Yang Diberikan.*')

  let invalidNumbers = []
  let validNumbers = []

  // Periksa setiap nomor
  for (let number of numbers) {
    if (number.length === 0) continue;

    let ceknye = await lenwy.onWhatsApp(number + '@s.whatsapp.net')
    if (ceknye.length === 0) {
      invalidNumbers.push(number)
    } else {
      validNumbers.push(number)
    }
  }

  // Tambahkan nomor valid ke daftar premium
  if (validNumbers.length > 0) {
    let owner = JSON.parse(fs.readFileSync('./premium.json', 'utf8'))
    owner = Array.from(new Set([...owner, ...validNumbers])) // Menghindari duplikasi
    fs.writeFileSync('./premium.json', JSON.stringify(owner, null, 2))

    // Perbarui limit menjadi Infinity untuk nomor premium
    let user = global.db.data.users;
    validNumbers.forEach(number => {
      if (!user[number]) {
        user[number] = {}; // Pastikan data pengguna ada
      }
      user[number].limit = Infinity; // Set limit ke Infinity
    })

    m.reply(`Nomor ${validNumbers.join(', ')} Ditambahkan Kedalam Daftar Premium dan Limitnya Diatur ke Infinity.`)
  }

  // Kirimkan pesan jika ada nomor yang tidak valid
  if (invalidNumbers.length > 0) {
    m.reply(`Nomor berikut tidak valid: ${invalidNumbers.join(', ')}`)
  }
}
break


  
case 'delprem': {
    if (!isCreator) return m.reply(mess.owner)
    if (!args[0]) return m.reply(`*Mana Nomornya?*`)

    // Ambil semua nomor dari args
    let numbers = text.split('|')[0].split(/\s+/).map(number => number.replace(/[^0-9]/g, ''))

    if (numbers.length === 0) return m.reply(`*Tidak Ada Nomor Yang Diberikan.*`)

    let removedNumbers = []
    let notFoundNumbers = []

    // Baca daftar premium dari file
    let owner = JSON.parse(fs.readFileSync('./premium.json', 'utf8'))

    // Periksa setiap nomor
    for (let number of numbers) {
        if (number.length === 0) continue;

        let index = owner.indexOf(number)
        if (index !== -1) {
            owner.splice(index, 1)
            removedNumbers.push(number)
        } else {
            notFoundNumbers.push(number)
        }
    }

    // Simpan daftar premium yang telah diperbarui
    fs.writeFileSync('./premium.json', JSON.stringify(owner, null, 2))

    // Kirimkan pesan balasan
    if (removedNumbers.length > 0) {
        m.reply(`Nomor ${removedNumbers.join(', ')} telah dihapus dari daftar premium.`)
    }
    if (notFoundNumbers.length > 0) {
        m.reply(`Nomor berikut tidak ditemukan dalam daftar premium: ${notFoundNumbers.join(', ')}`)
    }
}
break

  
case 'listprem': {
    if (!isCreator) return m.reply(mess.owner)

    // Membaca data premium dari file
    let owner;
    try {
        owner = JSON.parse(fs.readFileSync('./premium.json', 'utf8'))
    } catch (err) {
        console.error('Error reading premium.json:', err)
        return m.reply('*Gagal Memuat Daftar Premium.*')
    }

    if (owner.length === 0) return m.reply('*Daftar Premium Masih Kosong.*')

    let teksooo = 'List Premium\n';
    for (let i of owner) {
        teksooo += `✉️ ${i}\n`
    }
    teksooo += `\nTotal: ${owner.length}`;

    // Kirimkan pesan daftar premium
    lenwy.sendMessage(from, { text: teksooo.trim() }, { quoted: m })
}
break

  
//===============================================================================================================================================================//
case 'banall': {
    if (!isCreator) return m.reply(mess.owner)
    if (!m.isGroup) return m.reply('*Perintah ini hanya bisa digunakan dalam grup.*')

    // Ambil metadata grup
    let groupMetadata;
    try {
        groupMetadata = await lenwy.groupMetadata(m.chat)
    } catch (err) {
        console.error('Error fetching group metadata:', err)
        return m.reply('*Gagal mengambil metadata grup.*')
    }

    // Ambil daftar peserta grup
    let participants = groupMetadata.participants || []
    
    // Baca daftar banned dari file
    let banned;
    try {
        banned = JSON.parse(fs.readFileSync('./banned.json', 'utf8'))
    } catch (err) {
        console.error('Error reading banned.json:', err)
        banned = []
    }

    // Menyimpan nomor yang berhasil dibanned dan yang sudah ada di daftar banned
    let bannedNumbers = []
    let alreadyBannedNumbers = []

    // Proses setiap peserta grup
    for (let participant of participants) {
        let orgnye = participant.id;
        if (banned.includes(orgnye)) {
            alreadyBannedNumbers.push(orgnye)
        } else {
            banned.push(orgnye)
            bannedNumbers.push(orgnye)
        }
    }

    // Simpan daftar banned yang telah diperbarui
    try {
        fs.writeFileSync('./banned.json', JSON.stringify(banned, null, 2))
    } catch (err) {
        console.error('Error writing banned.json:', err)
        return m.reply('*Gagal menyimpan daftar banned.*')
    }

    // Kirimkan pesan balasan
    if (bannedNumbers.length > 0) {
        m.reply(`*Nomor Berikut Telah Dibanned:*\n\n${bannedNumbers.join('\n')}`)
    }
    if (alreadyBannedNumbers.length > 0) {
        m.reply(`*Nomor Berikut Sudah Ada Dalam Daftar Banned:*\n\n${alreadyBannedNumbers.join('\n')}`)
    }
}
break


case 'delbanall': {
    if (!isCreator) return m.reply(mess.owner)
    if (!m.isGroup) return m.reply('*Perintah ini hanya bisa digunakan dalam grup.*')

    // Ambil metadata grup
    let groupMetadata;
    try {
        groupMetadata = await lenwy.groupMetadata(m.chat)
    } catch (err) {
        console.error('Error fetching group metadata:', err)
        return m.reply('*Gagal mengambil metadata grup.*')
    }

    // Ambil daftar peserta grup
    let participants = groupMetadata.participants || []
    
    // Baca daftar banned dari file
    let banned;
    try {
        banned = JSON.parse(fs.readFileSync('./banned.json', 'utf8'))
    } catch (err) {
        console.error('Error reading banned.json:', err)
        banned = []
    }

    // Menyimpan nomor yang berhasil dihapus dan yang tidak ditemukan dalam daftar banned
    let removedNumbers = []
    let notFoundNumbers = []

    // Proses setiap peserta grup
    for (let participant of participants) {
        let orgnye = participant.id;
        const index = banned.indexOf(orgnye)
        if (index !== -1) {
            banned.splice(index, 1) // Menghapus nomor dari daftar banned
            removedNumbers.push(orgnye)
        } else {
            notFoundNumbers.push(orgnye) // Nomor tidak ditemukan dalam daftar banned
        }
    }

    // Simpan daftar banned yang telah diperbarui
    try {
        fs.writeFileSync('./banned.json', JSON.stringify(banned, null, 2))
    } catch (err) {
        console.error('Error writing banned.json:', err)
        return m.reply('*Gagal menyimpan daftar banned.*')
    }

    // Kirimkan pesan balasan
    if (removedNumbers.length > 0) {
        m.reply(`*Nomor Berikut Telah Dihapus dari Daftar Banned:*\n\n${removedNumbers.join('\n')}`)
    }
    if (notFoundNumbers.length > 0) {
        m.reply(`*Nomor Berikut Tidak Ditemukan dalam Daftar Banned:*\n\n${notFoundNumbers.join('\n')}`)
    }
}
break

case 'ban': {
    if (!isCreator) return m.reply(mess.owner)
    // Mendapatkan ID yang ditandai
    let mentionedJids = m.mentionedJidList || []
    
    // Jika tidak ada yang ditandai, ambil nomor dari args
    if (mentionedJids.length === 0) {
        if (!args[0]) return m.reply(`*Bukan Gitu Loh*\n\n> *Contoh : ${command} @tag1 @tag2 @tag3*`)
        // Proses args jika tidak ada yang ditandai
        mentionedJids = args.map(number => number.replace(/[^0-9]/g, '') + "@s.whatsapp.net")
    }
    
    // Baca daftar banned dari file
    let banned;
    try {
        banned = JSON.parse(fs.readFileSync('./banned.json', 'utf8'))
    } catch (err) {
        console.error('Error reading banned.json:', err)
        banned = []
    }

    // Menyimpan nomor yang berhasil dibanned dan yang sudah ada di daftar banned
    let bannedNumbers = []
    let alreadyBannedNumbers = []

    // Proses setiap ID
    for (let orgnye of mentionedJids) {
        if (banned.includes(orgnye)) {
            alreadyBannedNumbers.push(orgnye)
        } else {
            banned.push(orgnye)
            bannedNumbers.push(orgnye)
        }
    }

    // Simpan daftar banned yang telah diperbarui
    try {
        fs.writeFileSync('./banned.json', JSON.stringify(banned, null, 2))
    } catch (err) {
        console.error('Error writing banned.json:', err)
        return m.reply('*Gagal Menyimpan Daftar Banned.*')
    }

    // Kirimkan pesan balasan
    if (bannedNumbers.length > 0) {
        m.reply(`*Nomor Telah Dibanned:*\n\n${bannedNumbers.join('\n')}`)
    }
    if (alreadyBannedNumbers.length > 0) {
        m.reply(`*Nomor Berikut Sudah Ada Dalam Daftar Banned:*\n\n${alreadyBannedNumbers.join('\n')}`)
    }
}
break


case 'delban': {
    if (!isCreator) return m.reply(mess.owner)

    // Mendapatkan ID yang ditandai
    let mentionedJids = m.mentionedJidList || []
    
    // Jika tidak ada yang ditandai, ambil nomor dari args
    if (mentionedJids.length === 0) {
        if (!args[0]) return m.reply(`*Bukan Gitu Loh*\n\n> *Contoh : ${command} @tag1 @tag2 @tag3*`)
        // Proses args jika tidak ada yang ditandai
        mentionedJids = args.map(number => number.replace(/[^0-9]/g, '') + "@s.whatsapp.net")
    }
    
    // Baca daftar banned dari file
    let banned;
    try {
        banned = JSON.parse(fs.readFileSync('./banned.json', 'utf8'))
    } catch (err) {
        console.error('Error reading banned.json:', err)
        banned = []
    }

    // Menyimpan nomor yang berhasil dihapus dan yang tidak ditemukan
    let removedNumbers = []
    let notFoundNumbers = []

    // Proses setiap ID
    for (let orgnye of mentionedJids) {
        const index = banned.indexOf(orgnye)
        if (index !== -1) {
            banned.splice(index, 1) // Menghapus nomor dari daftar banned
            removedNumbers.push(orgnye)
        } else {
            notFoundNumbers.push(orgnye) // Nomor tidak ditemukan dalam daftar banned
        }
    }

    // Simpan daftar banned yang telah diperbarui
    try {
        fs.writeFileSync('./banned.json', JSON.stringify(banned, null, 2))
    } catch (err) {
        console.error('Error writing banned.json:', err)
        return m.reply('*Gagal Menyimpan Daftar Banned.*')
    }

    // Kirimkan pesan balasan
    if (removedNumbers.length > 0) {
        m.reply(`*Nomor Telah Dihapus dari Daftar Banned:*\n\n${removedNumbers.join('\n')}`)
    }
    if (notFoundNumbers.length > 0) {
        m.reply(`*Nomor Berikut Tidak Ditemukan dalam Daftar Banned:*\n\n${notFoundNumbers.join('\n')}`)
    }
}
break


case 'listban': {
    if (!isCreator) return m.reply(mess.owner)

    // Baca daftar banned dari file
    let banned;
    try {
        banned = JSON.parse(fs.readFileSync('./banned.json', 'utf8'))
    } catch (err) {
        console.error('Error reading banned.json:', err)
        return m.reply('*Gagal Membaca Daftar Banned.*')
    }

    // Buat pesan daftar banned
    let response = '*Daftar Banned:*\n\n';
    if (banned.length === 0) {
        response += '*Daftar Banned Kosong.*';
    } else {
        response += banned.map((number, index) => `${index + 1}. ${number}`).join('\n')
    }

    // Kirimkan pesan daftar banned
    m.reply(response)
}
break

  

//===============================================================================================================================================================//

  case 'owner':
  case 'creator':
  case 'developet': {
  try { 
    const contacts = author.map((number, i) => ({
      displayName: `Owner ${i + 1}`,
      vcard: `
BEGIN:VCARD
VERSION:3.0
N:Owner${i + 1}
FN:Owner ${i + 1}
TEL;type=CELL;type=VOICE;waid=${number}:${number}
ADR:;;Indonesia;;;;
END:VCARD`.trim()
    }));

    await lenwy.sendMessage(m.chat, {
      contacts: {
        displayName: `${contacts.length} Owner(s)`,
        contacts
      }
    }, { quoted: m });

    await lenwy.sendMessage(m.chat, { text: `𝘁𝘂𝗵 𝗸𝗼𝗻𝘁𝗮𝗸 𝗽𝗮𝗰𝗮𝗿𝗸𝘂` }, { quoted: m });

  } catch (err) {
    console.error('Error in owner/creator/developer command:', err);
    m.reply('⚠️ Terjadi kesalahan saat menampilkan kontak owner.');
  }
  break      
}
  /*case 'owner':
  case 'creator': 
  case 'owner2': {
 try {
 

 const contacts = author.map((number, i) => ({
 displayName: `Owner ${i + 1}`,
 vcard: `
BEGIN:VCARD
VERSION:3.0
N:Owner${i + 1}
FN:Owner ${i + 1}
TEL;type=CELL;type=VOICE;waid=${number}:${number}
ADR:;;Indonesia;;;;
END:VCARD`.trim()
 }));

 await lenwy.sendMessage(m.chat, {
 contacts: {
 displayName: `${contacts.length} Owner(s)`,
 contacts
 }
 }, { quoted: m });

 await lenwy.sendMessage(m.chat, { text: `Tuh Kontak Ownerku` }, { quoted: m });

 } catch (err) {
 console.error('Error in owner/creator/developer command:', err);
 m.reply('⚠️ Terjadi kesalahan saat menampilkan kontak owner.');
 }
}
 break*/
  
  case 'limit': {
  m.reply('Sisa Limit Kamu : ' + (db.data.users[m.sender].limit))
  }
  break
  
  case 'resetlimit': {
  if (!isCreator) return m.reply(mess.owner)
  let list = Object.entries(global.db.data.users)
    let lim = !args || !args[0] ? 50 : isNumber(args[0]) ? parseInt(args[0]) : 50
    lim = Math.max(1, lim)
    list.map(([user, data], i) => (Number(data.limit = lim)))
      lenwy.sendMessage(m.chat, {text: `Limit Direset ${lim} / User`}, { quoted: m })
      }
  break
  
  case 'addlimit': {
  if (!isCreator) return m.reply(mess.owner)
  if (!text) return m.reply('Masukkan Jumlah Limit Yang Akan Diberi')
      let who
      if (m.isGroup) who = m.mentionedJid[0]
      else who = m.chat
      if (!who) m.reply('Tag Orangnya')
      let txt = text.replace('@' + who.split`@`[0], '').trim()
      if (isNaN(txt)) m.reply('Hanya Angka')
      let poin = parseInt(txt)
      let limit = poin
      if (limit < 1) m.reply( 'Minimal 1')
      let user = global.db.data.users
      user[who].limit += poin
      if (limit > 9999999) return m.reply('Kebanyakan')
      if (txt.toLowerCase() === 'infinity') {
        limit = Infinity;
      } if (!user[who]) {
      user[who] = {}; // Pastikan data pengguna ada
  }
  user[who].limit = limit; // Set limit ke Infinity atau jumlah yang ditentukan
// Kirim pesan ke pengguna
let limitText = limit === Infinity ? 'Infinity' : `+${limit}`;
lenwy.sendMessage(m.chat, {
  text: `🎁 *Selamat @${who.split`@`[0]}. Kamu Mendapatkan ${limitText} Limit!*`
}, { quoted: m })
}
break

case 'hdvid':
case 'hdvidio':
case 'hdvideo': {
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? lenwy.user.jid : m.sender;
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';

  if (!mime) return m.reply(`Videonya mana?`)
  if (!/video/.test(mime)) {
    return m.reply(`Kirim/kutip video dengan caption ${prefix + command}`)
  }

  LenwyLD()
  await sleep(1500)
  let media = await q.download()
let video = Math.floor(Math.random() * 100) + 1;

  const inputFilePath = `./input${video}.mp4`;
  fs.writeFileSync(inputFilePath, media)

  const outputFilePath = `./output${video}.mp4`;
  const dir = './';
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir)
  }

  const ffmpegCommand = `ffmpeg -i ${inputFilePath} -vf "hqdn3d=1.5:1.5:6:6,unsharp=3:3:0.6,eq=brightness=0.05:contrast=1.1:saturation=1.05" -vcodec libx264 -preset slower -crf 22 -acodec copy -movflags +faststart ${outputFilePath}`;

  exec(ffmpegCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    console.error(`stderr: ${stderr}`)
    lenwy.sendMessage(m.chat, { caption: `_Video berhasil ditingkatkan kualitasnya`, video: { url: outputFilePath } }, { quoted: m })
    fs.unlinkSync(inputFilePath)
  })
}
break
        
        
        
        
        
       
        
        case 'teshd': {
  if (!quoted) return m.reply(`Fotonya Mana?`)
  if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)

  await LenwyLD()
  await sleep(1500)
  try {
    let media = await lenwy.downloadAndSaveMediaMessage(quoted)
    let anu = await shannzCdn(media)
    let result = (util.format(anu))
    const proses = await (await fetch(`https://virtual-dimension.xyz/api/creator/upscale?url=${result}&api_key=031020`)).json()
    let imge = proses.data;
    await lenwy.sendMessage(m.chat, { image: { url: imge }, caption: 'SUCCESS ✅' }, { quoted: m })
  } catch (e) {
    return m.reply('Error, Coba Pakai hd2')
  }
}
break
        
   case 'pinterest2': ;    
        
        
        case 'ultrahd':{
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
await lenwy.sendMessage(m.chat, { react: { text: "⏱️",key: m.key}})
  m.reply("wait") 
        try{
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
  let anu = await uploader60Minute(media);
    let src = anu.result.url   
    let result = (util.format(src))
const result2 = await (await fetch(`https://api.elrayyxml.web.id/api/tools/remini?url=${result}&resolusi=4&apikey=WKt4qrnl`)).json();
await lenwy.sendMessage(m.chat,{image:{url:result2.url},caption:'*☘️ Done*'},{quoted:m})
await lenwy.sendMessage(m.chat, {react:{text:'☑️', key:m.key}})
} catch (error) {
console.error(error);
    m.reply('*Error!*') 
}
}
break
        
  case 'ocr': {
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)
try{
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let result = (util.format(anu))
const proses = await (await fetch(`
  'https://api.ootaizumi.web.id/tools/ocr?imageUrl=${result}`)).json()
let teks = proses.result
await lenwy.sendMessage(m.chat, { text: `Hasilnya: ${teks}` }, { quoted: m})
} catch (error) {
console.error(error)
m.reply('Error')
}
}
break;      
    
case "nulis": {
  if (!quoted) return m.reply('Masukkan teks');
  await lenwy.sendMessage(m.chat, {
    image: { url: 'https://api.elrayyxml.web.id/api/maker/nulis?text=' + encodeURIComponent(args.join(' ')) }
  }, { quoted: m });
}

break;






  
case 'qc': {
if (!q) return m.reply(`*Contoh : Qc White Lenwy*\n🎁 *Kode Warna Ketik : Qckode*`)
if (text.length > 400) return m.reply(`*Maksimal 400 Karakter*`)
const isToxic = /(ewe|bangsad|mmk|koncol|kontol|k0ntl|k0ntol|kont0l|k0nt0l|kontoI|puki|kojtol|kintil|momok|nigga|ajg|ewean|yatim|anjing|kontol|memek|bangsat|babi|gblk|goblok|goblog|kntl|pepek|ppk|ngentod|ngentd|ngntd|kentod|kntd|bgst|anjg|anj|fuck|hitam|ireng|jawir|gay|asw|ktl|ngentot|ngewe|bokep|bkp|lonte|lont|bh|perawan|prawan|tolol|tlol|itil|tobrut|tobrud|tbrut|tbrud|njir|jir|anjir)/i;
const Lenwyguard = isToxic.exec(m.text)
if (Lenwyguard) return m.reply('Melarang Penggunaan Bahasa Kotor Pada Fitur Qc') 
let [color, ...message] = text.split(' ')
message = message.join(' ')
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break
case 'blue':
backgroundColor = '#6cace4';
break
case 'red':
backgroundColor = '#f44336';
break
case 'green':
backgroundColor = '#4caf50';
break
case 'yellow':
backgroundColor = '#ffeb3b';
break
case 'purple':
backgroundColor = '#9c27b0';
break
case 'darkblue':
backgroundColor = '#0d47a1';
break
case 'lightblue':
backgroundColor = '#03a9f4'; 
break
case 'ash':
backgroundColor = '#9e9e9e';
break
case 'orange':
backgroundColor = '#ff9800';
break
case 'black':
backgroundColor = '#000000';
break
case 'white':
backgroundColor = '#ffffff';
break
case 'teal':
backgroundColor = '#008080';
break
case 'lightpink':
backgroundColor = '#FFC0CB';
break
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break 
case 'magenta':
backgroundColor = '#FF00FF'; 
break 
case 'tan':
backgroundColor = '#D2B48C'; 
break
case 'wheat':
backgroundColor = '#F5DEB3'; 
break
case 'deeppink':
backgroundColor = '#FF1493'; 
break 
case 'fire':
backgroundColor = '#B22222';
break
case 'skyblue':
backgroundColor = '#00BFFF';
break 
case 'orange':
backgroundColor = '#FF7F50';
break
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break 
case 'darkred':
backgroundColor = '#8B0000'; 
break 
case 'orangered':
backgroundColor = '#FF4500'; 
break 
case 'cyan':
backgroundColor = '#48D1CC'; 
break 
case 'violet':
backgroundColor = '#BA55D3'; 
break 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break 
case 'darkgreen':
backgroundColor = '#008000'; 
break 
case 'navyblue':
backgroundColor = '#191970'; 
break 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break
case 'darkishred':
backgroundColor = '#DC143C'; 
break
case 'goldenrod':
backgroundColor = '#DAA520'; 
break
case 'darkishgray':
backgroundColor = '#696969'; 
break
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break
case 'gold':
backgroundColor = '#FFD700'; 
break
case 'silver':
backgroundColor = '#C0C0C0'; 
break
default:
return m.reply('☘ Kode Warna Tidak Ditemukan\n🎁 Contoh : Qc White Lenwy\n⚠ Tolong Gunakan Huruf Kecil Pada Kode Warna')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await lenwy.profilePictureUrl(m.sender, "image").catch(() => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg'),
}
},
text: message,
replyMessage: {},
},
],
};
let apiUrl = `https://api.autoresbot.com/api/maker/qc?text=${q}&apikey=85f96e33aca5b3b69bc062e4`

let response = await fetch(apiUrl)
let data = await response.data()
let imageUrl = data.result.url;

/*let res = await fetch(url);
if (!res.ok) throw 'Gagal ambil gambar QC.';
let buffer = await res.buffer();
/*let buffer = Buffer.from(response.data)

lenwy.sendImageAsSticker(m.chat, {image: buffer}, m, { packname: `${global.packname}`, author: `${global.author}`}, {quoted: m})
}
break
let buffer = Buffer.from(response.data.result.image)*/
lenwy.sendImageAsSticker(m.chat, { image : { url: imageUrl }}, { packname: `${global.packname}`, author: `${global.author}`}, {quoted : m})
}
break


case 'qckode': {
m.reply(`📦 Kode Warna Qc
 *⨠ Pink*
 *⨠ Blue*
 *⨠ Red*
 *⨠ Green*
 *⨠ Yellow*
 *⨠ Purple*
 *⨠ Darkblue*
 *⨠ Lightblue*
 *⨠ Ash*
 *⨠ Orange*
 *⨠ Black*
 *⨠ White*
 *⨠ Teal*
 *⨠ Lightpink*
 *⨠ Chocolate*
 *⨠ Salmon*
 *⨠ Magenta*
 *⨠ Tan*
 *⨠ Wheat*
 *⨠ Deeppink*
 *⨠ Fire*
 *⨠ Skyblue*
 *⨠ Safron*
 *⨠ Brightskyblue*
 *⨠ Hotpink*
 *⨠ Lightskyblue*
 *⨠ Seagreen*
 *⨠ Darkred*
 *⨠ Orangered*
 *⨠ Cyan*
 *⨠ Violet*
 *⨠ Mossgreen*
 *⨠ Darkgreen*
 *⨠ Navyblue*
 *⨠ Darkorange*
 *⨠ Darkpurple*
 *⨠ Fuchsia*
 *⨠ Darkmagenta*
 *⨠ Darkgray*
 *⨠ Peachpuff*
 *⨠ Blackishgreen*
 *⨠ Darkishred*
 *⨠ Goldenrod*
 *⨠ Darkishgray*
 *⨠ Darkishpurple*
 *⨠ Gold*
 *⨠ Silver*

⚠️ Kalo Ada Error Bisa Chat Owner Ya
`)
}
break

case 'img2txt':
if (!/image/.test(mime)) return m.reply(`Gambarnya Mana?`)
if (/image/.test(mime)) {
LenwyLD()
await sleep(2500)
let mee = await lenwy.downloadAndSaveMediaMessage(quoted)
let mem = await uploader60Minute(mee)
let len = await (await fetch(`https://itzpire.com/tools/img2text?url=${mem}`)).json()
  LenwyLD()
  await sleep(3000)
let result = len.result
lenwy.sendMessage(m.chat,{image:{url: mem}, caption:`${result}`},{quoted: m})
}
break

case 'txt2img':
case 'texttoimage':
case 'tekstoimage': 
case 'text2image':
case 'teks2image':
case 'texttoimage':
case 'tekstoimage': 
case 'text2image':
case 'teks2image':
case 'texttoimage':
case 'tekstoimage': 
case 'text2image':
case 'teks2image':
case 'txt2image': {
 if (!q) return m.reply(`*Mau Gambar Apa?*`)

 // Kirim reaksi dan pesan tunggu
 LenwyLD
 await sleep(3000)


 try {
 // Buat URL request dengan prompt dari pengguna
 const apiUrl = `https://api.autoresbot.com/api/textpro/pornhub?text=${q}&apikey=85f96e33aca5b3b69bc062e4`;

 // Ambil hasil dari API
 let response = await fetch(apiUrl)
 let json = await response.json()

 // Periksa status API
 if (json.status && json.code === 200) {
 let imageUrl = json.result.url;

 // Kirim gambar hasil ke chat
 lenwy.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Gambar untuk prompt: "${q}"` }, { quoted: m })
 } else {
 m.reply(`Gagal mendapatkan gambar. Silakan coba lagi.`)
 }
 } catch (error) {
 console.error('Error:', error)
 m.reply(`Terjadi kesalahan saat memproses permintaan.`)
 }
}
break

case 'geminiimg': {
if (!quoted) return m.reply('Mana Gambarnya?')
m.reply('Sabar Yaa')
if (!/image/.test(mime)) return m.reply("Hanya Support Gambar")
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let { data } = await axios.get("https://gmni.vercel.app/api/img?imageUrl="+ anu +"&prompt=" + text)
m.reply(data.text)
}
break
        
 case 'playstore':
case 'searchplay':
case 'ps':
case 'sps': {
  if (!quoted) return m.reply('Masukkan nama aplikasi yang ingin dicari!\nContoh: .playstore Genshin Impact');

  try {
    const url = `${global.lenwy}/search/playstore?query=${encodeURIComponent(text)}`;
    const { data } = await axios.get(url);

    if (data.status !== 200 || !data.result || !data.result.apps) {
      return m.reply('Tidak ditemukan hasil untuk pencarian tersebut.');
    }

    const results = data.result.apps.slice(0, 5); // ambil 5 teratas
    for (let app of results) {
      let caption = `📱 *${app.appName}*\n`;
      caption += `👨‍💻 Developer: ${app.developer}\n`;
      caption += `⭐ Rating: ${app.rating}\n`;
      caption += `💰 Harga: ${app.price}\n`;
      caption += `🔗 Link: ${app.appLink}`;

      await lenwy.sendMessage(m.chat, {
        image: { url: app.imageUrl },
        caption
      }, { quoted: m });
    }
  } catch (err) {
    console.error(err);
    m.reply('Gagal mengambil data dari Play Store.');
  }
   }
   
  break;      
        
  case 'mlbb': {
    if (!quoted) return m.reply(`Masukkan nama hero MLBB!\nContoh: .mlbb ling`)
    try {
        const res = await fetch(`${global.fastres}/character/mlbb?name=${encodeURIComponent(q)}`)
        const json = await res.json()

        if (json?.status !== 200 || !json.result) {
            return m.reply('Hero tidak ditemukan.')
        }

        const hero = json.result
        const caption = `
🏷️ *Nama:* ${hero.name}
📖 *Cerita:* ${hero.story}
🧩 *Role:* ${hero.role.map(r => r.name).filter(r => r !== 'No role').join(', ') || 'Tidak diketahui'}
🛡️ *Lane:* ${hero.lane.map(l => l.name).filter(l => l !== 'No lane').join(', ') || 'Tidak diketahui'}
⚔️ *Durability:* ${hero.ability.durability}
🔥 *Offense:* ${hero.ability.offense}
✨ *Ability Effects:* ${hero.ability.ability_effects}
🎮 *Difficulty:* ${hero.ability.difficulty}
🌟 *Spesial:* ${hero.speciality.join(', ') || 'Tidak ada'}

🧠 *Skill:* ${hero.skills[0]?.name || '-'}
📜 *Deskripsi:* ${hero.skills[0]?.desc?.split('\n').join(' ') || '-'}
        `.trim()

        await lenwy.sendMessage(m.chat, {
            image: { url: hero.media.icon },
            caption
        }, { quoted: m })

    } catch (err) {
        console.error(err)
        m.reply('Terjadi kesalahan saat mengambil data MLBB.')
    }
}
break
        
  case 'playch': {
      if (!isAdmins) return m.reply (`Khusus Admin Kocak`) 
    if (!quoted) return m.reply(`Contoh:\n.playch https://youtube.com/watch?v=xxx\n.playch sempurna`);

    try {
      let url, title, author, audioUrl, thumbnail, videoUrl;

      if (/^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\//i.test(text)) {
        const { data } = await axios.get(`https://cloudkutube.eu/api/yta?url=${encodeURIComponent(text)}`);
        if (data.status !== "success") return m.reply("Gagal ambil audio.");
        ({ title, author, url: audioUrl, thumbnail } = data.result);
        videoUrl = text;
      } else {
        const search = await axios.get(`https://flowfalcon.dpdns.org/search/youtube?q=${encodeURIComponent(text)}`);
        const list = search.data.result;
        if (!list || !list.length) return m.reply("Video tidak ditemukan.");
        const video = list[0];
        const { data } = await axios.get(`https://cloudkutube.eu/api/yta?url=${encodeURIComponent(video.link)}`);
        if (data.status !== "success") return m.reply("Gagal ambil audio.");
        ({ title, author, url: audioUrl, thumbnail } = data.result);
        videoUrl = video.link;
      }

      const idsal = "120363419015131462@newsletter";
      const ctx = {
        forwardingScore: 1,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: idsal,
          serverMessageId: Math.floor(Math.random() * 999999),
          newsletterName: "risa Bot - Playing Music"
        },
        externalAdReply: {
          title: title,
          body: `By ${author}`,
          thumbnailUrl: thumbnail,
          mediaType: 1,
          sourceUrl: videoUrl
        }
      };

      const audioRes = await axios.get(audioUrl, { responseType: "arraybuffer" });
      const audioBuffer = Buffer.from(audioRes.data, "binary");

      await lenwy.sendMessage(idsal, {
        audio: audioBuffer,
        mimetype: "audio/mp4",
        ptt: true,
        contextInfo: ctx
      });

      m.reply(`✔ Sukses kirim *${title}* ke channel.`);
    } catch (err) {
      console.error(err);
      m.reply("Gagal kirim audio ke channel.");
    }
  }
  
break      
        

case 'lirik': {
  if (!quoted) return m.reply('Masukkan judul lagunya, contoh: .lirik aku memang bukan cinta pertamanya')

  try {
    const axios = require('axios')
    const query = encodeURIComponent(q)
    const res = await axios.get(`https://nirkyy-dev.hf.space/api/v1/lirik?q=${query}`)
    const { success, data } = res.data

    if (!success || !data?.lyrics) return m.reply('Lirik tidak ditemukan.')

    let teks = `🎵 *Lirik Lagu*\n\n${data.lyrics}`
    m.reply(teks)
  } catch (e) {
    console.error(e)
    m.reply('Terjadi kesalahan saat mengambil lirik.')
  }
    }
  break


case 'linkgc':
case 'linkgroup':
case 'linkgrupgc' :
case 'linkgcgrup' :
case 'linkgroupgc':
case 'linkgcgroup':
case 'linkgrup':
case 'link gc': {
 if (!m.isGroup) return m.reply(mess.group)
 if (!isBotAdmins) return m.reply(mess.botAdmin)
 
 try {
 // Ambil metadata grup
 const groupMetadata = await lenwy.groupMetadata(from)

 // Ambil link undangan grup
 let response = await lenwy.groupInviteCode(from)

 // Kirim pesan dengan link dan ID grup
 const message = `*Nama Group :* ${groupMetadata.subject}\n\n *Link Group :* https://chat.whatsapp.com/${response}`;
 lenwy.sendText(from, message, m, { detectLink: true })
 } catch (error) {
 console.error('Error while fetching group info:', error)
 m.reply('Terjadi kesalahan saat mengambil informasi grup.')
 }
}
break

case 'resetlinkgc': {
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)

  try {
      let newLink = await revokeGc(m)
      m.reply(`*Link Grup Berhasil Di Reset*\n\n*Menjadi:* https://chat.whatsapp.com/${newLink}`)
      
  } catch (err) {
      console.error('Error saat mereset link grup:', err)
      m.reply('Terjadi kesalahan saat mereset link grup.')
  }
}
break

case 'sendlinkgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6288971765641`)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6288971765641`)
const phoneNumber = text.split("|")[0]
if (!phoneNumber.startsWith('628')) {
return m.reply('Gini Loh\n\n> sendlinkgc 628xx')
}
try {
const bnnd = phoneNumber + '@s.whatsapp.net'
let response = await lenwy.groupInviteCode(from)
await lenwy.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, len, { detectLink: true })
m.reply('Selesai')
} catch (e) {
console.log(e)
m.reply('Gini Loh\n\n> sendlinkgc 628xx')
}
}
break

case 'add':
case 'addmember': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
var teks =  m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var cek = await lenwy.onWhatsApp(`${teks.split("@")[0]}`)
if (cek.length < 1) return m.reply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
var a = await lenwy.groupParticipantsUpdate(m.chat, [teks], 'add')
if (a[0].status == 200) lenwy.sendMessage(m.chat, {text: `Berhasil Menambahkan @${teks.split("@")[0]} Kedalam Grup Ini`, mentions: [`${teks}`]}, {quoted: m}).catch((err) => m.reply(err.toString()))
if (a[0].status == 408) lenwy.sendMessage(m.chat, {text: `Gagal Menambahkan @${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`, mentions: [`${teks}`]}, {quoted: m}).catch((err) => m.reply(err.toString()))
if (a[0].status == 409) lenwy.sendMessage(m.chat, {text: `@${teks.split("@")[0]} Sudah Ada Di Dalam Grup Ini!`, mentions: [`${teks}`]}, {quoted: m}).catch((err) => m.reply(err.toString()))
if (a[0].status == 403) lenwy.sendMessage(m.chat, {text: `Gagal Menambahkan @${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`, mentions: [`${teks}`]}, {quoted: m}).catch((err) => m.reply(err.toString()))
}
break

case 'dor':
case 'kick': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (text || m.quoted) {
try {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => lenwy.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => m.reply(err.toString()))
} catch (e) {
  return m.reply(e)
}
} else {
return m.reply(`tag atau @user`)
}
}
break

case 'promote': {
if (!q) return m.reply(`tag orangnya/replay chat dengan caption .${command}`);
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.groupParticipantsUpdate(from, [users], 'promote')
m.reply(mess.success)
}
break

case 'demote': {
if (!q) return m.reply(`tag orangnya/replay chat dengan caption .${command}`);
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.groupParticipantsUpdate(from, [users], 'demote')
m.reply(mess.success)
}
break

case 'demoteall':
if (!isCreator && !isAdmins) return
if (!m.isGroup) return
if (!isBotAdmins) return
LenwyLD()
var groupe = await lenwy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
lenwy.groupParticipantsUpdate(from, mems, 'demote')
m.reply(mess.success)
break

case 'promoteall':
if (!isCreator && !isAdmins) return
if (!m.isGroup) return
if (!isBotAdmins) return
LenwyLD()
var groupe = await lenwy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
lenwy.groupParticipantsUpdate(from, mems, 'promote')
m.reply(mess.success)
break


case 'setppbot': {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
var medis = await lenwy.downloadAndSaveMediaMessage(quoted, 'ppbot')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await lenwy.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(mess.success)
} else {
var memeg = await lenwy.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(mess.success)
}
}
break

case 'setppbotpanjang': {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Mana Fotonya?`)
if (/image/g.test(mime)) {
if (/webp/.test(mime)) return m.reply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
var medis = await lenwy.downloadAndSaveMediaMessage(quoted, 'ppbot')
var { img } = await generateProfilePicture(medis)
await lenwy.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(`Sukses`)
} else {
var memeg = await lenwy.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(mess.success)
}
}
break

case 'setppgroup':
case 'setppgrup':
case 'setppgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!/image/.test(mime)) return m.reply(`Mana Fotonya?`)

let media = await lenwy.downloadAndSaveMediaMessage(quoted)
await lenwy.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break

case 'setppgcpanjang': {
  const jimp = require('jimp')
  
  async function processImage(media) {
    const image = await jimp.read(media)
    const cropped = image.crop(0, 0, image.getWidth(), image.getHeight())
    return {
      img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp.MIME_JPEG),
      preview: await cropped.normalize().getBufferAsync(jimp.MIME_JPEG)
    };
  }

  let media = await lenwy.downloadAndSaveMediaMessage(quoted)
  var { img } = await processImage(media)

  await lenwy.query({
    tag: "iq",
    attrs: {
      to: m.chat,
      type: "set",
      xmlns: "w:profile:picture",
    },
    content: [
      {
        tag: "picture",
        attrs: { type: "image" },
        content: img,
      },
    ],
  })
  
  await lenwy.sendMessage(m.chat, {
    react: {
      text: "✅",
      key: m.key,
    },
  })
  
  m.reply(mess.success)
}
break
    
case 'hidetag':        
case 'h': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
const tek = text ? text : (m.quoted ? m.quoted.text : '')

// Hidetag with image
if (/image/.test(mime)) {
    try {
    const media = await lenwy.downloadAndSaveMediaMessage(quoted);
        
    await lenwy.sendMessage(from, { image: {url : media}, caption: tek, mentions: participants.map(a => a.id) }, { quoted: m });
  } catch(error){
    await lenwy.sendMessage(from, { react: { text: "⛔", key: m.key } });
  }
} else {
  lenwy.sendMessage(from, { text : tek , mentions: participants.map(a => a.id)}, {quoted:m})
}
}
break 

  case 'ping2': case 'uptime': {
 if (!isCreator) return m.reply(`khusus owner bot lol`)
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `
*🔴 INFORMATION SERVER VPS DAPPA.ID*

*• Platform :* ${nou.os.type()}
*• Total Ram :* ${formatp(os.totalmem())}
*• Total Disk :* ${tot.totalGb} GB
*• Total Cpu :* ${os.cpus().length} Core
*• Runtime Vps :* ${runtime(os.uptime())}

*🔵 INFORMATION BOT STORE DAPPA.ID*

*• Respon Speed :* ${latensi.toFixed(4)} detik
*• Runtime Bot :* ${runtime(process.uptime())}
`
await m.reply(respon)
}
break      
        
        
        
        
case 'setgrup':
case 'setgroup': {   
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (args[0] === 'close'){
let settextclose = global.db.data.chats[m.chat]?.text_close || `_*Group Berhasil Ditutup*_ 「 🔒 」`
await lenwy.groupSettingUpdate(from, 'announcement').then((res) => m.reply(settextclose)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
let settextopen = global.db.data.chats[m.chat]?.text_open || `_*Group Berhasil Dibuka*_ 「 🔓 」`
await lenwy.groupSettingUpdate(from, 'not_announcement').then((res) => m.reply(settextopen)).catch((err) => m.reply(jsonformat(err)))
} else {
lenwy.sendMessage(m.chat, { image: ppnyauser, caption: `*Silahkan Ketik*
${command} open
${command} close`}, { quoted: m }) 
}
}
break

case 'close': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  if (!isBotAdmins) return m.reply(mess.botAdmin)

  let settextclose = global.datagc[from].text_close
  let usertag = `@${m.sender.split("@")[0]}`

  if (settextclose.includes('@tagreply')) {
    if (m.quoted) {
      let userreply = `@${m.quoted.sender.split("@")[0]}`
      settextclose = settextclose.replace('@tagreply', userreply)
    } else {
      return m.reply(`Anda menggunakan @tagreply, anda harus mereply pesan seseorang untuk mengetag nya`)
    }
  }
  
  if (settextclose.includes('@groupname')) {
    settextclose = settextclose.replace('@groupname', groupName)
  } 
  if (settextclose.includes('@tagdiri')) {
    settextclose = settextclose.replace('@tagdiri', usertag)
  }
  if (settextclose.includes('@jam')) {
    settextclose = settextclose.replace('@jam', jamnya)
  }
  if (settextclose.includes('@menit')) {
    settextclose = settextclose.replace('@menit', menitnya)
  }
  if (settextclose.includes('@detik')) {
    settextclose = settextclose.replace('@detik', detiknya)
  }
  if (settextclose.includes('@hari')) {
    settextclose = settextclose.replace('@hari', harinya)
  }
  if (settextclose.includes('@tanggal')) {
    settextclose = settextclose.replace('@tanggal', tanggalnya)
  }
  if (settextclose.includes('@bulan')) {
    settextclose = settextclose.replace('@bulan', bulannya)
  }
  if (settextclose.includes('@tahun')) {
    settextclose = settextclose.replace('@tahun', tahunnya)
  }
  if (settextclose.includes('@namabulan')) {
    settextclose = settextclose.replace('@namabulan', namabulannya)
  }
  
  if (!settextclose) {
    settextclose = `_*Group Berhasil Ditutup*_ 「 🔒 」`
  }

  await lenwy.groupSettingUpdate(from, 'announcement')
    .then((res) => lenwy.sendMessage(from, { text: settextclose, mentions: [m.sender] }, { quoted: m }))
    .catch((err) => m.reply(jsonformat(err)))
}
break

case 'open': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin)

  let settextopen = global.datagc[m.chat].text_open
  let usertag = `@${m.sender.split("@")[0]}`

  if (settextopen.includes('@tagreply')) {
    if (m.quoted) {
      let userreply = `@${m.quoted.sender.split("@")[0]}`
      settextopen = settextopen.replace('@tagreply', userreply)
    } else {
      return m.reply(`Anda menggunakan @tagreply, anda harus mereply pesan seseorang untuk mengetag nya`)
    }
  }

  if (settextopen.includes('@groupname')) {
    settextopen = settextopen.replace('@groupname', groupName)
  } 
  if (settextopen.includes('@tagdiri')) {
    settextopen = settextopen.replace('@tagdiri', usertag)
  }
  if (settextopen.includes('@jam')) {
    settextopen = settextopen.replace('@jam', jamnya)
  }
  if (settextopen.includes('@menit')) {
    settextopen = settextopen.replace('@menit', menitnya)
  }
  if (settextopen.includes('@detik')) {
    settextopen = settextopen.replace('@detik', detiknya)
  }
  if (settextopen.includes('@hari')) {
    settextopen = settextopen.replace('@hari', harinya)
  }
  if (settextopen.includes('@tanggal')) {
    settextopen = settextopen.replace('@tanggal', tanggalnya)
  }
  if (settextopen.includes('@bulan')) {
    settextopen = settextopen.replace('@bulan', bulannya)
  }
  if (settextopen.includes('@tahun')) {
    settextopen = settextopen.replace('@tahun', tahunnya)
  }
  if (settextopen.includes('@namabulan')) {
    settextopen = settextopen.replace('@namabulan', namabulannya)
  }
  

  if (!settextopen) {
      settextopen = `_*Group Berhasil Dibuka*_ 「 🔓 」`
  }

  await lenwy.groupSettingUpdate(from, 'not_announcement')
    .then((res) => lenwy.sendMessage(from, { text: settextopen, mentions: [m.sender] }, { quoted: m }))
    .catch((err) => m.reply(jsonformat(err)));
}
break

case 'setopen': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
let teks = text ? text : ''
await updateTextOpen(m, teks)
m.reply(mess.success)
}
break

case 'setclose': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
let teks = text ? text : ''
await updateTextClose(m, teks)
m.reply(mess.success)
}
break

case 'jeda': {
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (!args[0]) return m.reply(`*Pilih Waktu:*\n-s = Second\n-m = Minute\n-h = Hour\n-d = Day\n\n*Contoh:*\n${prefix+command} 10m`)
    // Ekstrak nilai waktu dan unit
    let timeArg = args[0]
    let timeValue = parseInt(timeArg)
    let timeUnit = timeArg.replace(timeValue, '')
    // Menghitung waktu dalam milidetik
    let timer;
    switch (timeUnit) {
        case 's':
            timer = timeValue * 1000;
            break
        case 'm':
            timer = timeValue * 60000;
            break
        case 'h':
            timer = timeValue * 3600000;
            break
        case 'd':
            timer = timeValue * 86400000;
            break
        default:
            return m.reply(`Format waktu tidak dikenal. Gunakan s, m, h, atau d.\n\n*Contoh:*\n${prefix+command} 10m`)
    }
    // Menutup grup
    m.reply(`*Group akan ditutup selama ${timeValue} ${timeUnit}*`)
    lenwy.groupSettingUpdate(from, 'announcement')
        .then(() => {
            // Mengirim pesan bahwa grup ditutup
            m.reply(`Group telah ditutup selama ${timeValue} ${timeUnit}. Grup akan dibuka kembali setelah waktu habis.`)
            // Mengatur waktu untuk membuka grup kembali
            setTimeout(() => {
                lenwy.groupSettingUpdate(from, 'not_announcement')
                    .then(() => {
                        m.reply(`Group telah dibuka kembali setelah ${timeValue} ${timeUnit}.`)
                    })
                    .catch(err => {
                        console.error('Error membuka grup:', err)
                        m.reply(`Terjadi kesalahan saat membuka grup kembali.`)
                    })
            }, timer)
        })
        .catch(err => {
            console.error('Error menutup grup:', err)
            m.reply(`Terjadi kesalahan saat menutup grup.`)
        })
}
break

case 'setdesk': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
 if (q == 'on'){
await lenwy.groupSettingUpdate(from, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group 🫡`)).catch((err) => m.reply(jsonformat(err)))
 } else if (q == 'off'){
await lenwy.groupSettingUpdate(from, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group 🫡`)).catch((err) => m.reply(jsonformat(err)))
 } else {
 lenwy.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Setdesk on
Setdesk off`}, {quoted:m}) 

}
}
break

case 'join': {
  if (!isCreator) return m.reply('Perintah ini hanya bisa dilakukan oleh pemilik bot.')
  if (!text) return m.reply('Masukkan Link Group!')
  if (!isUrl(text) || !text.includes('whatsapp.com')) return m.reply('Link tidak valid! 🤔')

  m.reply('Sabar Yaa')

  try {
    let result = text.split('https://chat.whatsapp.com/')[1]
    if (!result) return m.reply('Link tidak valid! 🤔')
    
    await lenwy.groupAcceptInvite(result)
    m.reply('Bot berhasil bergabung ke grup!')
  } catch (err) {
    console.error('Error saat mencoba bergabung dengan grup:', err) // Log error
    if (err.message.includes('not-authorized')) {
      m.reply('Bot tidak memiliki izin untuk bergabung dengan grup (Karna Telah Baru Baru Ini Keluar). Pastikan nomor bot sudah ditambahkan sebagai kontak dan link undangan valid.')
    } else {
      m.reply('*Kadang Bisa, Kadang Ga Bisa 😂. Kalo Ga Bisa Bacotin Aja Botnya*')
    }
  }
}
break

case 'leave': {
    if (!isCreator) return m.reply(mess.owner)

    // Mendapatkan ID grup dari perintah atau menggunakan grup saat ini
    let groupId = q || m.chat;

    if (m.isGroup && !q) {
        // Jika perintah dijalankan di dalam grup dan tidak ada ID grup, kirim pesan dan keluar
        let groupMetadata;
        try {
            groupMetadata = await lenwy.groupMetadata(m.chat)
        } catch (err) {
            console.error('Error fetching group metadata:', err)
            return m.reply('*Gagal mengambil metadata grup.*')
        }

        let members = groupMetadata.participants.map(p => p.id)
        let goodbyeMessage = '*Selamat Tinggal Semuanya*\n*Terima Kasih Atas Segalanya Yang Telah Terjadi*\n*Kan Kuingat Waktu-Waktu Bermain Dengan kalian Semua 😊*\nAssalamualaikum. . .';
        
        // Mengirim pesan perpisahan ke grup
        await lenwy.sendMessage(m.chat, { text: goodbyeMessage, contextInfo: { mentionedJid: members } })

        // Menunggu 5 detik sebelum meninggalkan grup
        setTimeout(async () => {
            try {
                await lenwy.groupLeave(m.chat)
                console.log(`Successfully left the group ${m.chat}`)
            } catch (err) {
                console.error('Error leaving the group:', err)
                await m.reply('*Gagal meninggalkan grup.*')
            }
        }, 10000) // 5000 ms = 5 detik
    } else if (!m.isGroup && !q) {
        // Jika perintah dijalankan di private chat tanpa ID grup
        m.reply('*Mana ID Grup Nya?*\n*Ketik cekidgc Buat Liat Id Nya*')
    } else {
        // Jika ID grup disediakan
        let groupMetadata;
        try {
            groupMetadata = await lenwy.groupMetadata(groupId)
        } catch (err) {
            console.error('Error fetching group metadata:', err)
            return m.reply('*Gagal mengambil metadata grup.*')
        }

        let members = groupMetadata.participants.map(p => p.id)

        // Mengirim pesan perpisahan ke grup dengan ID yang diberikan
        await lenwy.sendMessage(groupId, { text: '*Selamat Tinggal Semuanya*\n*Terima Kasih Atas Segalanya Yang Telah Terjadi*\n*Kan Kuingat Waktu-Waktu Bermain Dengan kalian Semua 😊*\nAssalamualaikum. . .', contextInfo: { mentionedJid: members } })

        // Menunggu 5 detik sebelum meninggalkan grup
        setTimeout(async () => {
            try {
                await lenwy.groupLeave(groupId)
                m.reply(`Berhasil Keluar Dari Grup ${groupId}`)
            } catch (err) {
                console.error('Error leaving the group:', err)
                await m.reply('*Gagal meninggalkan grup.*')
            }
        }, 10000) // 5000 ms = 5 detik
    }
}
break
        
        
        
        

case 'delgc': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
let pler = JSON.parse(fs.readFileSync('./database/idgrup.json', 'utf8')) || []
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./database/idgrup.json', JSON.stringify(pler))
m.reply(mess.success)
}
break

case 'addgc': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)         
let pler1 = JSON.parse(fs.readFileSync('./database/idgrup.json', 'utf8')) || []
pler1.push(m.chat)
fs.writeFileSync('./database/idgrup.json', JSON.stringify(pler1))
m.reply(mess.success)
}
break

case 'editsubjek': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (!text) m.reply('Text nya ?')
await lenwy.groupUpdateSubject(from, text).catch((err) => m.reply(jsonformat(err)))
}
break

case 'editdesk': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (!text) m.reply('Text Nya ?')
await lenwy.groupUpdateDescription(from, text).catch((err) => m.reply(jsonformat(err)))
}
break
        
  case 'aiedit':
case 'editai': {
 let q = m.quoted ? m.quoted : m;
 let mime = (q.msg || q).mimetype || "";
 if (!text) {
 return m.reply("Harap masukkan prompt custom!\n\nContoh: aiedit buatkan foto itu lebih estetik.");
 }
 if (!mime) {
 return m.reply("Tidak ada gambar yang direply! Silakan reply gambar dengan format jpg/png.");
 }
 if (!/image\/(jpe?g|png)/.test(mime)) {
 return mrh(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png.`);
 }
 
return m.reply("Otw diedit sesuai permintaan...");
 
 try {
 let imgData = await m.download();
 let anu = new GoogleGenerativeAI("AIzaSyB8T-3WnKqDbK3GSYYUtTiyDfIV-vBxoPw");
 const base64Image = imgData.toString("base64");
 
 const contents = [
 { text: text },
 {
 inlineData: {
 mimeType: mime,
 data: base64Image
 }
 }
 ];
 
 const model = anu.getGenerativeModel({
 model: "gemini-2.0-flash-exp-image-generation",
 generationConfig: {
 responseModalities: ["Text", "Image"]
 },
 });
 
 let response;
 try {
 response = await lenwy.generateContent(contents);
 } catch (err) {
 console.error("Gagal generate content:", err);
 return m.reply("Terjadi kesalahan saat menghubungi model AI.");
 }
 
 // Validasi respons
 if (
 !response ||
 !response.response ||
 !response.response.candidates ||
 !response.response.candidates[0] ||
 !response.response.candidates[0].content ||
 !response.response.candidates[0].content.parts
 ) {
 return m.reply("Respons dari model tidak valid.");
 }
 
 let resultImage;
 let resultText = "";
 
 for (const part of response.response.candidates[0].content.parts) {
 if (part.text) {
 resultText += part.text;
 } else if (part.inlineData) {
 const imageData = part.inlineData.data;
 resultImage = Buffer.from(imageData, "base64");
 }
 }
 
 if (resultImage) {
 const tmpDir = path.join(process.cwd(), "tmp");
 if (!fs.existsSync(tmpDir)) {
 fs.mkdirSync(tmpDir, { recursive: true });
 }
 
 let tempPath = path.join(tmpDir, `gemini_${Date.now()}.png`);
 fs.writeFileSync(tempPath, resultImage);
 
 await lenwy.sendMessage(m.chat, {
 image: { url: tempPath },
 caption: `*Edit selesai sesuai permintaan!*`
 },{quoted: m});
 
 setTimeout(() => {
 try {
 fs.unlinkSync(tempPath);
 } catch (err) {
 console.error("Gagal menghapus file sementara:", err);
 }
 }, 30000);
 } else {
 m.reply("Gagal memproses gambar.");
 }
 
 } catch (error) {
 console.error(error);
 m.reply(`Error: ${error.message}`);
 }
}
break      
        
        

case 'tagall': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
let teks = `*Tag All*
🎁 *Pesan : ${q ? q : 'Kosong'}*\n\n`
for (let mem of participants) {
teks += `⨠ @${mem.id.split('@')[0]}\n`
}
lenwy.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break

case 'inspect': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid 🤔")
lenwy.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `*Group Link Yang Di Inspect*

 *⨠ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}*
 *⨠ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}*
 *⨠ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}*
 *⨠ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}*
 *⨠ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member*

*⨠ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}*
🎁 *By ${botname}*`
try {
pp = await lenwy.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
lenwy.sendFile(from, pp, "", m, { caption: tekse, mentions: await lenwy.parseMention(tekse) })

})
}
break

case 'inspect2': {
if (isBan) return m.reply('Lu Di Ban Owner')
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return reply("Link Invalid")
lenwy.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」
▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}

▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

▸ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}@g.us

©By ${botname}`
try {
pp = await lenwy.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
lenwy.sendFile(from, pp, "", m, { caption: tekse, mentions: await lenwy.parseMention(tekse) })

})
}
break

case 'ping':
case 'botstatus':
case 'ping':
case 'botstatus':
case 'ping':
case 'botstatus':
case 'ping':
case 'botstatus':
case 'statusbot': {
if (!isCreator) return m.reply(`khusus owner bot`)
let ppuser;
try {
ppuser = await lenwy.profilePictureUrl(m.sender, 'image')
} catch {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
}
const imageUrl = ppuser;
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, {
length
}) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
🕒 *Kecepatan Respon : ${latensi.toFixed(4)} Detik* \n🕒 *${oldd - neww} Milidetik*\n*🕒 Runtime : ${runtime(process.uptime())}*

📦 *Info Server*
 *⨠ RAM : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}*

${cpus[0] ? `⚠️ *Total Cpu Usage*\n *⨠ ${cpus[0].model.trim()} (${cpu.speed} MHZ)*\n${Object.keys(cpu.times).map(type => ` *⨠ ${(type + '*').padEnd(6)}: *${(100 * cpu.times[type] / cpu.total).toFixed(2)}%*`).join('\n')}
 *⨠ CPU Core(s) Usage (${cpus.length} Core CPU)*` : ''}}
`.trim()
await lenwy.sendMessage(m.chat, {
text: respon,
contextInfo: {
externalAdReply: {
showAdAttribution: false,
title: 'Kecepatan Bot',
body: `${latensi.toFixed(4)} Second`,
thumbnailUrl: imageUrl,
sourceUrl: global.link,
mediaType: 1,
renderLargerThumbnail: false
}
}
}, {
quoted: m
})
}
break
        
 case 'hd2': {
 const axios = require('axios');
 const FormData = require('form-data');

 const ihancer = async (buffer, { method = 1, size = 'low' } = {}) => {
 const validSizes = ['low', 'medium', 'high'];
 if (!buffer || !Buffer.isBuffer(buffer)) throw new Error('Image buffer is required');
 if (method < 1 || method > 4) throw new Error('Available methods: 1, 2, 3, 4');
 if (!validSizes.includes(size)) throw new Error(`Available sizes: ${validSizes.join(', ')}`);

 const form = new FormData();
 form.append('method', method.toString());
 form.append('is_pro_version', 'false');
 form.append('is_enhancing_more', 'false');
 form.append('max_image_size', size);
 form.append('file', buffer, `enhance_${Date.now()}.jpg`);

 const { data } = await axios.post('https://ihancer.com/api/enhance', form, {
 headers: {
 ...form.getHeaders(),
 'accept-encoding': 'gzip',
 host: 'ihancer.com',
 'user-agent': 'Dart/3.5 (dart:io)'
 },
 responseType: 'arraybuffer'
 });

 return Buffer.from(data);
 };

 const q = m.quoted ? m.quoted : m;
 const mime = (q.msg || q).mimetype || '';

 if (!mime) return m.reply(`Kirim atau reply gambar dengan caption *.${command} <method> <size>*\n\nMethod: 1-4 (default: 1)\nSize: low, medium, high (default: medium)\n\nContoh: *.${command} 2 high*`);

 const args = text ? text.split(' ') : [];
 const method = args[0] ? parseInt(args[0]) : 1;
 const size = args[1] ? args[1].toLowerCase() : 'medium';

 if (method < 1 || method > 4) return m.reply(`❌ Method harus antara 1 - 4\nContoh: *.${command} 2 high*`);
 if (!['low', 'medium', 'high'].includes(size)) return m.reply(`❌ Size harus: low, medium, atau high\nContoh: *.${command} 2 high*`);

 await lenwy.sendMessage(m.chat, { react: { text: '⚡', key: m.key } });

 try {
 const media = await q.download();
 const hasil = await ihancer(media, { method, size });

 await lenwy.sendMessage(m.chat, {
 image: hasil,
 caption: `✅ Gambar berhasil di-enhance!\n📊 Method: ${method}\n📏 Size: ${size}`
 }, { quoted: m });

 } catch (err) {
 console.error(err);
 m.reply(`❌ Gagal meningkatkan gambar: ${err.message}`);
 }
}
 break;      
        
        

case 'hdr': {
 const axios = require("axios");
 const FormData = require("form-data");

 // Fungsi untuk validasi format gambar
 function isImage(buffer) {
 if (!buffer || buffer.length < 4) return null;
 if (buffer[0] === 0xFF && buffer[1] === 0xD8 && buffer[2] === 0xFF) return 'image/jpeg';
 if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) return 'image/png';
 return null;
 }

 // Fungsi untuk upscale dengan Pixelcut
 async function upscaleWithPixelcut(imageBuffer, mimeType) {
 try {
 const form = new FormData();
 form.append('image', imageBuffer, { filename: 'upscale.jpg', contentType: mimeType });
 form.append('scale', '2');

 const headers = {
 ...form.getHeaders(),
 'accept': 'application/json',
 'x-client-version': 'web',
 'x-locale': 'en'
 };

 const res = await axios.post('https://api.jerexd666.wongireng.my.id/tools/hdr?url=4', form, { headers });
 const json = res.data;

 if (!json?.result_url || !json.result_url.startsWith('http')) {
 throw new Error('Gagal mendapatkan URL hasil dari Pixelcut.');
 }

 const resultResponse = await axios.get(json.result_url, { responseType: 'arraybuffer' });
 return resultResponse.data;

 } catch (error) {
 throw new Error(`Pixelcut API Gagal: ${error.message}`);
 }
 }

 // Eksekusi utama
 try {
 const q = m.quoted ? m.quoted : m;
 const mime = (q.msg || q).mimetype || q.mtype || "";

 if (!/image/g.test(mime)) {
 return m.reply(`❗ Kirim atau balas gambar dengan caption *${prefix + command}* untuk meningkatkan kualitas.`);
 }

 const statusMsg = await lenwy.sendMessage(m.chat, {
 text: "⏳ Memproses...",
 }, { quoted: m });

 const imageBuffer = await q.download();
 const resultBuffer = await upscaleWithPixelcut(imageBuffer, mime);
 const detectedMime = isImage(resultBuffer);

 if (!detectedMime) throw new Error('Data yang diterima bukan gambar.');

 await lenwy.sendMessage(m.chat, {
 image: resultBuffer,
 mimetype: detectedMime,
 caption: `✅ Gambar berhasil di-hd in ya kak...`,
 }, { quoted: m });

 await lenwy.sendMessage(m.chat, { delete: statusMsg.key });

 } catch (error) {
 console.error("Upscale Error:", error);
 m.reply(`❌ Upscale gagal: ${error.message}`);
 }
}
break;                

case 'bcgc':
case 'bcgroup': {
    if (!isCreator) return m.reply(mess.OnlyOwner)
    // Memastikan teks query tidak kosong
    if (!q) return m.reply(`*Bukan Gitu Loh*\n> *Contoh : ${prefix + command} OEE SEMUAANYAA*`)
    // Pastikan ada teks untuk broadcast
    if (!text) return m.reply(`*Teks Broadcast Tidak Ditemukan*\n> *Contoh : ${prefix + command} OEEE*`)

    // Mengambil semua grup yang Anda ikuti
    let getGroups;
    try {
        getGroups = await lenwy.groupFetchAllParticipating()
    } catch (err) {
        console.error('Error fetching groups:', err)
        return m.reply('*Gagal mengambil daftar grup.*')
    }
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let groupIds = groups.map(v => v.id)
    // Menyampaikan informasi broadcast
    m.reply(`*Mengirim Broadcast Ke ${groupIds.length} Group Chat, Waktu Selesai ${groupIds.length * 1.5} detik*`)
    // Mengirim pesan ke semua grup
    for (let groupId of groupIds) {
        await sleep(1500)
        try {
            await lenwy.sendMessage(groupId, { text: `${text}` }, { quoted: m })
        } catch (err) {
            console.error('Error sending message to group:', groupId, err)
        }
    }
    m.reply(`*Sukses Mengirim Broadcast Ke ${groupIds.length} Group*`)
}
break


case 'bcimg':
case 'bcvid':
case 'bcvideo':
case 'share': {
    if (!isCreator) return m.reply('Maaf, Command ini Khusus untuk Developer Bot WhatsApp')
    if (m.isGroup) return m.reply(mess.private)
    if (!text) return m.reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix + command} teks\n\nReply Gambar/Video Untuk Mengirim Gambar/Video Ke Semua Group`)

    // Mengirim pesan tunggu


    // Mengambil semua grup yang Anda ikuti
    let getGroups;
    try {
        getGroups = await lenwy.groupFetchAllParticipating()
    } catch (err) {
        console.error('Error fetching groups:', err)
        return m.reply('*Gagal mengambil daftar grup.*')
    }

    let groups = Object.entries(getGroups).map(entry => entry[1])
    let groupIds = groups.map(v => v.id)

    // Mengatur teks broadcast global
    global.teksjpm = text;

    // Mengambil tipe MIME dari pesan yang di-reply
    let mime = m.quoted ? m.quoted.mimetype : '';

    // Mengirim pesan ke semua grup
    for (let groupId of groupIds) {
        let metadata;
        try {
            metadata = await lenwy.groupMetadata(groupId)
        } catch (err) {
            console.error(`Error fetching metadata for group ${groupId}:`, err)
            continue; // Lanjutkan ke grup berikutnya jika terjadi kesalahan
        }

        let participants = metadata.participants || []

        try {
            if (/image/.test(mime)) {
                // Mengirim gambar
                if (!m.quoted) return m.reply('Tidak ada gambar yang di-reply.')
                let media = await lenwy.downloadAndSaveMediaMessage(m.quoted)
                let mediaUrl = await uploader60Minute(media)
                await lenwy.sendMessage(groupId, { image: { url: mediaUrl }, caption: global.teksjpm, contextInfo: { mentionedJid: participants.map(p => p.id) } }, { quoted: m })
            } else if (/video/.test(mime)) {
                // Mengirim video
                if (!m.quoted) return m.reply('Tidak ada video yang di-reply.')
                let media = await lenwy.downloadAndSaveMediaMessage(m.quoted)
                let mediaUrl = await uploader60Minute(media)
                await lenwy.sendMessage(groupId, { video: { url: mediaUrl }, caption: global.teksjpm, contextInfo: { mentionedJid: participants.map(p => p.id) } }, { quoted: m })
            } else {
                // Mengirim teks
                await lenwy.sendMessage(groupId, { text: global.teksjpm, contextInfo: { mentionedJid: participants.map(p => p.id) } }, { quoted: m })
            }
            await sleep(2000) // Tunggu 2 detik antara pengiriman pesan
        } catch (err) {
            console.error(`Error sending message to group ${groupId}:`, err)
        }
    }

    m.reply(`*Sukses Mengirim Broadcast Ke ${groupIds.length} Group*`)
}
break




// ---------------------------------------------------------------[ ANTI MENU ]----------------------------------------------------------------




case 'antich':
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        global.db.data.chats[m.chat].antich = true;
        m.reply(`*Berhasil Mengaktifkan Anti Link Channel Wa*`)
    } else if (q == 'off') {
        global.db.data.chats[m.chat].antich = false;
        m.reply(`*Berhasil Mematikan Anti Link Channel Wa*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'antiwame':
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        global.db.data.chats[m.chat].antiwame = true;
        m.reply(`*Berhasil Mengaktifkan Anti Chat Wame*`)
    } else if (q == 'off') {
        global.db.data.chats[m.chat].antiwame = false;
        m.reply(`*Berhasil Mematikan Anti Chat Wame*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'antilink':
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        await catatLinkGc(m)
        global.db.data.chats[m.chat].antilink = true;
        m.reply(`*Berhasil Mengaktifkan Anti Link*`)
    } else if (q == 'off') {
        await catatLinkGc(m)
        global.db.data.chats[m.chat].antilink = false;
        m.reply(`*Berhasil Mematikan Anti Link*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'antipl':
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        global.db.data.chats[m.chat].antipanel = true;
        m.reply(`*Berhasil Mengaktifkan Anti Promosi Panel*`)
    } else if (q == 'off') {
        global.db.data.chats[m.chat].antipanel = false;
        m.reply(`*Berhasil Mematikan Anti Promosi Panel*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'antitoxic1':
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        if (db.data.chats[m.chat].antitoxic1) return m.reply(`📣 *Anti Toxic 1 Sudah Aktif*`)
        db.data.chats[m.chat].antitoxic1 = true;
        m.reply(`📣 *Anti Toxic 1 Diaktifkan Didalam Group*`)
    } else if (q == 'off') {
        if (!db.data.chats[m.chat].antitoxic1) return m.reply(`⚠️ *Anti Toxic 1 Sudah Dinonaktifkan*`)
        db.data.chats[m.chat].antitoxic1 = false;
        m.reply(`⚠️ *Anti Toxic 1 Dinonaktifkan Didalam Group*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'antitoxic2':
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        if (db.data.chats[m.chat].antitoxic2) return m.reply(`📣 *Anti Toxic 2 Sudah Aktif*`)
        db.data.chats[m.chat].antitoxic2 = true;
        m.reply(`📣 *Anti Toxic 2 Diaktifkan Didalam Group*`)
    } else if (q == 'off') {
        if (!db.data.chats[m.chat].antitoxic2) return m.reply(`⚠️ *Anti Toxic 2 Sudah Dinonaktifkan*`)
        db.data.chats[m.chat].antitoxic2 = false;
        m.reply(`⚠️ *Anti Toxic 2 Dinonaktifkan Didalam Group*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'antilinkgc1':
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        await catatLinkGc(m)
        global.db.data.chats[m.chat].antilinkgc = true;
        m.reply(`*Berhasil Mengaktifkan Anti Link Group*\n🎁 *Ketik Antilinkgc2 Untuk Mengaktifkan Autokick*`)
    } else if (q == 'off') {
        await catatLinkGc(m)
        global.db.data.chats[m.chat].antilinkgc = false;
        m.reply(`*Berhasil Mematikan Anti Link Group*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'antilinkgc2':
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        await catatLinkGc(m)
        if (db.data.chats[m.chat].antilinkgc2) return m.reply(`*Autokick Link Gc Aktif*`)
        db.data.chats[m.chat].antilinkgc2 = true;
        m.reply(`*Autokick Link Gc Aktif*`)
    } else if (q == 'off') {
        await catatLinkGc(m)
        if (!db.data.chats[m.chat].antilinkgc2) return m.reply(`*Autokick Link Gc Di Nonatifkan*`)
        db.data.chats[m.chat].antilinkgc2 = false;
        m.reply(`*Autokick Nonaktif*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'antilinktt':
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        global.db.data.chats[m.chat].antitiktok = true;
        m.reply(`*Berhasil Mengaktifkan Anti Link Tiktok*`)
    } else if (q == 'off') {
        global.db.data.chats[m.chat].antitiktok = false;
        m.reply(`*Berhasil Mematikan Anti Link Tiktok*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'antilinkyt':
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        global.db.data.chats[m.chat].antiyoutube = true;
        m.reply(`*Berhasil Mengaktifkan Anti Link Youtube*`)
    } else if (q == 'off') {
        global.db.data.chats[m.chat].antiyoutube = false;
        m.reply(`*Berhasil Mematikan Anti Link Youtube*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'antispam': 
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        db.data.chats[from].antispam = true;
        m.reply(`*AntiSpam Berhasil Diaktifkan Didalam Group*`)
    } else if (q == 'off') {
        db.data.chats[from].antispam = false;
        m.reply(`⚠️ *AntiSpam Dinonaktifkan Dalam Group!*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'antibot':
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (q == 'on') {
        db.data.chats[m.chat].antibot = true;
        m.reply(`*Berhasil Mengaktifkan Anti Bot*`)
    } else if (q == 'off') {
        db.data.chats[m.chat].antibot = false;
        m.reply(`*Berhasil Mematikan Anti Bot*`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'autoread':
    if (!isCreator) return m.reply(mess.owner)
    if (q == 'on') {
        global.db.data.settings[botNumber].autoread = true;
        m.reply(`Berhasil mengubah autoread ke ${q}`)
    } else if (q == 'off') {
        global.db.data.settings[botNumber].autoread = false;
        m.reply(`Berhasil mengubah autoread ke ${q}`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break

case 'autoai':
    if (!isCreator) return m.reply(mess.owner)
    if (q == 'on') {
        global.db.data.settings[botNumber].autoai = true;
        m.reply(`Berhasil mengubah autoai ke ${q}`)
    } else if (q == 'off') {
        global.db.data.settings[botNumber].autoai = false;
        m.reply(`Berhasil mengubah autoai ke ${q}`)
    } else {
        m.reply(`*Ketik ${prefix + command} on/off*`)
    }
    break



// ---------------------------------------------------------------[ ANTI MENU ]----------------------------------------------------------------



case 'smeme':
case 'stickermeme':
case 'stickmeme': {
let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) return
if (!text) return m.reply(respond)
LenwyLD()
await sleep(1500)
let atas = text.split('|')[0] ? text.split('|')[0] : '-'
let bawah = text.split('|')[1] ? text.split('|')[1] : '-'
try {
let mee = await lenwy.downloadAndSaveMediaMessage(quoted)
let mem = await uploader60Minute(mee)
let smeme = `https://api.nexray.web.id/maker/smeme/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
let awikwok = await lenwy.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(awikwok)
} catch (e) {
m.reply(mess.error + e)
}
}
break

case 'cuaca': {
if (!text) return m.reply('*Mana Lokasinya?*')
if (text.length > 20) return m.reply(`*Maksimal 20 Karakter*`)
LenwyLD()
await sleep(3000)
try {
let wdata = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=id`)
let Lenwy_txt = ""
Lenwy_txt += `*Cuaca Dari : ${text}*\n`
Lenwy_txt += `☁️ *Cuaca :* *${wdata.data.weather[0].main}*\n`
Lenwy_txt += `🧾 *Deskripsi :* *${wdata.data.weather[0].description}*\n`
Lenwy_txt += `🌡️ *Suhu Rata Rata :* *${wdata.data.main.temp}*\n`
Lenwy_txt += `💨 *Tekanan :* *${wdata.data.main.pressure}*\n`
Lenwy_txt += `🧴 *kelembapan :* *${wdata.data.main.humidity}*\n`
Lenwy_txt += `🛳️ *Garis Bujur :* *${wdata.data.coord.lat}*\n`
Lenwy_txt += `🌏 *Negara :* *${wdata.data.sys.country}*\n`
lenwy.sendMessage(m.chat, { text: Lenwy_txt, }, { quoted: m })
} catch (e) {
m.reply(`Pastikan Wilayahnya Adalah Kota`)
}
}
break


             


case 'search':
case 'searchai':
  if (!text) return m.reply(`*Begini Loh*\n\n> *${command} Tutorial Supaya Tidak Ketiduran Saat Proses WDP 1x 1id*`)
    LenwyLD()
  await sleep(3000)
  try {
     let you = await (await fetch(`https://endpoint.web.id/ai/yousearch?key=315602&query=${text}`)).json()
     let result = you.result
     m.reply(result)
   } catch (e) {
       lenwy.sendMessage (m.chat, { react: { text: `❌`, key: m.key }})
     }
break


case 'imdb':
if (!text) return m.reply(`*Masukan Judul Filmnya*`)
LenwyLD()
await sleep(3000)
if (text.length > 20) return m.reply(`*Maksimal 20 Karakter*`)
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let Lenwy_txt = ""
            console.log(fids.data)
Lenwy_txt += "*IMDB Search*\n"
Lenwy_txt += "📖 *Judul :* *" + fids.data.Title + "*\n"
Lenwy_txt += "📅 *Tahun :* *" + fids.data.Year + "*\n"
Lenwy_txt += "📦 *Rilis :* *" + fids.data.Released + "*\n"
Lenwy_txt += "🕒 *Durasi :* *" + fids.data.Runtime + "*\n"
Lenwy_txt += "📰 *Genre :* *" + fids.data.Genre + "*\n"
Lenwy_txt += "📋 *Direktur :* *" + fids.data.Director + "*\n"
Lenwy_txt += "📝 *Penulis :* *" + fids.data.Writer + "*\n"
Lenwy_txt += "👤 *Aktor :* *" + fids.data.Actors + "*\n"     
Lenwy_txt += "💬 *Bahasa :* *" + fids.data.Language + "*\n"
Lenwy_txt += "🌏 *Negara :* *" + fids.data.Country + "*\n"
Lenwy_txt += "🏆 *Penghargaan :* *" + fids.data.Awards + "*\n"
Lenwy_txt += "🪙 *Keuntungan :* *" + fids.data.BoxOffice + "*\n"
Lenwy_txt += "🏷️ *Nilai :* *" + fids.data.imdbRating + "*\n"
Lenwy_txt += "📣 *Pemungutan Suara :* *" + fids.data.imdbVotes + "*\n\n"
Lenwy_txt += "📃 *Plot :*\n" + fids.data.Plot + ""
           lenwy.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: Lenwy_txt,
            }, {
                quoted: m,})
            .catch(console.error)
            break

case 'asmaulhusna': {
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case 'ayat kursi': {
let result = `🎁 *Ayat Kursi*

✉️ *Arab :*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ

✉️ *Latin :*
*“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”*

✉️ *Artinya:*
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya) tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
*(QS. Al Baqarah: 255)*`
lenwy.sendMessage(m.chat, { image: { url: 'https://img1.pixhost.to/images/7739/629210665_deomedia.jpg' }, caption: result}, { quoted: m })
}

break

case 'kisahnabi': {
if (!text) return m.reply(`*Tolong Masukkan Nama Nabi*`) 
try{
let ilenwy = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/kisahnabi?apikey=QIO8xicLNkEV43Y&nabi=${text}`)
const namanabi = ilenwy.result.name
const kelahiran = ilenwy.result.birth
const wafat = ilenwy.result.death_age
const asal = ilenwy.result.country_from
const ceritanabi = ilenwy.result.story
var lenwy_result = `*Kisah Nabi*
🎁 *Nama Nabi : ${namanabi}*
🗓️ *Hari Kelahiran : ${kelahiran}*
🕒 *Wafat Pada Umur : ${wafat}*
🌏 *Asal : ${asal}*

📑 *Kisah Dari Nabi ${namanabi} :*
${ceritanabi}`
m.reply(lenwy_result) 
} catch (error) {
    return m.reply(mess.error)
}
}
break

case 'doa': {
if (!text) return m.reply(`*Tolong Masukkan Doa Yang Ingin Dicari*`) 
try{
LenwyLD()
await sleep(2500)
let ilenwy = await fetchJson(`https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/${text}`)
const namadoa = ilenwy.doa
const ayat = ilenwy.ayat
const latin = ilenwy.latin
var lenwy_result = `*Pencarian : ${namadoa}*

*${ayat}*

*${latin}*`
m.reply(lenwy_result) 
} catch (error) {
    return m.reply(mess.error)
}
}
break

case 'toimg': {
if (isBan) return m.reply(mess.ban)
try {
  LenwyLD()
  await sleep(3000)
if (!quoted) return m.reply ('Reply Image')
if (!/webp/.test(mime)) reply `Balas sticker dengan caption *${prefix + command}*`
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) m.reply(err)
let buffer = fs.readFileSync(ran)
lenwy.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
} catch (e) {
    m.reply('[!] pastikan kamu reply stiker yang tidak gerak')
}
}
break

case 'chord':
  if (!text) return m.reply('masukkan judul lagunya!')
  try {
    let chord = await (await fetch('https://endpoint.web.id/search/chord?key=315602&query=' + text)).json()
    LenwyLD()
    await sleep(3000)
    let result = chord.result;
    
    // Menyusun pesan dengan semua informasi
    let message = `${result.title}\n\n`
    message += `Artis: ${result.artist}\n`
    message += `URL: ${result.url}\n`
    message += `URL Artis: ${result.artistUrl}\n\n`
    message += `Chord:\n${result.lyrics}`;
    
    lenwy.sendMessage(m.chat, { text: message }, { quoted: m })
  } catch (e) {
    m.reply('terjadi kesalahan: ' + e)
  }
break

case 'jodoh': {
if (!m.isGroup) return
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `@${me.split('@')[0]} ❤ @${jodoh.split('@')[0]}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: ""
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "",
            subtitle: "",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"😏🌹","id":"${prefix}jodoh"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [me, jodoh]
                }
        })
    }
  }
}, {})
await lenwy.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}
break

case 'jodoh2': {
  if (!m.isGroup) return
  let member = participants.map(u => u.id)
  let me = m.sender
  let jodoh = member[Math.floor(Math.random() * member.length)]
  let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `@${me.split('@')[0]} ❤ @${jodoh.split('@')[0]}`
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "HALOO INI FOOTER"
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              title: "HAIII INi header",
              subtitle: "HUEEEEEKKK",
              hasMediaAttachment: false
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  name: "single_select",
                  "buttonParamsJson": JSON.stringify({
                    title:"[ PILIH ]",
                    sections:[{
                      title: "INI JUDUL",

                      rows:[{
                        title: "pay a",
                        id: `pay a`
                      }]
                    }]
                  })
                }
              ],
            }),
            contextInfo: {
            mentionedJid: [me, jodoh], 
            forwardingScore: 9999,
            isForwarded: true
            }
         })
      }
    }
  }, { quoted: m })
  await lenwy.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
  })
  }
  break



//------------------------------------------------------------------- [ YT DOWNLOADER ] -----------------------------------------------------------------------------

    
case 'song': {
 if (!text) {
 return m.reply(`🎵 *YouTube Play*\n\nContoh:\n• ${prefix}ytplay nama lagu atau judul video\n• ${prefix}ytplay https://youtu.be/dQw4w9WgXcQ\n\nBot akan mencari dan mengirim audio dari YouTube secara otomatis!`);
 }

 try {
 await lenwy.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });
 
 const apiKey = 'dd8d036269329e58e0500f5b';
 const isYouTubeUrl = text.includes('youtube.com/watch?v=') || text.includes('youtu.be/');
 
 let searchData;
 
 if (isYouTubeUrl) {
 // Jika sudah berupa URL, langsung ke step download
 searchData = {
 title: 'YouTube Audio',
 channel: 'Unknown',
 duration: 'Unknown', 
 views: 'Unknown',
 thumbnail: null,
 url: text
 };
 } else {
 // Step 1: Search lagu menggunakan yt-search module
 const yts = require('yt-search');
 const searchResults = await yts(text);
 
 if (!searchResults.all || searchResults.all.length === 0) {
 return m.reply('❌ Lagu tidak ditemukan. Coba dengan kata kunci yang berbeda.');
 }
 
 const firstResult = searchResults.all[0];
 searchData = {
 title: firstResult.title,
 channel: firstResult.author?.name || 'Unknown',
 duration: firstResult.duration || 'Unknown',
 views: firstResult.views || 'Unknown',
 thumbnail: firstResult.thumbnail,
 url: firstResult.url
 };
 }
 
 await lenwy.sendMessage(m.chat, { react: { text: '⬇️', key: m.key } });
 
 // Kirim info lagu terlebih dahulu
 const info = `🎵 *YouTube Play*\n\n` +
 `📌 *Judul:* ${searchData.title}\n` +
 `👤 *Channel:* ${searchData.channel}\n` +
 `⏱️ *Durasi:* ${searchData.duration}\n` +
 `📊 *Views:* ${searchData.views}\n\n` +
 `⏳ *Sedang mengunduh audio...*`;
 
 await m.reply(info);
 
 // Step 2: Download audio menggunakan autoresbot API dengan YouTube URL
 const downloadUrl = `https://api.autoresbot.com/api/downloader/ytplay?apikey=${apiKey}&url=${encodeURIComponent(searchData.url)}`;
 const downloadResponse = await axios.get(downloadUrl);
 
 if (downloadResponse.data && downloadResponse.data.status && downloadResponse.data.data && downloadResponse.data.data.url) {
 const audioUrl = downloadResponse.data.data.url;
 
 await lenwy.sendMessage(m.chat, {
 audio: { url: audioUrl },
 mimetype: 'audio/mpeg',
 fileName: `${searchData.title}.mp3`,
 contextInfo: {
 externalAdReply: {
 title: searchData.title,
 body: `risa Play Music`,
 thumbnailUrl: searchData.thumbnail,
 mediaType: 2,
 mediaUrl: searchData.url
 }
 }
 }, { quoted: m });
 m.reply('SORYY BRE KLO MB LAGUNYA GEDE SOALNYA BIAR JERNIH MUSIKNYA')

 await lenwy.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
 } else {
 return m.reply('❌ Gagal mengunduh audio. Link download tidak tersedia.');
 }
 
 } catch (error) {
 console.error('YTPlay Error:', error);
 await lenwy.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
 m.reply('❌ Terjadi kesalahan saat mengunduh audio. Silakan coba lagi nanti.');
 }
}
break
 

case 'playspo': {
  if (!text) return m.reply(`Ex: .playspotify phonk 2023`)
async function searchSpotifyTracks(query) {
  const clientId = 'acc6302297e040aeb6e4ac1fbdfd62c3';
  const clientSecret = '0e8439a1280a43aba9a5bc0a16f3f009';
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const getToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      timeout: 60000, // 60 seconds
      body: new URLSearchParams({ grant_type: 'client_credentials' }),
      headers: { Authorization: `Basic ${auth}` },
    });
    return (await response.json()).access_token;
  };

  const accessToken = await getToken();
  const offset = 10;
  const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=${offset}`;
  const response = await fetch(searchUrl, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = await response.json();
  return data.tracks.items;
}

try {
let angkaAcak = [0, 1, 2, 3, 4]
let random = pickRandom(angkaAcak)
 do2 = await searchSpotifyTracks(text)
await lenwy.sendMessage(m.chat, { audio: { url: `${do2[random].preview_url}` }, mimetype: "audio/mpeg", ptt: true }, { quoted: m })
} catch (e) {
    return m.reply('error bang')
  }
    }
break    
        
   case 'play2':  case 'song2': {
if (!text) return m.reply(`Example : ${prefix + command} anime whatsapp status`)
await m.reply(mess.wait);
let yts = require("youtube-yts")
        let look = await yts(text);
        let convert = look.videos[0];       
const pl = await youtube(convert.url)
await lenwy.sendMessage(m.chat,{
    audio: { url: pl.mp3  },
    fileName: convert.title + '.mp3',
    mimetype: 'audio/mpeg',
    contextInfo:{
        externalAdReply:{
            title:convert.title,           
            thumbnailUrl: convert.image,
            sourceUrl: pl.mp3,
            mediaType:1,
            mediaUrl:convert.url,
        }

    },
},{quoted:m})
m.reply('SORYY BRE KLO MB LAGUNYA GEDE SOALNYA BIAR JERNIH MUSIKNYA')
}
break
         



case 'ytmp4': {
 if (!text) return m.reply('Masukkan URL YouTube\nContoh: .ytmp4 https://youtu.be/xxxxx');

if (!quoted) return m.reply(`wet kak`)

 try {
 let url = text.trim();
 if (!url.match(/(youtu\.be|youtube\.com)/)) return m.reply('URL YouTube tidak valid!');
 url = url.split('&')[0];

 const res = await fetch(`https://deoberon-api.vercel.app/download/ytdl?url=${encodeURIComponent(url)}`);
 const json = await res.json();

 if (!json.status || !json.result?.mp4) throw new Error('Gagal mendapatkan video');

 await lenwy.sendMessage(m.chat, {
 video: { url: json.result.mp4 },
 caption: `🎬 *Judul:* ${json.result.title}\n✅ *Selesai diunduh dalam format MP4*`
 }, { quoted: m });

 } catch (err) {
 console.error(err);
 m.reply('❌ Gagal mengunduh video. Coba lagi nanti.');
 }
}
break;

//------------------------------------------------------------------- [ YT DOWNLOADER ] -----------------------------------------------------------------------------



//------------------------------------------------------------------- [ SPO DOWNLOADER ] ----------------------------------------------------------------------------


        
/* case 'spotify': {
  if (!text) return m.reply("*Mau Cari Lagu Apa?*")
  LenwyLD()
  await sleep(3000)
  let imageUrl = "https://endpoint.web.id/server/file/l75yVFzs2UbSEIm.png";
  let response = await axios.get(imageUrl, { responseType: 'arraybuffer' })
  let jpegThumbnail = Buffer.from(response.data, 'binary')
  // Mengambil data lagu dari API Spotify
  let { data } = await require("axios")({
    method: 'GET',
    url: 'https://manaxu-seven.vercel.app/api/internet/spotify?query=' + text
  })

  let res = data.result; // Ambil semua hasil pencarian
  if (res.length === 0) return m.reply('*Tidak ada hasil ditemukan*')

  // Ambil satu lagu secara acak
  let audioInfo = res[Math.floor(Math.random() * res.length)]

  const ss = `*${audioInfo.name}*`;
  const st = `[ ${command} ]

🎧  *Judul*
${ss}

📃  *Channel*
${audioInfo.artists}

⏱   *Durasi*
${(audioInfo.duration_ms / 1000).toFixed(0)} detik

🧬  *Link*
${audioInfo.link}`;

  let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          contextInfo: {
            mentionedJid: [m.sender],
            isForwarded: false,
            externalAdReply: {
              showAdAttribution: false,
              renderLargerThumbnail: true,
              title: ss,
              mediaType: 1,
              body: `Spotify`,
              thumbnailUrl: audioInfo.image,
              sourceUrl: audioInfo.link
            },
          },
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*Mau Download Dalam Format Apa?*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: ``
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: ``,
            thumbnailUrl: audioInfo.image,
            subtitle: ``,
            hasMediaAttachment: false,
            ...(await prepareWAMessageMedia({
              document: fs.readFileSync('./package.json'), // Jika ada file yang ingin dilampirkan
              jpegThumbnail: jpegThumbnail,
              fileLength: 1000000000000000000,
              fileName: `${prefix}${command} ${text}`,
            }, {
              upload: lenwy.waUploadToServer
            }))
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Audio","id":"${prefix}spodl ${audioInfo.link}"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Cari Lagi","id":"${prefix}${command} ${text}"}`
              }
            ]
          })
        })
      }
    }
  }, { userJid: m.sender, quoted: m })
  lenwy.sendMessage(m.chat, {text: `Kalau Tombol Dibawah Ga Muncul Bisa Langsung Menggunakan\n\n> ${prefix}spodl <link>\n\n${st}`}, {quoted: m})
  await sleep(3000)
  await lenwy.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
}
break */

case 'spodl':
case 'spotifydl': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`*Begini Loh*\n\n> *${prefix}${command} <link>*`)
try {
LenwyLD()
await sleep(3000)
m.reply('Process sending audio, mungkin ini membutuhkan 1-3 menit jika durasi audio terlalu panjang!')
let procees = await (await fetch(`https://deoberon-api.vercel.app/download/playspotify?url=${text}`)).json()
let audio = procees.result;
lenwy.sendMessage(m.chat, {audio: {url: audio.download }, contextInfo: {
mentionedJid: [m.sender], 
isForwarded: false,
externalAdReply:{
showAdAttribution: false,
renderLargerThumbnail: false,
title: audio.title,
mediaType: 1, 
body: `Spotify`,
thumbnailUrl: audio.image,
sourceUrl : `${text}`
},
}, mimetype: 'audio/mp4' }, {quoted: m})
} catch (e) {
m.reply('terjadi error :' + e)
}
}
break


//------------------------------------------------------------------- [ SPO DOWNLOADER ] ----------------------------------------------------------------------------


//------------------------------------------------------------------- [ TT DOWNLOADER ] -----------------------------------------------------------------------------


    
        
    case 'tt3': {
if (!text) return m.reply("url")
if (!text.startsWith("https://")) return m.reply("url")
await tiktokDl(q).then(async (result) => {
await lenwy.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return m.reply("Error!")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: lenwy.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await lenwy.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await lenwy.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*`}, {quoted: m})
}
}).catch(e => console.log(e))
await lenwy.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break    
        
     case 'ttslide': {
 if (!text) return m.reply(`Gunakan:\n${prefix + command} https://vt.tiktok.com/xxxx`);

 const axios = require('axios');
 const cheerio = require('cheerio');

 const expandLink = async (url) => {
 try {
 const res = await axios.get(url);
 return res.request.res.responseUrl || url;
 } catch {
 return url;
 }
 };

 const getBuffer = async (url) => {
 try {
 const res = await axios.get(url, { responseType: 'arraybuffer' });
 return Buffer.from(res.data);
 } catch {
 return null;
 }
 };

 const scrapeTikDownloader = async (url) => {
 const finalUrl = await expandLink(url);

 const { data } = await axios.post(
 'https://tikdownloader.io/api/ajaxSearch',
 new URLSearchParams({ q: finalUrl }),
 {
 headers: {
 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
 'referer': 'https://tikdownloader.io/id',
 'x-requested-with': 'XMLHttpRequest',
 'user-agent': 'Mozilla/5.0',
 },
 }
 );

 const $ = cheerio.load(data.data);
 const title = $('.tik-left .content h3').text().trim();

 let images = [];
 $('.photo-list ul.download-box li').each((_, el) => {
 const imgUrl = $(el).find('.download-items__btn a').attr('href');
 if (imgUrl) images.push(imgUrl);
 });

 let videos = [];
 $('.tik-button-dl').each((_, el) => {
 const label = $(el).text().toLowerCase().trim();
 const url = $(el).attr('href');
 if (url && label.includes('download mp3')) {
 videos.push({ type: 'audio', url });
 } else if (url && label.includes('download')) {
 videos.push({ type: 'video', url, quality: label });
 }
 });

 return { title: title || 'Tanpa Judul', images, videos };
 };

 try {
 const { title, images, videos } = await scrapeTikDownloader(text);
 await m.reply(`📥 *Hasil TikTok*\n\n📌 *Judul:* ${title}\n🖼 *Foto:* ${images.length} | 🎥 *Video:* ${videos.filter(v => v.type === 'video').length} | 🔊 *Audio:* ${videos.filter(v => v.type === 'audio').length}`);

 // 🎞 Kirim 1 video (pertama)
 const video = videos.find(v => v.type === 'video');
 if (video) {
 const buffer = await getBuffer(video.url);
 if (buffer) {
 await lenwy.sendMessage(m.chat, {
 video: buffer,
 caption: `🎥 ${title}`
 }, { quoted: m });
 }
 }

 // 🔊 Kirim audio (jika ada)
 const audio = videos.find(v => v.type === 'audio');
 if (audio) {
 const buffer = await getBuffer(audio.url);
 if (buffer) {
 await lenwy.sendMessage(m.chat, {
 audio: buffer,
 mimetype: 'audio/mp4'
 }, { quoted: m });
 }
 }

 // 🖼 Kirim foto sebagai carousel
 if (images.length > 0) {
 const cards = [];
 for (let i = 0; i < images.length; i++) {
 const imgUrl = images[i];
 const media = await prepareWAMessageMedia(
 { image: { url: imgUrl } },
 { upload: lenwy.waUploadToServer }
 );

 const card = {
 body: proto.Message.InteractiveMessage.Body.fromObject({ text: '📷 Slideshow TikTok' }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: `Source: TikTok • ${global.botname}` }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `Foto ${i + 1} dari ${images.length}`,
 hasMediaAttachment: true,
 ...media
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: JSON.stringify({
 display_text: "Source 🔗",
 url: text
 })
 },
 {
 name: "cta_copy",
 buttonParamsJson: JSON.stringify({
 display_text: "Copy URL ✅",
 copy_code: imgUrl
 })
 }
 ]
 })
 };

 cards.push(card);
 }

 const msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 contextInfo: { mentionedJid: [m.sender] },
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards }),
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: `🖼 *Slideshow TikTok*\n@${m.sender.split('@')[0]}`
 })
 })
 }
 }
 },
 {
 userJid: m.chat,
 quoted: m
 }
 );

 await lenwy.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
 }

 } catch (err) {
 console.error(err);
 m.reply(`❌ Gagal memproses link:\n${err.message}`);
 }
}
break;;  
        
case 'tt': 
case 'ttdl':
case 'tiktok': 
case 'tiktokdl': {
    if (!text) {
        return m.reply(
            `Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://vt.tiktok.com/`
        )
    }

    LenwyLD()

    try {
        let anu = await fetchJson(`https://api.vreden.my.id/api/v1/download/tiktok?url=${text}`)
        let c = 0

        for (let imgs of anu.result.data) {
            if (imgs.type === "nowatermark") {
                await lenwy.sendMessage(
                    m.chat,
                    {
                        video: { url: imgs.url },
                        caption: `*Video Info* :
- Region : ${anu.result.region}
- Duration : ${anu.result.duration}

*Statistik Info* :
- Views : ${anu.result.stats.views}
- Likes : ${anu.result.stats.likes}
- Comment : ${anu.result.stats.comment}
- Share : ${anu.result.stats.share}
- Download : ${anu.result.stats.download}

*Caption* :
${anu.result.title}`
                    },
                    { quoted: m }
                )
            }

            if (imgs.type === "photo") {
                if (c === 0) {
                    await lenwy.sendMessage(
                        m.chat,
                        {
                            image: { url: imgs.url },
                            caption: `*Photo Info* :
- Region : ${anu.result.region}
- Duration : ${anu.result.duration}

*Statistik Info* :
- Views : ${anu.result.stats.views}
- Likes : ${anu.result.stats.likes}
- Comment : ${anu.result.stats.comment}
- Share : ${anu.result.stats.share}
- Download : ${anu.result.stats.download}

*Caption* :
${anu.result.title}
${m.isGroup && anu.result.data.length > 1 ? "\n_Sisa foto dikirim ke private chat_\n" : "\n"}`
                        },
                        { quoted: m }
                    )
                } else {
                    await lenwy.sendMessage(
                        m.sender,
                        { image: { url: imgs.url } },
                        { quoted: m }
                    )
                }

                c += 1
                await sleep(2000)
            }
        }
    } catch (error) {
        console.log(error)
    }
}
break


case 'tiktokfoto':
case 'ttfoto':
case 'tiktokfoto': {
 if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
 if (!text) return m.reply(`*Bukan Gitu Loh*\n> *${command} <link>*`)
 try {
 LenwyLD()
 await sleep(3000)
 let tiktok = await (await fetch(`https://api.tiklydown.eu.org/api/download?url=${text}`)).json()
 let tiktokCaption = tiktok.title;
 let dataPengirim = tiktok.author;
 let res = await tiktok2(`${text}`)
 let capt = res.title;
 let result = `🎁 *Hasilnya*\n\n*Name : ${dataPengirim.name}*\n*Nickname : ${dataPengirim.unique_id}*\n*Bio :${dataPengirim.signature}*\n\n*Caption :*\n ${tiktokCaption}`;

 for (let i = 0; i < tiktok.images.length; i++) {
 let image = tiktok.images[i]
 await lenwy.sendMessage(m.chat, { image: { url: image.url }}, { quoted: m })
 }
 lenwy.sendMessage(m.chat, { audio: { url: res.music }, caption: `${capt}`, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })

 m.reply(result)
 } catch (error) {
 console.error(error) // Log error untuk debugging
 m.reply(error)
 }
}
break


case 'tiktokaudio':
case 'ttaudio': {
  if (!text) return m.reply(`*Link Tiktoknya Mana?*`)
  try {
    LenwyLD()
    await sleep(3000)
    let tiktok = await (await fetch(`https://api.tiklydown.eu.org/api/download?url=${text}`)).json()
    let tiktokCaption = tiktok.title;
    let dataPengirim = tiktok.author;
    let result = `🎁 *Hasilnya*\n\n*Name : ${dataPengirim.name}*\n*Nickname : ${dataPengirim.unique_id}*\n*Bio :* *${dataPengirim.signature}*\n\n*Caption :*\n  ${tiktokCaption}`;
      
lenwy.sendMessage(m.chat, {audio: {url: tiktok.music.play_url }, contextInfo: {
mentionedJid: [m.sender], 
isForwarded: false,
externalAdReply:{
showAdAttribution: false,
renderLargerThumbnail: false,
title: tiktok.music.title,
mediaType: 1, 
body: `Tiktok`,
thumbnailUrl: tiktok.music.cover_medium,
sourceUrl : `${text}`
},
}, mimetype: 'audio/mp4' }, {quoted: m})
    await m.reply(result)
  } catch (error) {
    console.error(error) // Log error untuk debugging
    m.reply(error)
  }
}
break

case 'ttsearch': {
LenwyLD()
await sleep(3000)
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
if (args.length == 0) return m.reply(`*Link Tiktoknya Mana?*`)
LenwyLD()
await sleep(2500)
try{
let anu = await fetchJson(`https://api.junn4.my.id/search/tiktoksearch?query=${text}`)
let result = `🎁 *Tiktok Search*`
await lenwy.sendMessage(m.chat, { video: { url: anu.result.no_watermark}, caption: `${result}`}, {quoted: m})
}catch (error) {
m.reply(mess.error)
}
}
break

case 'ttstalk':
case 'tiktokstalk':
case 'stalktiktok':
case 'stalktt': {
  if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
  if (!text) return m.reply(`*Bukan Gitu Loh*\n> *${command} <namaUser>*`)
  
  try {
    LenwyLD()
    await sleep(3000)
    let tiktok = await (await fetch(`https://api.tiklydown.eu.org/api/stalk?user=${text}`)).json()
    let user = tiktok.data.user;
    let stats = tiktok.data.stats;
    
    let caption = `*Username:* ${user.uniqueId}\n` +
                  `*Nickname:* ${user.nickname}\n` +
                  `*Bio:* ${user.signature}\n` +
                  `*Negara:* ${user.region}\n` +
                  `*Verified:* ${user.verified ? 'Yes' : 'No'}\n` +
                  `*Akun Private:* ${user.privateAccount ? 'Yes' : 'No'}\n` +
                  `*Total Pengikut:* ${stats.followerCount}\n` +
                  `*Total Mengikuti:* ${stats.followingCount}\n` +
                  `*Total Disukai:* ${stats.heartCount}\n` +
                  `*Total Video:* ${stats.videoCount}`;
    
    // Mengirim gambar profil dengan caption
    await lenwy.sendMessage(m.chat, {
      image: { url: user.avatarLarger },
      caption: caption
    }, { quoted: m })

  } catch (error) {
    m.reply('*Masukkan Query Lainnya Atau Coba Lagi Nanti*')
  }
}
break

//------------------------------------------------------------------- [ TT DOWNLOADER ] -----------------------------------------------------------------------------


//------------------------------------------------------------------- [ IG DOWNLOADER ] -----------------------------------------------------------------------------
        
case 'instagram': 
case 'ig':
case 'igdl': 
case 'igmp4': {
const {
    igdl: igdl
} = require("btch-downloader");
    if (!text) return m.reply("Masukkan Linknya ?");
       
    LenwyLD()
    const mediaUrl = await igdl(text);
    const urlmedia = mediaUrl[0].url;
    try {
        const response = await axios.head(urlmedia); 
        const contentType = response.headers['content-type']; // Mendapatkan tipe konten dari header
        if (contentType.startsWith('image/')) {
            await lenwy.sendMessage(m.chat, { image: { url: urlmedia}, caption: mess.success }, { quoted: m });
            return
        } else {
            await lenwy.sendMessage(m.chat, { video: { url: urlmedia}, caption: mess.success }, { quoted: m });
            return 
        }
    } catch(e) {
        return m.reply(e)
    }
}
break
        
  case 'ig2': {
  try {
    if (!q) return m.reply(`Linknya?\nContoh: ${prefix + command} https://www.instagram.com/p/CKXZ1Z1JZK/`);

    LenwyLD();
    let res = await fetchJson(`https://skizo.tech/api/igdl?url=${q}&apikey=deoberon`);

    for (let i of res.media) {
      await sleep(20);

      // Mengirim video
      await lenwy.sendMessage(from, { video: { url: i }, caption: `*INSTAGRAM DOWNLOADER*\n\n${res.caption}` }, { quoted: m });
    }
  } catch (e) {
    m.reply(e)
  }
}
break;
        
 
case 'igdl3': {
const axios = require('axios');
const qs = require('qs');
const cheerio = require('cheerio');
//scrape by: https://whatsapp.com/channel/0029VavOkL00lwgmRLmffH1i/158
const instadl = async (url) => {
    let data = qs.stringify({
        'url': url,
        'v': '3',
        'lang': 'en'
    });

    let config = {
        method: 'POST',
        url: 'https://api.downloadgram.org/media',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0',
            'Content-Type': 'application/x-www-form-urlencoded',
            'accept-language': 'id-ID',
            'referer': 'https://downloadgram.org/',
            'origin': 'https://downloadgram.org',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'priority': 'u=0',
            'te': 'trailers'
        },
        data: data
    };

    try {
        const response = await axios.request(config);
        const $ = cheerio.load(response.data);
        let mediaInfo = {};

        if ($('video').length) {
            mediaInfo.videoUrl = $('video source').attr('src');
        } else if ($('img').length) {
            mediaInfo.imageUrl = $('img').attr('src');
        }

        for (let key in mediaInfo) {
            if (mediaInfo.hasOwnProperty(key)) {
                mediaInfo[key] = mediaInfo[key].replace(/\\\\"/g, '').replace(/\\"/g, '');
            }
        }

        return mediaInfo;
    } catch (error) {
        return { error: 'Error: ' + error.message };
    }
};
   
    if (command === 'igdl') {
        if (!args[0]) {
            return m.reply('url?!');
        }

        const url = args[0];
        if (!/^https?:\/\/(www\.)?instagram\.com/.test(url)) {
            return m.reply('gak valid.');
        }

        m.reply('✨ Wait..');

        const result = await instadl(url);
        if (result.error) {
            return m.reply(`emror: ${result.error}`);
        }

        if (result.videoUrl) {
            try {
                const videoBuffer = await axios.get(result.videoUrl, { responseType: 'arraybuffer' });
                await lenwy.sendMessage(m.chat, { video: Buffer.from(videoBuffer.data), caption: '✅ Video berhasil' });
            } catch (error) {
                m.reply('Gagal mengunduh dan mengirim video.');
            }
        } else if (result.imageUrl) {
            try {
                const imageBuffer = await axios.get(result.imageUrl, { responseType: 'arraybuffer' });
                await lenwy.sendMessage(m.chat, { image: Buffer.from(imageBuffer.data), caption: '✅ Gambar berhasil' });
            } catch (error) {
                m.reply('Gagal mengunduh dan mengirim gambar.');
            }
        } else {
            m.reply('Media tidak ditemukan di URL yang diberikan.');
        }
    }
}
break      
        
/* case 'ig':
case 'igdl': {
  if (!text) return m.reply(`*Link Instagramnya Mana?*`)
  if (!isUrl(text)) return m.reply(mess.link)
  
  LenwyLD()
  await sleep(500)
  try {
    let response = await (await fetch(`https://api.neoxr.eu/api/ig?url=${text}&apikey=31050602`)).json()

    if (response.data && response.data.length > 0) {
      for (let item of response.data) {
        if (item.type === "jpg") {
          await lenwy.sendMessage(m.chat, { image: { url: item.url } })
        } else if (item.type === "mp4") {
          await lenwy.sendMessage(m.chat, { video: { url: item.url } })
        }
        await sleep(500)
      }
    }    
  } catch (e) {
    m.reply(e)
  }
}
break */

/*
case 'ig':
case 'igdl': {
if (!text) return m.reply(`*Link Instagramnya Mana?*`)
if (!isUrl(text)) return m.reply(mess.link)
let response = await (await fetch(`https://endpoint.web.id/downloader/instagram?key=315602&url=${text}`)).json()
let result = response.result
LenwyLD()
await sleep(3000)
m.reply(`Kalau Tombol Dibawah Ga Muncul Bisa Langsung Menggunakan\n\n> ${prefix}igvideo <link>\n> ${prefix}igfoto <link>`)
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*Mau Download Dalam Format Apa?*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: ``
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: ``,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Video","id":"${prefix}igvideo ${text}"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Foto","id":"${prefix}igfoto ${text}"}`
              }
],
}), contextInfo: {
mentionedJid: [m.sender], 
isForwarded: false,
externalAdReply:{
showAdAttribution: false,
renderLargerThumbnail: true,
title: `Instagram`,
mediaType: 1, 
body: ``,
thumbnailUrl: result.imagePath,
sourceUrl : `${text}`
},
},
})
}
}
}, { quoted: m })
await lenwy.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}
break


case 'igfoto': {
  if (!text) return m.reply(`*Link Instagramnya Mana?*`)
  if (!isUrl(text)) return m.reply(mess.link)
  LenwyLD()
  await sleep(3000)

  try {
    let response = await (await fetch(`https://endpoint.web.id/downloader/instagram?key=315602&url=${text}`)).json()
    let { result } = response;
      let imageUrl = result.downloadLinks.find(link => link.quality === "Download Image")
      
      if (imageUrl) {
        let caption = `🎁 *Selesai*\n\nTidak ada komentar ditemukan.`;
        lenwy.sendMessage(m.chat, { image: { url: imageUrl.url }, caption: caption }, { quoted: m })
      } else {
        let videoUrl = result.downloadLinks[0].url
        let caption = `🎥 *Video Ditemukan*\n\n${result.title}`;
        lenwy.sendMessage(m.chat, { video: { url: videoUrl }, caption: caption }, { quoted: m })
      }
  } catch (error) {
    let response = await (await fetch(`https://endpoint.web.id/downloader/retatube?key=315602&url=${text}`)).json()
    if (response.result.downloadLinks && response.result.downloadLinks.length > 0) {
      let imageUrls = response.result.downloadLinks.filter(link => link.quality === "Download Image").map(link => link.url)
      let videoUrls = response.result.downloadLinks.filter(link => link.quality !== "Download Image").map(link => link.url)
      let caption = response.result.title
      if (imageUrls.length > 0) {
        for (let imageUrl of imageUrls) {
          await lenwy.sendMessage(m.chat, { image: { url: imageUrl }})
        }
      }

      if (videoUrls.length > 0) {
        for (let videoUrl of videoUrls) {
          await lenwy.sendMessage(m.chat, { video: { url: videoUrl }})
        }
      }
      await sleep(1000)
      await lenwy.sendMessage(m.chat, { text: caption})
    }
  }
}
break


case 'igvideo': {
  if (!text) return m.reply(`*Link Instagramnya Mana?*`)
  if (!isUrl(text)) return m.reply(mess.link)
  LenwyLD()
  await sleep(3000)

  try {
    let response = await (await fetch(`https://endpoint.web.id/downloader/instagram?key=315602&url=${text}`)).json()
    let { result } = response;
    
    if (!result || !result.videoUrl) return m.reply("Tidak ada video yang ditemukan.")

    let videoUrl = result.videoUrl;
    let komentar = result.comments;

    // Membuat caption yang mencakup komentar
    let caption = `🎁 *Selesai*\n\n`
    if (komentar && komentar.length > 0) {
      komentar.forEach(comment => {
        caption += `Username: ${comment.username}\nComment: ${comment.text}\n\n`
      })
    } else {
      caption += `Tidak ada komentar ditemukan.`;
    }

    lenwy.sendMessage(m.chat, { video: { url: videoUrl }, caption: caption }, { quoted: m })
  } catch (error) {
    console.error(error)
    m.reply(mess.error)
  }
}
break

case 'igslide': {
    if (!text) return m.reply("*Link Instagramnya Mana?*")
        if (!isUrl(args[0])) return m.reply(mess.link)
LenwyLD()
    await sleep(2500)
try {
    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
} catch (error) {
    return m.reply(mess.error)
  }
  let api_response = await res.json()
    LenwyLD()
  await sleep(3000)
  if (!api_response || !api_response.data) {
    return m.reply(`*⚠️ Kayaknya Ada Yang Error*`)
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let result = `🎁 *Selesai*`
    if (mediaType === 'video') {
      lenwy.sendMessage(m.chat, {video: {url: mediaURL}, caption: result}, {quoted: m})
    } else if (mediaType === 'image') {
      lenwy.sendMessage(m.chat, { image: {url: mediaURL}, caption: result}, {quoted: m})
    }
  }
}
break
*/


//------------------------------------------------------------------- [ IG DOWNLOADER ] -----------------------------------------------------------------------------


//------------------------------------------------------------------- [ FB DOWNLOADER ] -----------------------------------------------------------------------------



case 'fb':
case 'fbdl': {
 if (!text) return m.reply(`*Link Fbnya Mana?*`)
 if (!isUrl(text)) return m.reply(mess.link)
 LenwyLD()
 await sleep(1500)
 try {
 let { status, result } = await (await fetch(`https://api.maelyn.sbs/api/facebook?url=${text}&apikey=wyq3Zrsd53`)).json()
 if (status === "Success") {
 let videoHD = result.medias.find(media => media.quality === 'hd')
 await lenwy.sendMessage(m.chat, { video: { url: videoHD?.url }}, { quoted: m })
 } else {
 m.reply(`Gagal mengambil data`)
 }
 } catch (error) {
 m.reply(`Error: ${error}`)
 console.log(error)
 }
}
break

case 'fbfoto': {
  if (!text) return m.reply(`*Link Fbnya Mana?*`)
  if (!isUrl(text)) return m.reply(mess.link)
  LenwyLD()
  await sleep(3000)
  try {
    let response = await (await fetch(`https://endpoint.web.id/downloader/retatube?key=315602&url=${text}`)).json()
    // Memastikan bahwa response dan result ada
    if (!response.result || response.result.downloadLinks.length === 0) {
      return m.reply('*Tidak ada gambar ditemukan.*')
    }
    // Mengambil gambar pertama dari downloadLinks
    let imageUrl = response.result.downloadLinks[0].url; // Ambil hanya gambar pertama
    let title = response.result.title;
    // Membuat caption yang mencakup komentar
    let caption = `🎁 *Selesai*\n\n${title}`;
    lenwy.sendMessage(m.chat, { image: { url: imageUrl }, caption: caption }, { quoted: m })
  } catch (error) {
    console.error(error)
    m.reply(mess.error)
  }
}
break

case 'fbvideo': {
  if (!text) return m.reply(`*Link Fbnya Mana?*`)
  if (!isUrl(text)) return m.reply(mess.link)
  LenwyLD()
  await sleep(3000)
  try {
    let response = await (await fetch(`https://endpoint.web.id/downloader/retatube?key=315602&url=${text}`)).json()
    // Memastikan bahwa response dan result ada
    if (!response.result || response.result.downloadLinks.length === 0) {
      return m.reply('*Tidak ada gambar ditemukan.*')
    }
    // Mengambil gambar pertama dari downloadLinks
    let videoUrl = response.result.downloadLinks[0].url; // Ambil hanya gambar pertama
    let title = response.result.title;
    // Membuat caption yang mencakup komentar
    let caption = `🎁 *Selesai*\n\n${title}`;
    lenwy.sendMessage(m.chat, { video: { url: videoUrl }, caption: caption }, { quoted: m })
  } catch (error) {
    console.error(error)
    m.reply(mess.error)
  }
}
break



//------------------------------------------------------------------- [ FB DOWNLOADER ] -----------------------------------------------------------------------------

//------------------------------------------------------------------- [ X DOWNLOADER ] -----------------------------------------------------------------------------




case 'xdl':
case 'twitter': {
if (!text) return m.reply(`*Link Twitternya Mana?*`)
if (!isUrl(text)) return m.reply(mess.link)
LenwyLD()
await sleep(3000)
m.reply(`Kalau Tombol Dibawah Ga Muncul Bisa Langsung Menggunakan\n\n> ${prefix}twittervideo <link>\n> ${prefix}twitterfoto <link>`)
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*Mau Download Dalam Format Apa?*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: ``
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: ``,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Video","id":"${prefix}twittervideo ${text}"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Foto","id":"${prefix}twitterfoto ${text}"}`
              }
],
}), contextInfo: {
mentionedJid: [m.sender], 
isForwarded: false,
externalAdReply:{
showAdAttribution: false,
renderLargerThumbnail: false,
title: `Twitter`,
mediaType: 1, 
body: ``,
thumbnailUrl: `https://endpoint.web.id/server/file/r0983lQwbAMrrGN.jpg`,
sourceUrl : `${text}`
},
},
})
}
}
}, { quoted: m })
await lenwy.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}
break

case 'twittervideo': {
  if (!text) return m.reply(`*Link Twitternya Mana?*`)
  if (!isUrl(text)) return m.reply(mess.link)
  LenwyLD()
  await sleep(3000)
  try {
    let response = await (await fetch(`https://endpoint.web.id/downloader/cobalt?key=315602&url=${text}`)).json()
    // Mengambil gambar pertama dari downloadLinks
    let videoUrl = response.result.url; // Ambil hanya gambar pertama
    let title = response.result.quality;
    // Membuat caption yang mencakup komentar
    let caption = `🎁 *Selesai*\n\n${title}`;
    lenwy.sendMessage(m.chat, { video: { url: videoUrl }, caption: caption }, { quoted: m })
  } catch (error) {
    console.error(error)
    m.reply(mess.error)
  }
}
break

case 'twitterfoto': {
  if (!text) return m.reply(`*Link Twitternya Mana?*`)
  if (!isUrl(text)) return m.reply(mess.link)
  LenwyLD()
  await sleep(3000)
  try {
    let response = await (await fetch(`https://endpoint.web.id/downloader/cobalt?key=315602&url=${text}`)).json()
    let imageUrl = response.result.url; // Ambil hanya gambar pertama
    let title = response.result.quality;
    // Membuat caption yang mencakup komentar
    let caption = `🎁 *Selesai*\n\n${title}`;
    lenwy.sendMessage(m.chat, { image: { url: imageUrl }, caption: caption }, { quoted: m })
  } catch (error) {
    console.error(error)
    m.reply(mess.error)
  }
}
break



//------------------------------------------------------------------- [ X DOWNLOADER ] -----------------------------------------------------------------------------











case 'ssweb': 
case 'ssdesktop':
case 'ssdesktop': {
				
				if (!text) return m.reply('Masukkan URL untuk di-screenshot!');
 lenwy.sendMessage(from, {react: {text: "⚡",key:m.key}})
				
				let sswebfull = (`https://api.jerexd666.wongireng.my.id/tools/ssweb?url=9a202a61afaa4ba0877f12f03e86ea96&url=${encodeURIComponent(text)}&format=png&fresh=true&full_page=true&response_type=json&no_cookie_banners=true&no_ads=true&no_tracking=true&time_zone=Asia/Jakarta`);
				try { 
					let response = await fetch(sswebfull);
					let json = await response.json(); 
					if (!json.url) {
						return m.reply('Gagal mengambil screenshot. Pastikan URL yang dimasukkan valid.');
					}
					await lenwy.sendMessage(m.chat, {
						image: {url: json.url},
						caption: mess.done
					}, { 
						quoted: m 
					});
				} catch (error) {
					console.error(error);
m.reply('Terjadi kesalahan saat mengambil screenshot.');
				}
			}
			
			break
        
case 'sswebhp': 
case 'sshp':
case 'sshandphone': {
  if (!q) return m.reply(`*Contoh ${prefix + command} Link Kamu*`)
  // URL API dengan parameter
  const apiUrl = `https://api.jerexd666.wongireng.my.id/tools/ssweb?url=${encodeURIComponent(q)}`;
  try {
    // Memanggil API
    const response = await axios.get(apiUrl)
    // Mengecek status dan kode
    if (response.data.status && response.data.code === 200) {
      // Mendapatkan URL gambar dari hasil API
      const imageUrl = response.data.result;
      // Mengirim gambar dengan captio
      lenwy.sendMessage(from, { image: { url: imageUrl }, caption: mess.success }, { quoted: m })
    } else {
      m.reply('Gagal mendapatkan tangkapan layar dari API.')
    }
  } catch (error) {
    console.error('Error saat memanggil API:', error)
    m.reply('Terjadi kesalahan saat memproses permintaan.')
  }
}
break
       
case 'sstab': {
  if (!q) return m.reply(`*Contoh ${prefix + command} Link Kamu*`)
  // URL API dengan parameter
  const apiUrl = `https://endpoint.web.id/tools/sswebtab?key=315602&url=${encodeURIComponent(q)}`;
  try {
    // Memanggil API
    const response = await axios.get(apiUrl)
    // Mengecek status dan kode
    if (response.data.status && response.data.code === 200) {
      // Mendapatkan URL gambar dari hasil API
      const imageUrl = response.data.result;
      // Mengirim gambar dengan caption
      lenwy.sendMessage(from, { image: { url: imageUrl }, caption: mess.success }, { quoted: m })
    } else {
      m.reply('Gagal mendapatkan tangkapan layar dari API.')
    }
  } catch (error) {
    console.error('Error saat memanggil API:', error)
    m.reply('Terjadi kesalahan saat memproses permintaan.')
  }
}
break

case 'wm':
case 'swm': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
let teks = `${text}`
try {
 if (!quoted) m.reply `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await lenwy.sendImageAsSticker(from, media, m, { packname: `${teks}`, author: global.author })
await fs.unlinkSync(encmedia)
}
} catch (e) {
m.reply(mess.error)
}
}
break



case 'enka':
            case 'profilgi':
            if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
			if (args.length == 0) return m.reply(`*Contoh: ${prefix + command}* 800000001`)
            LenwyLD()
          await sleep(3000)
			global.sh = `https://enka.network/u/${args[0]}`
let krt = await ssweb(global.sh)
			axios.get(`https://enka.network/api/uid/${args[0]}?info`).then(({ data }) => {
				var caption = `*Profile Genshin*\n\n  *⨠ Nickname* : *${data.playerInfo.nickname}*\n`
				caption += `  *⨠ Adventure Rank* : *${data.playerInfo.level}*\n`
				caption += `  *⨠ Signature* : *${data.playerInfo.signature}*\n`
				caption += `  *⨠ World Level* : *${data.playerInfo.worldLevel}*\n\n`
				caption += `  *⨠ Achievement* : *${data.playerInfo.finishAchievementNum}*\n`
				caption += `  *⨠ Abyss* : *Floor ${data.playerInfo.towerFloorIndex} Chamber ${data.playerInfo.towerLevelIndex}*\n\n`
				caption += `🎁 *Lebih Lengkap Cek Disini :* https://enka.network/u/${args[0]}\n`
				lenwy.sendMessage(from ,{ image: krt.result, caption: caption },{ quoted: m })
			})
			.catch(console.error)
			break

case 'bucin': case 'dare': case 'faktaunik': case 'fml': case 'katabijak': case 'katacinta': case 'katagalau': case 'katahacker': case 'katailham': case 'katasenja': case 'katasindiran': case 'motivasi': case 'nickff': case 'pantun': case 'puisi': case 'quotesislamic': case 'quotespubg': case 'truth': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case 'quotes':
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
var resi = await Quotes()
teks = `\n${global.emoji} *Author: ${resi.author}*\n`
teks = `\n🎁 *Quotes:*\n`
teks = `*${resi.quotes}*\n`
m.reply(teks)
break

case 'quotesanime': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
const an1 = JSON.parse(fs.readFileSync("./data/quotesanime.json"))
const r4ndan1 = an1[Math.floor(Math.random() * an1.length)]
const tgt99 = `*Random Quotes Anime*

🍁 *Nama Anime : ${r4ndan1.anime}*
🍁 *Nama Character : ${r4ndan1.character}*
🍁 *Episode : ${r4ndan1.episode}*

🎁 *Quotes : ${r4ndan1.quotes}*`
lenwy.sendMessage(from, { text: tgt99 }, { quoted: m })
}
break

case 'kompasnews':
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(3000)
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n*Berita ${no.toString()}*\n`
teks += ` *⨠ Berita: ${i.berita}*\n`
teks += ` *⨠ Upload: ${i.berita_diupload}*\n`
teks += ` *⨠ Jenis: ${i.berita_jenis}*\n`
teks += ` *⨠ Link:* ${i.berita_url}\n`
}
teks += ""
lenwy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break

case 'detiknews':
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(3000)
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n*Berita ${no.toString()}*\n`
teks += ` *⨠ Berita: ${i.berita}*\n`
teks += ` *⨠ Upload: ${i.berita_diupload}*\n`
teks += ` *⨠ Link:* ${i.berita_url}\n`
}
teks += ""
lenwy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break

case 'dailynews':
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(3000)
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n*Berita ${no.toString()}*\n`
teks += ` *⨠ Berita: ${i.berita}*\n`
teks += ` *⨠ Link:* ${i.berita_url}\n`
}
teks += ""
lenwy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break

case 'inews':
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(3000)
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n*Berita ${no.toString()}*\n`
teks += ` *⨠ Berita: ${i.berita}*\n`
teks += ` *⨠ Upload: ${i.berita_diupload}*\n`
teks += ` *⨠ Jenis: ${i.berita_jenis}*\n`
teks += ` *⨠ Link:* ${i.berita_url}\n`
}
teks += ""
m.reply(teks) 
})
break

case 'kontan':
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(3000)
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n*Berita ${no.toString()}*\n`
teks += ` *⨠ Berita: ${i.berita}*\n`
teks += ` *⨠ Jenis: ${i.berita_jenis}*\n`
teks += ` *⨠ Link:* ${i.berita_url}\n`
}
teks += ""
lenwy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break

case 'meme':
var reis = await JalanTikusMeme()
teks = ""
teks += "*Random Meme*\n\n"
teks += `🎁 *Source Meme :* ${reis}`
teks += ""
lenwy.sendMessage(m.chat, { image : { url : reis }, caption: teks }, { quoted:m })
break
        
    /*case 'tourl': {  
  const { shannzCdn } = require('./lib/shannzCdn.js');
  if (!/video/.test(mime) && !/image/.test(mime)) {
    return m.reply(`*PERMINTAAN ERROR!! PESAN :*\\n> *Reply/Send Gambar/Video Dengan Caption .tourl*`);
  }
  if (!quoted) {
    return m.reply(`*PERMINTAAN ERROR!! PESAN :*\\n> *Reply/Send Gambar/Video Dengan Caption .tourl*`);
  }
  let media = await lenwy.downloadAndSaveMediaMessage(quoted);
  let anu = await shannzCdn(media);
  if (anu && anu.status) {
    m.reply(JSON.stringify(anu, null, 2)); // Send the entire response as a formatted JSON string
  } else {
    m.reply(`*ERROR: Tidak dapat mengambil URL dari media.*`);
  }
  await fs.unlinkSync(media);
}
break   */

/*case 'tourl': {
if (!/image/.test(mime) && !/video/.test(mime)) return m.reply(`*Mana Foto Atau Video Nya?*`)
if (/image/.test(mime)) {
LenwyLD()
await sleep(2500)
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
m.reply(util.format(anu))
} else if (/video/.test(mime)) {
  let q = m.quoted ? m.quoted : m;

    let media = await q.download()
    let link = await uploader60Minute(media)
    console.log(link)
    await m.reply(`${link}`)
} else {
m.reply(`Mokad kah? Chat Developer!!!`)
}
}
break*/

case 'tourlvid': {
if (!/video/.test(mime)) return m.reply(`*Mana Video Nya?*`)
LenwyLD()
await sleep(2500)
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
if (/video/.test(mime)) {
  let q = m.quoted ? m.quoted : m;

    let media = await q.download()
    let link = await uploader60Minute(media)
    await m.reply(`${link}`)
} else if (/video/.test(mime)) {
let anu = await uploader60Minute(media)
m.reply(util.format(anu))
} else {
m.reply(`Mokad kah? Chat Developer!!!`)
}
await fs.unlinkSync(media)
}
break

case 'confes':
case 'menfes':
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
if (!text) return m.reply(`*Format : Menfess Nomor|Pengirim|Pesan*\n\n📑 *Contoh : Menfes 6285261255548|Someone?|Hoiiii, Semangat Yah*`)
let nomor = q.split('|')[0] ? q.split('|')[0] : q
let lenwy_nama = q.split('|')[1] ? q.split('|')[1] : q
let lenwychat = q.split('|')[2] ? q.split('|')[2] : ''
if (lenwychat.length < 1) return m.reply(`⚠️ *Tolong Isi Semua Data Dengan Baik*`)
let lenwy_txt = `*Halo Ada Menfess Nih*\n🎁 *Dari : ${lenwy_nama}* \n📃 *Pesan :* ${lenwychat}\n\n⚠️ *Menfess Ini Dikirim Oleh ${botname}*`
lenwy.sendMessage(`${nomor}@s.whatsapp.net`, { caption: lenwy_txt, image: {url: `https://telegra.ph/file/159087e6c35acd5276a41.jpg`}})
m.reply(`*Sukses Mengirim Menfess*`)     
break

case 'confes2':
case 'menfess2':
case 'menfes2': {
                   if (m.isGroup) return m.reply('Khsus Private Chat Bot')
                   if (args.length < 1) return m.reply(`*Cara penggunaan :*\n${prefix+command} nomer|nama pengirim|pesannya\n\n*Note :* nomer harus format internasional dan nama pengirim boleh nama samaran atau rahasia\n\n*Contoh :* ${prefix+command} ${botNumber.split("@")[0]}|Seseorang|Hai Kak`)
                   var no = q.split('|')[0]
				 					 if (isNaN(no)) return m.reply(`Tujuan Harus Berupa Nomor!\n\nContoh :\n${command} `+botNumber.split("@")[0]+'|Anonim|Hai Kak')
				           var num = no.replace(/[^0-9]/g, "") 
                   var name = q.split('|')[1] 
                   var pesan = q.split('|')[2]
                    if (!num) return m.reply(`Format salah, contoh pemakaian : ${prefix+command} ${botNumber.split("@")[0]}|Anonim|Hai Kak`)
                   if (!name) return m.reply(`Format salah, contoh pemakaian : ${prefix+command} ${botNumber.split("@")[0]}|Anonim|Hai Kak`)
                   if (!pesan) return m.reply(`Format salah, contoh pemakaian : ${prefix+command} ${botNumber.split("@")[0]}|Anonim|Hai Kak`)
                  var num = num.replace(/[^0-9]/gi, '')+'@s.whatsapp.net'
                   var cek = await lenwy.onWhatsApp(num)
                   if (cek.length === 0) return m.reply(`Nomer yang anda masukkan tidak terdaftar di WhatsApp!`)
                   var num = cek[0].jid
                   if (sender === num) return m.reply(`Jangan kirim ke diri sendiri dong🥲`)
                   if (botNumber === num) return m.reply(`Jangan kirim ke nomer bot kak🥲`)
                   var teks = `Hi Saya *${botname}* Ada Yang Kirim Pesan Rahasia Untuk Kamu Nih 🥳

🌷 Nama Pengirim: *${name}*

💌 Pesan : ${pesan}


*NOTE*:
_Ketik .balas dan geser ke kanan pesan ini untuk menjawab pesan seseorang tersebut_
`                

    
                    if(/image/.test(mime)){
				    const media = await lenwy.downloadAndSaveMediaMessage(quoted)
                    const anu = await uploader60Minute(media) 
                    lenwy.sendMessage(num, {caption: teks, image: {url: anu}, mentions: [sender]})
					await sleep(2000)
				    lenwy.sendMessage(num, {image: {url: 'https://telegra.ph/file/159087e6c35acd5276a41.jpg'}, caption: 'Contoh cara membalas pesan rahasia'})
                    } else if(/video/.test(mime)){
					const media = await lenwy.downloadAndSaveMediaMessage(quoted)
                    const anu = await uploader60Minute(media) 
                    lenwy.sendMessage(num, {caption: teks, video: {url: anu}, mentions: [sender]})
					await sleep(2000)
					lenwy.sendMessage(num, {image: {url: 'https://telegra.ph/file/0ca9c64720e7728535491.jpg'}, caption: 'Contoh cara membalas pesan rahasia'})
                    } else {
                    lenwy.sendMessage(num, {text: teks, mentions: [sender]})
					await sleep(2000)
					lenwy.sendMessage(num, {image: {url: 'https://telegra.ph/file/15b96750f11c403727c6e.jpg'}, caption: 'Contoh cara membalas pesan rahasia'})      
                    }
                        m.reply(`Sukses mengirim pesan Rahasia kepada ${num.split("@")[0]}`)
                    }
                    break
case 'balas': {
  if (m.isGroup) return
  if (!m.quoted) return m.reply('Balas pesan bot yang isinya menfess di atas')
  
  const quotedMsg = m.quoted; // Mengambil pesan yang dibalas
  const quotedText = quotedMsg.text || quotedMsg.body; // Mengambil teks pesan yang dibalas

  if (!quotedText.includes('Hi Saya')) {
    return m.reply('Balas/Reply pesan bot yang isi menfes di atas')
  }

  var isSecreto = secreto.find(i => i.sender === sender)
  if (isSecreto) {
    if (isSecreto.status === 'ENTER-MESSAGE') {
      // Menangani pesan balasan
      // Misalnya, simpan pesan balasan atau lakukan tindakan lain
      m.reply(`Pesan balasan diterima: ${m.text}`)
      // Reset status atau melakukan tindakan lain sesuai kebutuhan
      isSecreto.status = 'COMPLETED'; // Contoh status baru
      fs.writeFileSync('./database/secreto_balas.json', JSON.stringify(secreto))
    }
  } else {
    var obj = {
      sender: sender,
      pengirim: quotedMsg.mentionedJid[0],
      status: 'ENTER-MESSAGE'
    };
    secreto.push(obj)
    fs.writeFileSync('./database/secreto_balas.json', JSON.stringify(secreto))
    m.reply(`Mau dibalas apa kak? Silahkan kirim pesan balasannya`)
  }
}
break

case 'reminder': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
if (!args[0] || !args[1] || !args[2]) return m.reply('*Format : Reminder Waktu Detik/Menit/Jam Pesan*\n\n📑 *Contoh : Reminder 30 Menit Jangan Lupa Sholat*')
const time = parseInt(args[0]) * (args[1].match(/(m|minute)/i) ? 60 : args[1].match(/(h|hour)/i) ? 3600 : 1) * 1000
const message = args.slice(2).join(' ')
setTimeout(() => {
lenwy.sendMessage(from, { text : `*Reminder Untuk @${sender.split("@")[0]}*\n\n📑 *Dengan Pesan :* ${message}`, contextInfo:{mentionedJid:[sender]}}, { quoted: m })}, time)
m.reply(`📑 *Berhasil Mengatur Reminder Untuk ${args[0]} ${args[1]} Ke Depan*`)
}
break

case 'mc':
case 'mcserver': 
            if (args.length == 0) return m.reply(`📦 *Java / Bedrock*`)
            if (args[0] === 'bedrock') {
                LenwyLD()
                await sleep(2500)
axios.get(`https://api.mcstatus.io/v2/status/bedrock/${args[1]}`).then(({ data }) => {
                var caption = `📑 *Minecraft Bedrock Server*\n`
                caption += ` *⨠ IP : ${data.host}*\n`
                caption += ` *⨠ Port : ${data.port}*\n`
                caption += ` *⨠ IP Address : ${data.ip_address}*\n\n`
                caption += `📊 *Server Information*\n`
                caption += ` *⨠ Gamemode : ${data.gamemode}*\n`
                caption += ` *⨠ Player Online : ${data.players.online}/${data.players.max}*\n`
                caption += ` *⨠ Version : ${data.version.name}*\n`
                caption += ` *⨠ Edition : ${data.edition}*\n`
                lenwy.sendMessage(from , {image: { url: `https://telegra.ph/file/54ff237913e8fdf5774b1.png` }, caption: caption },{ quoted: m })
            })
} else if (args[0] === 'java') {
    LenwyLD()
    await sleep(2500)
axios.get(`https://api.mcstatus.io/v2/status/java/${args[1]}`).then(({ data }) => {
                var caption = `📑 *Minecraft Java Server*\n`
                caption += ` *⨠ IP : ${data.host}*\n`
                caption += ` *⨠ Port : ${data.port}*\n`
                caption += ` *⨠ IP Address : ${data.ip_address}*\n\n`
                caption += `📊 *Server Information*\n`
                caption += ` *⨠ Player Online : ${data.players.online}/${data.players.max}*\n`
                caption += ` *⨠ Mods : ${data.mods.name}*\n`
                caption += ` *⨠ Plugins : ${data.plugins.name}*\n`
                caption += ` *⨠ Version : ${data.version.name_clean}*\n`
                lenwy.sendMessage(from , {image: { url: `https://telegra.ph/file/54ff237913e8fdf5774b1.png` }, caption: caption },{ quoted: m })
            })
} else {
m.reply('⚠️ *Nama Server Tidak Ditemukan*')
}
break

case 'jarak': {
if (!text) return m.reply(`*Contoh: ${prefix + command} Jakarta|Bandung*`)
if (text.length > 80) return m.reply(`*Maksimal 80 Karakter*`)    
LenwyLD()
await sleep(2500)
let [from, to] = text.split(/[^\w\s]/g)
if (!(from && to)) return m.reply (`*Contoh: ${prefix + command} Jakarta|Bandung*`) 
let data = await jarak(from, to)
if (data.img) return lenwy.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: m })
else m.reply(data.desc)
}
break

case 'randombluearchive': {
 
 let url = `https://deoberon-api.vercel.app/random/ba`;
 await lenwy.sendMessage(m.chat, { image: { url } }, { quoted: m });
}
 break

case 'apksearch': {
  if (!text) return m.reply(`⚠️ *Masukkan Nama Apk*`)

  LenwyLD()
  await sleep(1500)

  async function createImage(url) {
      const { imageMessage } = await generateWAMessageContent({
          image: { url }
      }, {
          upload: lenwy.waUploadToServer
      })
      return imageMessage;
  }

  try {
      const response = await axios.get(`https://endpoint.web.id/search/playstore?key=315602&query=${text}`)
      const apps = response.data.result;

      let push = []
      for (let app of apps) {
          push.push({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                  text: `Developer: \n${app.developer}\n`
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
                  text: `⭐ Rating: ${app.rate2}/5`
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                  title: app.nama, 
                  hasMediaAttachment: true,
                  imageMessage: await createImage(app.img) // Call createImage here
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                  buttons: [
                      {
                          "name": "cta_url",
                          "buttonParamsJson": `{"display_text":"Source","url":"${app.link}","merchant_url":"${app.link}"}`
                      }
                  ]
              })
          })
      }

      const bot = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
              message: {
                  messageContextInfo: {
                      deviceListMetadata: {},
                      deviceListMetadataVersion: 2
                  },
                  interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                      body: proto.Message.InteractiveMessage.Body.create({
                          text: '*Hasil Pencarian Play Store*',
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                          text: '*Hasil Dari:* ' + text,
                      }),
                      header: proto.Message.InteractiveMessage.Header.create({
                          hasMediaAttachment: false
                      }),
                      carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                          cards: push
                      })
                  })
              }
          }
      }, { quoted: m })

      await lenwy.relayMessage(m.chat, bot.message, {
          messageId: bot.key.id
      })
  } catch (e) {
      console.error(e)
      m.reply('Yah error di bagian: ' + e.message)
  }
}
break

case 'drakorsearch': {
if (!text) return m.reply(`⚠️ *Masukkan Nama Drakor*`)
var js = await fetch(`https://dikaardnt.com/api/search/drakor?q=${q}`)
LenwyLD()
await sleep(2500)
var json = await js.json()
  LenwyLD()
  await sleep(3000)
let capt = `
📑 *Judul :* ${json[0].title}
📦 *Genre :* ${json[0].genres}
📣 *Link :* ${json[0].url}
`;
await lenwy.sendMessage(m.chat, { image: { url: json[0].thumbnail }, caption: capt }, { quoted: m })
}
break

case 'animesearch':
case 'searchanime': {
  if (!text) return m.reply(`⚠️ *Masukkan Nama Anime*`)

  LenwyLD()
  await sleep(3000)
  let imageUrl = "https://endpoint.web.id/server/file/l75yVFzs2UbSEIm.png";

  try {
      let response = await axios.get(imageUrl, { responseType: 'arraybuffer' })
      let jpegThumbnail = Buffer.from(response.data, 'binary')

      let { data } = await axios({
          method: 'GET',
          url: 'https://api.nyxs.pw/anime/samehadakusearch?anime=' + text
      })
      let res = data.result
      if (res.length === 0) return m.reply('*Tidak ada hasil ditemukan*')
      function getRandomResult(results) {
          return results[Math.floor(Math.random() * results.length)]
      }
      let result = getRandomResult(res)
 
  const ss = `${result.title}`;
  const st = `[ ${command} ]

🎧  *Judul*
${ss}

📃  *status*
${result.status}

⭐  *Rating*
${result.rating}

🧬  *Link*
${result.url}


Gunakan Code Dibawah Untuk Melihat Info Dan Download Anime
> Animeinfo ${result.code_info}
> Animedownload ${result.code_dl}`;

  let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          contextInfo: {
            mentionedJid: [m.sender],
            isForwarded: false,
            externalAdReply: {
              showAdAttribution: false,
              renderLargerThumbnail: false,
              title: ss,
              mediaType: 1,
              body: `Anime`,
              thumbnailUrl: result.thumbnail,
              sourceUrl: result.url
            },
          },
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*Apakah Ini Anime Nya?*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: ``
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: ``,
            thumbnailUrl: result.thumbnail,
            subtitle: ``,
            hasMediaAttachment: false,
            ...(await prepareWAMessageMedia({
              document: fs.readFileSync('./package.json'), // Jika ada file yang ingin dilampirkan
              jpegThumbnail: jpegThumbnail,
              fileLength: 1000000000000000000,
              fileName: `${prefix}${command} ${text}`,
            }, {
              upload: lenwy.waUploadToServer
            }))
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "cta_copy",
                "buttonParamsJson": `{\"display_text\":\"codeInfo\",\"id\":\"${result.code_info}\",\"copy_code\":\"${result.code_info}\"}`
              },{
                "name": "cta_copy",
                "buttonParamsJson": `{\"display_text\":\"codeDownload\",\"id\":\"${result.code_dl}\",\"copy_code\":\"${result.code_info}\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Cari Lagi\",\"id\":\"${prefix}${command} ${text}\"}`
              }
            ]
          })
        })
      }
    }
  }, { userJid: m.sender, quoted: m })
  lenwy.sendMessage(m.chat, {text: `${st}`}, {quoted: m})
  await sleep(3000)
  await lenwy.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
} catch (error) {
  console.error('Error:', error)
  m.reply('Terjadi kesalahan saat mengambil data.')
}
}
break

case 'animeinfo':
case 'infoanime': {
    if (!text) return m.reply(`Masukkan Judul Code Info`)
    if (text.length > 30) return m.reply(`Maksimal 30 Karakter`)
    
    LenwyLD()
    await sleep(2500)
    
    try {
        let anu = await (await fetch(`https://api.nyxs.pw/anime/samehadakuinfo?code_info=${text}`)).json()
        let result = anu.result[0] // Assuming result is an array and we want the first item
        
        let caption = `📃 Judul: ${result.title}\n` +
                      `📣 Deskripsi: ${result.description}\n\n` +
                      `⭐ Rating: ${result.rating}/10\n` +
                      `📺 Total Episode: ${result.totalEpisode}\n\n` +
                      `📊 Detail:\n`

        // Loop through the detail array and add each item to the caption
        result.detail.forEach(item => {
            caption += `• ${item}\n`
        })

        await lenwy.sendMessage(m.chat, {
            text: caption,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: false,
                    title: `${result.title}`,
                    body: ``,
                    thumbnailUrl: result.thumbnail,
                    sourceUrl: `${result.url}`,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m })

    } catch (error) {
        m.reply(`⚠️ ${command} Tidak Ditemukan: ${error}`)
    }
}
break

case 'animedownload':
case 'downloadanime': {
    if (!text) return m.reply(`Masukkan Judul Code Download & Eps`)
    let args = q.split("|")
    let args1 = args[0].toLowerCase()
    let args2 = args[1]
    if (!q.includes('|')) return m.reply(`*${prefix+command} codeDownload|<episodeKe?>\n\nUntuk Mendapatkan codeDownload Silahkan Lakukan:\n${prefix}animesearch <namaAnime>`)

    LenwyLD()
    await sleep(2500)

    try {
        let response = await fetch(`https://api.nyxs.pw/anime/samehadakudl?code_dl=${args1}&episode=${args2}`)
        let data = await response.json()

        if (!data.status || !data.result) {
            return m.reply(`⚠️ Tidak ada data yang ditemukan untuk anime ini.`)
        }

        let { result } = data;
        let caption = `📥 Anime : ${args1} | Episode : ${args2}:\n\n`
        const addLinks = (format, qualityList) => {
            caption += `\n                                [ *${format.toUpperCase()}* ]\n\n`
            qualityList.forEach(item => {
                caption += `🔹 Resolution: ${item.resolution}\n`
                item.urls.forEach(link => {
                    caption += `  -  [ ${link.provider} ] :\n      ${link.url}\n\n`
                })
                caption += '\n'
            })
        };

        // Adding each format to caption
        if (result.mp4) addLinks('mp4', result.mp4)
        if (result.mkv) addLinks('mkv', result.mkv)
        if (result.x265_irit) addLinks('x265_irit', result.x265_irit)

        // Send the message with all download links
        await lenwy.sendMessage(m.chat, {
            text: caption
        }, { quoted: m })
        
    } catch (error) {
        m.reply(`⚠️ Terjadi kesalahan: ${error.message}`)
    }
}
break

case 'couple': {
LenwyLD()
await sleep(2500)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
lenwy.sendMessage(from, { image: { url: random.male }, caption: `🎁 *Couple Male*` }, {quoted:m})
lenwy.sendMessage(from, { image: { url: random.female }, caption: `🎁 *Couple Female*` }, {quoted:m})
}
break



case 'getpic': {
if (qtod === "true") {
try {
pporg = await lenwy.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
lenwy.sendMessage(from, { image : { url : pporg }, caption:`*Selesai*` }, {quoted:m})
} else if (qtod === "false") {
try {
pporgs = await lenwy.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
lenwy.sendMessage(from, { image : { url : pporgs }, caption:`*Selesai*` }, {quoted:m})
}
}
break

case 'totalfeature':
case 'totalfitur': 
case 'totalcmd': 
case 'totalcommand':
m.reply(`Hallo ${pushname}
Saat ini ${botname} memiliki total fitur ${totalfitur()}`)
break

case 'block': {
if (!isCreator) return m.reply(mess.owner)
LenwyLD()
await sleep(3000)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

case 'unblock': {
if (!isCreator) return m.reply(mess.owner)
LenwyLD()
await sleep(3000)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

case 'cwr': {
if (!text) return m.reply('*Format : Cwr [Total Match] [Winrate Saat Ini] [Target Winrate]*\n\n📑 *Contoh : Cwr 1200 67% 89%*')
var cwl = text.split(' ')
if (!cwl || cwl.length !== 3) return m.reply('*Format : Cwr [Total Match] [Winrate Saat Ini] [Target Winrate]*\n\n📑 *Contoh : Cwr 1200 67% 89%*')          
const tMatch = parseFloat(cwl[0])
const tWr = parseFloat(cwl[1])
const wrReq = parseFloat(cwl[2])          
if (isNaN(tMatch) || isNaN(tWr) || isNaN(wrReq)) {
return m.reply('⚠️ *Pastikan Semuanya Berupa Angka*')
}          
const resultNum = cwr(tMatch, tWr, wrReq)
const tekl = `*Winrate Calculator Mobile Legend*

📑 *Data Yang Diberikan*
 *⨠ Total Petandingan : ${tMatch}*
 *⨠ Winrate Saat Ini : ${tWr}%*
 *⨠ Target Winrate : ${wrReq}%*

🎁 *Hasil :*
*Butuh ${resultNum} Pertandingan Tanpa Kalah Untuk Mencapai ${wrReq}% Winrate*`;
m.reply(tekl)
}
break

case 'stalktiktok':
case 'ttstalk':
case 'stalktt':
case 'tiktokstalk':
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(3000)
if (args.length == 0) return m.reply(`Contoh: ${prefix + command} bulansutena`)
axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=haikalgans`).then(({ data }) => {
var caption = `Username : ${data.result.username}\n`
caption += `Nickname : ${data.result.nickname}\n`
caption += `Followers : ${data.result.followers}\n`
caption += `Followings : ${data.result.followings}\n`
caption += `Likes : ${data.result.likes}\n`
caption += `Video : ${data.result.video}\n`
caption += `Bio : ${data.result.bio}\n`
lenwy.sendMessage(from, { image: { url: data.result.user_picture }, caption })
})
break

case 'afk': {
if (!isAdmins) return m.reply (`Khusus Admin kocak`) 
if (text.length > 100) return m.reply(`*Maksimal 100 Karakter*`) 
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
lenwy.sendMessage(m.chat, { text: `*${pushname} Sedang AFK*\n*Dengan Alasan :* ${text ? text : 'Tidak Ada'}` })
}
break

case 'listdb':
if (!isCreator) return m.reply(mess.owner)
lenwy_user = '📦 *Database User*'
lenwy_user += `\n📑 *Total : ${pengguna.length} User*`
lenwy.sendMessage(from, { text: lenwy_user.trim() }, 'extendedTextMessage', { quoted:m, contextInfo: { "mentionedJid": pengguna } })
break

case 'getdb': {
if (!isCreator) return m.reply(mess.owner)
LenwyLD()
await sleep(2500)
let sesi = await fs.readFileSync('./src/database.json')
lenwy.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'database.json' }, { quoted: m })
}
break

case 'getuser': {
if (!isCreator) return m.reply(mess.owner)
LenwyLD()
await sleep(2500)
let sesi = await fs.readFileSync('./database/user.json')
lenwy.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'user.json' }, { quoted: m })
}
break

case 'tebak': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
 if (args[0] === "gambar") {
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendImage(from, result.img, `*Silahkan Jawab Soal Di Atas Ini*\n\n📑 *Deskripsi :* ${result.deskripsi}\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakgambar[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Gambar*`}, {quoted:m}) 
 delete tebakgambar[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kata') {
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Silahkan Jawab Pertanyaan Berikut :*\n\n📦 *${result.soal}*\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakkata[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Kata*` }, {quoted:m}) 
 delete tebakkata[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kalimat') {
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Silahkan Jawab Pertanyaan Berikut :*\n\n📦 *Pertanyaan :* ${result.soal}\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text:`🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakkalimat[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Kalimat*`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lirik') {
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Ini Adalah Lirik Dari Lagu? :* \n\n📦 *${result.soal}?*\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebaklirik[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Lirik*`} , {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
 }
 }else if (args[0] === 'kabupaten') {
 if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Silahkan Jawab Pertanyaan Berikut :*\n\n📦 *Pertanyaan :* ${result.soal}\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebakkabupaten[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text:`🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakkabupaten[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik .tebak kabupaten*`}, {quoted:m}) 
 delete tebakkabupaten[m.sender.split('@')[0]]
 }
 }
    else if (args[0] === 'family100') {
 if (tebakfamily100.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Jawab Soalan Dibawah Ini! :* \n\n📦 *${result.soal}?*\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebakfamily100[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakfamily100.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakfamily10p[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Lirik*`} , {quoted:m}) 
 delete tebakfamily100[m.sender.split('@')[0]]
 }
 }
    
    else if (args[0] === 'lontong') {
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Jawablah Pertanyaan Berikut :*\n📦 *${result.soal}*\n🕒 *Waktu : 60s*`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(60000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text:`🕒 *Waktu Habis*\n🎁 *Jawaban : ${caklontong[m.sender.split('@')[0]]}*\n\n📑 *Deskripsi : ${caklontong_desk[m.sender.split('@')[0]]}* \n\n📣 *Ingin Bermain Lagi? Ketik Tebak Lontong*`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'bendera2') {
 if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Tebak Bendera Berikut! :* \n\n📦 *${result.soal}?*\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebakbendera2[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakbendera2[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik .tebak bendera2*`} , {quoted:m}) 
 delete tebakbendera2[m.sender.split('@')[0]]
 }
 }
    
    else if (args[0] === 'bendera') 
 {
 if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Jawablah Pertanyaan Berikut :*\n📦 *${result.soal}*\n🕒 *Waktu : 60s*`, m).then(() => {
 tebakbendera[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
tebakbendera[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(60000)
 if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text:`🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakbendera[m.sender.split('@')[0]]}*\n\n📑 *Deskripsi : ${tebakbendera_desk[m.sender.split('@')[0]]}* \n\n📣 *Ingin Bermain Lagi? Ketik .tebak bendera*`}, {quoted:m}) 
 delete tebakbendera[m.sender.split('@')[0]]
 }
}
}
break

case 'kuismath': case 'math': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let { genMath, modes } = require('./src/math')
 if (!text) m.reply `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
 let result = await genMath(text.toLowerCase())
 lenwy.sendText(from, `*Berapa Hasil Dari : ${result.soal.toLowerCase()}*?\n\n🕒 *Waktu : ${(result.waktu / 1000).toFixed(2)} detik*`, m).then(() => {
 kuismath[m.sender.split('@')[0]] = result.jawaban
 })
 await sleep(result.waktu)
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 m.reply("🕒 *Waktu Habis*\n🎁 *Jawaban :* " + kuismath[m.sender.split('@')[0]])
 delete kuismath[m.sender.split('@')[0]]
 }
}
break

case 'tebakangka':
    if (gameState.angkaAcak === null) {
        // Jika angka belum ditentukan, inisialisasi angka acak
        gameState.angkaAcak = Math.floor(Math.random() * 20) + 1;
        gameState.jumlahTebakan = 0; // Reset jumlah tebakan
        m.reply('Aku sudah memikirkan sebuah angka antara 1-20. Coba tebak!')
    } else {
        // Jika angka sudah ditentukan, periksa tebakan
        const tebakan = parseInt(text)
        if (isNaN(tebakan) || tebakan < 1 || tebakan > 20) {
            return m.reply('Tebakan harus berupa angka antara 1-20.')
        }

        gameState.jumlahTebakan++;

        if (tebakan < gameState.angkaAcak) {
            return m.reply("Tebakan Anda terlalu rendah. Coba lagi!")
        } else if (tebakan > gameState.angkaAcak) {
            return m.reply("Tebakan Anda terlalu tinggi. Coba lagi!")
        } else {
            // Jika tebakan benar
            m.reply(`Selamat! Anda telah menebak angka ${gameState.angkaAcak} dengan ${gameState.jumlahTebakan} tebakan.`)
            // Reset permainan
            gameState.angkaAcak = null;
        }
    }
break

case 'ttc': case 'ttt': case 'tictactoe': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply('⚠️ *Kamu Masih Didalam Permainan Atau Menunggu Lawan Bermain*\n\n> Ketik delttc atau nyerah untuk keluar dari permainan')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('*Lawan Bermain Ditemukan*')
room.o = from
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await lenwy.sendText(room.x, str, m, { mentions: parseMention(str) } )
await lenwy.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: from,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('*Menunggu Lawan Bermain*' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break

case 'delttc': case 'delttt': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) return m.reply('Kamu sedang tidak berada di room tictactoe!')
delete this.game[roomnya.id]
m.reply('Berhasil delete session room tictactoe!')
}
break

case 'del':
case 'del':
case 'delete': { 
 if (!isAdmins) return m.reply (`khusus admin lol`)
 if (!m.quoted) return m.reply("*Balas Pesan Yang Ingin Dihapus Oleh Bot*")
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
 await lenwy.sendMessage(m.chat, {
 delete: {
 remoteJid: m.chat,
 id: m.quoted.id,
 participant: m.quoted.sender,
 },
 })
}
break









case 'jadinyata':
case 'toreal':
case 'toanime':
case 'jadianime': {
  if (!quoted) return m.reply(`*Fotonya Mana?*`)
  if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)

  let { key } = await lenwy.sendMessage(m.chat, { text: mess.wait }, { quoted: m })
  let type = "anime2d";
  if (["jadinyata", "toreal"].includes(command)) {
    type = "anime2real";
  }

  try {
    let media = await lenwy.downloadAndSaveMediaMessage(quoted)
    let anu = await uploader60Minute(media)

    let ai = await fetch(`${api.xterm.url}/api/img2img/filters?action=${type}&url=${anu}&key=${api.xterm.key}`).then(a => a.json())
    console.log(ai)

    if (!ai.status) return m.reply(ai?.msg || "Error!")

    let tryng = 0;
    while (tryng < 55) {
      let s = await fetch(`${api.xterm.url}/api/img2img/filters/batchProgress?id=${ai.id}`).then(a => a.json())
      await lenwy.sendMessage(m.chat, { text: s?.progress || "Prepare...", edit: key }, { quoted: m })

      if (s.status == 3) {
        if (s.url) {
          return lenwy.sendMessage(m.chat, { image: { url: s.url } }, { quoted: m })
        } else {
          return m.reply("Gambar tidak tersedia. Harap coba lagi atau beberapa saat lagi.")
        }
      }

      if (s.status == 4) {
        return m.reply("Maaf terjadi kesalahan. Coba gunakan gambar lain!")
      }

      await new Promise(resolve => setTimeout(resolve, 5000))
      tryng++;
    }
  } catch (e) {
    console.error(e)
    m.reply(`Terjadi kesalahan: ${e.message || 'Harap coba beberapa saat lagi'}`)
  }
}
break

case 'tocyberpunk':
case 'jadicyberpunk':
    if (isBan) return m.reply(mess.ban)
    if (!quoted) return m.reply(`*Fotonya Mana?*`)
    if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)

    if (/image/.test(mime)) {
        try {
            m.reply('Process converting image, mungkin membutuhkan waktu yang lama')
            let q = m.quoted ? m.quoted : m;
        
        
          
              let media = await q.download()
              let mem = await uploader60Minute(media)

            let response = await (await fetch(`https://api.nyxs.pw/ai-image/jadicyberpunk?url=${mem}`)).json()
            let an = response.result;
            lenwy.sendMessage(m.chat, { image: { url: an }, caption: `Nih Bos` }, { quoted: m })

        } catch (error) {
            console.error('Error processing image:', error)
            m.reply('Harap coba beberapa saat lagi')
        }
    }
    break

    case 'todreamscape':
      case 'jadidreamscape':
          if (isBan) return m.reply(mess.ban)
          if (!quoted) return m.reply(`*Fotonya Mana?*`)
          if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)
      
          if (/image/.test(mime)) {
              try {
                  m.reply('Process converting image, mungkin membutuhkan waktu yang lama')
                  let q = m.quoted ? m.quoted : m;
              
              
                
                    let media = await q.download()
                    let mem = await uploader60Minute(media)
      
                  let response = await (await fetch(`https://api.nyxs.pw/ai-image/jadidreamscape?url=${mem}`)).json()
                  let an = response.result;
                  lenwy.sendMessage(m.chat, { image: { url: an }, caption: `Nih Bos` }, { quoted: m })
      
              } catch (error) {
                  console.error('Error processing image:', error)
                  m.reply('Harap coba beberapa saat lagi')
              }
          }
          break

          case 'tocomic':
            case 'jadicomic':
                if (isBan) return m.reply(mess.ban)
                if (!quoted) return m.reply(`*Fotonya Mana?*`)
                if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)
            
                if (/image/.test(mime)) {
                    try {
                        m.reply('Process converting image, mungkin membutuhkan waktu yang lama')
                        let q = m.quoted ? m.quoted : m;
                    
                    
                      
                          let media = await q.download()
                          let mem = await uploader60Minute(media)
            
                        let response = await (await fetch(`https://api.nyxs.pw/ai-image/jadivaporwave?url=${mem}`)).json()
                        let an = response.result;
                        lenwy.sendMessage(m.chat, { image: { url: an }, caption: `Nih Bos` }, { quoted: m })
            
                    } catch (error) {
                        console.error('Error processing image:', error)
                        m.reply('Harap coba beberapa saat lagi')
                    }
                }
                break

                case 'todonghua':
                  case 'jadidonghua':
                      if (isBan) return m.reply(mess.ban)
                      if (!quoted) return m.reply(`*Fotonya Mana?*`)
                      if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)
                  
                      if (/image/.test(mime)) {
                          try {
                              m.reply('Process converting image, mungkin membutuhkan waktu yang lama')
                              let q = m.quoted ? m.quoted : m;
                          
                          
                            
                                let media = await q.download()
                                let mem = await uploader60Minute(media)
                  
                              let response = await (await fetch(`https://api.nyxs.pw/ai-image/jadianime?url=${mem}`)).json()
                              let an = response.result;
                              lenwy.sendMessage(m.chat, { image: { url: an }, caption: `Nih Bos` }, { quoted: m })
                  
                          } catch (error) {
                              console.error('Error processing image:', error)
                              m.reply('Harap coba beberapa saat lagi')
                          }
                      }
                      break

                      case 'todisney':
                        case 'jadidisney':
                            if (isBan) return m.reply(mess.ban)
                            if (!quoted) return m.reply(`*Fotonya Mana?*`)
                            if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)
                        
                            if (/image/.test(mime)) {
                                try {
                                    m.reply('Process converting image, mungkin membutuhkan waktu yang lama')
                                    let q = m.quoted ? m.quoted : m;
                                
                                
                                  
                                      let media = await q.download()
                                      let mem = await uploader60Minute(media)
                        
                                    let response = await (await fetch(`https://api.nyxs.pw/ai-image/jadidisney?url=${mem}`)).json()
                                    let an = response.result;
                                    lenwy.sendMessage(m.chat, { image: { url: an }, caption: `Nih Bos` }, { quoted: m })
                        
                                } catch (error) {
                                    console.error('Error processing image:', error)
                                    m.reply('Harap coba beberapa saat lagi')
                                }
                            }
                            break

                            case 'toghibli':
                              case 'jadighibli':
                                  if (isBan) return m.reply(mess.ban)
                                  if (!quoted) return m.reply(`*Fotonya Mana?*`)
                                  if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)
                              
                                  if (/image/.test(mime)) {
                                      try {
                                          m.reply('Process converting image, mungkin membutuhkan waktu yang lama')
                                          let q = m.quoted ? m.quoted : m;
                                      
                                      
                                        
                                            let media = await q.download()
                                            let mem = await uploader60Minute(media)
                              
                                          let response = await (await fetch(`https://api.nyxs.pw/ai-image/jadighibli?url=${mem}`)).json()
                                          let an = response.result;
                                          lenwy.sendMessage(m.chat, { image: { url: an }, caption: `Nih Bos` }, { quoted: m })
                              
                                      } catch (error) {
                                          console.error('Error processing image:', error)
                                          m.reply('Harap coba beberapa saat lagi')
                                      }
                                  }
                                  break

case 'fluxschenell':
case 'flux':
case 'txt2flux':
case 'texttoflux': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`*Mau Gambar Apa?*`)
// Kirim reaksi dan pesan tunggu
LenwyLD()
await sleep(3000)
try{
let mauGambar = text
// Buat URL request dengan prompt dari pengguna
let result = await (await fetch(`https://endpoint.web.id/ai/flux-schnell?key=315602&prompt=${text}`)).json()
lenwy.sendMessage(m.chat, { image: { url: result.result }, caption: `Gambar untuk prompt: "${mauGambar}"` }, { quoted: m })
} catch (error) {
m.reply(mess.error)
}
}
break

case 'photoleap':
case 'txt2photoleap':
case 'texttophotoleap': {
    if (isBan) return m.reply(mess.ban)
    if (!text) return m.reply(`*Mau Gambar Apa?*`)
    // Kirim reaksi dan pesan tunggu
    LenwyLD()
    await sleep(3000)
    try {
        let mauGambar = text;
        // Buat URL request dengan prompt dari pengguna
        let result = await (await fetch(`https://endpoint.web.id/ai/photoleap?key=315602&prompt=${text}`)).json()
        
        // Ambil URL gambar dari result
        let imageUrl = result.result.result_url;
        
        // Kirim gambar
        lenwy.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Gambar untuk prompt: "${mauGambar}"` }, { quoted: m })
    } catch (error) {
        console.error(error) // Tambahkan ini untuk melihat error di konsol
        m.reply(mess.error)
    }
}
break

case '2waifu':
case 'towaifu':
case 'txt2waifu':
case 'texttowaifu': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply(`*Mau Gambar Apa?*`)
  // Kirim reaksi dan pesan tunggu
  LenwyLD()
  await sleep(3000)
  try {
      let mauGambar = text;
      // Buat URL request dengan prompt dari pengguna
      let result = await (await fetch(`https://endpoint.web.id/ai/sdxl-waifu?key=315602&prompt=${text}`)).json()
      
      // Ambil URL gambar dari result
      let imageUrl = result.result.image;
      
      // Kirim gambar
      lenwy.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Gambar untuk prompt: "${mauGambar}"` }, { quoted: m })
  } catch (error) {
      console.error(error) // Tambahkan ini untuk melihat error di konsol
      m.reply(mess.error)
  }
}
break

case 'readmore': {
m.reply(`*Pemisahnya adalah "|"*\n\n*Contoh:*\n> ${command} Hai, |Nama Saya Adalah ${botname}`)
let [l, r] = text.split`|`
if (!l) l = ''
if (!r) r = ''
lenwy.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break

case 'id': {
if (!text) return m.reply(`Contoh: ${prefix + command} bot/aku`)
if (text === 'bot') {
let lidnya = lenwy.user?.lid.replace(/:\d+@/, '@')
let idnya = lenwy.user?.id.replace(/:\d+@/, '@')
m.reply(`Lid: ${lidnya}
Id: ${idnya}`)
} else if (text === 'aku') {
m.reply(`Id: ${m.sender}`)
}
}
break



case 'bingimg': {
await lenwy.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}
})
await lenwy.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}
})
await lenwy.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}
})
await lenwy.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}
})
await lenwy.sendMessage(m.chat, { react: { text: "✅️",key: m.key,}
})
if (!text) return m.reply('Masukan Gambarannya\nContoh:\nAnime cowok memakai baju hitam sedang coding bertuliskan ${botname}')
m.reply('*Proses ini membutuhkan waktu beberapa saat silahkan tunggu*')
try {
let img = await fetchJson(`http://15.235.142.199/api/ai/bingAi?prompt=${text}&apikey=DdUFIJY3sIGZW0g`)
let imgs = img.image
let c = 0
for (let ims of img.image) {
if (c == 0) await lenwy.sendMessage(m.chat, { image: { url: ims }, caption: `*[ V1 ]* Bing ${botname} ☑\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}` }, { quoted: m })
else await lenwy.sendMessage(m.sender, { image: { url: ims }}, { quoted: m })
c += 4
await sleep(2000)
}
} catch {
m.reply('Terjadi kesalahan!')
}
}
break

case 'texttospeech': 
case 'tekstospeech': 
case 'txt2speech': 
case 'tts': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
if (args.length == 0) return m.reply(`*Mo Convert Text Apa Ke Suara?*`)
lenwy.sendMessage(m.chat, { audio: { url: `https://api.autoresbot.com/api/tts?text=${q}&apikey=85f96e33aca5b3b69bc062e4` }, mimetype: 'audio/mp4' })
}
break

case 'sdxl':
case 'texttoanime':
case 'tekstoanime': 
case 'text2anime':
case 'teks2anime':
case 'txt2anime': {
if (!text) return m.reply(`*Mau Gambar Apa?*`)
// Kirim reaksi dan pesan tunggu
LenwyLD
await sleep(3000)
LenwyLD()
await sleep(2000)
try{
let mauGambar = text
// Buat URL request dengan prompt dari pengguna
let result = await (await fetch(`https://endpoint.web.id/ai/sdxl-anime?key=315602&prompt=${q}`)).json()
lenwy.sendMessage(m.chat, { image: { url: result.result.image }, caption: `Gambar untuk prompt: "${mauGambar}"` }, { quoted: m })
} catch (error) {
m.reply(mess.error)
}
}
break

case 'welcome': {
if (!isAdmins) return
let args = m.text.split(' ').slice(1)
if (args.length < 1) return m.reply('Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan')
await updateWelcomeStatus(m, args[0])
}
break

case 'left': {
if (!isAdmins) return
let args = m.text.split(' ').slice(1)
if (args.length < 1) return m.reply('Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan')
await updateLeftStatus(m, args[0])
}
break

case 'setwelcome': {
if (!isAdmins) return
let teksnye = text ? text : ""
await updateTextWelcome(m, teksnye)
m.reply(mess.success)
}
break

case 'setleft': {
if (!isAdmins) return
let teksnye = text ? text : ""
await updateTextLeft(m, teksnye)
m.reply(mess.success)
}
break

case 'restart':
if (!isCreator) return m.reply(mess.owner)
if (text) return
m.reply(`restarting ${botname}`)
m.reply(`Sukses`)
await sleep(3000)
process.exit()
break

case 'tagsubject':
case 'faketag': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return
if (!q) return m.reply(`Teks Nya Mana Kak?`)
lenwy.sendMessage(m.chat, {
    text: "@"+m.chat,
    contextInfo: {
        mentionedJid: participants.map(a => a.id),
        groupMentions: [{
            groupJid: m.chat,
            groupSubject: q
        }]
    }
})
}
break

case 'delsession': 
case 'delsesi': {
    if (!isCreator) return
    fs.readdir(`./${sessionName}`, async function(err, files) {
        if (err) {
            console.log('Unable to scan directory: ' + err)
            return m.reply('Unable to scan directory: ' + err)
        }
        let filteredArray = files.filter(item => 
            item.startsWith("pre-key") || 
            item.startsWith("sender-key") || 
            item.startsWith("session-") || 
            item.startsWith("app-state")
        )
        console.log(filteredArray.length)
        let teks = `Detected ${filteredArray.length} junk files\n\n`
        if (filteredArray.length === 0) return m.reply(teks)
        filteredArray.forEach((item, i) => {
            teks += (i + 1) + `. ${item}\n`
        })
        m.reply(teks)
        await sleep(2000)
        m.reply("Menghapus session...")
        for (const file of filteredArray) {
            fs.unlinkSync(`./${sessionName}/${file}`)
        }
        await sleep(2000)
        m.reply('Sukses menghapus session!')
    })
}
break

case 'delsampah': {
if (!isCreator) return
let directoryPath = path.join("./")
fs.readdir(directoryPath, async function (err, files) {
if (err) {
 return m.reply("Tidak dapat memindai direktori: " + err)
}
let filteredArray = await files.filter(
 (item) =>
item.endsWith("gif") ||
item.endsWith("png") ||
item.endsWith("mp3") ||
item.endsWith("mp4") ||
item.endsWith("jpg") ||
item.endsWith("jpeg") ||
item.endsWith("webp") ||
item.endsWith("webm") ||
item.endsWith("zip"), 
)
var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return m.reply(teks)
filteredArray.map(function (e, i) {
 teks += i + 1 + `. ${e}\n`
})
m.reply(teks)
await sleep(2000)
m.reply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
 fs.unlinkSync(`./${file}`)
})
await sleep(2000)
m.reply("Berhasil menghapus semua sampah")
 })
}
break

case 'catatan': {
if (text) return
let catat =`Fitur untuk Setopen dan Setclose
1. @groupname = menampilkan nama group
2. @tagdiri = mentag pengirim/sender
3. @tagreply = tag orang yang pesannya di reply
4. @jam = menampilkan jam saat ini
5. @menit = menampilkan menit saat ini
6. @detik = menampilkan detik saat ini
7. @hari = menampilkan hari saat ini
8. @tanggal = menampilkan tanggal saat ini
9. @bulan = menampilkan bulan saat ini
10. @tahun = menampilkan tahun saat ini
11. @namabulan = menampilkan nama bulan saat ini


Fitur untuk setdone dan setproses
1. @groupname = menampilkan nama group
2. @tagdiri = mentag pengirim/sender
3. @tagreply = tag orang yang pesannya di reply
4. @jam = menampilkan jam saat ini
5. @menit = menampilkan menit saat ini
6. @detik = menampilkan detik saat ini
7. @hari = menampilkan hari saat ini
8. @tanggal = menampilkan tanggal saat ini
9. @bulan = menampilkan bulan saat ini
10. @tahun = menampilkan tahun saat ini
11. @namabulan = menampilkan nama bulan saat ini
12. @pesanan = isi text untuk menjadikan nya bahan yang di pesan


Fitur untuk setwelcome dan setleft
1. @groupname = menampilkan nama group
2. @usertag = mentag user saat join atau left
3. @jam = menampilkan jam saat ini
4. @menit = menampilkan menit saat ini
5. @detik = menampilkan detik saat ini
6. @hari = menampilkan hari saat ini
7. @tanggal = menampilkan tanggal saat ini
8. @bulan = menampilkan bulan saat ini
9. @tahun = menampilkan tahun saat ini
10. @namabulan = menampilkan nama bulan saat ini


Fitur untuk setlist
1. @groupname = menampilkan nama group
2. @tagdiri = mentag pengirim/sender
3. @jam = menampilkan jam saat ini
4. @menit = menampilkan menit saat ini
5. @detik = menampilkan detik saat ini
6. @hari = menampilkan hari saat ini
7. @tanggal = menampilkan tanggal saat ini
8. @bulan = menampilkan bulan saat ini
9. @tahun = menampilkan tahun saat ini
10. @namabulan = menampilkan nama bulan saat ini`

m.reply(catat)
}
break

case 'statusgc': {
  try {
      const database = JSON.parse(fs.readFileSync('./src/database.json', 'utf8'))
      const databasegc = JSON.parse(fs.readFileSync('./database/databaseGroup.json', 'utf8'))
      // Cek apakah ID grup ada di dalam objek chats
      if (database.chats[from]) {
          const groupData = database.chats[from]
          const datasetgc = databasegc[from]
          let statusMessage = `*Status Grup*\n` +
                              `ID Grup: ${from}\n\n` +
                              `Wlcm: ${groupData.wlcm ? 'Aktif' : 'Tidak Aktif'}\n` +
                              `left: ${groupData.left ? 'Aktif' : 'Tidak Aktif'}\n` +
                              `Antitoxic1: ${groupData.antitoxic1 ? 'Aktif' : 'Tidak Aktif'}\n` +
                              `Antitoxic2: ${groupData.antitoxic2 ? 'Aktif' : 'Tidak Aktif'}\n` +
                              `Antilink: ${groupData.antilink ? 'Aktif' : 'Tidak Aktif'}\n` +
                              `Antilinkyt: ${groupData.antilinkyt ? 'Aktif' : 'Tidak Aktif'}\n` +
                              `Antilinktt: ${groupData.antilinktt ? 'Aktif' : 'Tidak Aktif'}\n` +
                              `Antipanel: ${groupData.antipanel ? 'Aktif' : 'Tidak Aktif'}\n` +
                              `Antiwame: ${groupData.antiwame ? 'Aktif' : 'Tidak Aktif'}\n` +
                              `antilinkgc1: ${groupData.antilinkgc ? 'Aktif' : 'Tidak Aktif'}\n` +
                              `antilinkgc2: ${groupData.antilinkgc2 ? 'Aktif' : 'Tidak Aktif'}\n` +
                              `text_welcome: ${datasetgc.text_welcome}\n` +
                              `text_left: ${datasetgc.text_left}\n` +
                              `text_open: ${datasetgc.text_open}\n` +
                              `text_close: ${datasetgc.text_close}\n` +
                              `text_proses: ${datasetgc.text_proses}\n` +
                              `text_done: ${datasetgc.text_done}\n` +
                              `text_list: ${datasetgc.text_list}\n` + 
                              `text_list_simbol: ${datasetgc.text_list_simbol}\n`
          m.reply(statusMessage)
      } else {
          m.reply('ID grup tidak ditemukan dalam database.')
      }
  } catch (error) {
      console.error('Terjadi kesalahan:', error)
      m.reply('Terjadi kesalahan saat membaca database.')
  }
}
break

case 'getcase': {
  if (!isCreator) return m.reply(mess.owner)
  if (!text) return m.reply(`Contoh: "getcase menu"`)

  try {
      const caseResult = getcase(text)
      m.reply(caseResult)
  } catch (error) {
      m.reply(`${error.message}`)
  }
}
break


case 'addcase': {
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`Masukan Input`)
if (!q.includes("|")) return m.reply("*Format Perintah Tidak Valid. Gunakan: addcase <case(dibawahCaseMana)>|case \"casenya\">{ ... } break*")
let tempat = q.split("|")[0]
let casenya = q.split("|")[1]
let newCase = casenya
let fileContent = fs.readFileSync("./lenwy.js", "utf-8")
let breakIndex = fileContent.indexOf(`break\n`, fileContent.indexOf(`case "${tempat}":`))
if (breakIndex !== -1) {
fileContent = fileContent.slice(0, breakIndex + 6) + newCase + fileContent.slice(breakIndex + 6)
fs.writeFileSync("./lenwy.js", fileContent, "utf-8")
m.reply(`*Case Baru*\n\n"${casenya}"\n\n*Berhasil Ditambahkan Di Bawah Case :"${tempat}"!*`)
} else {
m.reply(`*Tidak dapat menemukan break di case "${tempat}".`)
}
}
break

case 'editcase': {
  if (!isCreator) return m.reply(mess.owner)
  if (!text) return m.reply(`Contoh: ${prefix + command} <nama_case>|<case_baru>`)
  
  let [caseName, ...newContentArr] = text.split('|')
  caseName = caseName.trim()
  let newContent = newContentArr.join('|').trim()
  
  if (!caseName || !newContent) {
      return m.reply(`Contoh:\n\n${prefix + command} hai|case 'hai':\n{m.reply('Hai juga')\n}\nbreak`)
  }
  
  const fs = require('fs')
  const filePath = './lenwy.js';
  
  try {
      if (!fs.existsSync(filePath)) {
          return m.reply(`File bot tidak ditemukan.`)
      }
      
      let fileContent = fs.readFileSync(filePath, 'utf-8')
      const regex = new RegExp(`case ['"]${caseName}['"]: {([\\s\\S]*?)}\\s*break`, 'g')
      if (!regex.test(fileContent)) {
          return m.reply(`Case *${caseName}* tidak ditemukan.`)
      }
      const updatedFileContent = fileContent.replace(regex, `${newContent}`)
      fs.writeFileSync(filePath, updatedFileContent, 'utf-8')
      m.reply(`Case *${caseName}* berhasil diedit.`)
  } catch (error) {
      console.error('Error:', error)
      return m.reply('Terjadi kesalahan saat mengedit case. Coba lagi nanti.')
  }
}
break



case 'listcase':
case 'listfitur': {
m.reply(listCase())
}
break

case 'totalfeature':
case 'totalfitur': 
case 'totalcmd': 
case 'totalcommand':
m.reply(`Hallo ${pushname}
Saat ini ${botname} memiliki total fitur ${totalfitur()}`)
break

case 'cekcase': {
if (!isCreator) return
if (!text) return m.reply(`Contoh: ${prefix+command} caseName`)
const caseName = text.trim()
if (!caseName) return m.reply(`Masukkan nama case yang ingin dicek. Contoh: ${prefix+command} caseName`)
const cekCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile("./lenwy.js", "utf-8")
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g')
const match = fileContent.match(caseRegex)
if (!match) {
return { found: false };
}
const lines = fileContent.split('\n')
const caseLines = match[0].split('\n')
const startLine = lines.indexOf(caseLines[0]) + 1;
const endLine = startLine + caseLines.length - 1;
return {
found: true,
startLine,
endLine,
content: match[0]
};
} catch (error) {
return { error: `Terjadi kesalahan saat membaca file: ${error.message}` };
}};
const result = await cekCase(caseName)
if (result.error) {
m.reply(result.error)
} else if (result.found) {
const message = `*CASE DITEMUKAN!*
• Nama Case: ${caseName}
• Baris Awal: ${result.startLine}
• Baris Akhir: ${result.endLine}

Mau sekalian di ambil? Ketik getcase ${caseName}`
m.reply(message) 
} else {
m.reply(`Case '${caseName}' tidak ditemukan.`)
}
}
break

//----------------------------------------------------------------------------------------------------------------------------------------------------------

case 'setppsewa': {
  if (!isCreator) return m.reply(mess.owner);
  if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`);
  
  const path = './data/image/fotosewa'; // Menentukan path file foto
  
  // Cek apakah file sudah ada, jika ada maka dihapus
  if (fs.existsSync(path)) {
    fs.unlinkSync(path); // Menghapus file yang sudah ada
    console.log(`File "${path}" berhasil dihapus.`);
  }

  // Mengunduh dan menyimpan gambar yang di-quote ke file baru
  await lenwy.downloadAndSaveMediaMessage(quoted, path);

  m.reply('Foto berhasil diperbarui menjadi foto sewa.');
}
break

case 'setwdsewa': {
if (!isCreator) return (mess.owner)
let teksnya = text ? text : ''
global.text_sewa = teksnya
m.reply(mess.success)
}
break

case 'setwdppj': {
if (!isCreator) return (mess.owner)
let teksnya = text ? text : ''
global.text_ppj = teksnya
m.reply(mess.success)
}
break
        
   case 'sewa': {
m.reply(`owner`) 
}
break    

case 'sewabot': {
 async function createImage(url) {
 // Generating the image message content with a URL or local file path
 const { imageMessage } = await generateWAMessageContent({
 image: { url } // This will accept a URL or file path
 }, {
 upload: lenwy.waUploadToServer
 });
 return imageMessage; // Return the generated imageMessage
 }
 
 let tekssewa = global.text_sewa ? global.text_sewa : `               /) /) \n            („• ֊ •„) \n╭───̇─∪─∪──̇──┈◯\n│❛ SEWA BOT ${botname} ˚\n│\n│1 𝖻𝗎𝗅𝖺𝗇 : 𝖱𝗉 𝟩.000\n│2 𝖻𝗎𝗅𝖺𝗇 : 𝖱𝗉 𝟣𝟥.000\n│𝟥 𝖻𝗎𝗅𝖺𝗇 : 𝖱𝗉 𝟣𝟫.000\n│𝟦 𝖻𝗎𝗅𝖺𝗇 : 𝖱𝗉 𝟤𝟤.𝟧00\n│𝟧 𝖻𝗎𝗅𝖺𝗇 : 𝖱𝗉 𝟤𝟫.000\n╰───────────✧✧✧`
 let teksppj = global.text_ppj ? global.text_ppj : '\n\n ╭─────────────❍\n │ ʚ˚̣̣̣͙ɞ・𝙥𝙚𝙧𝙥𝙖𝙣𝙟𝙖𝙣𝙜・ \n │\n │1 𝖻𝗎𝗅𝖺𝗇 : 𝖱𝗉 5.000\n │𝟤 𝖻𝗎𝗅𝖺𝗇 : 𝖱𝗉 10.000\n │𝟥 𝖻𝗎𝗅𝖺𝗇 : 𝖱𝗉 15.000\n │𝗉𝖾𝗋𝗆𝖺𝗇𝖾𝗇 : 𝖱𝗉 50.000\n ╰─────────────❍'

 // Check if file exists and create the image accordingly
 let imageUrl
 if (fs.existsSync('./data/image/fotosewa.jpg')) {
 imageUrl = await createImage('./data/image/fotosewa.jpg');
 } else if (fs.existsSync('./data/image/fotosewa.png')) {
 imageUrl = await createImage('./data/image/fotosewa.png');
 } else if (fs.existsSync('./data/image/fotosewa.webp')) {
 imageUrl = await createImage('./data/image/fotosewa.webp');
 } else {
 return m.reply(`Foto tidak tersedia, kamu harus ${prefix}setppsewa terlebih dahulu`)
 }

 const push = [{
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: tekssewa
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 text: `klik admin dibawah kak`
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 hasMediaAttachment: true,
 imageMessage: imageUrl
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Admin - ${global.ownername}","url":"https://api.whatsapp.com/send/?phone=${global.owner}&text=Haii+${global.ownername}%0Amau+sewa+bot&type=phone_number&app_absent=0"}`
 },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Developer - ${global.developername}","url":"https://api.whatsapp.com/send/?phone=${global.developer}&text=%0AHaii+${global.developername}%0Amau+buat+bot+store+bisa?&type=phone_number&app_absent=0"}`
 }
 ]
 })
 }, {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: teksppj
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 text: `klik admin dibawah kaa`
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 hasMediaAttachment: true,
 imageMessage: imageUrl
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Admin - ${global.ownername}","url":"https://api.whatsapp.com/send/?phone=${global.owner}&text=Haii+${global.ownername}%0ANak+Perpanjang+Sewa&type=phone_number&app_absent=0"}`
 },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Developer - ${global.developername}","url":"https://api.whatsapp.com/send/?phone=${global.developer}&text=%0AHaii+${global.developername}%0Amau+buat+bot+dong&type=phone_number&app_absent=0"}`
 }
 ]
 })
 }];

 // Sending the message
 const bot = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 body: proto.Message.InteractiveMessage.Body.create({
 text: 'Berikut Daftarnya',
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `> ${botname}`,
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: false
 }),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
 cards: push
 })
 })
 }
 }
 }, { quoted: m });

 await lenwy.relayMessage(m.chat, bot.message, {
 messageId: bot.key.id
 });
 
 
 
}
break
    

    case 'addsewa':
case 'tambahsewa': {
 if (!isCreator) return m.reply(mess.owner)

 if (!text && !m.isGroup) {
 return m.reply(`Penggunaan:\n1. ${prefix + command} [durasi] (dari dalam grup)\n2. ${prefix + command} [durasi] [link grup] (dari chat pribadi)\n\nContoh:\n${prefix + command} 30d https://chat.whatsapp.com/xxxxx`)
 }

 const { addSewaGroup } = require('./lib/sewa')
 let sewa = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))

 try {
 let duration, groupId

 if (m.isGroup && !text.includes('http')) {
 // Dari grup langsung
 [duration] = text.split(' ')
 if (!duration) return m.reply(`Durasi harus diisi!\nContoh: ${prefix + command} 30d`)
 groupId = m.chat
 } else {
 // Dari PC dengan link
 let [d, link] = text.split(' ')
 if (!d || !link) return m.reply(`Durasi dan link grup harus diisi!\nContoh:\n${prefix + command} 30d https://chat.whatsapp.com/xxxxx`)
if (link.includes('?')) link = link.split('?')[0]
 duration = d

 const coded = link.split("https://chat.whatsapp.com/")[1]
 if (!coded) return m.reply("Link tidak valid 🤔")

 try {
 await lenwy.groupAcceptInvite(coded)
 m.reply('Bot berhasil masuk ke grup.')
 } catch (err) {
 if (err.message.includes('not-authorized')) {
 return m.reply('Gagal bergabung ke grup. Bot kemungkinan baru saja dikeluarkan.')
 } else if (err.message.includes('gone')) {
 return m.reply('Link grup sudah di reset.')
 } else if (err.message.includes('conflict')) {
 m.reply('Bot sudah berada di dalam grup.')
 } else if (err.message.includes('already-exists')) {
 return m.reply('Bot sudah meminta gabung ke grup.')
 } else {
 console.log(err)
 return m.reply('Terjadi error yang tidak dikenali.')
 }
 }

 groupId = await getGroupIdFromLink(link, lenwy)
 if (!groupId) return m.reply('Gagal mendapatkan ID grup.')
 }

 if (sewa.some(entry => entry.groupId === groupId)) {
 return m.reply(`Grup sudah ada dalam daftar sewa.`)
 }

 addSewaGroup(groupId, duration, sewa)
 m.reply(`✅ Grup berhasil ditambahkan ke daftar sewa selama *${duration}*.`)
 
 // Pesan sambutan jika dari PC
 if (!m.isGroup) {
 await lenwy.sendMessage(groupId, {text: `Hallo semua, saya adalah bot ${global.botname}. Grup ini telah disewa selama *${duration}*.\n\n- Admin dapat cek sisa waktu dengan ketik *${prefix}ceksewa*\n- Untuk fitur lengkap ketik *${prefix}allmenu*`})
 }

 } catch (err) {
 console.error('Error saat addsewa:', err)
 m.reply('❌ Gagal menambahkan sewa grup.')
 }
}
break    













case 'panel': {
m.reply(`Panel? Kalo minat chat no berikut: wa.me/6288991583829`)
}
break









case 'asmaulhusna': {
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case 'ayatkursi': {
let result = `🎁 *Ayat Kursi*
✉️ *Arab :*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ

✉️ *Latin :*
*“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”*

✉️ *Artinya:*
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya) tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
*(QS. Al Baqarah: 255)*`
lenwy.sendMessage(m.chat, { image: { url: 'https://img1.pixhost.to/images/7739/629210665_deomedia.jpg' }, caption: result}, { quoted: m })
}
break      
        
  case 'help': {
m.reply(`*Panduan Untuk Menggunakan Fitur Bot*

*#1 Membuat Sticker Whatsapp*
*#2 Membuat Sticker Video*
*#3 Mengubah Watermark Sticker*
*#4 Meningkatkan Kualitas Gambar*
*#5 Mengunduh Foto/Video Tiktok Dari Link*
*#6 Mengunduh Audio/Video Youtube*
*#7 Mengunduh Lagu/Musik*
*#8 Bertanya Kepada Bot*
*#9 Mengubah Gambar Menjadi link*
*#10 Menghapus Pesan Bot*

🎁 *Untuk Menampilkan Panduan Ketik Sesuai Nomor, Contoh : NO1* 

⚠️ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`)
}
break

case '#1': case 'no1': {
m.reply(`*Membuat Sticker Whatsapp*

🎁 *Untuk Membuat Sticker Whatsapp Kirim Foto/Video Dengan Caption S, Stiker, Sticker*
🎁 *Untuk Membuat Sticker Dengan Caption Gunakan Smeme : Contoh Smeme Lenwy*`)
}
break

case 'no2': {
m.reply(`*Membuat Sticker Video*

🎁 *Untuk Membuat Sticker Video Kirim Video Minimal 9 Detik Dengan CAption S*`)
}
break

case 'no3': {
m.reply(`*Mengubah Watermark Sticker*

🎁 *Untuk Mengubah Watermark Sticker Balas Sticker Dengan Mengetik : Wm (Teks)*
🎁 *Contoh : Wm ${global.ownername}*`)
}
break

case 'no4': {
m.reply(`*Meningkatkan Kualitas Gambar*

🎁 *Untuk Meningkatkan Kualitas Gambar Kirim Gambar/Foto Dengan Caption Hd, Remini*`)
}
break

case 'no5': {
m.reply(`*Mengunduh Foto/Video Dari Link*

🎁 *Untuk Mengunduh Foto/Video Dari Link Ketik : Tiktok (Link Tiktok)*
🎁 *Lebih Lengkapnya Ketik Downloadmenu*

⚠️ *Pastikan Link Sesuai Dengan Perintah*`)
}
break

case 'no6': {
m.reply(`*Mengambil Audio/Video Dari Youtube*

🎁 *Untuk mengambil Audio/Video Dari Youtube Ketik : Ytmp4 (Link)*
🎁 *Ytmp3 Untuk Audio | Ytmp4 Untuk Video*

⚠️ *Audio/Video Lebih Dari 5 Menit Kemungkinan Gagal Dikirim*`)
}
break

case 'no7': {
m.reply(`*Mengunduh Lagu/Musik*

🎁 *Untuk Mengunduh Lagu ketik : Play3 (Nama Lagu)*
🎁 *Contoh : Play3 open arms*`)
}
break

case 'no8': {
m.reply(`*Bertanya Kepada Bot*

🎁 *Untuk Bertanya kepada Bot Ketik : ai (Pertanyaan)*
🎁 *Contoh : ai Sejarah Indonesia*`)
}
break

case 'no9': {
m.reply(`*Mengubah Gambar Menjadi Link*

🎁 *Untuk Mengubah Gambar Menjadi Link Kirim Gmbar Dengan caption Tourl*`)
}
break


case 'no10': {
m.reply(`*Menghapus Pesan Bot*

🎁 *Untuk Menghapus Pesan Bot, Balas Pesan Bot Dengan Mengetik : Del*`)
}
break    
        

case 'delsewa':
case 'hapussewa': {
 if (!isCreator) return m.reply(mess.owner)

 if (!text && !m.isGroup) {
 return m.reply(`Untuk menghapus sewa grup dari chat pribadi, sertakan link grup.\nContoh:\n${prefix + command} https://chat.whatsapp.com/xxxxx`)
 }

 try {
 let groupId

 if (m.isGroup && !text) {
 groupId = m.chat
 } else {
 groupId = await getGroupIdFromLink(text, lenwy)
 if (!groupId) return m.reply('Gagal mengambil ID grup dari link.')
 }

 let sewa = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))
 const index = sewa.findIndex(entry => entry.groupId === groupId)

 if (index === -1) return m.reply('Grup ini tidak ditemukan dalam daftar sewa.')

 sewa.splice(index, 1)
 fs.writeFileSync(pathsewa, JSON.stringify(sewa, null, 2))

 lenwy.sendMessage(groupId, {text: `Masa sewa di group ini telah *hapus*.`})
 m.reply('✅ Sewa grup berhasil dihapus.')
 } catch (err) {
 console.error('Error saat delsewa:', err)
 m.reply('❌ Gagal menghapus sewa grup.')
 }
}
break


case 'checksewa':
case 'ceksewa':
    if (!isAdmins && !isCreator) return m.reply(mess.admin)
    if (!m.isGroup) return m.reply(mess.group)

    try {
        const groupId = from; // ID grup saat ini
        const currentDir = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))

        // Periksa apakah grup saat ini ada dalam daftar sewa
        const entry = currentDir.find(entry => entry.groupId === groupId)
        if (!entry) {
            return m.reply('Perintah ini hanya bisa dilakukan di dalam grup yang sudah terdaftar dan di-add sewa.')
        }

        // Hitung durasi tersisa
        const expiry = entry.expired;
        const remainingTime = expiry - Date.now()
        var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
        var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
        const status = `${days} hari ${hours} jam ${minutes} menit`;
        m.reply(`Akan Habis Hingga ${status}.`)
        
    } catch (error) {
        m.reply('Terjadi kesalahan: ' + error.message)
    }
    break

case 'removeexpired':
case 'cekexp':
case 'cekexpired': {
    if (!isCreator) return m.reply('Perintah ini hanya bisa dilakukan oleh pemilik bot.')
	const fs = require('fs')
    try {
        const currentDir = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))
        await expiredCheck(lenwy, currentDir) // Asumsikan `conn` adalah objek koneksi bot
        m.reply('Pengecekan masa sewa sedang dilakukan, grup yang masa sewanya telah habis akan dihapus secara otomatis.')
    } catch (error) {
        m.reply(error.message)
    }
}
break

case 'perpanjangsewa': {
 if (!isCreator) return m.reply(mess.owner)
 if (!text && !m.isGroup) {
 return m.reply(`Ada 2 cara untuk melakukan ${prefix + command} ini:\n1. Di dalam grup tanpa tambahan (cukup durasi).\n2. Di private chat dengan menyertakan *durasi* + *link grup*.\n\nContoh:\n${prefix + command} 30d https://chat.whatsapp.com/xxxxx`)
 }

 await sleep(500)
 const { toMs, checkSewaGroup } = require('./lib/sewa')
 let currentDir = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))

 try {
 let groupId, duration;

 if (m.isGroup && !text.includes('https://chat.whatsapp.com/')) {
 [duration] = text.split(' ')
 if (!duration) return m.reply(`Durasi harus diisi!\nContoh:\n${prefix + command} 30d`)
 groupId = m.chat
 } else {
 let [d, link] = text.split(' ')
 if (!d || !link) return m.reply(`Durasi dan link grup harus diisi!\nContoh:\n${prefix + command} 30d https://chat.whatsapp.com/xxxxx`)
 duration = d

 groupId = await getGroupIdFromLink(link, lenwy)
 if (!groupId) return m.reply('Gagal mendapatkan ID grup dari link.')
 }

 if (!checkSewaGroup(groupId, currentDir)) {
 return m.reply('Grup ini tidak ditemukan dalam daftar sewa. Anda tidak dapat memperpanjang masa sewanya.')
 }

 const pos = currentDir.findIndex(entry => entry.groupId === groupId)
 if (pos !== -1) {
 const isLifetime = ['alifetime', 'permanent', 'permanen', 'perma'].includes(duration.toLowerCase())

 if (isLifetime) {
 currentDir[pos].expired = null
 currentDir[pos].isAlifetime = true
 // Reset flags pengingat
 currentDir[pos].reminded1d = false
 currentDir[pos].reminded1h = false
 currentDir[pos].reminded1m = false
 m.reply(`✅ Masa sewa grup${m.isGroup ? '' : ` dengan ID ${groupId}`} diperpanjang menjadi *Permanen*.`)
 await lenwy.sendMessage(groupId, { text: `🎉 Masa sewa grup ini telah di ubah menjadi *Permanen*!` })
 } else {
 // Cek kalau sebelumnya lifetime, maka reset expired
 if (currentDir[pos].expired === null || currentDir[pos].isAlifetime === true) {
 currentDir[pos].expired = Date.now() + toMs('3s') // Atau kamu bisa langsung toMs(duration)
 await sleep(500)
 }

 currentDir[pos].expired += toMs(duration)
 currentDir[pos].isAlifetime = false // Reset lifetime

 // Reset flags pengingat
 currentDir[pos].reminded1d = false
 currentDir[pos].reminded1h = false
 currentDir[pos].reminded1m = false
 let entry = currentDir[pos]
 let expiry = entry.expired
 let remainingTime = expiry - Date.now()
 var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
 var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
 var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
 
 let status = `${days} hari ${hours} jam ${minutes} menit`;
 await lenwy.sendMessage(groupId, { text: `⏳ Masa sewa telah diperpanjang selama *${duration}*. Sisa masa sewa saat ini adalah:\n*${status}*` })
 m.reply(`✅ Masa sewa grup${m.isGroup ? '' : ` dengan ID ${groupId}`} berhasil diperpanjang selama *${duration}*.`)
 }

 fs.writeFileSync(pathsewa, JSON.stringify(currentDir, null, 2))
 }

 } catch (err) {
 console.error('Error:', err)
 m.reply('Terjadi kesalahan saat memperpanjang sewa. Pastikan format benar dan link masih aktif.')
 }
}
break

case 'listsewa': {
 if (!isCreator) return m.reply(mess.owner)
 LenwyLD()
 try {
 const currentDir = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))
 let ordernye = `*List Sewa*\nJumlah : ${currentDir.length}\n\n`
 for (const entry of currentDir) {
 let idgc = entry.groupId;
 let linkgc
 try {
 let response2 = await lenwy.groupInviteCode(idgc)
 linkgc = `https://chat.whatsapp.com/${response2}`
 } catch {
 linkgc = '-'
 }
 try {
 let metadata = await lenwy.groupMetadata(idgc)
 const totalMembers = metadata.participants ? metadata.participants.length : 0;
 let expirednya = `Permanent`
 if (!entry.isAlifetime) {
 const expiry = entry.expired;
 const remainingTime = expiry - Date.now()
 var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
 var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
 var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
 expirednya = `${days || '-'} hari ${hours || '-'} jam ${minutes || '-'} menit`
 }

 ordernye += `✅ ${metadata.subject}
🎁 ID Group : ${entry.groupId}
📦 Total Member : ${totalMembers || '-'} Member
⏰ Expired : ${expirednya}
> Link Group : ${linkgc}
────────────────────────\n\n`
 } catch (e) {
 ordernye += `⛔
🎁 Group ID: ${idgc}
📦 Tidak bisa mengakses metadata grup, Kemungkinan bot telah keluar dari group.
> Pesan: ${e.message}
────────────────────────\n\n`
 }
 }
 m.reply(ordernye + `> Gunakan ${prefix}delsewa (idGroup) untuk menghapus sewa jika private chat dengan bot
> Gunakan ${prefix}delsewa untuk menghapus sewa jika berada di dalam grup`)
 } catch (error) {
 m.reply('Terjadi kesalahan saat membaca file: ' + error.message)
 }
}
break
        
       case 'setpay': {
  if (!isAdmins) return m.reply(mess.admin);
  
  let mime = m.quoted ? m.quoted.mimetype : '';
  // Pastikan pesan yang dikutip berisi media (gambar)
  if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`);

  // Mendapatkan informasi pembayaran dari pesan
  
  let paymentMethod = text.split('@')[0]; // Metode pembayaran (misal: gopay)
  let paymentData = text.split('@')[1];
  if (!paymentData || !paymentMethod) {
      return m.reply("Harap kirimkan metode pembayaran setelah '@' (contoh: gopay).");
  }

  let groupID = m.chat; // Menggunakan ID grup untuk penyimpanan data
           
 const groupMetadata = await lenwy.groupMetadata(from)          
  // Menggabungkan groupID dan key untuk membuat ID unik untuk pembayaran
  let paymentDataId = `${groupMetadata.subject}-${paymentMethod}`; // Misal: 'groupID_gopay'

  // Cek apakah ada gambar yang dikutip
  if (!m.quoted) {
      return m.reply('Gambar pembayarannya tidak ditemukan.');
  }

  // Mendownload gambar dan menyimpannya
  let imageUrl = await lenwy.downloadAndSaveMediaMessage(m.quoted, `./data/db/databasePay/${paymentDataId}`);

  // Membaca data dari database
  let _db = readDatabasePayment();

  // Pastikan _db adalah array, jika tidak, buat array kosong
  if (!Array.isArray(_db)) {
      _db = [];
  }

  // Menambahkan data pembayaran ke database
  let obj_add = {
      id: groupID,
      key: paymentMethod,
      paymentData: paymentData, // Menyimpan ID pembayaran
      imageUrl: imageUrl
  };

  // Menambahkan data ke array _db
  _db.push(obj_add);

  // Menyimpan data ke database
  writeDatabasePayment(_db);

  return m.reply(`Pembayaran dengan metode ${paymentMethod} berhasil disimpan. Gambar pembayaran telah diterima.`);
}
break

case 'setbuttonurl': {
  // Mendapatkan input setelah 'setbuttonurl'
  if (!budy.includes('@')) return m.reply("Harap kirimkan format yang benar: setbuttonurl <key>@<displayName>@<url>")

  let key = text.split('@')[0];
  let displayName = text.split('@')[1];
  let url = text.split('@')[2];

  // Membaca data dari database
  let _db = readDatabasePayment();

  // Cari data berdasarkan key dan group ID
  let paymentData = _db.find(item => item.key === key && item.id === m.chat);
  if (!paymentData) {
      return m.reply(`Key "${key}" tidak ditemukan di grup ini.`);
  }

  // Membuat tombol URL
  let button = {
      name: "cta_url",
      buttonParamsJson: JSON.stringify({
          display_text: displayName, // Nama tombol
          url: url                   // URL yang akan diarahkan ketika tombol ditekan
      })
  };

  // Menambahkan tombol ke dalam buttonData array di bawah imageUrl
  if (!paymentData.buttonData) {
      paymentData.buttonData = []; // Inisialisasi jika belum ada buttonData
  }

  paymentData.buttonData.push(button);

  // Menyimpan kembali data ke database
  writeDatabasePayment(_db);

  return m.reply(`Tombol URL dengan teks "${displayName}" dan URL "${url}" telah berhasil diset untuk key "${key}".`);
}
break

case 'setbuttoncopy': {
  // Mendapatkan input setelah 'setbuttoncopy'
  if (!budy.includes('@')) return m.reply("Harap kirimkan format yang benar: setbuttonurl <key>@<displayName>@<url>")

  let key = text.split('@')[0];
  let displayName = text.split('@')[1];
  let nilaiCopy = text.split('@')[2];
  // Membaca data dari database
  let _db = readDatabasePayment();

  // Cari data berdasarkan key dan group ID
  let paymentData = _db.find(item => item.key === key && item.id === m.chat);
  if (!paymentData) {
      return m.reply(`Key "${key}" tidak ditemukan di grup ini.`);
  }

  // Membuat tombol salin
  let button = {
      name: "cta_copy",
      buttonParamsJson: JSON.stringify({
          display_text: displayName, // Nama tombol
          id: nilaiCopy,             // ID yang bisa diubah sesuai kebutuhan
          copy_code: nilaiCopy      // Teks yang disalin
      })
  };

  // Menambahkan tombol ke dalam buttonData array di bawah imageUrl
  if (!paymentData.buttonData) {
      paymentData.buttonData = []; // Inisialisasi jika belum ada buttonData
  }

  paymentData.buttonData.push(button);

  // Menyimpan kembali data ke database
  writeDatabasePayment(_db);

  return m.reply(`Tombol salin dengan teks "${nilaiCopy}" telah berhasil diset untuk key "${key}".`);
}
break

case 'pay': {
  // Membaca data dari database pembayaran
  let _db = readDatabasePayment();
  
  // Mencari data pembayaran yang sesuai dengan group ID (m.chat)
  let payments = _db.filter(item => item.id === m.chat);
  
  if (payments.length === 0) {
      return m.reply("Tidak ada data pembayaran yang ditemukan di grup ini.");
  }

  // Fungsi untuk menghasilkan gambar dari file lokal
  async function createImage(filePath) {
      let { imageMessage } = await generateWAMessageContent({
          image: { url: filePath }  // Menggunakan path file lokal
      }, {
          upload: lenwy.waUploadToServer
      });
      return imageMessage;
  }

  // Daftar pesan yang akan dikirim
  let push = payments.map(async (payment) => {
      let imageMessage = await createImage(payment.imageUrl); // Menggunakan imageUrl dari data JSON
      
      return {
          body: proto.Message.InteractiveMessage.Body.fromObject({
              text: payment.paymentData
          }),
          footer: proto.Message.InteractiveMessage.Footer.fromObject({
              text: ``
          }),
          header: proto.Message.InteractiveMessage.Header.fromObject({
              hasMediaAttachment: true,
              imageMessage: imageMessage // Gunakan imageUrl yang ada di dalam data
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
              buttons: payment.buttonData.map(button => ({
                  name: button.name,
                  buttonParamsJson: button.buttonParamsJson
              }))
          })
      };
  });

  // Tunggu hingga semua push card selesai dibuat
  let pushCards = await Promise.all(push);

  // Mengirimkan pesan interaktif dengan tombol dan informasi pembayaran
  let bot = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
          message: {
              interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                  body: proto.Message.InteractiveMessage.Body.create({
                      text: '𝗇𝗂𝗁 𝗄𝖺𝗄 paymentnya😎',
                  }),
                  footer: proto.Message.InteractiveMessage.Footer.create({
                      text: `> ${groupMetadata.subject}`,
                  }),
                  header: proto.Message.InteractiveMessage.Header.create({
                      hasMediaAttachment: false
                  }),
                  carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                      cards: pushCards
                  })
              })
          }
      }
  }, { quoted: m });

  // Mengirimkan pesan
  await lenwy.relayMessage(m.chat, bot.message, {
      messageId: bot.key.id
  });
}
break

case 'delpay': {
  // Mendapatkan input setelah 'delpayment'
  let key = text; // Asumsikan key diberikan langsung setelah command delpayment
  if (!key) return m.reply("Harap kirimkan format yang benar: delpayment <key>");

  // Membaca data dari database
  let _db = readDatabasePayment();

  // Mencari data pembayaran berdasarkan key dan group ID
  let paymentIndex = _db.findIndex(item => item.key === key && item.id === m.chat);

  // Jika data tidak ditemukan, tampilkan daftar key yang tersedia untuk grup ini
  if (paymentIndex === -1) {
    // Mendapatkan semua key yang tersedia untuk grup ini
    let availableKeys = _db
      .filter(item => item.id === m.chat)
      .map((item, index) => `${index + 1}. ${item.key}`);

    // Jika tidak ada data pembayaran untuk grup ini, beri tahu pengguna
    if (availableKeys.length === 0) {
      return m.reply("Tidak ada data pembayaran yang tersedia di grup ini.");
    }

    // Menampilkan daftar key yang tersedia dengan format nomor urut
    return m.reply(`Key "${key}" tidak ditemukan. Key yang tersedia:\n${availableKeys.join('\n')}`);
  }

  // Menghapus data pembayaran dari array
  let deletedPayment = _db.splice(paymentIndex, 1)[0];

  // Menghapus file gambar terkait jika ada
  if (deletedPayment.imageUrl) {
    const fs = require('fs');
    fs.unlink(deletedPayment.imageUrl, (err) => {
      if (err) console.error("Gagal menghapus file gambar:", err);
    });
  }

  // Menyimpan data ke database
  writeDatabasePayment(_db);

  return m.reply(`Data pembayaran dengan key "${key}" berhasil dihapus.`);
}
break
        
   case 'setwdpay': {
    // Parsing the command
    if (!text) return m.reply('Contoh: changewording key@newWording');
    
    let [key, newWording] = text.split('@');
    
    if (!key || !newWording) return m.reply('Format yang benar: changewording key@newWording');
    
    // Membaca data dari database pembayaran
    let _db = readDatabasePayment();
    
    // Mencari data pembayaran yang sesuai dengan group ID (m.chat)
    let payments = _db.filter(item => item.id === m.chat);
    
    if (payments.length === 0) {
        return m.reply("Tidak ada data pembayaran yang ditemukan di grup ini.");
    }
    
    // Mencari key yang sesuai
    let payment = payments.find(item => item.key === key);
    
    if (!payment) {
        return m.reply(`Key "${key}" tidak ditemukan di grup ini.`);
    }

    // Mengupdate wording untuk key yang ditemukan
    payment.paymentData = newWording;

    // Menyimpan kembali perubahan ke database
    writeDatabasePayment(_db);

    return m.reply(`Wording untuk key "${key}" berhasil diubah.`);
}
break

case 'delbutton': {
    // Parsing the command
    if (!text) return m.reply('Contoh: delbutton key');
    
    let key = text  // Extract the key from the text
    
    if (!key) return m.reply('Contoh: delbutton key');
    
    // Membaca data dari database pembayaran
    let _db = readDatabasePayment();
    
    // Mencari data pembayaran yang sesuai dengan group ID (m.chat)
    let payments = _db.filter(item => item.id === m.chat);
    
    if (payments.length === 0) {
        return m.reply("Tidak ada data pembayaran yang ditemukan di grup ini.");
    }
    
    // Mencari key yang sesuai
    let payment = payments.find(item => item.key === key);
    
    if (!payment) {
        return m.reply(`Key "${key}" tidak ditemukan di grup ini.`);
    }

    // Menghapus semua buttonData untuk key yang ditemukan
    payment.buttonData = [];  // Empty the buttonData array

    // Menyimpan kembali perubahan ke database
    writeDatabasePayment(_db);

    return m.reply(`Semua tombol untuk key "${key}" berhasil dihapus.`);
}
break    

case 'backupbot':
case 'botbackup': {
    if (!isAdmins && !isCreator) return m.reply(mess.admin);

    // Menambahkan delay menggunakan Promise
    await new Promise(resolve => setTimeout(resolve, 3000));

    const orang = `${developer}@s.whatsapp.net`; // Pastikan developer sudah didefinisikan
    const { execSync } = require("child_process");
    const fs = require('fs'); // pastikan fs diimport

    const ls = execSync("ls")
        .toString()
        .split("\n")
        .filter(
            (pe) =>
                pe !== "node_modules" &&
                pe !== "Session" &&
                pe !== "package-lock.json" &&
                pe !== ".cache" &&
                pe !== ".npm"
        );

    try {
        // Membuat file zip
        execSync(`zip -r Sc.zip ${ls.join(" ")}`);

        // Mengirim file zip
        await lenwy.sendMessage(orang, {
            document: fs.readFileSync("./Sc.zip"),
            mimetype: "application/zip",
            fileName: `Sc${global.ownername}${waktubackup}.zip`,
        }, { quoted: m });

        // Menghapus file zip setelah dikirim
        execSync("rm -rf Sc.zip");
		m.reply(`Done hihihi`)
    } catch (err) {
        console.error("Error during backup process:", err);
    }
}
break

case 'getip':
case 'cekip': {
    if (m.isGroup) 
        return m.reply(mess.private)
    if (!isCreator) 
        return m.reply(mess.owner)
    
    try {
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        };

        const requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        const ip_panel = await fetch(`https://api.myip.com`, requestOptions)
        const res = await ip_panel.json()

        // Memeriksa apakah alamat IP adalah IPv4
        const ipv4Regex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
        const ipv4 = res.ip.match(ipv4Regex)

        if (ipv4) {
            const replyMessage = `*📮INFO SERVER*\n\n*IP :* ${ipv4}\n*Country :* ${res.country}\n*Cc :* ${res.cc}`;
            m.reply(replyMessage)
        } else {
            m.reply('Gagal mengambil informasi IP IPv4. Silakan coba lagi nanti.')
        }
    } catch (error) {
        console.error('Error fetching IP:', error)
        m.reply('Gagal mengambil informasi IP. Silakan coba lagi nanti.')
    }
}
break

case 'ceksaldo': {
    m.reply(`saldo mu:` + (db.data.users[m.sender].saldo))
}
break

case 'fetch': {
  if (!text) return  m.reply('Masukkan text yang ingin di fetching')
  try {
    let res = await (await fetch(text)).json()
    let hasilnya = JSON.stringify(res, null, 2)
    m.reply(hasilnya)
  } catch (e) {
    m.reply(`error` + e)
  }
}

default:
let xtx = m.text.slice(0)
       if (lenwy.ai_sessions[m.sender] && xtx) {
        if (xtx.startsWith("gambarkan")) {
        sendTxt2img(xtx.slice(9))
        } else if (xtx.includes("buka grup")) {
        if (!m.isGroup) return m.reply("Hmm cuma bisa digrup")
        if (!isBotAdmins) return m.reply("Jadikan bot sebagai Admin grup")
        if (!isAdmins) return m.reply("Khusus Admin")
        lenwy.groupSettingUpdate(m.chat, "announcement")
        } else if (xtx.includes("tutup grup")) {
        if (!m.isGroup) return m.reply("Hmm cuma bisa digrup")
        if (!isBotAdmins) return m.reply("Jadikan bot sebagai Admin grup")
        if (!isAdmins) return m.reply("Khusus Admin")
        lenwy.groupSettingUpdate(m.chat, "not_announcement")
        } else if (xtx.startsWith("putarkan")) {
        sendPlay(xtx.slice(8))
        } else if (xtx.includes("matikan ai")) {
        delete lenwy.ai_sessions[m.sender]
        m.reply("[ ✓ ] Success delete session chat")
        } else {
        const senderId = m.sender;
        const aiSessions = lenwy.ai_sessions

        const msgs = [
        ...aiSessions[senderId].messages,
        { content: xtx, role: "user" }
        ];

        const api_url = 'https://elxyz.me/api/chat';
            
    let postData = {
    prompt: `${args.join(" ")}`,
    sessionId: `${m.sender}`,
    character: `Kamu adalah simi, kamu bukanlah ai atau chat bot, kamu adalah anak remaja sma, kamu memiliki sifat kasar dan toxic, kadang kamu memakai emoji 🖕 ketika kesal, kamu kalau ngobrol menggunakan bahasa gaul anak Indonesia seperti lu untuk kamu dan gw untuk aku.`
  };  
   

        await axios({
        method: 'POST',
        url: api_url,
        data: new URLSearchParams(Object.entries(postData)),
        headers: {          
               'Content-Type': 'application/x-www-form-urlencoded'
        },
    
        })
        .then(response => {
        if (response.status === 200) {
        const { result } = response.data;
        m.reply(result ?? "Hmmm sepertinya terjadi kesalahan pada API, Minta bantuan ke owner ya.");
        aiSessions[senderId].messages.push({ content: xtx, role: "user" });
        aiSessions[senderId].messages.push({ content: result, role: "assistant" });
        lenwy.ai_sessions = aiSessions;
        } else {
        m.reply("Hmmm sepertinya terjadi kesalahan pada API, Minta bantuan ke owner ya.");
        }
        })
        .catch(error => {
        console.error(error);
        m.reply("Hmmm sepertinya terjadi kesalahan, Minta bantuan ke owner ya.");
        });
        }
        } 
  if (db.data.chats[chatId].simi) {
              let chait = db.data.chats[chatId]
    await handleSimiCommand(m, chait, ['simi']);
            }      
if (db.data.chats[m.chat].autoai) {
     if (m.fromMe) return;
     if (!m.text) return
       try {
        let logic = `${global.sifat}`
         const url = 'https://luminai.my.id';
          const data = {
          content: m.text,
          pengguna: sender,
         prompt: logic,
        webSearchMode: false
       };
      if (quoted && /image/.test(mime)) {
       const imageBuffer = await quoted.download();
        data.imageBuffer = imageBuffer;
      }
              
       const response = await axios.post(url, data);
         const anu = response.data.result;
        m.reply(anu);
              } catch (error) {
       console.error("Error fetching data:", error);
        throw error;
              }
        }        
if (budy.startsWith("=>")) {
          if (!isCreator) return
          function Return(sul) {
            sat = JSON.stringify(sul, null, 2)
            bang = util.format(sat)
            if (sat == undefined) {
              bang = util.format(sul)
            }
           return m.reply(bang)
          }
          try {
            m.reply(
              util.format(eval(`(async () => { return ${budy.slice(3)} })()`)),
            )
          } catch (e) {
            m.reply(String(e))
          }
        }
if (budy.startsWith(">")) {
          if (!isCreator) return
          let kode = budy.trim().split(/ +/)[0]
          let teks;
          try {
            teks = await eval(
              `(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`,
            )
          } catch (e) {
            teks = e;
          } finally {
            await m.reply(require("util").format(teks))
          }
        }


if (isCmd && budy.toLowerCase() != undefined) {
if (m.isBaileys) return
if (from.endsWith('broadcast')) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
lenwy.copyNForward(from, msgs[budy.toLowerCase()], true)}
}
} catch (err) {
console.log(util.format(err))
let e = String(err)
lenwy.sendMessage('6288991583829' + "@s.whatsapp.net", { text: `Pesan Dari ${botname}\n⚠️ *Bebbb.. Ada Yang Error Nih! Di Bagian :* ` + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}},
{ quoted: m })
}}
console.log(typeof lenwy.groupFetchAllParticipating)

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green(`📑  Update : ${__filename}`))
delete require.cache[file]
require(file)
})
