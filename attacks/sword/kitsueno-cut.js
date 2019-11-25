module.exports = {
    name  : "Kitsueno Cut",
    style : "windfall",

    stance : {
        barehands : false,

        sword : {
            FRONT_LEFT : "FRONT_LEFT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "vertical",

    frames : {
        startup   : 12,
        advantage : {
            hit   : 7,
            guard : 2,
        },
    },

    modifiers : [ "double" ],
};

