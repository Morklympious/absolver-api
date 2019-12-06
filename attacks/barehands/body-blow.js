module.exports = {
    name  : "Body Blow",
    style : "kahlt",

    stance : {
        barehands : {
            FRONT_RIGHT : "FRONT_LEFT",
            FRONT_LEFT  : "FRONT_RIGHT",
        },

        sword : {
            FRONT_RIGHT : "FRONT_LEFT",
        },
    },

    hits : "diff",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 17,
        advantage : {
            hit   : 8,
            guard : 4,
        },
    },

    modifiers : [ "strafe" ],
};
