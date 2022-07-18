module.exports = {
    name  : "Furious Uppercut",
    style : "forsaken",

    stance : {
        barehands : {
            FRONT_RIGHT : "BACK_LEFT",
            FRONT_LEFT  : "BACK_RIGHT",
        },

        sword : {
            FRONT_LEFT : "BACK_RIGHT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "vertical",

    frames : {
        startup   : 22,
        advantage : {
            hit   : 12,
            guard : 3,
        },
    },

    modifiers : [ "charge" ],
};
    
