var fs=require("fs");
fs.writeFile("help.txt","You are creating a file",(e)=>{
    if(e) throw e;
    else{
       fs.appendFile("help.txt","You are appending the data",(e)=>{
           if(e) throw e;
           else{
            fs.readFile("help.txt","utf-8",(e,data)=>{
                if(e) throw e;
                else{
                console.log("Thank you for using my program");
                fs.copyFile("help.txt","test1.txt",(e)=>
                { if(e) throw e;
                    else{
                        fs.unlink("help.txt",(e)=>{
                            if(e) throw e;
                            console.log("Task ended");
                        });
                    }
                });
                };
            });
           };
    })
    };
});