var http=require("http");
var fs=require("fs");
var url=require("url");
http.createServer((req,res)=>{
    if (req.url==="/"){
        res.writeHead(200,{"Content-type":"text/html"});
        res.end(`<h1>Welcome to my Website</h1>
            <a href="/about">About Us</a>
            <a href="/Contact">Contact Us</a>`);
    }
    else if(req.url==="/about"){
        res.write('<h1 style="color:blue;font-style:italic">About Page</h1>');
        res.write("<h2>Lorem1000    </h2>");
        res.end("hi");
    }
    else if(req.url==="/contact"){
        res.end("Email:abc@ljinstitutes.edu.in");
    }
    else{
        res.writeHead(404,{"Content-type":"text/plain"});
        res.end("Page not found!");
    }
}).listen(8008)