module.exports = {
    name  : "Back Ura",
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

    hits : "diff",

    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 12,
        advantage : {
            hit   : 7,
            guard : 1,
        },
    },

    modifiers : [],
};
