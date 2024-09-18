module.exports = {
    name  : "Back Tripped Kick",
    style : "kahlt",

    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_RIGHT",
            BACK_LEFT  : "FRONT_LEFT",
        },

        sword : {
            BACK_LEFT  : "FRONT_LEFT",
        },
    },

    hits : "diff",

    height : "low",
    type   : "horizontal",

    frames : {
        startup   : 12,
        advantage : {
            hit   : 4,
            guard : -1,
        },
    },

    modifiers : [ "duck" ],
};
