module.exports = {
    name  : "Horse Kick",
    style : "faejin",
    
    stance : {
        barehands : {
            BACK_RIGHT : "BACK_RIGHT",
            BACK_LEFT  : "BACK_LEFT",
        },

        sword : {
            BACK_RIGHT : "BACK_RIGHT",
            BACK_LEFT  : "BACK_LEFT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 23,
        advantage : {
            hit   : 13,
            guard : 8,
        },
    },


    modifiers : [],
};
