const stances = require("../../utilities/stances.js");

module.exports =  {
    name  : "Cleaver Blow",
    style : "windfall",

    stances : stances("back", "none", true),

    height : "high",
    type   : "thrust",

    properties : [ "break" ]
};
