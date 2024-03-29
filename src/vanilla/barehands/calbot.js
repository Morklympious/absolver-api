module.exports = {
    name  : "Calbot",
    style : "forsaken",

    stance : {
        barehands : {
            FRONT_RIGHT : "FRONT_LEFT",
            FRONT_LEFT  : "FRONT_RIGHT",
        },

        sword : {
            FRONT_LEFT : "FRONT_RIGHT",
        },
    },

    hits : "same",

    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 13,
        advantage : {
            hit   : 4,
            guard : 1,
        },
    },

    modifiers : [],
};
