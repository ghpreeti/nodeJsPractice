var fs = require("fs");
console.log("going to open file!");
fs.open('demo.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log("file opened successfully!");
})