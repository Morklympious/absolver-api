const glob = require("glob");
const fs = require("fs");
const util = require("util");

const hands = glob.sync("./attacks/barehands/*.js");
const blade = glob.sync("./attacks/sword/*.js");

const barehands = hands.map((file) => require(file));
const sword = blade.map((file) => require(file));

if(process.env.GENERATE) {
    fs.writeFileSync("./dist/barehands.json", JSON.stringify(barehands, null, 4));
    fs.writeFileSync("./dist/sword.json", JSON.stringify(sword, null, 4))
}

module.exports = {
    barehands,
    sword,
};
