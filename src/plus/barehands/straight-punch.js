module.exports = {
    name  : "Straight Punch",
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
    type   : "thrust",

    frames : {
        startup   : 13,
        advantage : {
            hit   : 8,
            guard : 3,
        },
    },

    modifiers : [],
};
