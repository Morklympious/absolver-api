module.exports = {
    name  : "Double Thrust",
    style : "faejin",

    stance : {
        barehands : false,

        sword : {
            BACK_LEFT : "BACK_LEFT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 13,
        advantage : {
            hit   : 7,
            guard : 4,
        },
    },

    modifiers : [ "double" ],
};

