module.exports = {
    name  : "Inside Kick",
    style : "faejin",
    
    stance : {
        barehands : {
            FRONT_RIGHT : "BACK_LEFT",
            FRONT_LEFT  : "BACK_RIGHT",
        },

        sword : {
            FRONT_RIGHT : "BACK_LEFT",
            FRONT_LEFT  : "BACK_RIGHT",
        },
    },

    hits : "same",

    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 12,
        advantage : {
            hit   : 7,
            guard : 3,
        },
    },

    modifiers : [],
};
