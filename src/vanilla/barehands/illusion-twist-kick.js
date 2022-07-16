module.exports = {
    name  : "Illusion Twist Kick",
    style : "windfall",

    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_RIGHT",
            BACK_LEFT  : "FRONT_LEFT",
        },

        sword : {
            BACK_RIGHT : "FRONT_RIGHT",
            BACK_LEFT  : "FRONT_LEFT",
        },
    },

    hits : "diff",

    height : "mid",
    type   : "vertical",

    frames : {
        startup   : 18,
        advantage : {
            hit   : 12,
            guard : 3,
        },
    },


    modifiers : [ "jump" ],
};
    
