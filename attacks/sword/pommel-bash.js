module.exports = {
    name  : "Pommel Bash",
    style : "forsaken",

    stance : {
        barehands : false,

        sword : {
            FRONT_RIGHT : "BACK_LEFT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "vertical",

    frames : {
        startup   : 18,
        advantage : {
            hit   : 10,
            guard : 10,
        },
    },

    modifiers : [ "break" ],
};

