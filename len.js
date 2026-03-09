/* 
Owner = Risa
Contact Telegram = https://t.me/shaaaiu 
Contact WhatsApp = https://wa.me/6288991583829
*/

const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')

global.grup = 'https://chat.whatsapp.com/KK42TDceD41AnAZF3yMhlx'
global.ig = '-'
global.thumb = fs.readFileSync("./data/image/thumb.jpg")
global.email = ''
global.region = ''

global.owner = ['6281515890733'] 
global.nomorOwn = ['6281515890733']
global.developer = ['6281515890733']
global.bot = ['6283140684793']
global.ownername = 'rere'
global.developername = 'rere'
global.botname = "botvers rere"
global.emoji = '💜'
global.packname = "rere"
global.author = `rere`

global.keyopenai = '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'
global.ibeng = 'Yl4h5x9wiA'
global.jer = '4mxX1ye'
global.api = {
    xterm: {
      url: "https://ai.xterm.codes",
      key: "Bell409"
    }
  }

global.text_sewa = ''
global.text_ppj = ''

global.xprefix = '.'

global.domain = 'https://deotws.panelshopp.biz.id'
global.apikey = 'ptla_T9qBQGHQ2IXbLPR2aXkgUc1QGJ0KVtH7OGrIZKcfJQU' // Plta
global.capikey = '-' // Pltc
global.eggsnya = '15'
global.location = '1'

global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'Session'
global.anticall = true
global.autobackup = true
global.autoshalat = true

global.mess = {
    success: '*Selesai*',
    admin: '⚠️ *Fitur Khusus Admin Group!*',
    botAdmin: '⚠️ *Fitur Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group!*',
    owner: '⚠️ *Fitur Khusus Owner!*',
    creator: '⚠️ *Fitur Khusus Creator!*',
    prem: '⚠️ *Fitur Khusus Premium!*',
    group: '⚠️ *Fitur Ini Hanya Bisa Digunakan Di Group Chat!*',
    wait: '📦 *Dalam Proses*',
    error: '⚠️ *Kayaknya Ada Error, Coba Lagi Di Lain Waktu*',
    link: '⚠️ *Itu Bukan Link Yang Benar*',
    
}

global.limitawal = {
    premium: 100000 ,
    free: 50
}

global.multiplier = 1000

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green(`📑  Update : ${__filename}`))
delete require.cache[file]
require(file)
})
