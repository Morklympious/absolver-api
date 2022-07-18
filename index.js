const glob = require("glob");
const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = "./public";

const hands = glob.sync("./src/vanilla/barehands/*.js");
const blade = glob.sync("./src/vanilla/sword/*.js");

fs.rmSync(PUBLIC_DIR, { recursive: true, force: true })
fs.mkdirSync(PUBLIC_DIR);

// Outputs the move in a single-file version in addition to barehands / sword
const singlify = (file) => fs.writeFileSync(path.join(PUBLIC_DIR, `${path.parse(file).name}.json`), JSON.stringify(data, null, 4));

const barehands = hands.map((file) => {
    const data = require(file);
    return data;
});

const sword = blade.map((file) => require(file));

console.log(barehands)

if(process.env.GENERATE) {
    fs.writeFileSync(path.join(PUBLIC_DIR, "barehands.json"), JSON.stringify(barehands, null, 4));
    fs.writeFileSync(path.join(PUBLIC_DIR, "sword.json"), JSON.stringify(sword, null, 4))
}

module.exports = {
    barehands,
    sword,
};
