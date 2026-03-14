var fs=require("fs");
//fs.mkdirSync("fs");
fs.writeFileSync("my.txt","B2 Students");
fs.appendFileSync("my.txt","\nHow are you?");
var r=fs.readFileSync("my.txt","utf-8");
fs.writeFileSync("mynew.txt","JSON completed");
//fs.copyFileSync("my.txt","test.txt")
fs.appendFileSync("mynew.txt","\n"+r)
fs.unlinkSync("my.txt");
var r2=fs.readFileSync("mynew.txt","utf-8");
console.log(r2)
