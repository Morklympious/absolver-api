module.exports = {
    name  : "Rabbit Punch",
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

    height : "mid",
    type   : "vertical",

    frames : {
        startup   : 12,
        advantage : {
            hit   : 7,
            guard : 3,
        },
    },

    modifiers : [],
};
