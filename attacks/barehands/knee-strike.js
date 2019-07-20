
    const stances = require("../../utilities/stances.js");

    module.exports =  {
        name  : "Knee Strike",
        style : "forsaken",

        stances : stances("back", "diagonal", false),

        height : "mid",
        type   : "vertical",

        properties : [ "break", "jump" ]
    };
    
