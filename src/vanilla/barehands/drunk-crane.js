module.exports = {
    name  : "Drunk Crane",
    style : "stagger",

    stance : {
        barehands : {
            FRONT_RIGHT : "BACK_RIGHT",
            FRONT_LEFT  : "BACK_LEFT",
        },

        sword : false,
    },

    hits : "same",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 12,
        advantage : {
            hit   : 7,
            guard : 3,
        },
    },

    modifiers : [],
};
