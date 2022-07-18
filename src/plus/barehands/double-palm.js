module.exports = {
    name  : "Double Palm",
    style : "windfall",

    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_RIGHT",
            BACK_LEFT  : "FRONT_LEFT",
        },

        sword : false,
    },

    hits : "same",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 14,
        advantage : {
            hit   : 8,
            guard : 4,
        },
    },

    modifiers : [ "double" ],
};
