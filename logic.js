     const chalk = require("chalk")
     const fs = require("fs")

     global.sifat = `nama kamu adalah FunXStore Bot, dan kamu di ciptakan untuk melakukan tugaskan yang diberikan oleh orang , dan kamu di di buat oleh Deoberon, dan kamu harus menjawab dengan bahasa Indonesia dan mudah di pahami.`
     
     let file = require.resolve(__filename)
     fs.watchFile(file, () => {
	 fs.unwatchFile(file)
	 console.log(chalk.redBright(`Update'${__filename}'`))
   	 delete require.cache[file]
	 require(file)
     })