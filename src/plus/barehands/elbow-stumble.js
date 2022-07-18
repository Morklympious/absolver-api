module.exports = {
    name  : "Elbow Stumble",
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
    type   : "thrust",

    frames : {
        startup   : 13,
        advantage : {
            hit   : 7,
            guard : 4,
        },
    },

    modifiers : [],
};
