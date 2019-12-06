module.exports = {
    name  : "Guts Punch",
    style : "faejin",
    
    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_RIGHT",
            BACK_LEFT  : "FRONT_LEFT",
        },

        sword : {
            BACK_LEFT : "FRONT_LEFT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 20,
        advantage : {
            hit   : 12,
            guard : 6,
        },
    },

    modifiers : [],
};
