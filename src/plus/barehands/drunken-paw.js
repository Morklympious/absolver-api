module.exports = {
    name  : "Drunken Paw",
    style : "stagger",

    stance : {
        barehands : {
            FRONT_RIGHT : "BACK_RIGHT",
            FRONT_LEFT  : "BACK_LEFT",
        },

        sword : false,
    },

    hits : "diff",

    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 21,
        advantage : {
            hit   : 13,
            guard : 5,
        },
    },

    modifiers : [ "strafe" ],
};
