const stances = require("../../utilities/stances.js");

module.exports =  {
    name  : "Double Fist Stretch",
    style : "stagger",

    stances : stances("back", "vertical", false),

    height : "high",
    type   : "horizontal",

    properties : [ "double" ]
};
