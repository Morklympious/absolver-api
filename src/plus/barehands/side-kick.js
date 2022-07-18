module.exports = {
    name  : "Side Kick",
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

    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 17,
        advantage : {
            hit   : 10,
            guard : 4,
        },
    },

    modifiers : [],
};
    
