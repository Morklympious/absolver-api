const stances = require("../../utilities/stances.js");

module.exports =  {
    name  : "Eye Poke",
    style : "stagger",

    stances : stances("back", "horizontal", true),

    height : "high",
    type   : "thrust",

    properties : [ "stop" ]
};
