
    const stances = require("../../utilities/stances.js");

    module.exports =  {
        name  : "Front Sweep",
        style : "windfall",

        stances : stances("front", "horizontal", true),

        height : "low",
        type   : "horizontal",

        properties : [ "duck" ]
    };
    
