module.exports = {
    name  : "Surging Palm",
    style : "windfall",

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
    
