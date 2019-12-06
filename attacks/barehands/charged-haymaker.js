module.exports = {
    name  : "Charged Haymaker",
    style : "kahlt",

    stance : {
        barehands : {
            FRONT_RIGHT : "FRONT_LEFT",
            FRONT_LEFT  : "FRONT_RIGHT",
        },

        sword : {
            FRONT_LEFT : "FRONT_RIGHT",
        },
    },

    hits : "same",

    height : "high",
    type   : "thrust",

    frames : {
        startup   : 22,
        advantage : {
            hit   : 10,
            guard : 5,
        },
    },

    modifiers : [ "charge" ],
};
