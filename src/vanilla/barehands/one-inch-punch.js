module.exports = {
    name  : "One Inch Punch",
    style : "faejin",
    
    stance : {
        barehands : {
            FRONT_RIGHT : "FRONT_RIGHT",
            FRONT_LEFT  : "FRONT_LEFT",
        },

        sword : {
            FRONT_RIGHT : "FRONT_RIGHT",
        },
    },

    hits : "diff",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 24,
        advantage : {
            hit   : 15,
            guard : 15,
        },
    },

    modifiers : [ "break" ],
};
