const stances = require("../../utilities/stances.js");

module.exports =  {
    name  : "Crushing Palm",
    style : "windfall",

    stances : stances("front", "horizontal", false),

    height : "mid",
    type   : "thrust",

    properties : [ "stop" ]
};
