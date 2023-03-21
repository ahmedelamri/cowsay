
const j = require('./information')

const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Bonjour my name is ${j.user}, et je viens du campus de  ${j.lieu}`,
}));
