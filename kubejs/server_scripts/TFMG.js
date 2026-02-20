//Ty Smash

const TFMGRecipes = (event) => {
    //Removal
    event.remove({ id: 'tfmg:sequenced_assembly/heavy_plate' })
    event.remove({ id: 'tfmg:compacting/cast_iron' })
    event.remove({ id: 'tfmg:coking/coal' })
    event.remove({ id: 'tfmg:coking/charcoal' })
    event.remove({ id: 'tfmg:filling/hardened_planks' })
    event.remove({ id: 'tfmg:constantan_wire_from_ingots_constantan_stonecutting' })
    event.remove({ id: /^tfmg:crafting\/kinetics\/cast_iron_(nugget|ingot)_from_.*compacting$/ })
    event.remove({ id: 'tfmg:crafting/kinetics/fireproof_bricks' })
    event.remove({ id: 'tfmg:pressing/aluminum_ingot' })
    event.remove({ output: /^tfmg:steel_(ingot|nugget|block|pickaxe|sword|hoe|shovel|axe|helmet|chestplate|leggings|boots)$/ })
    event.remove({ output: /^tfmg:lead_(sheet|ingot|nugget|block|pickaxe|sword|hoe|shovel|axe)$/ })
    event.remove({ output: /^tfmg:aluminum_(sheet|ingot|nugget|block|pickaxe|sword|hoe|shovel|axe)$/ })
    event.remove({ output: /^tfmg:nickel_(sheet|ingot|nugget|block)$/ })
    event.remove({ output: /^tfmg:constantan_(ingot|nugget|block)$/ })
    event.remove({ id: 'tfmg:crafting/kinetics/cast_iron_block_from_compacting' })
    event.remove({ id: 'tfmg:crafting/kinetics/coal_coke_block' })
    event.remove({ id: 'tfmg:crushing/limestone' })
    event.remove({ id: 'tfmg:crafting/kinetics/lithium_block_from_compacting' })
    event.remove({ id: 'tfmg:crushing/coal_coke' })
    event.remove({ id: 'tfmg:smelting/fireproof_brick' })
    event.remove({ id: 'tfmg:crushing/dirt' })
    event.remove({ id: 'tfmg:industrial_blasting/steel_from_raw_iron' })
    event.remove({ id: 'tfmg:industrial_blasting/steel' })
    event.remove({ id: 'tfmg:industrial_blasting/steel_from_dust' })
    event.remove({ id: 'createaddition:compat/immersiveengineering/crushing/coal_coke' })
    event.remove({ id: 'create:crushing/compat/immersiveengineering/coal_coke' })
    event.remove({ id: 'tfmg:vat_machine_recipe/arc_furnace_steel' })
    event.remove({ id: 'tfmg:crafting/kinetics/fireclay' })

    //Replace
    event.replaceInput(
        { input: 'tfmg:fireproof_brick'},
        'tfmg:fireproof_brick',
        'tfc:ceramic/fire_brick'
    )
    event.replaceInput(
        { input: 'immersiveengineering:dust_coke' },
        'immersiveengineering:dust_coke',
        '#tfmg:blast_furnace_fuel'
    )
    event.replaceOutput(
        { output: 'immersiveengineering:dust_coke' },
        'immersiveengineering:dust_coke',
        'tfmg:coal_coke_dust'
    )
    event.replaceInput(
        { id: 'tfmg:mixing/thermite' },
        'create:crimsite',
        'tfc:powder/hematite'
    )
    event.replaceInput(
        { id: 'tfmg:crafting/kinetics/lithium_blade' },
        'tfmg:steel_sword',
        'tfc:metal/sword/steel'
    )
    event.replaceInput(
        { input: 'tfmg:coal_coke_block' },
        'tfmg:coal_coke_block',
        'immersiveengineering:coke'
    )
    event.replaceOutput(
        { output: 'tfmg:creosote' },
        'tfmg:creosote',
        'immersiveengineering:creosote'
    )
    event.replaceInput(
        { input: 'tfmg:creosote' },
        'tfmg:creosote',
        'immersiveengineering:creosote'
    )
    event.replaceInput(
        { input: 'tfmg:heavy_plate' },
        'tfmg:heavy_plate',
        '#forge:plates/steel'
    )
    event.replaceInput(
        { input: 'tfmg:nitrate_dust' },
        'tfmg:nitrate_dust',
        '#forge:dusts/saltpeter'
    )
    event.replaceInput(
        { input: 'tfmg:steel_ingot' },
        'tfmg:steel_ingot',
        '#forge:ingots/steel'
    )
    event.replaceInput(
        { input: 'tfmg:fireclay_ball' },
        'tfmg:fireclay_ball',
        'tfc:fire_clay'
    )
    event.replaceInput(
        { input: 'tfmg:sulfur_dust' },
        'tfmg:sulfur_dust',
        '#forge:dusts/sulfur'
    )
    event.replaceInput(
        { input: 'tfmg:limesand' },
        'tfmg:limesand',
        '#tfc:flux'
    )
    event.replaceInput(
        { input: 'tfmg:coal_coke' },
        'tfmg:coal_coke',
        '#forge:coal_coke'
    )
    event.replaceOutput(
        { output: 'tfmg:coal_coke' },
        'tfmg:coal_coke',
        'immersiveengineering:coal_coke'
    )
    event.replaceInput(
        { input: 'create:crushed_raw_iron' },
        'create:crushed_raw_iron',
        '#tfmg:steel_creation'
    )
    event.replaceInput(
        { input: 'minecraft:coal' },
        'minecraft:coal',
        '#tfmg:fuel_compat'
    )
    event.replaceOutput(
        { id: 'tfmg:factory_floor_from_ingots_aluminum_stonecutting' },
        'tfmg:factory_floor',
        Item.of('tfmg:factory_floor', 8)
    )
    $tfmgExistingIngots.forEach((metal) => {
        event.replaceInput(
            { input: `tfmg:${metal}_ingot` },
            `tfmg:${metal}_ingot`,
            `#forge:ingots/${metal}`
        )
        event.replaceInput(
            { input: `tfmg:${metal}_sheet` },
            `tfmg:${metal}_sheet`,
            `#forge:plates/${metal}`
        )
        event.replaceInput(
            { id: 'tfmg:crafting/kinetics/copper_cable_hub' },
            'minecraft:copper_ingot',
            '#forge:nuggets/copper'
        )
        event.replaceInput(
            { id: 'tfmg:crafting/kinetics/aluminum_cable_hub' },
            '#forge:ingots/aluminum',
            '#forge:nuggets/aluminum'
        )
    })

    //TFC Quern
    event.recipes.tfc.quern(Item.of('tfmg:coal_coke_dust'), 'immersiveengineering:coal_coke')

    //Create Milling
    event.recipes.create.milling(
        [
            Item.of('tfmg:coal_coke_dust')
        ],
        [
            Item.of('immersiveengineering:coal_coke')
        ],
        300
    ).id('twt:coke_milling')

    //TFC Heating
    event.recipes.tfc.heating('tfmg:crushed_raw_lithium', 180.5).resultItem('tfmg:lithium_ingot')

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

    //IE Pressing
    event.recipes.immersiveengineering.metal_press(
        'tfmg:cast_iron_block', 'tfc:metal/double_ingot/cast_iron', 'tfc_ie_addon:mold_block', 1000
    )
    event.recipes.immersiveengineering.metal_press(
        'tfmg:lithium_block', '2x tfmg:lithium_ingot', 'tfc_ie_addon:mold_block', 1000
    )

    //TFMG Coking
    event.recipes.tfmg.coking('#tfmg:fuel_compat', ['immersiveengineering:coal_coke', Fluid.of('immersiveengineering:creosote', 1), Fluid.of('tfmg:carbon_dioxide', 20)], 500)
    event.recipes.tfmg.coking('#minecraft:logs', ['minecraft:charcoal', Fluid.of('immersiveengineering:creosote', 1), Fluid.of('tfmg:carbon_dioxide', 20)], 250)
    event.recipes.tfmg.coking('#c:storage_blocks/coal', ['immersiveengineering:coke', Fluid.of('immersiveengineering:creosote', 1), Fluid.of('tfmg:carbon_dioxide', 20)], 5000)

    //Create Compacting
    event.recipes.create.compacting(
        [
            Item.of('tfmg:bauxite_powder')
        ],
        [
            Item.of('tfc_ie_addon:powder/bauxite', 20)
        ],
    ).heated()

    //TFMG Industrial Blasting
    //Custom has to be used here. The schema won't add multiple outputs.
    event.custom({
        type: 'tfmg:industrial_blasting',
        hotAirUsage: 20,
        ingredients: [
            {
                tag: 'tfmg:steel_creation',
            },
            {
                tag: 'tfc:flux'
            }
        ],
        processingTime: 1000,
        results: [
            {
                fluid: 'tfc:metal/pig_iron',
                amount: 100
            },
            {
                fluid: 'tfmg:molten_slag',
                amount: 100
            },
            {
                fluid: 'tfmg:furnace_gas',
                amount: 200
            }
        ]
    }).id('twt:industrial_blasting/pig_iron')

    //TFMG vat_machine_recipe
    //We're going with custom here because the KJS schema physically hurts me to look at.
    event.custom({
        type: 'tfmg:vat_machine_recipe',
        allowedVatTypes: [
            'tfmg:firebrick_lined_vat'
        ],
        ingredients: [
            {
                tag: 'tfmg:steel_creation'
            },
            {
                tag: 'tfc:flux'
            },
            {
                tag: 'tfmg:blast_furnace_fuel'
            }
        ],
        machines: [
            'tfmg:graphite_electrode',
            'tfmg:graphite_electrode',
            'tfmg:graphite_electrode'
        ],
        minSize: 9,
        processingTime: 500,
        results: [
            {
                item: 'tfmg:coal_coke_dust',
                chance: 0.9
            },
            {
                fluid: 'tfc:metal/pig_iron',
                amount: 100
            },
            {
                fluid: 'tfmg:molten_slag',
                amount: 200
            }
        ]
    }).id('twt:vat_machine_recipe/steel_creation')

    event.custom({
        type: 'tfmg:vat_machine_recipe',
        allowedVatTypes: [
            'tfmg:steel_vat',
            'tfmg:firebrick_lined_vat'
        ],
        heatRequirement: 'heated',
        ingredients: [
            {
                item: 'tfmg:bauxite_powder'
            },
            {
                item: 'tfmg:bauxite_powder'
            },
            {
                item: 'tfmg:bauxite_powder'
            }
        ],
        machines: [
            'tfmg:electrode',
            'tfmg:electrode'
        ],
        minSize: 1,
        processingTime: 500,
        results: [
            {
                fluid: 'tfc_ie_addon:metal/aluminum',
                amount: 600
            }
        ]
    }).id('twt:vat_machine_recipe/aluminum')

    //Sequenced Assembly (I hate these)
    event.recipes.create.sequenced_assembly(
        [
            'tfmg:steel_mechanism'
        ],
        '#forge:plates/steel',
        [
            event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', '#forge:wires/copper']),
            event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:steel_cogwheel']),
            event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'create:electron_tube']),
            event.recipes.create.pressing('tfmg:unfinished_steel_mechanism', 'tfmg:unfinished_steel_mechanism', '#forge:plates/steel'),
            event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:screw']),
            event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:screwdriver']).keepHeldItem(),
        ]
    ).transitionalItem('tfmg:unfinished_steel_mechanism').loops(1).id('twt:sequenced_assembly/steel_mechanism')

    event.recipes.create.sequenced_assembly(
        [
            'tfmg:electric_motor'
        ],
        'tfmg:heavy_machinery_casing',
        [
            event.recipes.create.deploying('tfmg:unfinished_electric_motor', ['tfmg:unfinished_electric_motor', 'tfmg:rotor']),
            event.recipes.create.deploying('tfmg:unfinished_electric_motor', ['tfmg:unfinished_electric_motor', 'tfmg:stator']),
            event.recipes.create.deploying('tfmg:unfinished_electric_motor', ['tfmg:unfinished_electric_motor', 'tfmg:screwdriver']).keepHeldItem(),
            event.recipes.create.deploying('tfmg:unfinished_electric_motor', ['tfmg:unfinished_electric_motor', 'tfmg:electromagnetic_coil']),
            event.recipes.create.deploying('tfmg:unfinished_electric_motor', ['tfmg:unfinished_electric_motor', 'tfmg:magnet']),
            event.recipes.create.deploying('tfmg:unfinished_electric_motor', ['tfmg:unfinished_electric_motor', 'create:shaft']),
            event.recipes.create.deploying('tfmg:unfinished_electric_motor', ['tfmg:unfinished_electric_motor', 'create:mechanical_bearing']),
        ]
    ).transitionalItem('tfmg:unfinished_electric_motor').loops(1).id('twt:sequenced_assembly/electric_motor')
}

const TFMGTags = (event) => {
    event.add('tfmg:steel_creation', 'tfc:metal/ingot/cast_iron', 'tfc:metal/ingot/wrought_iron')
    event.add('tfmg:fuel_compat', ['minecraft:coal', 'tfc:ore/lignite', 'tfc:ore/bituminous_coal'])
    event.add('twt:treated_woods', ['tfmg:hardened_planks', 'immersiveengineering:treated_wood_horizontal'])
    event.add('tfc:deals_slashing_damage', 'tfmg:lithium_blade')
    event.add('tfmg:flux', '#tfc:flux')
    event.add('tfmg:blast_furnace_fuel', 'immersiveengineering:dust_coke')
}

const TFMGData = (event) => {

    //Heat Defs
    event.itemHeat('tfmg:crushed_raw_lithium', 0.4, null, null)
}