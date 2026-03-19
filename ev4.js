var eventemitter=require("events");
var ee=new eventemitter();
var fun1=(m)=>{
    console.log(`fun msg:${m}`)
}
var fun2=(m)=>{
    console.log(`fun msg:${m}`)
}
ee.on("e1",fun1);
ee.on("e1",fun2);
ee.on("e2",fun1);
ee.on("e2",fun2);
ee.removeListener("e2",fun1);
var c1=ee.listenerCount("e2");
console.log(c1)
ee.removeAllListeners("e1");
var c=ee.listenerCount("e1");
console.log(`e1 event has ${c} listeners`);
ee.emit("e1","Hello students!");
ee.emit("e2","Events Module");
