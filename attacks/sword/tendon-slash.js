module.exports =  {
    name  : "Tendon Slash",
    style : "stagger",

    stance : {
        barehands : false,

        sword : {
            FRONT_RIGHT : "BACK_LEFT",
        },
    },

    hits : "diff",

    height : "low",
    type   : "horizontal",

    frames : {
        startup   : 16,
        advantage : {
            hit   : 8,
            guard : 4,
        },
    },

    modifiers : [],
};

