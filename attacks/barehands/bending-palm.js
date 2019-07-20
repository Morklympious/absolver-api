const stances = require("../../utilities/stances.js");

module.exports =  {
    name  : "Bending Palm",
    style : "windfall",

    stances : stances("front", "diagonal", false),

    height : "mid",
    type   : "thrust",

    properties : [ "stop" ]
};
