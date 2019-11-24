module.exports =  {
    name  : "Parry Reverse Low Slash",
    style : "kahlt",

    stance : {
        barehands : false,

        sword : {
            FRONT_RIGHT : "BACK_RIGHT",
        },
    },

    hits : "diff",

    height : "low",
    type   : "horizontal",

    frames : {
        startup   : 20,
        advantage : {
            hit   : 10,
            guard : 3,
        },
    },

    modifiers : [ "parry" ],
};

