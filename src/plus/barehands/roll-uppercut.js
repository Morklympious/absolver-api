module.exports = {
    name  : "Roll Uppercut",
    style : "kahlt",

    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_LEFT",
            BACK_LEFT  : "FRONT_RIGHT",
        },

        sword : {
            BACK_RIGHT : "FRONT_LEFT",
        },
    },
    
    hits : "diff",
    
    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 19,
        advantage : {
            hit   : 12,
            guard : 5,
        },
    },

    modifiers : [],
};
    
