module.exports =  {
    name  : "Reverse Twist Slash",
    style : "kahlt",

    stance : {
        barehands : false,

        sword : {
            FRONT_LEFT : "BACK_RIGHT",
        },
    },

    hits : "diff",

    height : "mid",
    type   : "vertical",

    frames : {
        startup   : 14,
        advantage : {
            hit   : 8,
            guard : 6,
        },
    },

    modifiers : [ "stop" ],
};

