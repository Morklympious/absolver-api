module.exports = {
    name  : "Falcon Punch",
    style : "forsaken",

    stance : {
        barehands : {
            FRONT_RIGHT : "FRONT_RIGHT",
            FRONT_LEFT  : "FRONT_LEFT",
        },

        sword : {
            FRONT_LEFT : "FRONT_LEFT",
        },
    },

    hits : "same",

    height : "high",
    type   : "thrust",

    frames : {
        startup   : 22,
        advantage : {
            hit   : 13,
            guard : 6,
        },
    },

    modifiers : [],
};
