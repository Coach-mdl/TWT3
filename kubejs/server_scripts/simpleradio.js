"use strict";


const SimpleRadioRecipes = (event) => {

    //removal
    event.remove({id: 'simpleradio:speaker'})
    event.remove({id: 'simpleradio:copper_wire'})

    //replace
    event.replaceInput(
        {mod: 'simpleradio'},
        'minecraft:iron_ingot',
        'tfc:metal/ingot/wrought_iron'
    )
    event.replaceInput(
        {mod: 'simpleradio'},
        'minecraft:copper_ingot',
        'tfc:metal/ingot/copper'
    )
    event.replaceInput(
        {mod: 'simpleradio'},
        'minecraft:polished_deepslate',
        '#forge:smooth_stone'
    )
    event.replaceInput(
        {mod: 'simpleradio'},
        'minecraft:lapis_lazuli',
        '#forge:gems/lapis'
    )
    event.replaceInput(
        {mod: 'simpleradio'},
        'minecraft:iron_bars',
        'tfc:metal/bars/wrought_iron'
    )
    event.replaceInput(
        {mod: 'simpleradio'},
        'minecraft:potato',
        '#forge:vegetables/potato'
    )
    event.replaceInput(
        {id: 'simpleradio:transmitting_module'},
        'minecraft:ender_pearl',
        '#forge:ingots/silver'
    )
    event.replaceInput(
        {id: 'simpleradio:insulator'},
        '#forge:ingots/wrought_iron',
        '#forge:rods'
    )
    event.replaceInput(
        {id: 'simpleradio:spuddie_talkie'},
        '#forge:ingots/wrought_iron',
        '#forge:rods/copper'
    )
    event.replaceInput(
        {mod: 'simpleradio'},
        'minecraft:quartz',
        '#forge:gems/quartz'
    )
    event.replaceInput(
        {mod: 'simpleradio'},
        'minecraft:iron_block',
        'tfc:metal/double_ingot/wrought_iron'
    )
    event.replaceInput(
        {mod: 'simpleradio'},
        'simpleradio:copper_wire',
        '#forge:wires/copper'
    )

    //shaped
    event.recipes.kubejs.shaped('simpleradio:speaker',
        [
            ' S ',
            ' M ',
            ' S '
        ],
        {
            S: 'tfc:metal/sheet/wrought_iron',
            M: 'simpleradio:speaker_module'
        }
    )

}