module.exports = {
    name  : "Mill Punch",
    style : "forsaken",

    stance : {
        barehands : {
            FRONT_RIGHT : "BACK_LEFT",
            FRONT_LEFT  : "BACK_RIGHT",
        },

        sword : false,
    },
    
    side : "diff",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 14,
        advantage : {
            hit   : 8,
            guard : 3,
        },
    },

    modifiers : [ "double" ],
};
    
