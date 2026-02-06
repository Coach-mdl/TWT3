"use strict";

/**
 *
 * @param {Internal.RecipesEventJS} event
 */
const FarmersDelightRecipes = (event) => {

    //removal
    event.remove({id: 'farmersdelight_tfc:heating/baked_potato'})
    event.remove({id: 'farmersdelight:cutting/leather_horse_armor'})
    event.remove({id: 'farmersdelight:cutting/leather_helmet'})
    event.remove({id: 'farmersdelight:cutting/leather_chestplate'})
    event.remove({id: 'farmersdelight:cutting/leather_leggings'})
    event.remove({id: 'farmersdelight:cutting/leather_boots'})

}