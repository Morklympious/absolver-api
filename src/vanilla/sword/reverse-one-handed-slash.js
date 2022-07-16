module.exports = {
    name  : "Reverse One Handed Slash",
    style : "kahlt",

    stance : {
        barehands : false,

        sword : {
            FRONT_RIGHT : "BACK_LEFT",
        },
    },

    hits : "same",

    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 15,
        advantage : {
            hit   : 7,
            guard : 4,
        },
    },

    modifiers : [],
};

