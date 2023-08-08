// Video 4- The Global object

// console.log('Node js');
// var time=0;
// var timer=setInterval(function(){
//     time+=2;
//     console.log(time+' seconds have passed');
//     if(time>5){
//         // console.log('Loop has ended in '+time+' seconds');
//         clearInterval(timer);
//     }
// },2000);
// console.log(__dirname);
// console.log(__filename);


// Video 5 Function Expression

// function callFunction(fun){
//     fun();
// }

// function sayHi(){
//     console.log('Hi');
// }
// sayHi();
// //function expression

// var sayBye= function(){
//     console.log('bye');
// };
// // for(let i=0;i<3;i++){
// // sayBye();
// // }
// callFunction(sayBye);

// //Video 6 - Modules and require, Module Patterns

var counter = function (ar) {
    return 'There are ' + ar.length + ' elements in the array';

};

var adder = function (a, b) {
    return `Sum : ${a+b}`;
};
var pi = 3.14;
// module.exports.counter = counter; //For exporting a function for usage in another file
// module.exports.adder = adder;
// module.exports.pi = pi;
module.exports={
    counter:counter,
    adder:adder,
    pi:pi
}

// var result = counter(['Muthu', 'Pandi', 'Gilli']);
// console.log(result);



