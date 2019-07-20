
    const stances = require("../../utilities/stances.js");

    module.exports =  {
        name  : "Whirlwind Double Punch",
        style : "stagger",

        stances : stances("back", "vertical", true),

        height : "low",
        type   : "horizontal",

        properties : [ "duck", "double" ]
    };
    
