module.exports = {
    name  : "Double Palm",
    style : "windfall",

    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_LEFT",
            BACK_LEFT  : "FRONT_RIGHT",
        },

        sword : false,
    },

    hits : "same",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 14,
        advantage : {
            hit   : 7,
            guard : 4,
        },
    },

    modifiers : [ "double" ],
};
