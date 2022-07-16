module.exports = {
    name  : "Foot Slap",
    style : "stagger",

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
        startup   : 13,
        advantage : {
            hit   : 5,
            guard : 0,
        },
    },

    modifiers : [ "jump" ],
};
    
