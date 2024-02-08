var fs = require("fs")
var buf = new Buffer.alloc(1024);

console.log("going to open the existing file")
fs.open('demo.txt','r+',function(err,fd){
    if(err){
        return console.log(err);
    }
    console.log("file opened successfully");
    console.log("gng to truncate the file after 10 bytes");

    fs.ftruncate(fd,10,function(err){
        if(err){
            console.log(err);
        }
        console.log("file truncated successfully");
        console.log("going to read the same file");

        fs.read(fd,buf,0,buf.length,0,function(err,bytes){
            if(err){
                console.log(err);
            }

            if(bytes>0){
                console.log(buf.slice(0,bytes).toString());
            }
            fs.close(fd,function(err){
                if(err){
                    console.log(err);
                }
                console.log("fully closed successfully");
            })
           
        })
    })
})