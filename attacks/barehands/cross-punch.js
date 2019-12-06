module.exports = {
    name  : "Cross Punch",
    style : "forsaken",

    stance : {
        barehands : {
            FRONT_RIGHT : "FRONT_RIGHT",
            FRONT_LEFT  : "FRONT_LEFT",
        },

        sword : {
            FRONT_LEFT : "FRONT_LEFT",
        },
    },

    hits : "same",

    height : "high",
    type   : "thrust",

    frames : {
        startup   : 14,
        advantage : {
            hit   : 8,
            guard : 6,
        },
    },

    modifiers : [ "stop" ],
};
