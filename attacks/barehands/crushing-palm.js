module.exports =  {
    name  : "Crushing Palm",
    style : "windfall",

    stance : {
        barehands : {
            FRONT_RIGHT : "BACK_LEFT",
            FRONT_LEFT  : "BACK_RIGHT",
        },

        sword : {
            FRONT_LEFT : "BACK_RIGHT",
        }
    },

    hits : "diff",

    height : "mid",
    type   : "thrust",

    modifiers : [ "stop" ],
};
