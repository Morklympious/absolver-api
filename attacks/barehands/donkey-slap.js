module.exports = {
    name  : "Donkey Slap",
    style : "stagger",

    stance : {
        barehands : {
            BACK_RIGHT : "BACK_RIGHT",
            BACK_LEFT  : "BACK_LEFT",
        },

        sword : {
            BACK_LEFT : "BACK_LEFT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "vertical",

    frames : {
        startup   : 14,
        advantage : {
            hit   : 8,
            guard : 3,
        },
    },

    modifiers : [ "double" ],
};
