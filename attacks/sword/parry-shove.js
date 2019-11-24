module.exports =  {
    name  : "Parry Shove",
    style : "forsaken",

    stance : {
        barehands : false,

        sword : {
            FRONT_LEFT : "BACK_RIGHT",
        },
    },

    hits : "diff",

    height : "high",
    type   : "thrust",

    frames : {
        startup   : 19,
        advantage : {
            hit   : 10,
            guard : 4,
        },
    },

    modifiers : [ "parry" ],
};

