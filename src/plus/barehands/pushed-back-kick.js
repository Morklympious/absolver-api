module.exports = {
    name  : "Pushed Back Kick",
    style : "forsaken",

    stance : {
        barehands : {
            BACK_RIGHT : "BACK_RIGHT",
            BACK_LEFT  : "BACK_LEFT",
        },

        sword : {
            BACK_RIGHT : "BACK_RIGHT",
            BACK_LEFT  : "BACK_LEFT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "vertical",

    frames : {
        startup   : 19,
        advantage : {
            hit   : 11,
            guard : 11,
        },
    },

    modifiers : [ "break" ],
};
    
