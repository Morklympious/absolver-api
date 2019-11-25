module.exports = {
    name  : "Limbo Thrust",
    style : "windfall",

    stance : {
        barehands : false,

        sword : {
            BACK_RIGHT : "FRONT_LEFT",
        },
    },

    hits : "same",

    height : "high",
    type   : "thrust",

    frames : {
        startup   : 14,
        advantage : {
            hit   : 6,
            guard : 2,
        },
    },

    modifiers : [ "duck" ],
};

