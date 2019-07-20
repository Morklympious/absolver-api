
    const stances = require("../../utilities/stances.js");

    module.exports =  {
        name  : "Handstand Kick",
        style : "stagger",

        stances : stances("front", "diagonal", false),

        height : "high",
        type   : "horizontal",

        properties : [ "double", "low" ]
    };
    
