module.exports = {
    name  : "Light Thrust",
    style : "forsaken",

    stance : {
        barehands : false,

        sword : {
            FRONT_LEFT : "FRONT_LEFT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 14,
        advantage : {
            hit   : 6,
            guard : 5,
        },
    },

    modifiers : [ "stop" ],
};

