"use strict";


const TWTRecipes = (event) => {

    //removal
    $nuggetcompat.forEach((nugget) => {

        event.remove({not: {type: 'tfc:anvil'}, output: `${nugget}`})
        event.remove({id: 'exposure:lightroom'})

    })

    //Replace
    event.replaceInput(
        {input: 'minecraft:campfire'},
        'minecraft:campfire',
        'minecraft:charcoal'
    )
    event.replaceInput(
        {input: 'minecraft:iron_block'},
        'minecraft:iron_block',
        'tfc:metal/double_ingot/wrought_iron'
    )
    event.replaceInput(
        {input: 'minecraft:smooth_stone'},
        'minecraft:smooth_stone',
        '#forge:stone'
    )
    event.replaceInput(
        {input: 'minecraft:dried_kelp'},
        'minecraft:dried_kelp',
        'tfc:food/dried_kelp'
    )
    event.replaceInput(
        {input: 'minecraft:chest'},
        'minecraft:chest',
        '#forge:chests'
    )
    event.replaceInput(
        {id: 'man_of_many_planes:scarlet_biplane'},
        'minecraft:iron_ingot',
        'tfc:metal/sheet/wrought_iron'
    )
    event.replaceInput(
        {input: 'minecraft:barrel'},
        'minecraft:barrel',
        '#tfc:barrels'
    )
    event.replaceInput(
        {input: 'minecraft:iron_trapdoor'},
        'minecraft:iron_trapdoor',
        'tfc:metal/sheet/wrought_iron'
    )
    

    //WoodenCog Heated Compacting
    function missingcompactingrecipes(input1, min1, input2, min2, output) {
        event.custom({
            type: 'woodencog:heated_compacting',
            ingredients: [
                {
                    type: 'woodencog:heated',
                    ingredient: {item: input1},
                    min_temp: min1,
                    max_temp: 3000
                },
                {
                    type: 'woodencog:heated',
                    ingredient: {item: input2},
                    min_temp: min2,
                    max_temp: 3000
                },
                {
                    type: 'woodencog:heated',
                    ingredient: {item: 'tfc:powder/flux'},
                    max_temp: 3000
                }
            ],
            results: [
                {
                    type: 'heated',
                    item: output,
                    temperature: 0,
                    copy_heat: true,
                    cooling: 0
                }
            ]
        })
    }

    missingcompactingrecipes(
        'tfc:metal/ingot/weak_steel', 924,
        'tfc:metal/ingot/pig_iron', 921,
        'tfc:metal/ingot/high_carbon_black_steel'
    )
    missingcompactingrecipes(
        'tfc:metal/ingot/weak_red_steel', 924,
        'tfc:metal/ingot/black_steel', 921,
        'tfc:metal/ingot/high_carbon_red_steel'
    )
    missingcompactingrecipes(
        'tfc:metal/ingot/weak_blue_steel', 924,
        'tfc:metal/ingot/black_steel', 921,
        'tfc:metal/ingot/high_carbon_blue_steel'
    )
    missingcompactingrecipes(
        'immersiveengineering:ingot_electrum', 600,
        'immersiveengineering:ingot_electrum', 600,
        'tfc_ie_addon:metal/double_ingot/electrum'
    )
    missingcompactingrecipes(
        'immersiveengineering:ingot_constantan', 600,
        'immersiveengineering:ingot_constantan', 600,
        'tfc_ie_addon:metal/double_ingot/constantan'
    )
    missingcompactingrecipes(
        'immersiveengineering:ingot_aluminum', 600,
        'immersiveengineering:ingot_aluminum', 600,
        'tfc_ie_addon:metal/double_ingot/aluminum'
    )
    missingcompactingrecipes(
        'immersiveengineering:ingot_lead', 300,
        'immersiveengineering:ingot_lead', 300,
        'tfc_ie_addon:metal/double_ingot/lead'
    )
    missingcompactingrecipes(
        'immersiveengineering:ingot_uranium', 600,
        'immersiveengineering:ingot_uranium', 600,
        'tfc_ie_addon:metal/double_ingot/uranium'
    )

    //Shapeless
    $ores.forEach((ore) => {
            event.recipes.tfc.extra_products_shapeless_crafting(
                [{item: `tfc:ore/small_${ore}`, count: 1}],
                event.recipes.tfc.damage_inputs_shapeless_crafting(
                    event.recipes.minecraft.crafting_shapeless(
                        `tfc:ore/normal_${ore}`,
                        ['#tfc:hammers', `tfc:ore/rich_${ore}`]
                    )
                )
            )
        }
    )
    $dfcOres.forEach((ore) => {
            event.recipes.tfc.extra_products_shapeless_crafting(
                [{item: `dfc:ore/small_${ore}`, count: 1}],
                event.recipes.tfc.damage_inputs_shapeless_crafting(
                    event.recipes.minecraft.crafting_shapeless(
                        `dfc:ore/normal_${ore}`,
                        ['#tfc:hammers', `dfc:ore/rich_${ore}`]
                    )
                )
            )
        }
    )
    $IEores.forEach((ore) => {
            event.recipes.tfc.extra_products_shapeless_crafting(
                [{item: `tfc_ie_addon:ore/small_${ore}`, count: 1}],
                event.recipes.tfc.damage_inputs_shapeless_crafting(
                    event.recipes.minecraft.crafting_shapeless(
                        `tfc_ie_addon:ore/normal_${ore}`,
                        ['#tfc:hammers', `tfc_ie_addon:ore/rich_${ore}`]
                    )
                )
            )
        }
    )
    event.recipes.tfc.extra_products_shapeless_crafting(
        [{item: `firmalife:ore/small_chromite`, count: 1}],
        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.recipes.minecraft.crafting_shapeless(
                `firmalife:ore/normal_chromite`,
                ['#tfc:hammers', `firmalife:ore/rich_chromite`]
            )
        )
    )

    //TFC Heating
    function nuggetheating(input, temperature, output) {
        event.custom({
            type: 'tfc:heating',
            ingredient: {
                item: input
            },
            result_fluid: {
                fluid: output,
                amount: 5
            },
            temperature: temperature
        })
    }

    nuggetheating('minecraft:gold_nugget', 1060, 'tfc:metal/gold')
    nuggetheating('immersiveengineering:nugget_lead', 500, 'tfc_ie_addon:metal/lead')
    nuggetheating('immersiveengineering:nugget_silver', 961, 'tfc:metal/silver')
    nuggetheating('immersiveengineering:nugget_electrum', 900, 'tfc_ie_addon:metal/electrum')
    nuggetheating('immersiveengineering:nugget_constantan', 750, 'tfc_ie_addon:metal/constantan')
    nuggetheating('immersiveengineering:nugget_copper', 1080, 'tfc:metal/copper')
    nuggetheating('immersiveengineering:nugget_nickel', 1453, 'tfc:metal/nickel')
    nuggetheating('immersiveengineering:nugget_uranium', 1250, 'tfc_ie_addon:metal/uranium')
    nuggetheating('immersiveengineering:nugget_aluminum', 650, 'tfc_ie_addon:metal/aluminum')
    nuggetheating('antiquelegacy:tin_nugget', 230, 'tfc:metal/tin')
    nuggetheating('create:zinc_nugget', 420, 'tfc:metal/zinc')
    nuggetheating('create:brass_nugget', 930, 'tfc:metal/brass')
    nuggetheating('tfmg:cast_iron_nugget', 1535, 'tfc:metal/cast_iron')

    function oredustsmelting(input, temperature, output) {
        event.recipes.tfc.heating(input, temperature)
            .resultFluid(Fluid.of(output, 5))
    }

    oredustsmelting('tfc:powder/hematite', 1535, 'tfc:metal/cast_iron')
    oredustsmelting('tfc:powder/magnetite', 1535, 'tfc:metal/cast_iron')
    oredustsmelting('tfc:powder/limonite', 1535, 'tfc:metal/cast_iron')
    oredustsmelting('tfc:powder/sphalerite', 420, 'tfc:metal/zinc')
    oredustsmelting('tfc:powder/tetrahedrite', 1080, 'tfc:metal/copper')
    oredustsmelting('tfc:powder/cassiterite', 230, 'tfc:metal/tin')
    oredustsmelting('tfc:powder/bismuthinite', 270, 'tfc:metal/bismuth')
    oredustsmelting('tfc:powder/garnierite', 1453, 'tfc:metal/nickel')
    oredustsmelting('tfc:powder/malachite', 1080, 'tfc:metal/copper')
    oredustsmelting('tfc:powder/native_copper', 1080, 'tfc:metal/copper')
    oredustsmelting('tfc:powder/native_gold', 1060, 'tfc:metal/gold')
    oredustsmelting('tfc:powder/native_silver', 961, 'tfc:metal/silver')
    oredustsmelting('tfc_ie_addon:powder/bauxite', 650, 'tfc_ie_addon:metal/aluminum')
    oredustsmelting('tfc_ie_addon:powder/galena', 500, 'tfc_ie_addon:metal/lead')
    oredustsmelting('tfc_ie_addon:powder/uraninite', 1250, 'tfc_ie_addon:metal/uranium')
    oredustsmelting('dfc:metal/powder/bismuth', 270, 'tfc:metal/bismuth')
    oredustsmelting('dfc:metal/powder/bismuth_bronze', 985, 'tfc:metal/bismuth_bronze')
    oredustsmelting('dfc:metal/powder/black_bronze', 1070, 'tfc:metal/black_bronze')
    oredustsmelting('dfc:metal/powder/bronze', 950, 'tfc:metal/bronze')
    oredustsmelting('dfc:metal/powder/brass', 930, 'tfc:metal/brass')
    oredustsmelting('dfc:metal/powder/copper', 1080, 'tfc:metal/copper')
    oredustsmelting('dfc:metal/powder/gold', 1060, 'tfc:metal/gold')
    oredustsmelting('dfc:metal/powder/nickel', 1453, 'tfc:metal/nickel')
    oredustsmelting('dfc:metal/powder/rose_gold', 960, 'tfc:metal/rose_gold')
    oredustsmelting('dfc:metal/powder/silver', 961, 'tfc:metal/silver')
    oredustsmelting('dfc:metal/powder/tin', 230, 'tfc:metal/tin')
    oredustsmelting('dfc:metal/powder/zinc', 420, 'tfc:metal/zinc')
    oredustsmelting('dfc:metal/powder/sterling_silver', 950, 'tfc:metal/sterling_silver')
    oredustsmelting('dfc:metal/powder/wrought_iron', 1535, 'tfc:metal/wrought_iron')
    oredustsmelting('dfc:metal/powder/cast_iron', 1535, 'tfc:metal/cast_iron')
    oredustsmelting('dfc:metal/powder/steel', 1540, 'tfc:metal/steel')
    oredustsmelting('dfc:metal/powder/black_steel', 1485, 'tfc:metal/black_steel')
    oredustsmelting('dfc:metal/powder/blue_steel', 1540, 'tfc:metal/blue_steel')
    oredustsmelting('dfc:metal/powder/red_steel', 1540, 'tfc:metal/red_steel')
    oredustsmelting('dfc:metal/powder/aluminum', 650, 'tfc_ie_addon:metal/aluminum')
    oredustsmelting('dfc:metal/powder/alumina', 650, 'tfc_ie_addon:metal/aluminum')
    oredustsmelting('dfc:metal/powder/lead', 500, 'tfc_ie_addon:metal/lead')
    oredustsmelting('dfc:metal/powder/pewter', 340, 'dfc:metal/dfc_pewter')
    oredustsmelting('dfc:metal/powder/platinum', 1540, 'dfc:metal/dfc_platinum')

    //TFC Smithing
    function nuggetsmithing(input, output) {
        event.custom({
            type: 'tfc:anvil',
            input: {
                item: input
            },
            result: {
                item: output
            },
            tier: 1,
            rules: ['punch_any', 'punch_any', 'punch_any'],
            apply_forging_bonus: false
        })
    }

    nuggetsmithing('tfc:metal/ingot/gold', '20x minecraft:gold_nugget')
    nuggetsmithing('immersiveengineering:ingot_lead', '20x immersiveengineering:nugget_lead')
    nuggetsmithing('tfc:metal/ingot/silver', '20x immersiveengineering:nugget_silver')
    nuggetsmithing('immersiveengineering:ingot_electrum', '20x immersiveengineering:nugget_electrum')
    nuggetsmithing('immersiveengineering:ingot_constantan', '20x immersiveengineering:nugget_constantan')
    nuggetsmithing('tfc:metal/ingot/copper', '20x immersiveengineering:nugget_copper')
    nuggetsmithing('tfc:metal/ingot/nickel', '20x immersiveengineering:nugget_nickel')
    nuggetsmithing('immersiveengineering:ingot_uranium', '20x immersiveengineering:nugget_uranium')
    nuggetsmithing('immersiveengineering:ingot_aluminum', '20x immersiveengineering:nugget_aluminum')
    nuggetsmithing('tfc:metal/ingot/tin', '20x antiquelegacy:tin_nugget')
    nuggetsmithing('tfc:metal/ingot/zinc', '20x create:zinc_nugget')
    nuggetsmithing('tfc:metal/ingot/brass', '20x create:brass_nugget')
    nuggetsmithing('tfc:metal/ingot/cast_iron', '20x tfmg:cast_iron_nugget')

    //TFC Quern
    $metals.forEach((metal) => {
        event.recipes.tfc.quern(Item.of(`dfc:metal/powder/${metal}`, 20), `/^(dfc|tfc):metal\/ingot\/${metal}$/`)
    })

    //Create Cutting
    function woodsawing(output, input, amount) {
        event.recipes.create.cutting(
            [
                Item.of(output, amount),
                Item.of('immersiveengineering:dust_wood', 1).withChance(0.70)
            ],
            [
                Item.of(input)
            ]
        )
    }

    $woods.forEach((wood) => {
        woodsawing(`tfc:wood/stripped_log/${wood}`, `tfc:wood/log/${wood}`, 1)
        woodsawing(`tfc:wood/lumber/${wood}`, `tfc:wood/stripped_log/${wood}`, 8)
        woodsawing(`tfc:wood/lumber/${wood}`, `tfc:wood/planks/${wood}`, 4)
        woodsawing(`tfc:wood/lumber/${wood}`, `tfc:wood/planks/${wood}_stairs`, 3)
        woodsawing(`tfc:wood/lumber/${wood}`, `tfc:wood/planks/${wood}_slab`, 2)
        woodsawing(`tfc:wood/lumber/${wood}`, `dfc:wood/panel/${wood}`, 4)
        woodsawing(`tfc:wood/lumber/${wood}`, `firmaciv:wood/${wood}_roofing`, 2)
    })
    woodsawing(`beneath:wood/stripped_log/crimson`, `beneath:wood/log/crimson`, 1)
    woodsawing(`beneath:wood/lumber/crimson`, `beneath:wood/stripped_log/crimson`, 8)
    woodsawing(`beneath:wood/lumber/crimson`, `beneath:wood/planks/crimson`, 4)
    woodsawing(`beneath:wood/lumber/crimson`, `beneath:wood/planks/crimson_stairs`, 3)
    woodsawing(`beneath:wood/lumber/crimson`, `beneath:wood/planks/crimson_slab`, 2)
    woodsawing(`beneath:wood/stripped_log/warped`, `beneath:wood/log/warped`, 1)
    woodsawing(`beneath:wood/lumber/warped`, `beneath:wood/stripped_log/warped`, 8)
    woodsawing(`beneath:wood/lumber/warped`, `beneath:wood/planks/warped`, 4)
    woodsawing(`beneath:wood/lumber/warped`, `beneath:wood/planks/warped_stairs`, 3)
    woodsawing(`beneath:wood/lumber/warped`, `beneath:wood/planks/warped_slab`, 2)

    //Create Crushing
    event.recipes.create.crushing(
        [
            Item.of('tfc:powder/tetrahedrite', 2).withChance(0.45),
            Item.of('tfc:powder/cassiterite', 3).withChance(0.25),
            Item.of('tfc:powder/magnetite', 1).withChance(0.15)
        ],
        [
            'tfc:rock/raw/gabbro'
        ],
        500
    ).id('twt:gabbro_crushing')

    event.recipes.create.crushing(
        [
            Item.of('tfc:rock/loose/limestone', 2),
            Item.of('tfc:rock/loose/limestone', 2).withChance(0.45),
            Item.of('tfmg:limesand', 1),
            Item.of('tfc:powder/native_silver', 1).withChance(0.35),
            Item.of('minecraft:lime_dye', 1).withChance(0.01)
        ],
        [
            'create:limestone'
        ],
        500
    ).id('twt:create_limestone_crushing')

    event.recipes.create.crushing(
        [
            Item.of('minecraft:soul_sand', 1).withChance(0.45),
            Item.of('create:cinder_flour', 1).withChance(0.15),
            Item.of('tfc:ore/small_limonite', 3).withChance(0.35),
            Item.of('tfc:powder/sulfur', 2).withChance(0.25)
        ],
        [
            'create:scoria'
        ],
        500
    ).id('twt:scoria_crushing')

    event.recipes.create.crushing(
        [
            Item.of('tfc:powder/sphalerite', 2).withChance(0.35),
            Item.of('tfc:powder/sphalerite', 2).withChance(0.15),
            Item.of('tfmg:crushed_raw_lithium', 1).withChance(0.25),
            Item.of('beneath:crackrack_rock', 2).withChance(0.70)
        ],
        [
            'beneath:crackrack'
        ],
        500
    ).id('twt:crackrack_crushing')

    //Create Deploying
    function nuggetdeploying(input, output) {
        event.recipes.create.deploying(
            [
                Item.of(output, 20)
            ],
            [
                Item.of(input),
                '#tfc:chisels'
            ],
        ).keepHeldItem()
    }

    nuggetdeploying('tfc:metal/ingot/gold', 'minecraft:gold_nugget')
    nuggetdeploying('immersiveengineering:ingot_lead', 'immersiveengineering:nugget_lead')
    nuggetdeploying('tfc:metal/ingot/silver', 'immersiveengineering:nugget_silver')
    nuggetdeploying('immersiveengineering:ingot_electrum', 'immersiveengineering:nugget_electrum')
    nuggetdeploying('immersiveengineering:ingot_constantan', 'immersiveengineering:nugget_constantan')
    nuggetdeploying('tfc:metal/ingot/copper', 'immersiveengineering:nugget_copper')
    nuggetdeploying('tfc:metal/ingot/nickel', 'immersiveengineering:nugget_nickel')
    nuggetdeploying('immersiveengineering:ingot_uranium', 'immersiveengineering:nugget_uranium')
    nuggetdeploying('immersiveengineering:ingot_aluminum', 'immersiveengineering:nugget_aluminum')
    nuggetdeploying('tfc:metal/ingot/tin', 'antiquelegacy:tin_nugget')
    nuggetdeploying('tfc:metal/ingot/zinc', 'create:zinc_nugget')
    nuggetdeploying('tfc:metal/ingot/brass', 'create:brass_nugget')
    nuggetdeploying('tfc:metal/ingot/wrought_iron', 'minecraft:iron_nugget')
    nuggetdeploying('tfc:metal/ingot/steel', 'magistuarmory:steel_nugget')
    nuggetdeploying('tfc:metal/ingot/black_bronze', 'knightsofterrafirma:black_bronze_nugget')
    nuggetdeploying('tfc:metal/ingot/bismuth_bronze', 'knightsofterrafirma:bismuth_bronze_nugget')
    nuggetdeploying('tfc:metal/ingot/bronze', 'antiquelegacy:bronze_nugget')
    nuggetdeploying('tfc:metal/ingot/cast_iron', 'tfmg:cast_iron_nugget')

    //Create Mixing
    function powdermelting(input, output) {
        event.recipes.create.mixing(
            [
                Fluid.of(output, 5)
            ],
            [
                Item.of(input)
            ]
        )
    }

    powdermelting('tfc:powder/native_copper', 'tfc:metal/copper')
    powdermelting('tfc:powder/native_gold', 'tfc:metal/gold')
    powdermelting('tfc:powder/hematite', 'tfc:metal/cast_iron')
    powdermelting('tfc:powder/native_silver', 'tfc:metal/silver')
    powdermelting('tfc:powder/cassiterite', 'tfc:metal/tin')
    powdermelting('tfc:powder/bismuthinite', 'tfc:metal/bismuth')
    powdermelting('tfc:powder/garnierite', 'tfc:metal/nickel')
    powdermelting('tfc:powder/malachite', 'tfc:metal/copper')
    powdermelting('tfc:powder/magnetite', 'tfc:metal/cast_iron')
    powdermelting('tfc:powder/limonite', 'tfc:metal/cast_iron')
    powdermelting('tfc:powder/sphalerite', 'tfc:metal/zinc')
    powdermelting('tfc:powder/tetrahedrite', 'tfc:metal/copper')
    powdermelting('tfc_ie_addon:powder/bauxite', 'tfc_ie_addon:metal/aluminum')
    powdermelting('tfc_ie_addon:powder/galena', 'tfc_ie_addon:metal/lead')
    powdermelting('tfc_ie_addon:powder/uraninite', 'tfc_ie_addon:metal/uranium')

    //Create Washing
    event.recipes.create.splashing(
        [
            Item.of('tfc:rock/loose/basalt', 1).withChance(0.30),
            Item.of('beneath:crackrack_rock', 1).withChance(0.50),
            Item.of('rnr:gravel_fill/basalt', 4)
        ],
        [
            Item.of('tfc:rock/gravel/basalt')
        ]
    ).id('twt:basalt_gravel_splashing')

    //WoodenCog Heated Compacting
    function doublesheets(input1, min1, input2, min2, output) {
        event.custom({
            type: 'woodencog:heated_compacting',
            ingredients: [
                {
                    type: 'woodencog:heated',
                    ingredient: {item: input1},
                    min_temp: min1,
                    max_temp: 3000
                },
                {
                    type: 'woodencog:heated',
                    ingredient: {item: input2},
                    min_temp: min2,
                    max_temp: 3000
                },
                {
                    type: 'woodencog:heated',
                    ingredient: {tag: 'tfc:flux'},
                    max_temp: 3000
                }
            ],
            results: [
                {
                    type: 'heated',
                    item: output,
                    temperature: 0,
                    copy_heat: true,
                    cooling: 0
                }
            ]
        })
    }

    $tfcMetals.forEach((metal) => {
        doublesheets(`tfc:metal/sheet/${metal}`, 400,
            `tfc:metal/sheet/${metal}`, 400,
            `tfc:metal/double_sheet/${metal}`
        )
    })
}


const TWTData = (event) => {

    //Heat Definitions
    function nuggetheats(input) {
        event.itemHeat(input, 0.4, null, null)
    }

    nuggetheats('minecraft:gold_nugget')
    nuggetheats('immersiveengineering:nugget_lead')
    nuggetheats('immersiveengineering:nugget_silver')
    nuggetheats('immersiveengineering:nugget_electrum')
    nuggetheats('immersiveengineering:nugget_constantan')
    nuggetheats('immersiveengineering:nugget_copper')
    nuggetheats('antiquelegacy:tin_nugget')
    nuggetheats('immersiveengineering:nugget_nickel')
    nuggetheats('immersiveengineering:nugget_uranium')
    nuggetheats('immersiveengineering:nugget_aluminum')
    nuggetheats('create:zinc_nugget')
    nuggetheats('create:brass_nugget')
    nuggetheats('tfmg:cast_iron_nugget')

}


const TWTItemTags = (event) => {

    event.add('twt:create_component_nuggets', ['minecraft:iron_nugget', 'create:zinc_nugget'])
    event.add('twt:corals', ['minecraft:tube_coral', 'minecraft:brain_coral', 'minecraft:bubble_coral', 'minecraft:fire_coral', 'minecraft:horn_coral', 'tfc:coral/tube_coral', 'tfc:coral/brain_coral', 'tfc:coral/bubble_coral', 'tfc:coral/fire_coral', 'tfc:coral/horn_coral'])
}


const ErrorSilencerItemTags = (event) => {

    event.add('tfc:pileable_sheets', 'minecraft:barrier')
    event.add('tfc:pileable_ingots', ['tfmg:aluminum_ingot', 'tfmg:lead_ingot', 'tfmg:constantan_ingot', 'createaddition:electrum_ingot'])
}

const ErrorSilencerBlockTags = (event) => {

    event.add('minecraft:replaceable', ['farmersdelight:wild_cabbages', 'farmersdelight:wild_beetroots', 'farmersdelight:wild_carrots',
        'farmersdelight:wild_onions', 'farmersdelight:wild_potatoes', 'farmersdelight:wild_rice', 'farmersdelight:wild_tomatoes',
        'rnr:fluid/concrete', 'mca:infernal_flame', 'railways:casing_collision', 'tfmg:crude_oil', 'tfmg:heavy_oil', 'tfmg:gasoline',
        'tfmg:diesel', 'tfmg:naphtha', 'tfmg:kerosene', 'tfmg:creosote', 'tfmg:molten_steel', 'tfmg:molten_slag', 'tfmg:molten_plastic',
        'tfmg:liquid_silicon', 'tfmg:lubrication_oil', 'tfmg:cooling_fluid', 'tfmg:napalm', 'tfmg:sulfuric_acid', 'tfmg:liquid_concrete',
        'tfmg:liquid_asphalt', 'tfmg:green_fire', 'tfmg:blue_fire', 'tfmg:lithium_fire', 'createaddition:seed_oil', 'createaddition:bioethanol'])

    event.add('tfc:can_collapse', [
        'dfc:ore/asbestos/blueschist',
        'dfc:ore/asbestos/dolomite',
        'dfc:ore/asbestos/conglomerate',
        'dfc:ore/asbestos/shale',
        'dfc:ore/asbestos/rhyolite',
        'dfc:ore/asbestos/phyllite',
        'dfc:ore/asbestos/basalt',
        'dfc:ore/asbestos/andesite',
        'dfc:ore/asbestos/gabbro',
        'dfc:ore/asbestos/granite',
        'dfc:ore/asbestos/claystone',
        'dfc:rock/spike/tuff',
        'dfc:ore/asbestos/quartzite',
        'dfc:rock/spike/blueschist',
        'dfc:ore/asbestos/chert',
        'dfc:ore/asbestos/tuff',
        'dfc:ore/asbestos/limestone',
        'dfc:rock/spike/serpentine',
        'dfc:ore/asbestos/chalk',
        'dfc:ore/asbestos/travertine',
        'dfc:ore/asbestos/gneiss',
        'dfc:ore/asbestos/schist',
        'dfc:rock/spike/arkose',
        'dfc:ore/asbestos/slate',
        'dfc:rock/spike/travertine',
        'dfc:ore/asbestos/diorite',
        'dfc:ore/asbestos/dacite',
        'dfc:ore/asbestos/marble',
        'dfc:ore/asbestos/arkose',
        'dfc:ore/asbestos/serpentine'])

    event.add('minecraft:replaceable', [
        'exposure:flash',
        'dfc:metal/fluid/aluminum',
        'dfc:metal/fluid/alumina',
        'dfc:metal/fluid/lead',
        'dfc:metal/fluid/pewter',
        'dfc:metal/fluid/platinum',
        'dfc:fluid/plaster',
        'dfc:fluid/concrete',
        'create:fake_track',
        'create:honey',
        'create:chocolate',
        'cold_sweat:slush'])
}


const ErrorSilencerData = (event) => {

    //Heat Definitions
    event.itemHeat('firmaciv:cannon', 3.057, null, null)
    event.itemHeat('tfcbetterbf:insulation', 3.057, null, null)
    event.itemHeat('antiquelegacy:scale_thorax', 3.057, null, null)
}