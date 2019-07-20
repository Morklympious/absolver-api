const stances = require("../../utilities/stances.js");

module.exports =  {
    name  : "Donkey Slap",
    style : "stagger",

    stances : stances("back", "none", true),

    height : "mid",
    type   : "vertical",

    properties : [ "double" ]
};
