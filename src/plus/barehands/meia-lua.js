module.exports = {
    name  : "Meia Lua",
    style : "kahlt",

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

    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 18,
        advantage : {
            hit   : 10,
            guard : 5,
        },
    },


    modifiers : [],
};
    
