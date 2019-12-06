module.exports = {
    name  : "Low Kick",
    style : "forsaken",

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
    
    height : "low",
    type   : "horizontal",

    frames : {
        startup   : 14,
        advantage : {
            hit   : 6,
            guard : 4,
        },
    },

    modifiers : [],
};
    
