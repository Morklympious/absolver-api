
module.exports = {
    name  : "Spiral Back Punch",
    style : "stagger",

    stance : {
        barehands : {
            FRONT_RIGHT : "BACK_RIGHT",
            FRONT_LEFT  : "BACK_LEFT",
        },

                sword : false,
    },

    hits : "diff",

    height : "mid",
    type   : "thrust",
    
    frames : {
        startup   : 18,
        advantage : {
            hit   : 10,
            guard : 6,
        },
    },

    modifiers : [],
};
    
