module.exports = {
    name  : "Reverse Hips Slash",
    style : "kahlt",

    stance : {
        barehands : false,

        sword : {
            FRONT_LEFT : "FRONT_RIGHT",
        },
    },

    hits : "same",

    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 14,
        advantage : {
            hit   : 8,
            guard : 3,
        },
    },

    modifiers : [ "stop" ],
};

