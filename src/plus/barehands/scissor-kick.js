module.exports = {
    name  : "Scissor Kick",
    style : "forsaken",

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
        startup   : 15,
        advantage : {
            hit   : 7,
            guard : 6,
        },
    },

    modifiers : [],
};
    
