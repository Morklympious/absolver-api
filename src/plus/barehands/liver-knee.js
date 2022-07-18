module.exports = {
    name  : "Liver Knee",
    style : "kahlt",

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
    
    hits : "same",
    
    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 16,
        advantage : {
            hit   : 7,
            guard : 6,
        },
    },

    modifiers : [],
};

