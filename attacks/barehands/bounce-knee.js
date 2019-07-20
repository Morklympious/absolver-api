const stances = require("../../utilities/stances.js");

module.exports =  {
    name  : "Bounce Knee",
    style : "kahlt",

    stances : stances("front", "diagonal", true),

    height : "high",
    type   : "thrust",

    properties : [ "strafe" ]
};
