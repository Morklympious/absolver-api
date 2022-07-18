
module.exports = {
    name  : "Roll Punch",
    style : "kahlt",

    stance : {
        barehands : {
            FRONT_RIGHT : "FRONT_LEFT",
            FRONT_LEFT  : "FRONT_RIGHT",
        },

        sword : {
            FRONT_LEFT : "FRONT_RIGHT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 17,
        advantage : {
            hit   : 7,
            guard : 6,
        },
    },

    modifiers : [],
};
    
