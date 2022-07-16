module.exports = {
    name  : "Kitsueno Cut",
    style : "windfall",

    stance : {
        barehands : false,

        sword : {
            BACK_LEFT : "BACK_LEFT",
        },
    },

    hits : "diff",

    height : "mid",
    type   : "vertical",

    frames : {
        startup   : 12,
        advantage : {
            hit   : 4,
            guard : -1,
        },
    },

    modifiers : [ "duck" ],
};

