module.exports = {
    name  : "Front Sweep",
    style : "windfall",

    stance : {
        barehands : {
            FRONT_RIGHT : "BACK_RIGHT",
            FRONT_LEFT  : "BACK_LEFT",
        },

        sword : {
            FRONT_RIGHT : "BACK_RIGHT",
            FRONT_LEFT  : "BACK_LEFT",
        },
    },

    hits : "same",

    height : "low",
    type   : "horizontal",

    frames : {
        startup   : 15,
        advantage : {
            hit   : 6,
            guard : 2,
        },
    },

    modifiers : [ "duck" ],
};
    
