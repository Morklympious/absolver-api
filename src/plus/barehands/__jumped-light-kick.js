module.exports = {
    name  : "Jumped Light Kick",
    style : "windfall",

    stance : {
        barehands : {
            FRONT_RIGHT : "FRONT_LEFT",
            FRONT_LEFT  : "FRONT_RIGHT",
        },

        sword : {
            FRONT_RIGHT : "FRONT_LEFT",
            FRONT_LEFT  : "FRONT_RIGHT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 11,
        advantage : {
            hit   : 3,
            guard : 0,
        },
    },

    modifiers : [ "jump" ],
};
    
