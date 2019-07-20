
    const stances = require("../../utilities/stances.js");

    module.exports =  {
        name  : "Roll Back Fist",
        style : "windfall",

        stances : stances("front", "diagonal", false),

        height : "high",
        type   : "thrust",

        properties : [ "strafe" ]
    };
    
