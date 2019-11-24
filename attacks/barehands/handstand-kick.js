module.exports =  {
    name  : "Handstand Kick",
    style : "stagger",

    stance : {
        barehands : {
            FRONT_RIGHT : "BACK_LEFT",
            FRONT_LEFT  : "BACK_RIGHT",
        },

        sword : {
            FRONT_RIGHT : "BACK_LEFT",
            FRONT_LEFT  : "BACK_RIGHT",
        },
    },

    hits : "diff",

    height : "high",
    type   : "horizontal",

    modifiers : [ "double", "low" ],
};
    
