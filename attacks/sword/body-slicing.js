module.exports =  {
    name  : "Body Slicing",
    style : "kahlt",

    stance : {
        barehands : false,

        sword : {
            FRONT_LEFT : "BACK_LEFT",
        },
    },

    hits : "diff",

    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 23,
        advantage : {
            hit   : 13,
            guard : 14,
        },
    },

    modifiers : [ "break" ],
};

