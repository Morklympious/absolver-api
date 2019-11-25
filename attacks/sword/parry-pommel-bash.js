module.exports = {
    name  : "Parry Pommel Bash",
    style : "kahlt",

    stance : {
        barehands : false,

        sword : {
            BACK_RIGHT : "FRONT_RIGHT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 20,
        advantage : {
            hit   : 11,
            guard : 4,
        },
    },

    modifiers : [ "parry" ],
};

