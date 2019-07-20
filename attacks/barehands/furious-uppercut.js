
    const stances = require("../../utilities/stances.js");

    module.exports =  {
        name  : "Furious Uppercut",
        style : "forsaken",

        stances : stances("front", "diagonal", true),

        height : "mid",
        type   : "vertical",

        properties : [ "charge" ]
    };
    
