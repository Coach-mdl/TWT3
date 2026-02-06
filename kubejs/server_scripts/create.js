//This file is for create related recipe changes. Since create and it's addons are going to need a barrel of tweaks, I'm putting most of create's stuff in its own file.
//Tags and TFC data should still go in the respective files as those have higher load priorities. This file is strictly recipes. There will be exceptions in places where i've made custom functions.

"use strict";

/**
 *
 * @param {Internal.RecipesEventJS} event
 */
const CreateRecipes = (event) => {

    //removal
    event.remove({id: 'create:crafting/materials/zinc_ingot_from_compacting'})
    event.remove({id: 'create:crafting/materials/brass_ingot_from_compacting'})
    event.remove({id: 'create:crafting/materials/zinc_nugget_from_decompacting'})
    event.remove({id: 'create:crafting/materials/brass_nugget_from_decompacting'})
    event.remove({id: 'create:mixing/brass_ingot'})

    event.remove({id: 'create:crushing/leather_horse_armor'})
    event.remove({id: 'create:milling/saddle'})

    event.remove({id: 'create:crafting/kinetics/basin'})
    event.remove({id: 'woodencog:rock_knapping/andesite_alloy'})
    event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})
    event.remove({id: 'create:mixing/andesite_alloy'})

    //replace
    event.replaceOutput(
        {mod: 'create'},
        'create:zinc_ingot',
        'tfc:metal/ingot/zinc'
    )
    event.replaceOutput(
        {mod: 'create'},
        'create:brass_ingot',
        'tfc:metal/ingot/brass'
    )
    event.replaceInput(
        {id: 'create:crafting/materials/andesite_alloy'},
        'minecraft:andesite',
        'tfc:rock/raw/andesite'
    )
    event.replaceInput(
        {id: 'create:crafting/materials/andesite_alloy_from_zinc'},
        'minecraft:andesite',
        'tfc:rock/raw/andesite'
    )

    //shapeless
    event.shapeless(Item.of('create:tree_fertilizer', 2),
        ['#minecraft:small_flowers', '#minecraft:small_flowers', '#twt:corals', 'minecraft:bone_meal'])

    event.custom({
        type: 'create:mixing',
        heatRequirement: 'heated',
        ingredients: [
            {
                tag: 'twt:create_component_nuggets'
            },
            {
                item: 'tfc:rock/raw/andesite'
            }
        ],
        results: [
            {
                count: 1,
                item: 'create:andesite_alloy'
            }
        ]
    })

}

/**
 *
 * @param {Internal.TFCDataEventJS} event
 */

const CreateData = (event) => {

    //Nutrition
    event.foodItem('create:builders_tea', food => {
        food.hunger(2)
        food.dairy(1)
        food.vegetables(0.5)
        food.water(30)
        food.saturation(1)
    })

}
                     