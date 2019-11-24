module.exports =  {
    name  : "Typhoon Slash",
    style : "faejin",

    stance : {
        barehands : false,

        sword : {
            FRONT_LEFT : "BACK_RIGHT",
        },
    },

    hits : "same",

    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 13,
        advantage : {
            hit   : 7,
            guard : -1,
        },
    },

    modifiers : [ "double" ],
};

