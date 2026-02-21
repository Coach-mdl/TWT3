"use strict";

const CreateRecipes = (event) => {

    //removal
    event.remove({ id: 'create:crafting/materials/zinc_ingot_from_compacting' })
    event.remove({ id: 'create:crafting/materials/brass_ingot_from_compacting' })
    event.remove({ id: 'create:crafting/materials/zinc_nugget_from_decompacting' })
    event.remove({ id: 'create:crafting/materials/brass_nugget_from_decompacting' })
    event.remove({ id: 'create:crafting/materials/copper_ingot' })
    event.remove({ id: 'create:crafting/materials/copper_nugget' })
    event.remove({ id: 'minecraft:copper_block' })
    event.remove({ id: 'minecraft:copper_ingot' })
    event.remove({ id: 'minecraft:copper_ingot_from_waxed_copper_block' })
    event.remove({ id: 'create:mixing/brass_ingot' })

    event.remove({ id: 'create:crushing/leather_horse_armor' })
    event.remove({ id: 'create:milling/saddle' })

    event.remove({ id: 'create:crafting/kinetics/basin' })
    event.remove({ id: 'woodencog:rock_knapping/andesite_alloy' })
    event.remove({ id: 'create:mixing/andesite_alloy_from_zinc' })
    event.remove({ id: 'create:mixing/andesite_alloy' })

    event.remove({ id: 'create:mixing/chocolate' })
    event.remove({ id: 'create:haunting/soul_campfire' })
    event.remove({ id: 'create:crafting/kinetics/mechanical_press' })
    event.remove({ id: 'woodencog:crafting/schematics/schematicannon' })
    event.remove({ id: 'woodencog:crafting/schematics/schematic_and_quill' })
    event.remove({ id: 'woodencog:crafting/schematics/empty_schematic' })
    event.remove({ id: 'woodencog:crafting/materials/rose_quartz' })
    event.remove({ id: 'create:crafting/materials/brass_block_from_compacting' })
    event.remove({ id: 'create:crafting/materials/brass_ingot_from_decompacting' })

    //replace
    event.replaceOutput(
        { mod: 'create' },
        'create:zinc_ingot',
        'tfc:metal/ingot/zinc'
    )
    event.replaceOutput(
        { mod: 'create' },
        'create:brass_ingot',
        'tfc:metal/ingot/brass'
    )
    event.replaceInput(
        { id: 'create:crafting/materials/andesite_alloy' },
        'minecraft:andesite',
        'tfc:rock/raw/andesite'
    )
    event.replaceInput(
        { id: 'create:crafting/materials/andesite_alloy_from_zinc' },
        'minecraft:andesite',
        'tfc:rock/raw/andesite'
    )
    event.replaceInput(
        { mod: 'woodencog' },
        'minecraft:sugar',
        '#tfc:sweetener'
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

    //IE Press
    event.recipes.immersiveengineering.metal_press(
        'create:brass_block', 'tfc:metal/double_ingot/brass', 'tfc_ie_addon:mold_block', 1000
    )
    event.recipes.immersiveengineering.metal_press(
        'minecraft:copper_block', 'tfc:metal/double_ingot/copper', 'tfc_ie_addon:mold_block', 1000
    )

    //Create Mixing
    event.custom({
        type: 'create:mixing',
        heatRequirement: 'heated',
        ingredients: [
            {
                tag: 'forge:seeds/cocoa'
            },
            {
                fluid: 'minecraft:milk',
                amount: 1000
            },
            {
                tag: 'tfc:sweetener'
            }
        ],
        results: [
            {
                amount: 1000,
                fluid: 'create:chocolate'
            }
        ]
    })

    event.custom({
        type: 'create:mixing',
        heatRequirement: 'heated',
        ingredients: [
            {
                item: 'firmalife:raw_honey'
            }
        ],
        results: [
            {
                amount: 250,
                fluid: 'create:honey'
            }
        ]
    })

    //Create Emptying
    event.custom({
        type: 'create:emptying',
        ingredients: [
            {
                item: 'firmalife:jar/honey'
            }
        ],
        results: [
            {
                amount: 250,
                fluid: 'create:honey'
            },
            {
                item: 'tfc:empty_jar'
            }
        ]
    })

    event.recipes.create.filling(
        'firmalife:jar/honey',
        [
            Fluid.of('create:honey', 250),
            'tfc:empty_jar'
        ]
    )

}

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

const CreateItemTags = (event) => {

    event.add('create:sleepers', '#forge:smooth_stone_slab')
}
