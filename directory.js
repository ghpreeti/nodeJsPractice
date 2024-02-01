var fs = require("fs");
 console.log("going to create directory /temp/test");
 fs.mkdir('demo_directory.txt',function(err){
    if(err){
        return console.error(err);
    }
    console.log("Directory created successfully");
 });
