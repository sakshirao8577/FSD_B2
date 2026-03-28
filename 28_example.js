var url = require("url");
var http = require("http");
var fs = require("fs");
var u =
  "https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest";
var p = url.parse(u, true);
var content = `${p.query.c1}!\n${p.query.c3} ${p.query.c2}\n${p.hash}`;
fs.writeFileSync("." + p.pathname, content);
http
  .createServer((req, res) => {
    if (req.url === "/home") {
      var r = fs.readFileSync("." + p.pathname, "utf-8");
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(`<h1 style="color:red"><pre>${r}</pre></h1>`);
    }
    else if(req.url==="/about"){
        var r=fs.readFileSync("img.png","utf-8");
        res.writeHead(200, { "Content-type": "image/png" });
        res.end(r);
    }
    else if(req.url==="/api"){
        var d={"name":"Rahul","Course":"Node JS","Enrolled":"Yes"};
        res.writeHead(200,{"Content-type":"application/json"});
        res.end(JSON.stringify(d));
    }
    else{
        res.writeHead(404,{"Content-type":"text/plain"});
        res.end("Page not found")
    }
  })
  .listen(7007);
