module.exports = {
    name  : "Crushing Palm",
    style : "windfall",

    stance : {
        barehands : {
            FRONT_RIGHT : "BACK_LEFT",
            FRONT_LEFT  : "BACK_RIGHT",
        },

        sword : {
            FRONT_LEFT : "BACK_RIGHT",
        },
    },

    hits : "diff",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 16,
        advantage : {
            hit   : 7,
            guard : 7,
        },
    },

    modifiers : [ "stop" ],
};
