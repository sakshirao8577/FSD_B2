var p=require("path");
var fs=require("fs");
var mypath="myfile1/first1.txt";
var d=p.dirname(mypath);
var b=p.basename(mypath);
var newpath=d+"/"+b
fs.mkdir(d,(e)=>{
    if(e){throw e;}
    else(console.log("folder created"))
})
fs.writeFile(newpath,"Hello",(e)=>{
    if(e){throw e;}
    else{
        fs.copyFile(newpath,d+"/second.txt",(e)=>{
            if(e){throw e;}
            else{
                fs.unlink(newpath,(e)=>{
                    if (e){throw e}
                    else(console.log("Completed"))
                })
            }
        })
    }
})