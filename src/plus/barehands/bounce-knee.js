module.exports = {
    name  : "Bounce Knee",
    style : "kahlt",

    stance : {
        barehands : {
            FRONT_RIGHT : "BACK_LEFT",
            FRONT_LEFT  : "BACK_RIGHT",
        },

        sword : {
            FRONT_RIGHT : "BACK_LEFT",
            FRONT_LEFT  : "BACK_RIGHT",
        },
    },

    hits : "same",

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
