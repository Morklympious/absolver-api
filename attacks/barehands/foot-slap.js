
    const stances = require("../../utilities/stances.js");

    module.exports =  {
        name  : "Foot Slap",
        style : "stagger",

        stances : stances("front", "diagonal", true),

        height : "high",
        type   : "horizontal",

        properties : [ "jump" ]
    };
    
