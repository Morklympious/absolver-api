module.exports = {
    name  : "Jar Bash",
    style : "stagger",

    stance : {
        barehands : {
            FRONT_RIGHT : "FRONT_LEFT",
            FRONT_LEFT  : "FRONT_RIGHT",
        },

        sword : false,
    },

    hits : "diff",

    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 14,
        advantage : {
            hit   : 7,
            guard : 4,
        },
    },

    modifiers : [],
};
    
