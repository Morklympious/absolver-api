const glob = require("glob");
const fs = require("fs");

const hands = glob.sync("./attacks/barehands/*.js");
const blade = glob.sync("./attacks/sword/*.js");

const barehands = [ hands[0] ].map((file) => {
    const attack = fs.readFileSync(file, "utf-8");
    const search = new RegExp("/")
    console.log(typeof attack, attack,);

    const a = attack.replace(/"},"/g, "AAAA")
    console.log(a);
});

const sword = blade.map((file) => require(file));


module.exports = {
    barehands,
    sword,
};


