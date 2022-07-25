var events= require("events");
var eventemitter = new events.EventEmitter();
eventemitter.on('start comparison',(a,b) =>{

    function delay (){
    if(a>b){
        console.log("A is greater than B");

    }
    else if(b>a) {
        console.log("B is greater than A");

    }
    else {
        console.log("A equals B");
    }}
    setTimeout(delay,3000);
    eventemitter.emit('ending');

});

eventemitter.on('ending',()=>{

    function time(){

    console.log("Comparison done successfully ");
    }
    setTimeout(time,4000);
});



var fs= require('fs');
var events = require("events");
var create = fs.writeFileSync('samplee1.doc', " Here are the Instructions for comparison operators -->  ' > ' means greater than, ' < ' means smaller than, ' = ' means equals ",()=>{

})
var open = fs.readFileSync('samplee1.doc');
var open  = open.toString();
console.log(open);;

eventemitter.emit('start comparison',100,10);

