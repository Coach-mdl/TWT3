"use strict";

/**
 *
 * @param {Internal.RecipesEventJS} event
 */
const TombstoneRecipes = (event) => {

    //replace
    event.replaceInput(
        {mod: 'tombstone'},
        'minecraft:stone',
        '#forge:stone'
    )
    event.replaceInput(
        {id: 'tombstone:fishing_rod_of_misadventure'},
        'minecraft:dead_bush',
        'tfc:plant/dead_bush'
    )

}