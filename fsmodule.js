const fs=require("fs")

// fs.readFile("file.txt","utf8",(err,data)=>{
//     console.log(err,data)
// })
fs.writeFileSync("myfile2.txt","rgrtgfgfhfhg bghfhgtfg")

const a=fs.readFileSync("file.txt")
console.log(a.toString())

