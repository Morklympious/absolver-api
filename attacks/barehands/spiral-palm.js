module.exports = {
    name  : "Spiral Palm",
    style : "windfall",

    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_RIGHT",
            BACK_LEFT  : "FRONT_LEFT",
        },

                sword : false,
    },

    hits : "same",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 24,
        advantage : {
            hit   : 15,
            guard : 15,
        },
    },

    modifiers : [ "break" ],
};
    
