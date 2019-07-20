const stances = require("../../utilities/stances.js");

module.exports =  {
    name  : "Charged Haymaker",
    style : "kahlt",

    stances : stances("front", "vertical", true),

    height : "high",
    type   : "thrust",

    properties : [ "charge" ]
};
