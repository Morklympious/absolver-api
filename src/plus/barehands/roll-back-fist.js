module.exports = {
    name  : "Roll Back Fist",
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

    height : "high",
    type   : "thrust",

    frames : {
        startup   : 16,
        advantage : {
            hit   : 10,
            guard : 4,
        },
    },

    modifiers : [],
};

