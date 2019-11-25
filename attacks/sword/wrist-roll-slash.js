module.exports = {
    name  : "Wrist Roll Slash",
    style : "stagger",

    stance : {
        barehands : false,

        sword : {
            BACK_RIGHT : "FRONT_RIGHT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "vertical",

    frames : {
        startup   : 15,
        advantage : {
            hit   : 9,
            guard : 4,
        },
    },

    modifiers : [],
};

