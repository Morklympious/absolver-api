module.exports = {
    name  : "Jumped Spin kick",
    style : "kahlt",
    
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

    hits : "same",
    
    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 23,
        advantage : {
            hit   : 12,
            guard : 6,
        },
    },

    modifiers : [],
};
    
