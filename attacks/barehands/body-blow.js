const stances = require("../../utilities/stances.js");

module.exports =  {
    name  : "Body Blow",
    style : "kahlt",

    stances : stances("front", "vertical", false),

    height : "mid",
    type   : "thrust",

    properties : [ "strafe" ]
};
