"use strict";

/**
 *
 * @param {Internal.RecipesEventJS} event
 */
const TFCRecipes = (event) => {

    //replace
    event.replaceInput(
        {id: 'tfc:crafting/fire_clay'},
        'tfc:powder/graphite',
        '#forge:dusts/coal_coke'
    )

    //TFC Heating
    event.recipes.tfc.heating('tfc:rock/loose/rhyolite', 750)
        .resultItem(Item.of('tfc:rock/loose/andesite', 1))

    //Create Milling
    event.custom({
        type: 'create:milling',
        ingredients: [
            {
                item: 'create:limestone'
            }
        ],
        processingTime: 300,
        results: [
            {
                count: 2,
                item: 'tfc:rock/loose/limestone'
            },
            {
                chance: 0.25,
                count: 2,
                item: 'tfc:rock/loose/limestone'
            }
        ]
    })

}

/**
 *
 * @param {Internal.TFCDataEventJS} event
 */

const TFCData = (event) => {

    //Heat Definitions
    event.itemHeat("tfc:metal/bucket/blue_steel", 2.0, 1000, 1200)
    event.itemHeat("tfc:metal/bucket/red_steel", 2.0, 1000, 1200)

    event.itemHeat('tfc:rock/loose/rhyolite', 0.85, null, null)

    $ores.forEach((ore) => {
        event.itemHeat(`tfc:powder/${ore}`, 0.8, null, null)
    })

}

/**
 *
 * @param {TagEvent.Item} event
 */
const TFCItemTags = (event) => {

    event.add('tfc:hammers', 'magistuarmory:blacksmith_hammer')
    event.add('tfc:saplings', ['tfc:wood/sapling/willow', 'firmalife:plant/cocoa_sapling', 'firmalife:plant/fig_sapling', 'tfc:plant/cherry_sapling', 'tfc:plant/green_apple_sapling', 'tfc:plant/lemon_sapling', 'tfc:plant/olive_sapling', 'tfc:plant/orange_sapling', 'tfc:plant/peach_sapling', 'tfc:plant/plum_sapling', 'tfc:plant/red_apple_sapling', 'tfc:plant/banana_sapling', 'tfc:wood/sapling/acacia', 'tfc:wood/sapling/ash', 'tfc:wood/sapling/aspen', 'tfc:wood/sapling/birch', 'tfc:wood/sapling/blackwood', 'tfc:wood/sapling/chestnut', 'tfc:wood/sapling/douglas_fir', 'tfc:wood/sapling/kapok', 'tfc:wood/sapling/maple', 'tfc:wood/sapling/oak', 'tfc:wood/sapling/pine', 'tfc:wood/sapling/rosewood', 'tfc:wood/sapling/sequoia', 'tfc:wood/sapling/spruce', 'tfc:wood/sapling/sycamore', 'tfc:wood/sapling/white_cedar'])
    event.add('tfc:compost_browns_low', 'farmersdelight:tree_bark')
}