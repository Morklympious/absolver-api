module.exports = {
    name  : "Buchinmo",
    style : "kahlt",

    stance : {
        barehands : false,

        sword : {
            FRONT_RIGHT : "FRONT_RIGHT",
        },
    },

    hits : "same",

    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 21,
        advantage : {
            hit   : 10,
            guard : 4,
        },
    },

    modifiers : [ "charge" ],
};

