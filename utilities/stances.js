const symmetries = {
    front : {
        vertical : [ 
            [ "FR", "FL" ], 
            [ "FL", "FR" ] 
        ],

        horizontal : [ 
            [ "FR", "BR" ], 
            [ "FL", "BL" ] 
        ],

        diagonal : [
            [ "FR", "BL" ],
            [ "FL", "BR" ]
        ],

        none : [
            [ "FR", "FR" ],
            [ "FL", "FL" ]
        ]
    },

    back : {
        vertical : [ 
            [ "BR", "BL" ], 
            [ "BL", "BR" ] 
        ],

        horizontal : [ 
            [ "BR", "FR" ], 
            [ "BL", "FL" ] 
        ],

        diagonal : [
            [ "BR", "FL" ],
            [ "BL", "FR" ]
        ],

        none : [
            [ "BR", "BR" ],
            [ "BL", "BL" ]
        ]
    }
};

/** 
 * Determine if the hit lands the same side as the 
 * stance you're in. 
 * 
 * @param origin {String} - The Left/Right stance you're in. 
 * @param same {Boolean} - Whether or not the move hits the same side
 */
function hits(origin, same) {
    const side = origin[1],
    sides = {
        R : same ? "R" : "L", 
        L : same ? "L" : "R"
    };

    return sides[side];
}


/**
 * 
 * @param {String} begins - which hemisphere it starts in. "front" or "back"
 * @param {String} symmetry - "horizontal" or "vertical" symmetry across the stance indicator
 * @param {Boolean} same - Hits the same side as the stance it starts in
 */
module.exports = function stances(begins, symmetry, same) {
    const pairings = symmetries[begins][symmetry];

    return pairings.map((pairing) => {
        const[ begins, ends ] = pairing; 

        return { 
            begins,
            ends,
            hits : hits(begins, same)
        };
    });
};
