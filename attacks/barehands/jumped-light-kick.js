
    const stances = require("../../utilities/stances.js");

    module.exports =  {
        name  : "Jumped Light Kick",
        style : "windfall",

        stances : stances("front", "vertical", true),

        height : "mid",
        type   : "thrust",

        properties : [ "jump" ]
    };
    
