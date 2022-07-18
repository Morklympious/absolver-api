module.exports = {
    name  : "Jackhammer Punch",
    style : "kahlt",

    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_RIGHT",
            BACK_LEFT  : "FRONT_LEFT",
        },

        sword : false,
    },

    hits : "diff",

    height : "mid",
    type   : "vertical",

    frames : {
        startup   : 17,
        advantage : {
            hit   : 10,
            guard : 5,
        },
    },

    modifiers : [ "double" ],
};
    
