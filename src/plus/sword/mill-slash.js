module.exports = {
    name  : "Mill Slash",
    style : "windfall",

    stance : {
        barehands : false,

        sword : {
            BACK_LEFT : "FRONT_LEFT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "vertical",

    frames : {
        startup   : 14,
        advantage : {
            hit   : 8,
            guard : 4,
        },
    },

    modifiers : [ "duck" ],
};

