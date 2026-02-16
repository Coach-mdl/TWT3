"use strict";


const ImmersiveEngineeringRecipes = (event) => {

    //removal
    event.remove({output: 'immersiveengineering:nugget_steel'})
    event.remove({id: /^immersiveengineering:crafting\/nugget_.*_to_ingot_.*$/})
    event.remove({id: /^immersiveengineering:alloysmelter\/.*$/})
    event.remove({output: 'immersiveengineering:ingot_nickel'})
    event.remove({output: 'immersiveengineering:ingot_silver'})
    event.remove({output: 'immersiveengineering:ingot_steel'})
    event.remove({id: 'immersiveengineering:blastfurnace/steel_block'})

    //replace
    event.replaceInput(
        {id: 'immersiveengineering:crafting/voltmeter'},
        'minecraft:compass',
        '#minecraft:compasses'
    )
    event.replaceInput(
        {id: 'tfc_ie_addon:metalpress/steel_block'},
        '#forge:ingots/steel',
        Item.of('tfc:metal/double_ingot/steel', 1)
    )
    event.replaceInput(
        {id: 'tfc_ie_addon:metalpress/uranium_block'},
        '#forge:ingots/uranium',
        Item.of('tfc_ie_addon:metal/double_ingot/uranium', 1)
    )

    //TFC Heating
    event.recipes.tfc.heating('minecraft:bricks', 600)
        .resultItem('immersiveengineering:clinker_brick')

    //TFC Quern
    event.recipes.tfc.quern(Item.of('immersiveengineering:dust_coke'), 'immersiveengineering:coal_coke')

    //Create Milling
    event.custom({
        type: 'create:milling',
        ingredients: [
            {
                item: 'immersiveengineering:coal_coke'
            }
        ],
        processingTime: 100,
        results: [
            {
                count: 1,
                item: 'immersiveengineering:dust_coke'
            }
        ]
    })

    //Create Mixing
    event.custom({
        type: 'create:mixing',
        heatRequirement: 'heated',
        ingredients: [
            {
                tag: 'forge:glass'
            },
            {
                tag: 'forge:dusts/iron'
            }
        ],
        results: [
            {
                count: 2,
                item: 'immersiveengineering:insulating_glass'
            }
        ]
    })
}



const ImmersiveEngineeringData = (event) => {

    //Lamp Fuels
    event.lampFuel('immersiveengineering:creosote', '#tfc:lamps', 6000)
    event.itemHeat('tfc_ie_addon:powder/bauxite', 0.8, null, null)
    event.itemHeat('tfc_ie_addon:powder/galena', 0.8, null, null)
    event.itemHeat('tfc_ie_addon:powder/uraninite', 0.8, null, null)

    //Supports
    event.support('immersiveengineering:steel_post', 2, 2, 15)
    event.support('immersiveengineering:alu_post', 2, 2, 5)
    event.support('immersiveengineering:treated_post', 2, 2, 7)
    event.support('immersiveengineering:balloon', 5, 0, 2)

}