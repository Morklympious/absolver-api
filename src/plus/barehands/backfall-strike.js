module.exports = {
    name  : "Backfall Strike",
    style : "stagger",

    stance : {
        barehands : {
            BACK_RIGHT : "BACK_RIGHT",
            BACK_LEFT  : "BACK_LEFT",
        },

        sword : false,
    },

    hits : "diff",
    
    lands : "high",
    type  : "thrust",

    frames : {
        startup   : 12,
        advantage : {
            hit   : 7,
            guard : 2,
        },
    },

    modifiers : [ "double" ],
};
