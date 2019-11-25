module.exports = {
    name  : "Front Stab",
    style : "faejin",

    stance : {
        barehands : false,

        sword : {
            BACK_RIGHT : "BACK_LEFT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 13,
        advantage : {
            hit   : 6,
            guard : 5,
        },
    },

    modifiers : [ "double" ],
};

