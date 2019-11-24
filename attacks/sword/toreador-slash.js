module.exports =  {
    name  : "Toreador Slash",
    style : "faejin",

    stance : {
        barehands : false,

        sword : {
            FRONT_RIGHT : "BACK_RIGHT",
        },
    },

    hits : "diff",

    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 14,
        advantage : {
            hit   : 7,
            guard : 3,
        },
    },

    modifiers : [ "strafe" ],
};

