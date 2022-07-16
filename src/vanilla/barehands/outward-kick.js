module.exports = {
    name  : "Outward Kick",
    style : "faejin",
    
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

    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 12,
        advantage : {
            hit   : 7,
            guard : 1,
        },
    },

    modifiers : [],
};
