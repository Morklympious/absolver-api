module.exports = {
    name  : "Winged Back Kick",
    style : "forsaken",

    stance : {
        barehands : {
            FRONT_RIGHT : "BACK_RIGHT",
            FRONT_LEFT  : "BACK_LEFT",
        },

        sword : {
            FRONT_RIGHT : "BACK_RIGHT",
            FRONT_LEFT  : "BACK_LEFT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 14,
        advantage : {
            hit   : 6,
            guard : 6,
        },
    },
    
    modifiers : [ "stop" ],
};
    
