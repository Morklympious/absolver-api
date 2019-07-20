const stances = require("../../utilities/stances.js");

module.exports =  {
    name  : "Back Tripped Kick",
    style : "kahlt",

    stances : stances("back", "horizontal", false),

    height : "low",
    type   : "horizontal",

    properties : [ "duck" ]
};
