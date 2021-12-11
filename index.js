console.log("Hello World!!");

const cowsay = require("cowsay");
console.log(cowsay.think({text:"Moo-Moo"}));

//const lodash = require("lodash");
//console.log(lodash.say({text:"TGIF !!!"}));

//const numArray = require("./data");
//console.log(numArray);

const _ = require("lodash");
console.log(_({text:"Hello this is lodash !!"}));
//using lodash to shuffle the array from data.js
let shuffled_numArray = _.shuffle(numArray);
console.log(shuffled_numArray);


const data = require("./data");
const sum = require("./sum");
console.log(data.numArray)





