module.exports = {
    name  : "Hadrunken",
    style : "stagger",

    stance : {
        barehands : {
            FRONT_RIGHT : "FRONT_RIGHT",
            FRONT_LEFT  : "FRONT_LEFT",
        },

        sword : false,
    },

    hits : "both",

    height : "high",
    type   : "thrust",

    frames : {
        startup   : 21,
        advantage : {
            hit   : 9,
            guard : 0,
        },
    },

    modifiers : [ "charge" ],
};
    
