"use strict";
//MagistuArmory is Epic Knights.

const MagistuArmoryRecipes = (event) => {

    //removal
    event.remove({output: 'magistuarmory:blacksmith_hammer'})
    event.remove({output: 'magistuarmory:steel_ingot'})
    event.remove({id: 'magistuarmory:steel_ingot_to_steel_nuggets'})
    event.remove({id: 'magistuarmory:steel_nuggets_to_steel_ingot'})
    event.remove({id: 'knightsofterrafirma:crafting/bronze_lamellar_rows'})
    event.remove({mod: 'epic_knights_ores_and_alloys'})
    event.remove({output: 'antiquelegacy:bronze_mixture'})
    event.remove({id: 'antiquelegacy:iron_ring'})
    event.remove({id: 'antiquelegacy:iron_chainmail'})
    event.remove({id: /^antiquelegacy:small_.*_plate$/})
    event.remove({id: /^antiquelegacy:.*_plate$/})
    event.remove({id: /^antiquelegacy:.*_ingot$/})

    //replace
    event.replaceInput(
        {input: 'magistuarmory:leather_strip'},
        'magistuarmory:leather_strip',
        'sns:leather_strip'
    )
    event.replaceOutput(
        {output: 'magistuarmory:leather_strip'},
        'magistuarmory:leather_strip',
        'sns:leather_strip'
    )

    //Shaped
    event.recipes.kubejs.shaped('magistuarmory:blacksmith_hammer',
        [
            'H',
            'S'],
        {
            S: 'magistuarmory:hilt',
            H: 'tfc:metal/hammer_head/steel'
        }
    )

    //TFC barrel
    function rusting(input, output) {
        event.recipes.tfc.barrel_sealed(12000)
            .outputItem(output)
            .inputs(input, TFC.fluidStackIngredient('minecraft:water', 4000))
    }

    rusting('magistuarmory:iron_bastardsword', 'magistuarmory:rusted_bastardsword')
    rusting('magistuarmory:iron_heavymace', 'magistuarmory:rusted_heavymace')
    rusting('magistuarmory:barbute', 'magistuarmory:rustedbarbute')
    rusting('magistuarmory:halfarmor_chestplate', 'magistuarmory:rustedhalfarmor_chestplate')
    rusting('magistuarmory:greathelm', 'magistuarmory:rustedgreathelm')
    rusting('magistuarmory:crusader_chestplate', 'magistuarmory:rustedcrusader_chestplate')
    rusting('magistuarmory:crusader_boots', 'magistuarmory:rustedcrusader_boots')
    rusting('magistuarmory:norman_helmet', 'magistuarmory:rustednorman_helmet')
    rusting('magistuarmory:chainmail_helmet', 'magistuarmory:rustedchainmail_helmet')
    rusting('magistuarmory:chainmail_chestplate', 'magistuarmory:rustedchainmail_chestplate')
    rusting('magistuarmory:chainmail_leggings', 'magistuarmory:rustedchainmail_leggings')
    rusting('magistuarmory:chainmail_boots', 'magistuarmory:rustedchainmail_boots')
    rusting('magistuarmory:kettlehat', 'magistuarmory:rustedkettlehat')
    rusting('magistuarmory:iron_roundshield', 'magistuarmory:corruptedroundshield')

}