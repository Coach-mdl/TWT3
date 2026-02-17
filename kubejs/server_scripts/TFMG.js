//Ty Smash

const TFMGRecipes = (event) => {
    //Removal
    event.remove({id: 'tfmg:sequenced_assembly/heavy_plate'})
    event.remove({id: 'tfmg:compacting/cast_iron'})
    event.remove({id: 'tfmg:coking/coal'})
    event.remove({id: 'tfmg:coking/charcoal'})
    event.remove({id: 'tfmg:filling/hardened_planks'})
    event.remove({id: 'tfmg:constantan_wire_from_ingots_constantan_stonecutting'})
    event.remove({id: /^tfmg:crafting\/kinetics\/cast_iron_(nugget|ingot)_from_.*compacting$/})
    event.remove({id: 'tfmg:crafting/kinetics/fireproof_bricks'})
    event.remove({id: 'tfmg:pressing/aluminum_ingot'})
    event.remove({output: /^tfmg:steel_(ingot|nugget|block|pickaxe|sword|hoe|shovel|axe|helmet|chestplate|leggings|boots)$/})
    event.remove({output: /^tfmg:lead_(sheet|ingot|nugget|block|pickaxe|sword|hoe|shovel|axe)$/})
    event.remove({output: /^tfmg:aluminum_(sheet|ingot|nugget|block|pickaxe|sword|hoe|shovel|axe)$/})
    event.remove({output: /^tfmg:nickel_(sheet|ingot|nugget|block)$/})
    event.remove({output: /^tfmg:constantan_(ingot|nugget|block)$/})
    event.remove({output: /^tfmg:nickel_(ingot|block)$/})


    //Replace
    event.replaceOutput(
        {output: 'tfmg:creosote'},
        'tfmg:creosote',
        'immersiveengineering:creosote'
    )
    event.replaceInput(
        {input: 'tfmg:creosote'},
        'tfmg:creosote',
        'immersiveengineering:creosote'
    )
    event.replaceInput(
        {input: 'tfmg:heavy_plate'},
        'tfmg:heavy_plate',
        '#forge:plates/steel'
    )
    event.replaceInput(
        {input: 'tfmg:steel_ingot'},
        'tfmg:steel_ingot',
        '#forge:ingots/steel'
    )
    event.replaceInput(
        {input: 'tfmg:fireclay_ball'},
        'tfmg:fireclay_ball',
        'tfc:fire_clay'
    )
    event.replaceInput(
        {input: 'tfmg:fireproof_brick'},
        'tfmg:fireproof_brick',
        'tfc:ceramic/fire_brick'
    )
    event.replaceInput(
        {input: 'tfmg:sulfur_dust'},
        'tfmg:sulfur_dust',
        'tfc:powder/sulfur'
    )
    event.replaceInput(
        {input: 'tfmg:limesand'},
        'tfmg:limesand',
        'tfc:powder/flux'
    )
    event.replaceInput(
        {input: 'tfmg:coal_coke'},
        'tfmg:coal_coke',
        'immersiveengineering:coal_coke'
    )
    event.replaceOutput(
        {output: 'tfmg:coal_coke'},
        'tfmg:coal_coke',
        'immersiveengineering:coal_coke'
    )
    event.replaceInput(
        {input: 'create:crushed_raw_iron'},
        'create:crushed_raw_iron',
        '#tfmg:steel_creation'
    )
    event.replaceInput(
        {input: 'minecraft:coal'},
        'minecraft:coal',
        '#tfmg:fuel_compat'
    )
    event.replaceOutput(
        {id: 'tfmg:factory_floor_from_ingots_aluminum_stonecutting'},
        'tfmg:factory_floor',
        Item.of('tfmg:factory_floor', 8)
    )
    $tfmgExistingIngots.forEach((metal) => {
        event.replaceInput(
            {input: `tfmg:${metal}_ingot`},
            `tfmg:${metal}_ingot`,
            `#forge:ingots/${metal}`
        )
        event.replaceInput(
            {input: `tfmg:${metal}_sheet`},
            `tfmg:${metal}_sheet`,
            `#forge:plates/${metal}`
        )
    })

    //Stonecutting
    event.stonecutting('tfmg:fireproof_bricks', 'tfc:fire_bricks')
    event.stonecutting('tfc:fire_bricks', 'tfmg:fireproof_bricks')
    event.stonecutting('immersiveengineering:treated_wood_horizontal', 'tfmg:hardened_planks')
    event.stonecutting('tfmg:hardened_planks', 'immersiveengineering:treated_wood_horizontal')

    //Create additions Rolling
    event.custom({
        type: 'createaddition:rolling',
        ingredients:
            [
                {
                    item: 'immersiveengineering:plate_constantan'
                }
            ],
        results:
            [
                {
                    item: 'tfmg:constantan_wire',
                    count: 2
                }
            ]
    })

    //TFMG Coking
    event.recipes.tfmg.coking('#tfmg:fuel_compat', ['immersiveengineering:coal_coke', Fluid.of('immersiveengineering:creosote', 1), Fluid.of('tfmg:carbon_dioxide', 30)], 2000)
    event.recipes.tfmg.coking('#minecraft:logs', ['minecraft:charcoal', Fluid.of('immersiveengineering:creosote', 2), Fluid.of('tfmg:carbon_dioxide', 20)], 1000)

}

const TFMGTags = (event) => {
    event.add('tfmg:steel_creation', 'tfc:metal/ingot/cast_iron', 'tfc:metal/ingot/wrought_iron')
    event.add('tfmg:fuel_compat', ['minecraft:coal', 'tfc:ore/lignite', 'tfc:ore/bituminous_coal'])
    event.add('twt:treated_woods', ['tfmg:hardened_planks', 'immersiveengineering:treated_wood_horizontal'])
}