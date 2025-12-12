module.exports = {
    name  : "Twist Parry Strike",
    style : "forsaken",

    stance : {
        barehands : {
            BACK_RIGHT : "BACK_RIGHT",
            BACK_LEFT  : "BACK_LEFT",
        },

        sword : {
            BACK_RIGHT : "BACK_RIGHT",
        },
    },
    
    hits : "same",
    
    height : "high",
    type   : "thrust",

    frames : {
        startup   : 20,
        advantage : {
            hit   : 9,
            guard : 4,
        },
    },

    modifiers : [ "parry" ],
};
    
