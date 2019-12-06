module.exports = {
    name  : "Tetsuzanko",
    style : "windfall",

    stance : {
        barehands : {
            BACK_RIGHT : "BACK_LEFT",
            BACK_LEFT  : "BACK_RIGHT",
        },

        sword : {
            BACK_LEFT : "BACK_RIGHT",
        },
    },
    
    hits : "same",
    
    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 18,
        advantage : {
            hit   : 10,
            guard : 4,
        },
    },

    modifiers : [ "strafe" ],
};
    
