module.exports = {
    name  : "Side Wind Thrust",
    style : "windfall",

    stance : {
        barehands : false,

        sword : {
            FRONT_LEFT : "FRONT_RIGHT",
        },
    },

    hits : "diff",

    height : "high",
    type   : "thrust",

    frames : {
        startup   : 21,
        advantage : {
            hit   : 13,
            guard : 5,
        },
    },

    modifiers : [],
};

