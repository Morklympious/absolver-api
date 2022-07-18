module.exports = {
    name  : "Tripped Kick",
    style : "forsaken",

    stance : {
        barehands : {
            FRONT_RIGHT : "FRONT_LEFT",
            FRONT_LEFT  : "FRONT_RIGHT",
        },

        sword : {
            FRONT_RIGHT : "FRONT_LEFT",
            FRONT_LEFT  : "FRONT_RIGHT",
        },
    },
    
    hits : "diff",
    
    height : "low",
    type   : "horizontal",

    frames : {
        startup   : 14,
        advantage : {
            hit   : 7,
            guard : 4,
        },
    },

    modifiers : [],
};
    
