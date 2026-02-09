"use strict";

const VanillaRecipes = (event) => {

    //removal
    event.remove({id: /^minecraft:.*_ingot_from_nuggets$/})
    event.remove({id: 'minecraft:tripwire_hook'})

    //replace
    event.replaceInput(
        {id: "minecraft:grindstone"},
        'minecraft:stone_slab',
        'tfc:handstone'
    )
    event.replaceInput(
        {input: 'minecraft:amethyst_shard'},
        'minecraft:amethyst_shard',
        '#forge:gems/amethyst'
    )
    event.replaceInput(
        {id: 'tfc:crafting/vanilla/redstone/tripwire_hook'},
        'tfc:metal/sheet/wrought_iron',
        '#forge:plates/iron'
    )
    event.replaceInput(
        {id: 'minecraft:stonecutter'},
        'minecraft:stone',
        '#forge:stone'
    )
    event.replaceInput(
        {id: 'minecraft:stonecutter'},
        'minecraft:iron_ingot',
        '#forge:ingots/wrought_iron',
    )
    event.replaceInput(
        {id: 'minecraft:golden_carrot'},
        'minecraft:carrot',
        '#forge:vegetables/carrot'
    )
    event.replaceInput(
        {id: 'minecraft:warped_fungus_on_a_stick'},
        'minecraft:fishing_rod',
        '#forge:tools/fishing_rods'
    )

    //shaped
    event.recipes.kubejs.shaped('minecraft:anvil',
        [
            'DDD',
            ' C ',
            'CCC'
        ],
        {
            D: 'tfc:metal/double_ingot/cast_iron',
            C: 'tfc:metal/ingot/cast_iron'
        }
    )
    event.recipes.kubejs.shaped('minecraft:obsidian',
        [
            'OO ',
            'OO '],
        {
            O: 'bsa:obsidian',
        }
    )

    //shapeless
    event.shapeless(Item.of('minecraft:glass_bottle', 1),
        ['#tfc:glass_bottles'])

    //Furnace
    event.smelting('minecraft:charcoal', '#tfc:pit_kiln_logs').xp(0.35)
    event.smelting('minecraft:glass', 'tfc:silica_glass_batch').xp(0.35)
    event.smelting('minecraft:orange_stained_glass', 'tfc:hematitic_glass_batch').xp(0.35)
    event.smelting('minecraft:green_stained_glass', 'tfc:olivine_glass_batch').xp(0.35)
    event.smelting('minecraft:blue_stained_glass', 'tfc:volcanic_glass_batch').xp(0.35)

    //TFC Welding
    event.recipes.tfc.welding('minecraft:anvil', 'minecraft:chipped_anvil', 'tfc:metal/ingot/cast_iron')
    event.recipes.tfc.welding('minecraft:chipped_anvil', 'minecraft:damaged_anvil', 'tfc:metal/ingot/cast_iron')
    event.recipes.tfc.welding('minecraft:anvil', 'minecraft:damaged_anvil', 'tfc:metal/double_ingot/cast_iron')
    event.recipes.tfc.welding('minecraft:bucket', 'tfc:metal/bucket/blue_steel', 'tfc:metal/bucket/red_steel')

    //TFC Heating
    event.recipes.tfc.heating('minecraft:anvil', 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 1000))
    event.recipes.tfc.heating('minecraft:chipped_anvil', 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 900))
    event.recipes.tfc.heating('minecraft:damaged_anvil', 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 800))

    //Create Compacting
    function panecompacting(output, input) {
        event.custom({
            type: 'create:compacting',
            heatRequirement: 'heated',
            ingredients: [
                {
                    item: input
                }
            ],
            results: [
                {
                    count: 16,
                    item: output
                }
            ]
        })
    }

    panecompacting('minecraft:glass_pane', 'tfc:silica_glass_batch')
    panecompacting('minecraft:orange_stained_glass_pane', 'tfc:hematitic_glass_batch')
    panecompacting('minecraft:green_stained_glass_pane', 'tfc:olivine_glass_batch')
    panecompacting('minecraft:blue_stained_glass_pane', 'tfc:volcanic_glass_batch')

}

const VanillaData = (event) => {

    //Heat Definitions
    event.itemHeat('minecraft:anvil', 3.057, null, 1128)
    event.itemHeat('minecraft:chipped_anvil', 3.057, null, 1128)
    event.itemHeat('minecraft:damaged_anvil', 3.057, null, 1128)
    event.itemHeat('minecraft:bricks', 2.0, null, null)

}

const VanillaItemTags = (event) => {

    event.add('minecraft:compasses', 'firmaciv:firmaciv_compass')
}