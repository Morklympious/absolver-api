module.exports =  {
    name  : "Ram Thrust",
    style : "forsaken",

    stance : {
        barehands : false,

        sword : {
            BACK_RIGHT : "FRONT_RIGHT",
        },
    },

    hits : "same",

    height : "high",
    type   : "thrust",

    frames : {
        startup   : 13,
        advantage : {
            hit   : 7,
            guard : 6,
        },
    },

    modifiers : [ "stop" ],
};

