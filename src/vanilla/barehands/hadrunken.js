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
            hit   : 10,
            guard : 4,
        },
    },

    modifiers : [ "charge" ],
};
    
