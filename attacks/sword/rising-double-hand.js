module.exports =  {
    name  : "Rising Double Hand",
    style : "kahlt",

    stance : {
        barehands : false,

        sword : {
            BACK_LEFT : "BACK_RIGHT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "vertical",

    frames : {
        startup   : 17,
        advantage : {
            hit   : 9,
            guard : 9,
        },
    },

    modifiers : [ "break" ],
};

