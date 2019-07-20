const stances = require("../../utilities/stances.js");

module.exports =  {
    name  : "Calbot",
    style : "forsaken",

    stances : stances("front", "vertical", true),

    height : "high",
    type   : "horizontal",

    properties : [ "strafe" ]
};
