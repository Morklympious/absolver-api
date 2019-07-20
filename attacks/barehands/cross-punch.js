const stances = require("../../utilities/stances.js");

module.exports =  {
    name  : "Cross Punch",
    style : "forsaken",

    stances : stances("front", "none", true),

    height : "high",
    type   : "thrust",

    properties : [ "stop" ]
};
