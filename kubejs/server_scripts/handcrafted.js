"use strict";


const HandcraftedRecipes = (event) => {

    //replace
    event.replaceInput(
        {mod: 'handcrafted'},
        'minecraft:iron_ingot',
        'tfc:metal/ingot/wrought_iron'
    )
    event.replaceInput(
        {mod: 'handcrafted'},
        'minecraft:iron_bars',
        'tfc:metal/bars/wrought_iron'
    )
    event.replaceInput(
        {mod: 'handcrafted'},
        'minecraft:gold_ingot',
        'tfc:metal/ingot/gold'
    )
    event.replaceInput(
        {mod: 'handcrafted'},
        'minecraft:sweet_berries',
        '#forge:fruits/berries'
    )
    event.replaceInput(
        {mod: 'handcrafted'},
        'minecraft:glass_bottle',
        'tfc:empty_jar'
    )
    event.replaceInput(
        {mod: 'handcrafted'},
        'minecraft:cod',
        'tfc:food/cod'
    )
    event.replaceInput(
        {mod: 'handcrafted'},
        'minecraft:salmon',
        'tfc:food/salmon'
    )
    event.replaceInput(
        {mod: 'handcrafted'},
        'minecraft:tropical_fish',
        'tfc:food/tropical_fish'
    )

}