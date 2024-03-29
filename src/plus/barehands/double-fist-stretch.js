module.exports = {
    name  : "Double Fist Stretch",
    style : "stagger",

    stance : {
        barehands : {
            BACK_RIGHT : "BACK_LEFT",
            BACK_LEFT  : "BACK_RIGHT",
        },

        sword : false,
    },

    hits : "diff",

    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 14,
        advantage : {
            hit   : 8,
            guard : 4,
        },
    },

    modifiers : [ "double" ],
};
