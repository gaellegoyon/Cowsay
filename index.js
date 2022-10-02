const userInfo = require('./information.js');
const cowsay = require("cowsay");


console.log(cowsay.say({
    text: `Hello ${userInfo.firstName}, bienvenue à la ${userInfo.campus}!`,
}));
