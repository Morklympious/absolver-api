module.exports = {
    name  : "Blink Punch",
    style : "faejin",
    
    stance : {
        barehands : {
            FRONT_RIGHT : "BACK_RIGHT",
            FRONT_LEFT  : "BACK_LEFT",
        },

        sword : {
            FRONT_RIGHT : "BACK_RIGHT",
        },
    },

    hits : "diff",

    height : "high",
    type   : "thrust",

    frames : {
        startup   : 10,
        advantage : {
            hit   : 4,
            guard : 0,
        },
    },
    
    modifiers : [],
};
