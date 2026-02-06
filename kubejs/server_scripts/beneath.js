"use strict";

/**
 *
 * @param {Internal.RecipesEventJS} event
 */
const BeneathRecipes = (event) => {

    //Create Milling
    event.custom({
        type: 'create:milling',
        ingredients: [
            {
                item: 'beneath:raw_slime'
            }
        ],
        processingTime: 100,
        results: [
            {
                count: 1,
                item: 'minecraft:slime_ball'
            }
        ]
    })

}