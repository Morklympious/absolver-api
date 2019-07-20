const stances = require("../../utilities/stances.js");

module.exports =  {
    name  : "Backfall Strike",
    style : "stagger",

    stances : stances("back", "none", false),

    lands : "high",
    type  : "thrust",

    properties : [ "double" ]
};
