"use strict";


const ToolbeltRecipes = (event) => {

    event.replaceInput(
        {id: 'toolbelt:belt'},
        'minecraft:iron_ingot',
        'tfc:metal/ingot/wrought_iron'
    )
    event.replaceInput(
        {id: 'toolbelt:pouch'},
        'minecraft:gold_ingot',
        'tfc:metal/ingot/gold'
    )
}