module.exports = {
    name  : "Uramawashi",
    style : "windfall",

    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_LEFT",
            BACK_LEFT  : "FRONT_RIGHT",
        },

        sword : {
            BACK_RIGHT : "FRONT_LEFT",
            BACK_LEFT  : "FRONT_RIGHT",
        },
    },
    
    hits : "diff",
    
    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 13,
        advantage : {
            hit   : 7,
            guard : 4,
        },
    },

    modifiers : [],
};
    
