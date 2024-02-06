var fs = require("fs");

console.log("going to write into existing file ");
fs.writeFile('demo.txt','Simply easy learning',function(err){
    if(err){
        return console.log(err);
    }
    console.log("Data written successfully");
    console.log("lets read nwely written file");

    fs.readFile('demo.txt',function(err,data){
        if(err){
            return console.error(err);
        }
        console.log("Asynchronous read: "+data.toString());
    });
});