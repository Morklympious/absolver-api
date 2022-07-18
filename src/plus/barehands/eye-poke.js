module.exports = {
    name  : "Eye Poke",
    style : "stagger",

    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_RIGHT",
            BACK_LEFT  : "FRONT_LEFT",
        },

        sword : false,
    },

    hits : "same",

    height : "high",
    type   : "thrust",

    frames : {
        startup   : 15,
        advantage : {
            hit   : 8,
            guard : 7,
        },
    },

    modifiers : [ "stop" ],
};
