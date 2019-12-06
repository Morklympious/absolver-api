module.exports = {
    name  : "Back Turn Wrist",
    style : "stagger",

    stance : {
        barehands : {
            BACK_RIGHT : "BACK_LEFT",
            BACK_LEFT  : "BACK_RIGHT",
        },

        sword : {
            BACK_LEFT : "BACK_RIGHT",
        },
    },

    hits : "diff",

    height : "high",
    type   : "thrust",

    frames : {
        startup   : 10,
        advantage : {
            hit   : 3,
            guard : 1,
        },
    },

    modifiers : [],
};
