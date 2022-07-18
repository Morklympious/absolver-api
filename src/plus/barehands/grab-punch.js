module.exports = {
    name  : "Grab Punch",
    style : "stagger",

    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_RIGHT",
            BACK_LEFT  : "FRONT_LEFT",
        },

        sword : {
            BACK_LEFT : "FRONT_LEFT",
        },
    },

    hits : "diff",

    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 21,
        advantage : {
            hit   : 9,
            guard : 0,
        },
    },

    modifiers : [],
};
    
