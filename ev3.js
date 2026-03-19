var eventemitter=require("events");
var ee=new eventemitter();
ee.on("add",(a,b)=>{
    console.log(`Addition is ${a+b}`);
});
ee.on("add",()=>{
    console.log("done");
    ee.emit("success")
});
ee.on("success",()=>{
    console.log("Done")
});
ee.emit("add",10,5);