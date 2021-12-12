console.log("Hello World!!");

//const { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } = require("constants");
const cowsay = require("cowsay");
console.log(cowsay.think({text:"Moo-Moo"}));

/////////////////////////

//const numArray = require("./data");
//console.log(numArray);


const _ = require("lodash");
const numArray = require("./data");
console.log(_({text:"Hello this is lodash !!"}));

const data = require("./data");
//using lodash to shuffle the array from data.js
let shuffledNumArray = _.shuffle(data.numArray);
console.log(shuffledNumArray);


const sum = require("./sum");
console.log(data.numArray)





