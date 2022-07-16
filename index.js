const glob = require("glob");
const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = "./public";

const hands = glob.sync("./src/vanilla/barehands/*.js");
const blade = glob.sync("./src/vanilla/sword/*.js");

const barehands = hands.map((file) => require(file));
const sword = blade.map((file) => require(file));

if(process.env.GENERATE) {
    fs.writeFileSync(path.join(PUBLIC_DIR, "barehands.json"), JSON.stringify(barehands, null, 4));
    fs.writeFileSync(path.join(PUBLIC_DIR, "sword.json"), JSON.stringify(sword, null, 4))
}

module.exports = {
    barehands,
    sword,
};
