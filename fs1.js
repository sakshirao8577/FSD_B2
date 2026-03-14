var fs=require("fs");
//fs.mkdirSync("abc");
fs.writeFileSync("temp.txt","Hello");
var r=fs.readFileSync("temp.txt");
console.log(r.toString());
fs.appendFileSync("temp.txt","\n How are you?");
var r1=fs.readFileSync("temp.txt","utf-8");
console.log(r1);
fs.renameSync("temp.txt","new.txt");
//fs.unlinkSync("new.txt");
//fs.rmdirSync("abc");
fs.mkdirSync("xyz");
fs.writeFileSync("xyz/t1.txt","Hi");
fs.rmdirSync("xyz")