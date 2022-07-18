module.exports = {
    name  : "Wobble Low Kick",
    style : "stagger",

    stance : {
        barehands : {
            FRONT_RIGHT : "BACK_RIGHT",
            FRONT_LEFT  : "BACK_LEFT",
        },

        sword : {
            FRONT_RIGHT : "BACK_RIGHT",
            FRONT_LEFT  : "BACK_LEFT",
        },
    },

    hits : "same",

    height : "low",
    type   : "horizontal",

    frames : {
        startup   : 12,
        advantage : {
            hit   : 6,
            guard : 3,
        },
    },

    modifiers : [],
};
    
