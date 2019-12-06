module.exports = {
    name  : "Back Hop Wrist",
    style : "stagger",

    stance : {
        barehands : {
            BACK_RIGHT : "BACK_RIGHT",
            BACK_LEFT  : "BACK_LEFT",
        },

        sword : {
            BACK_RIGHT : "BACK_RIGHT",
        },
    },

    hits : "same",

    height : "high",
    type   : "thrust",

    frames : {
        startup   : 10,
        advantage : {
            hit   : 4,
            guard : 0,
        },
    },

    modifiers : [],
};
