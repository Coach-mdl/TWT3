"use strict";

/**
 *
 * @param {Internal.RecipesEventJS} event
 */
const DFCRecipes = (event) => {

    //removal
    event.remove({id: /^dfc:crafting\/metal\/.*\/(aluminum|lead)$/})
    event.remove({id: /^dfc:heating\/metal\/.*([\/_])powder$/})
    event.remove({id: /^dfc:quern\/.*_powder$/, not: {id: 'dfc:quern/gypsum_powder'}})
    event.remove({id: 'dfc:crafting/slab_mold'})


    //replace
    event.replaceOutput(
        {mod: 'dfc'},
        Fluid.of('dfc:metal/dfc_aluminum'),
        Fluid.of('tfc_ie_addon:metal/aluminum')
    )
    event.replaceOutput(
        {mod: 'dfc'},
        Fluid.of('dfc:metal/dfc_alumina'),
        Fluid.of('tfc_ie_addon:metal/aluminum')
    )
    event.replaceOutput(
        {mod: 'dfc'},
        Fluid.of('dfc:metal/dfc_lead'),
        Fluid.of('tfc_ie_addon:metal/lead')
    )
    event.replaceInput(
        {id: 'dfc:crafting/alt_fire_clay'},
        'tfc:powder/graphite',
        '#forge:dusts/coal_coke'
    )

    //shapeless
    event.recipes.tfc.damage_inputs_shapeless_crafting(
        event.recipes.minecraft.crafting_shapeless(
            `dfc:wood/mold/slab`,
            ['#tfc:hammers', '#minecraft:wooden_slabs']
        )
    )

    //Stonecutting
    event.stonecutting('8x dfc:metal/smooth/aluminum', 'dfc:metal/sheet/aluminum')
    event.stonecutting('8x dfc:metal/pillar/aluminum', 'dfc:metal/sheet/aluminum')
    event.stonecutting('8x dfc:metal/block/aluminum', 'dfc:metal/sheet/aluminum')
    event.stonecutting('8x dfc:metal/cut/aluminum', 'dfc:metal/sheet/aluminum')
    event.stonecutting('8x dfc:metal/bricks/aluminum', 'dfc:metal/sheet/aluminum')
    event.stonecutting('8x dfc:metal/smooth/lead', 'dfc:metal/sheet/lead')
    event.stonecutting('8x dfc:metal/pillar/lead', 'dfc:metal/sheet/lead')
    event.stonecutting('8x dfc:metal/block/lead', 'dfc:metal/sheet/lead')
    event.stonecutting('8x dfc:metal/cut/lead', 'dfc:metal/sheet/lead')
    event.stonecutting('8x dfc:metal/bricks/lead', 'dfc:metal/sheet/lead')

    //TFC Quern
    event.recipes.tfc.quern(Item.of('dfc:metal/powder/lead', 20), 'immersiveengineering:ingot_lead')
    event.recipes.tfc.quern(Item.of('dfc:metal/powder/aluminum', 20), 'immersiveengineering:ingot_aluminum')

}

/**
 *
 * @param {Internal.TFCDataEventJS} event
 */

const DFCData = (event) => {

    //Heat Definitions
    function missingheats(input) {
        event.itemHeat(input, 0.8, null, null)
    }

    missingheats(/^dfc:metal\/.*\/pewter.*$/)
    missingheats('dfc:metal/rod/aluminum')
    missingheats('dfc:metal/rod/platinum')
    missingheats('dfc:metal/rod/lead')
    missingheats('dfc:metal/rod/alumina')

}