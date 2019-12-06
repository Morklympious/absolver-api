module.exports = {
    name  : "Mawashi",
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

    hits : "same",
    
    height : "high",
    type   : "thrust",

    frames : {
        startup   : 10,
        advantage : {
            hit   : 3,
            guard : 1,
        },
    },

    modifiers : [],
};

