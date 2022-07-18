module.exports = {
    name  : "Handstand Kick",
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

    hits : "diff",

    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 15,
        advantage : {
            hit   : 8,
            guard : 4,
        },
    },

    modifiers : [ "double" ],
};
    
