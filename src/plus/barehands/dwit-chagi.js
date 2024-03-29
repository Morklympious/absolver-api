module.exports = {
    name  : "Dwit Chagi",
    style : "windfall",

    stance : {
        barehands : {
            FRONT_RIGHT : "BACK_LEFT",
            FRONT_LEFT  : "BACK_RIGHT",
        },

        sword : {
            FRONT_RIGHT : "BACK_LEFT",
            FRONT_LEFT  : "BACK_RIGHT",
        },
    },

    hits : "diff",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 15,
        advantage : {
            hit   : 6,
            guard : 6,
        },
    },

    modifiers : [ "stop" ],
};
