const stances = require("../../utilities/stances.js");

module.exports =  {
    name  : "Falcon Punch",
    style : "forsaken",

    stances : stances("front", "none", true),

    height : "high",
    type   : "thrust",

    properties : [ "jump" ]
};
