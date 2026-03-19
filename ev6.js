var eventemitter=require("events");
var ee=new eventemitter();
var fs=require("fs");
ee.on("createfolder",()=>{
    if(!fs.existsSync("abc")){
        fs.mkdirSync("abc")
    }
    else{
        console.log("already exists");
        ee.emit("write")
    }
});
ee.on("write",()=>{
    fs.writeFileSync("xyz.txt","Hello");
    console.log("Written");
    //ee.emit("append");
});
ee.emit('createfolder')