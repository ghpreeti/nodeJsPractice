var fs = require("fs")
const {json} = require("stream/consumers");
let student ={
    name:'mike',
    age:23,
    gender:'male',
    department:'English',car:'Honda'
};
let data = JSON.stringify(student,null,2);
fs.writeFile('student-3.json',data,(err)=>{
    if(err) throw err;
    console.log('data written to file');
});