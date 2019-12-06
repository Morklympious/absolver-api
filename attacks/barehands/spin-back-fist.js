module.exports = {
    name  : "Spin Back Fist",
    style : "forsaken",

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
    type   : "horizontal",

    frames : {
        startup   : 13,
        advantage : {
            hit   : 7,
            guard : 2,
        },
    },

    modifiers : [],
};
    
