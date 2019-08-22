/* eslint-disable no-console */
const fs = require("fs");

const barehands = fs.readdirSync("./attacks/barehands");
    // const sword     = fs.readdirSync("./attacks/sword");
    const results = {
        barehands : barehands.map((path) => require(`./attacks/barehands/${path}`)),
    };

fs.writeFile("./dist/barehands.json", JSON.stringify(results.barehands, null, 2), (err) => {
    if(err) {
        throw err;
    }

    console.log("successfully generated barehands attacks! (JSON)");
});

fs.writeFile("./dist/barehands.js", results.barehands, (err) => {
    if(err) {
        throw err;
    }

    console.log("successfully generated barehands attacks! (JS)")
});

// fs.writeFile("./dist/sword.json", JSON.stringify(results.sword, null, 2), (err) => {
//     if(err) {
//         throw err;
//     }

//     console.log("successfully generated sword attacks!");
// });

