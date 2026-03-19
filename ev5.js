var eventemitter=require("events");
var ee=new eventemitter();
ee.on("cperi",(a)=>{
    if(a<0){
        console.log("radius is negative")
    }
    else{
        peri=2*3.14*a
        console.log(`Perimeter of circle is ${peri}`)
    }
});
ee.on("speri",(b)=>{
    if(b<0){
        console.log("side is negative")
    }
    else{
        peri=4*b
        console.log(`Perimeter of square is ${peri}`)
    }
});
ee.emit("cperi",-2);
ee.emit("speri",4);