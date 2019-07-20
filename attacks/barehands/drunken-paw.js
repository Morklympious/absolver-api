const stances = require("../../utilities/stances.js");

module.exports =  {
    name  : "Double Fist Stretch",
    style : "stagger",

    stances : stances("front", "horizontal", false),

    height : "high",
    type   : "horizontal",

    properties : [ "strafe" ]
};
