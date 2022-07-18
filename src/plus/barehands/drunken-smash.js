module.exports = {
    name  : "Drunken Smash",
    style : "stagger",
    
    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_LEFT",
            BACK_LEFT  : "FRONT_RIGHT",
        },

        sword : false,
    },

    hits : "diff",

    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 20,
        advantage : {
            hit   : 13,
            guard : 5,
        },
    },

    modifiers : [],
};
