module.exports = {
    name  : "Leg Breaker",
    style : "kahlt",

    stance : {
        barehands : {
            FRONT_RIGHT : "FRONT_LEFT",
            FRONT_LEFT  : "FRONT_RIGHT",
        },

        sword : {
            FRONT_RIGHT : "FRONT_LEFT",
            FRONT_LEFT  : "FRONT_RIGHT",
        },
    },

    hits : "same",

    height : "low",
    type   : "horizontal",

    frames : {
        startup   : 18,
        advantage : {
            hit   : 10,
            guard : 4,
        },
    },


    modifiers : [],
};
    
