const stances = require("../../utilities/stances.js");

module.exports =  {
    name  : "Double Spike Kick",
    style : "stagger",

    stances : stances("front", "none", false),

    height : "mid",
    type   : "thrust",

    properties : [ "double" ]
};
