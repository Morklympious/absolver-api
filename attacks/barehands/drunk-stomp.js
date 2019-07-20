const stances = require("../../utilities/stances.js");

module.exports =  {
    name  : "Drunk Stomp",
    style : "stagger",

    stances : stances("front", "vertical", true),

    height : "mid",
    type   : "thrust",

    properties : [ "stop" ]
};
