module.exports = {
    name  : "360 Tornado Kick",
    style : "forsaken",
    
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

    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 20,
        advantage : {
            hit   : 13,
            guard : 5,
        },
    },

    modifiers : [],
};
