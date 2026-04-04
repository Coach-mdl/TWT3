

const AetherRecipes = (event) => {

    //Remove
    event.remove({ id: 'aether:iron_gloves'})
    event.remove({ id: 'aether:golden_gloves'})
    event.remove({ id: 'aether:leather_gloves'})
    event.remove({ id: 'aether:diamond_gloves'})
    event.remove({ id: 'aether:netherite_gloves'})
    event.remove({ id: 'aether:skyroot_bucket'})
    event.remove({ id: 'aether:iron_ring'})
    event.remove({ id: 'aether:golden_ring'})
    
    //TFC Heating
    event.recipes.tfc.heating('aether:iron_gloves', 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 200))

    event.recipes.tfc.heating('aether:iron_pendant', 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 100))

    event.recipes.tfc.heating('aether:iron_ring', 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 50))

    event.recipes.tfc.heating('aether:golden_gloves', 1060)
        .resultFluid(Fluid.of('tfc:metal/gold', 200))

    event.recipes.tfc.heating('aether:golden_pendant', 1060)
        .resultFluid(Fluid.of('tfc:metal/gold', 100))

    event.recipes.tfc.heating('aether:golden_ring', 1060)
        .resultFluid(Fluid.of('tfc:metal/gold', 50))

    //TFC Smithing
    event.recipes.tfc.anvil(
        'aether:iron_gloves',
        'tfc:metal/sheet/wrought_iron',
        ['draw_not_last', 'bend_any', 'bend_any']
    ).bonus(true).tier(3).id('twt:anvil/iron_gloves') 

    event.recipes.tfc.anvil(
        'aether:golden_gloves',
        'tfc:metal/sheet/gold',
        ['draw_not_last', 'bend_any', 'bend_any']
    ).bonus(true).tier(1).id('twt:anvil/golden_gloves') 

    event.recipes.tfc.anvil(
        'aether:golden_ring',
        'tfc:metal/rod/gold',
        ['draw_not_last', 'bend_any', 'bend_any']
    ).bonus(true).tier(1).id('twt:anvil/golden_ring') 

    event.recipes.tfc.anvil(
        'aether:iron_ring',
        'tfc:metal/rod/wrought_iron',
        ['draw_not_last', 'bend_any', 'bend_any']
    ).bonus(true).tier(3).id('twt:anvil/iron_ring') 
    
    //TFC knapping
    event.recipes.tfc.knapping(
        'aether:leather_gloves',
        'tfc:leather',
        [
            'XXXXX',
            'XXXXX',
            'XXXXX',
            'XXXXX',
            ' XXX '
        ]
    ).id('twt:knapping/leather_gloves')
}

const AetherData = (event) => {
    event.itemHeat('aether:iron_gloves', 1, null, 1128)
    event.itemHeat('aether:golden_gloves', 1, null, 1128)
    event.itemHeat('aether:iron_pendant', 1, null, 1128)
    event.itemHeat('aether:golden_pendant', 1, null, 1128)
    event.itemHeat('aether:iron_ring', 1, null, 1128)
    event.itemHeat('aether:golden_ring', 1, null, 1128)

    event.fuel('aether:ambrosium_shard', 3500, 2640, 1)
    event.fuel('aether:ambrosium_block', 3500, 23760, 1)

    event.foodItem('aether:blue_berry', food => {
        food.hunger(0.5)
        food.fruit(1.0)
        food.water(10)
        food.decayModifier(2)
    })
    event.foodItem('aether:enchanted_berry', food => {
        food.hunger(2.0)
        food.saturation(2)
        food.fruit(3.0)
        food.water(30)
        food.decayModifier(0.7)
    })
    event.foodItem('aether:white_apple', food => {
        food.hunger(1.0)
        food.fruit(1.0)
        food.water(10)
        food.decayModifier(2)
    })
    event.foodItem('aether:blue_gummy_swet', food => {
        food.hunger(20)
        food.saturation(5)
        food.fruit(3.0)
        food.dairy(3.0)
        food.decayModifier(0)
    })
    event.foodItem('aether:golden_gummy_swet', food => {
        food.hunger(20)
        food.saturation(5)
        food.fruit(1.0)
        food.dairy(1.0)
        food.vegetables(1)
        food.protein(1)
        food.grain(1)
        food.decayModifier(0)
    })
    event.foodItem('aether:ambrosium_shard', food => {
        food.hunger(0.5)
        food.dairy(0.5)
        food.decayModifier(0)
    })
    event.foodItem('aether:candy_cane', food => {
        food.hunger(0.5)
        food.dairy(0.5)
        food.decayModifier(0)
    })
    event.foodItem('aether:gingerbread_man', food => {
        food.hunger(0.5)
        food.dairy(0.2)
        food.grain(0.5)
        food.decayModifier(0)
    })
    event.foodItem('aether:healing_stone', food => {
        food.hunger(1.0)
        food.dairy(1.0)
        food.decayModifier(0)
    })
}

const AetherLoot = (event) => {

    event.addEntityLootModifier("aether:sheepuff")
    .replaceLoot('minecraft:mutton', 'tfc:food/mutton')
    .replaceLoot('minecraft:white_wool', 'tfc:medium_sheepskin_hide')
    
}

const AetherItemTags = (event) => {

    event.add('tfc:forge_fuel', ['aether:ambrosium_shard', 'aether:ambrosium_block'])
}
