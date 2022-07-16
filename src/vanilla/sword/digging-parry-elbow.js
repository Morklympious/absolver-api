module.exports = {
    name  : "Digging Parry Elbow",
    style : "forsaken",

    stance : {
        barehands : false,

        sword : {
            FRONT_LEFT : "BACK_RIGHT",
        },
    },

    hits : "diff",

    height : "high",
    type   : "thrust",

    frames : {
        startup   : 18,
        advantage : {
            hit   : 9,
            guard : 4,
        },
    },

    modifiers : [ "parry" ],
};

