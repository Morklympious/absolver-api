const stances = require("../../utilities/stances.js");

module.exports = {
    name  : "360 Tornado Kick",
    style : "forsaken",
    
    stances : stances("front", "horizontal", true),

    damage : 119.8,
    speed  : 0.8,
    range  : 2.2,

    height : "high",
    type   : "horizontal",

    modifiers : [ "jump" ]
};
