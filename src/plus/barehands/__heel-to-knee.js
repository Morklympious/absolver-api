module.exports = {
    name  : "Heel to Knee",
    style : "faejin",
    
    stance : {
        barehands : {
            BACK_RIGHT : "BACK_LEFT",
            BACK_LEFT  : "BACK_RIGHT",
        },

        sword : {
            BACK_RIGHT : "BACK_LEFT",
            BACK_LEFT  : "BACK_RIGHT",
        },
    },

    hits : "same",

    height : "low",
    type   : "thrust",

    frames : {
        startup   : 11,
        advantage : {
            hit   : 4,
            guard : 2,
        },
    },

    modifiers : [],
};
