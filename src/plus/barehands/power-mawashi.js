module.exports = {
    name  : "Power Mawashi",
    style : "faejin",
    
    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_LEFT",
            BACK_LEFT  : "FRONT_RIGHT",
        },

        sword : {
            BACK_RIGHT : "FRONT_LEFT",
            BACK_LEFT  : "FRONT_RIGHT",
        },
    },

    hits : "same",

    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 19,
        advantage : {
            hit   : 11,
            guard : 4,
        },
    },

    modifiers : [],
};
