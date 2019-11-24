module.exports =  {
    name  : "Keen Crouch",
    style : "windfall",

    stance : {
        barehands : false,

        sword : {
            FRONT_RIGHT : "FRONT_LEFT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "vertical",

    frames : {
        startup   : 16,
        advantage : {
            hit   : 8,
            guard : 3,
        },
    },

    modifiers : [ "duck" ],
};

