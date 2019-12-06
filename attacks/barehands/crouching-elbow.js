module.exports = {
    name  : "Crouching Elbow",
    style : "kahlt",

    stance : {
        barehands : {
            FRONT_RIGHT : "BACK_RIGHT",
            FRONT_LEFT  : "BACK_LEFT",
        },

        sword : {
            FRONT_LEFT : "BACK_LEFT",
        },
    },

    hits : "diff",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 12,
        advantage : {
            hit   : 6,
            guard : 4,
        },
    },

    modifiers : [],
};
