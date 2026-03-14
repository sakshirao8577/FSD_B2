const shape=[{"name":"circle","d":8},
    {"name":"square","s":10}];
var data=JSON.stringify(shape);
var fs=require("fs");
fs.writeFileSync("shape.txt",data);
var cp=2*3.14*(shape[0].d)
var sp=(shape[1].s)**2