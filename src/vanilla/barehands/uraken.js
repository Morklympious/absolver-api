module.exports = {
    name  : "Uraken",
    style : "faejin",
    
    stance : {
        barehands : {
            BACK_RIGHT : "BACK_LEFT",
            BACK_LEFT  : "BACK_RIGHT",
        },

        sword : {
            BACK_LEFT : "BACK_RIGHT",
        },
    },

    hits : "diff",

    height : "high",
    type   : "thrust",

    frames : {
        startup   : 12,
        advantage : {
            hit   : 6,
            guard : 4,
        },
    },

    modifiers : [],
};
