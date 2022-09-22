// const fs = require('fs');
const Logger = require("./logger");
const logger = new Logger();

logger.on("messageLogged", (arg) => {
    console.log("salom" + ' ' + arg.url)
})

logger.send()


// const file =  fs.readdirSync("./")

// console.log(file)

// fs.readdir("sad", (err, files) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(files)
//     }
// })

// fs.readFile("./index.js", 'utf-8', (err, filecontent) => { 
//     if(err){
//         throw err
//     }else{
//         console.log(filecontent)
//     }
// })

// fs.writeFile("./main.js", "hello there", (err) => {
//     if(err){
//         console.log(err)
//     }
// })

// fs.rename("./main.js", "./app.js", (err) => {
//     if(err){
//         console.log(err)
//     }
// })


// fs.unlink("./app.js", (err) => {
//     if(err){
//         console.log(err)
//     }
// })