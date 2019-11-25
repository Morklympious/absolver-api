module.exports = {
    name  : "Parry Slash",
    style : "forsaken",

    stance : {
        barehands : false,

        sword : {
            BACK_RIGHT : "FRONT_LEFT",
        },
    },

    hits : "diff",

    height : "low",
    type   : "horizontal",

    frames : {
        startup   : 24,
        advantage : {
            hit   : 13,
            guard : 6,
        },
    },

    modifiers : [ "parry" ],
};

