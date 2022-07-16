module.exports = {
    name  : "Low Spin Heel",
    style : "windfall",

    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_RIGHT",
            BACK_LEFT  : "FRONT_LEFT",
        },

        sword : {
            BACK_RIGHT : "FRONT_RIGHT",
            BACK_LEFT  : "FRONT_LEFT",
        },
    },

    hits : "diff",

    height : "low",
    type   : "horizontal",

    frames : {
        startup   : 18,
        advantage : {
            hit   : 9,
            guard : 3,
        },
    },

    modifiers : [ "duck" ],
};
    
