const glob = require("glob");
const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = "./public";
const EXCLUDED_MOVE_SYMBOL = "__";
const images = glob.sync("./src/images/*.png");

/**
 * 1. Grab the directory of all of the attacks, they should contain a barehands and sword folder
 * 2. Split them into three parts: All barehands, All sword, Each individual move
 *
 * This isn't perfect or great but it'll do for now!
 * */
const pathify = (version) => `${PUBLIC_DIR}/${Object.is(version, "vanilla") ? "" : version}`;

const generate = ({ barehands, sword, version }) => {
    const output = pathify(version);

    /** All output */
    const all = {
        barehands : [],
        sword     : [],
    };
    
    fs.rmSync(output, { force : true, recursive : true });
    fs.mkdirSync(`${output}/images`, { recursive : true });

    barehands.forEach((file) => {
        if(path.resolve(file).includes(EXCLUDED_MOVE_SYMBOL)) {
            return null;
        }

        const data = require(file);

        // Write the individual file
        fs.writeFileSync(`${output}/${path.parse(file).name}.json`, JSON.stringify(data, null, 4));

        return all.barehands.push(data);
    });

    sword.forEach((file) => {
        const data = require(file);

        if(path.resolve(file).includes(EXCLUDED_MOVE_SYMBOL)) {
            return null;
        }

        // Write the individual file
        fs.writeFileSync(`${output}/${path.parse(file).name}.json`, JSON.stringify(data, null, 4));

        return all.sword.push(data);
    });

    // Write the bulk files, barehands + sword
    fs.writeFileSync(`${output}/barehands.json`, JSON.stringify(all.barehands, null, 4));
    fs.writeFileSync(`${output}/sword.json`, JSON.stringify(all.sword, null, 4));
    
    images.forEach((file) => fs.copyFileSync(file, `${PUBLIC_DIR}/images/${path.basename(file)}`));
};

generate({
    barehands : glob.sync("./src/vanilla/barehands/*.js"),
    sword     : glob.sync("./src/vanilla/sword/*.js"),
    version   : "vanilla",
});

generate({
    barehands : glob.sync("./src/plus/barehands/*.js"),
    sword     : glob.sync("./src/plus/sword/*.js"),
    version   : "plus",
});

