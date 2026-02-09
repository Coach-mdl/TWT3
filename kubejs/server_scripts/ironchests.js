"use strict";


const IronchestRecipes = (event) => {

    //removal
    event.remove({id: /^ironchests:.*_dolly$/})
    event.remove({id: /^ironchests:key.*/})
    event.remove({id: 'ironchests:lock'})
    event.remove({id: 'ironchests:copper_chest_upgrade'})

    //replace
    function ironchestsinputswap(currentinput, inputswap) {

        event.replaceInput(
            {mod: "ironchests"},
            currentinput,
            inputswap
        )}

    ironchestsinputswap('minecraft:chest', '#balm:wooden_chests')
    ironchestsinputswap('minecraft:barrel', '#tfcbarrels:barrels')
    ironchestsinputswap('minecraft:copper_ingot', '#forge:ingots/copper')
    ironchestsinputswap('minecraft:iron_ingot', '#forge:ingots/wrought_iron')
    ironchestsinputswap('minecraft:gold_ingot', 'tfc:metal/ingot/gold')
    ironchestsinputswap('minecraft:diamond', '#forge:gems/diamond')
    ironchestsinputswap('minecraft:amethyst_shard', '#forge:gems/amethyst')

    //smithing
    event.recipes.tfc.anvil('ironchests:iron_dolly',
        'tfc:metal/double_sheet/wrought_iron',
        ['bend_any', 'hit_any', 'hit_any'])
    event.recipes.tfc.anvil('ironchests:key',
        'tfc:metal/rod/wrought_iron',
        ['shrink_any', 'bend_any', 'punch_last'])
    event.recipes.tfc.anvil('ironchests:key_ring',
        'tfc:metal/rod/wrought_iron',
        ['bend_any', "bend_any", "bend_any"])
    event.recipes.tfc.anvil('ironchests:lock',
        'tfc:metal/ingot/gold',
        ["shrink_not_last", "hit_any", "punch_last"])

    //TFC heating
    event.recipes.tfc.heating('ironchests:key', 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 50))
    event.recipes.tfc.heating('ironchests:key_ring', 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 50))
    event.recipes.tfc.heating('ironchests:lock', 1060)
        .resultFluid(Fluid.of('tfc:metal/gold', 100))
    event.recipes.tfc.heating('ironchests:iron_dolly', 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 400)).useDurability(true)

    //shaped
    event.recipes.kubejs.shaped('ironchests:diamond_dolly', [
            ' X ',
            'XDX',
            ' X '
        ], {
            X: '#forge:gems/diamond',
            D: 'ironchests:iron_dolly'
        }
    )

}



const IronchestsData = (event) => {

    //Heat Definitions
    event.itemHeat("ironchests:key", 0.8, null, null)
    event.itemHeat("ironchests:key_ring", 2.0, null, null)
    event.itemHeat("ironchests:lock", 1.0, null, null)
    event.itemHeat("ironchests:iron_dolly", 3.057, null, null)

}