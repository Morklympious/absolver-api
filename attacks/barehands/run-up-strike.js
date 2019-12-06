module.exports = {
    name  : "Run-up Strike",
    style : "faejin",
    
    stance : {
        barehands : {
            FRONT_RIGHT : "BACK_LEFT",
            FRONT_LEFT  : "BACK_RIGHT",
        },

        sword : {
            FRONT_LEFT : "BACK_RIGHT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 21,
        advantage : {
            hit   : 12,
            guard : 5,
        },
    },

    modifiers : [],
};
