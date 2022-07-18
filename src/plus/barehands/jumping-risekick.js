module.exports = {
    name  : "Jumping Risekick",
    style : "faejin",
    
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

    height : "mid",
    type   : "vertical",

    frames : {
        startup   : 16,
        advantage : {
            hit   : 10,
            guard : 3,
        },
    },

    modifiers : [],
};
