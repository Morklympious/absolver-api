module.exports = {
    name  : "Bending Palm",
    style : "windfall",

    stance : {
        barehands : {
            FRONT_RIGHT : "BACK_LEFT",
            FRONT_LEFT  : "BACK_RIGHT",
        },

        sword : false,
    },

    hits : "diff",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 17,
        advantage : {
            hit   : 7,
            guard : 7,
        },
    },

    modifiers : [ "stop" ],
};
