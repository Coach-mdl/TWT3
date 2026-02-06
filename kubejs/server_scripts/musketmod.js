"use strict";

/**
 *
 * @param {Internal.RecipesEventJS} event
 */
const MusketModRecipes = (event) => {

    //removal
    event.remove({id: 'musketmod:musket_upgrade_smithing_template'})

    //replace
    event.replaceInput(
        {id: 'musketmod:cartridge'},
        'minecraft:iron_nugget',
        '#forge:nuggets'
    )
    event.replaceInput(
        {mod: 'musketmod'},
        'minecraft:stick',
        '#tfc:lumber'
    )
    event.replaceInput(
        {mod: 'musketmod'},
        '#minecraft:planks',
        '#tfc:lumber'
    )
    event.replaceInput(
        {mod: 'musketmod'},
        'minecraft:iron_ingot',
        'tfc:metal/ingot/wrought_iron'
    )
    event.replaceInput(
        {mod: 'musketmod'},
        'minecraft:copper_ingot',
        'tfc:metal/ingot/copper'
    )
    event.replaceInput(
        {id: 'musketmod:musket_with_bayonet_smithing'},
        'minecraft:iron_sword',
        'immersiveengineering:toolupgrade_revolver_bayonet'
    )

    //shapeless
    event.recipes.kubejs.shapeless('musketmod:musket_upgrade_smithing_template',
        ['antiquelegacy:small_bronze_plate', 'tfc:metal/ingot/bronze']
    )
}