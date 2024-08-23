module.exports = {
    name  : "Whirlwind Double Punch",
    style : "stagger",

    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_RIGHT",
            BACK_LEFT  : "FRONT_LEFT",
        },

        sword : {
            BACK_RIGHT : "FRONT_RIGHT",
            BACK_LEFT  : "FRONT_LEFT",
        },
    },
    
    hits : "same",
    
    height : "low",
    type   : "horizontal",

    frames : {
        startup   : 16,
        advantage : {
            hit   : 7,
            guard : 1,
        },
    },

    modifiers : [ "duck", "double" ],
};
    
