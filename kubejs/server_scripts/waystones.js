"use strict";


const WaystonesRecipes = (event) => {

    //replace
    event.replaceInput(
        {id: 'waystones:warp_stone'},
        'minecraft:emerald',
        '#forge:gems/emerald'
    )
    event.replaceInput(
        {mod: 'waystones'},
        'minecraft:stone_bricks',
        '#forge:stone_bricks'
    )

}