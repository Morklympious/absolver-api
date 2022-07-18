module.exports = {
    name  : "Pulmonary Palm",
    style : "windfall",

    stance : {
        barehands : {
            FRONT_RIGHT : "FRONT_RIGHT",
            FRONT_LEFT  : "FRONT_LEFT",
        },

        sword : false,
    },

    hits : "same",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 17,
        advantage : {
            hit   : 9,
            guard : 8,
        },
    },

    modifiers : [ "stop" ],
};
    
