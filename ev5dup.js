var eventemitter=require("events");
var ee=new eventemitter();
var myfun=(r,s)=>{
    if(r<0){
        console.log("Radius must be positive");
    }
    else{
        var pc=2*3.14*r;
        console.log(`Perimeter of circle is ${pc}`);
    }
    if(s<0){
        console.log("Sides must be positive");
    }
    else{
        var pc=4*s;
        console.log(`Perimeter of circle is ${pc}`);
    }
};
ee.on("calc",myfun);
ee.emit("calc",5,2)