module.exports = {
    name  : "Stretch Out Hook",
    style : "forsaken",

    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_LEFT",
            BACK_LEFT  : "FRONT_RIGHT",
        },

        sword : {
            BACK_LEFT : "FRONT_RIGHT",
        },
    },
    
    hits : "same",
    
    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 12,
        advantage : {
            hit   : 6,
            guard : 2,
        },
    },

    modifiers : [],
};
    
