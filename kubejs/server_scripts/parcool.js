"use strict";

/**
 *
 * @param {Internal.RecipesEventJS} event
 */
const ParcoolRecipes = (event) => {

    //replace
    event.replaceInput(
        {id: 'parcool:zipline_rope'},
        'minecraft:string',
        'tfc:jute_fiber'
    )
    event.replaceInput(
        {id: 'parcool:zipline_rope'},
        'minecraft:chain',
        '#forge:metal/chain'
    )
    event.replaceInput(
        {id: 'parcool:iron_zipline_hook'},
        'minecraft:iron_ingot',
        '#forge:ingots/iron'
    )
}