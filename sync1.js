var fs=require("fs");
fs.mkdirSync("new");
fs.writeFileSync("new/temp.txt","Hi! How are you? \nWelcome to LJ University.");
var data=fs.readFileSync("new/temp.txt","utf-8");
var i=0;
var v="aeiouAEIOU";
for(let a=0;a<data.length;a++){
    if(v.includes(data[a])){
        i++;
    }
};
fs.appendFileSync('new/temp.txt',"Number of vowels:"+i);
console.log("Task completed");
