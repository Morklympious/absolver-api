module.exports = {
    name  : "Jump Out Elbow",
    style : "kahlt",

    stance : {
        barehands : {
            FRONT_RIGHT : "BACK_RIGHT",
            FRONT_LEFT  : "BACK_LEFT",
        },

        sword : {
            FRONT_RIGHT : "BACK_RIGHT",
        },
    },

    hits : "diff",
    
    height : "mid",
    type   : "vertical",

    frames : {
        startup   : 21,
        advantage : {
            hit   : 13,
            guard : 13,
        },
    },

    modifiers : [ "break" ],
};
    
