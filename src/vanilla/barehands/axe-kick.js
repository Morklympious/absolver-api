module.exports = {
    name  : "Axe Kick",
    style : "forsaken",

    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_LEFT",
            BACK_LEFT  : "FRONT_RIGHT",
        },

        sword : {
            BACK_LEFT  : "FRONT_RIGHT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "vertical",

    frames : {
        startup   : 20,
        advantage : {
            hit   : 11,
            guard : 7,
        },
    },

    modifiers : [],
};
