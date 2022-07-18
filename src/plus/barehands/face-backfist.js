module.exports = {
    name  : "Face Backfist",
    style : "faejin",
    
    stance : {
        barehands : {
            BACK_RIGHT : "BACK_RIGHT",
            BACK_LEFT  : "BACK_LEFT",
        },

        sword : {
            BACK_RIGHT : "BACK_RIGHT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "vertical",

    frames : {
        startup   : 17,
        advantage : {
            hit   : 10,
            guard : 4,
        },
    },

    modifiers : [],
};
