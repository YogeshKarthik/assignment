// var abc = require('./app');

// console.log(abc(['Muthu', 'Pandi', 'Gilli','Otteri nari']));
// var countt = require('./app');


// console.log(countt.counter(['Muruga Bhavan', 2]));
// console.log(countt.adder(5, 6));
// console.log(countt.adder(countt.pi,5));


// Node event emitter

// var events = require('events');
// var util=require('util');

// var person=function(name){
//     this.name=name;
// };

// util.inherits(person,events.EventEmitter);

// var james=new person('j');
// var mary=new person('m');
// var ryu=new person('r');

// var people=[james,mary,ryu];
// people.forEach(function(person){
//     person.on('speak',function(mssg){
//         console.log(person.name + ' said: '+ mssg);
//     });
// });

// james.emit('speak','Send dudes');
// mary.emit('speak','Hey Bitches');
// ryu.emit('speak','curry venum');



// // File handling

// var fs = require('fs');
// // var readMe = fs.readFileSync('readme.txt', 'utf8');
// // fs.writeFileSync('writeMe.txt', readMe);
// // var writeme=fs.readFileSync('writeMe.txt','utf8');
// // console.log(writeme);
// var readme=fs.readFile('readMe.txt','utf8',function(err, data){
//     console.log(data);
// })
// console.log('test');


// Creating and removing directories

var fs = require('fs');
// fs.unlink('readme.txt',function(err){
//     if(err){
//         console.error('Deleting error',err);
//     }
//     else{
//         console.log('File deleted successfully');
//     }
// });

// fs.mkdirSync('newfolderrr');
// fs.rmdirSync('newfolderrr');

// fs.mkdir('stuff', function () {
//     fs.readFile('writeMe.txt', 'utf8', function (err, data) {
//         fs.writeFile('./stuff/abc.txt', data, function (err) {
//             if (err) {
//                 console.error('Writing error', err);
//             }
//             else {
//                 console.log('File "abc.txt" written successfully!');

//             }
//         });
//     });
// });

const express=require('express')
const app=express()

// app.get('/abc',function(req,res)=>{
//     res.send("hello");
// });

app.listen(3000,function(err){
    if(!err){
        console.log("Server started!");
    }
    else{
        console.log(err);
    }
})