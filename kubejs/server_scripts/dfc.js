"use strict";


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

const DFCLoot = (event) => {

    function DFCoreconversion(block, ore, replacement) {
        event.addBlockLootModifier(block).replaceLoot(ore, replacement);
    }
    DFCoreconversion(/^dfc:ore\/rich_bauxite\/.*$/, 'dfc:ore/rich_bauxite', 'tfc_ie_addon:ore/rich_bauxite');
    DFCoreconversion(/^dfc:ore\/normal_bauxite\/.*$/, 'dfc:ore/normal_bauxite', 'tfc_ie_addon:ore/normal_bauxite');
    DFCoreconversion(/^dfc:ore\/poor_bauxite\/.*$/, 'dfc:ore/poor_bauxite', 'tfc_ie_addon:ore/poor_bauxite');
    DFCoreconversion('dfc:ore/small_bauxite','dfc:ore/small_bauxite', 'tfc_ie_addon:ore/small_bauxite');
    DFCoreconversion(/^dfc:ore\/rich_native_aluminum\/.*$/, 'dfc:ore/rich_native_aluminum', 'tfc_ie_addon:ore/rich_bauxite');
    DFCoreconversion(/^dfc:ore\/normal_native_aluminum\/.*$/, 'dfc:ore/normal_native_aluminum', 'tfc_ie_addon:ore/normal_bauxite');
    DFCoreconversion(/^dfc:ore\/poor_native_aluminum\/.*$/, 'dfc:ore/poor_native_aluminum', 'tfc_ie_addon:ore/poor_bauxite');
    DFCoreconversion('dfc:ore/small_native_aluminum','dfc:ore/small_native_aluminum', 'tfc_ie_addon:ore/small_bauxite');
    DFCoreconversion(/^dfc:ore\/rich_galena\/.*$/, 'dfc:ore/rich_galena', 'tfc_ie_addon:ore/rich_galena');
    DFCoreconversion(/^dfc:ore\/normal_galena\/.*$/, 'dfc:ore/normal_galena', 'tfc_ie_addon:ore/normal_galena');
    DFCoreconversion(/^dfc:ore\/poor_galena\/.*$/, 'dfc:ore/poor_galena', 'tfc_ie_addon:ore/poor_galena');
    DFCoreconversion('dfc:ore/small_galena','dfc:ore/small_galena', 'tfc_ie_addon:ore/small_galena');

}