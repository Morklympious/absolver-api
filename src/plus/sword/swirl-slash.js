module.exports = {
    name  : "Swirl Slash",
    style : "windfall",

    stance : {
        barehands : false,

        sword : {
            FRONT_RIGHT : "BACK_LEFT",
        },
    },

    hits : "diff",

    height : "mid",
    type   : "vertical",

    frames : {
        startup   : 21,
        advantage : {
            hit   : 13,
            guard : 13,
        },
    },

    modifiers : [ "break" ],
};

