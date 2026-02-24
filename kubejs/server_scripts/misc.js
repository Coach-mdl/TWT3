"use strict";

//This script is for miscellanious mods that only need a single tweak.

const MiscRecipes = (event) => {

    //CeiRecipes
    event.remove({id: 'create_enchantment_industry:mixing/hyper_experience'})
    event.recipes.create.mixing(
        Fluid.of('create_enchantment_industry:hyper_experience', 10),
        ['minecraft:glow_ink_sac', '#forge:gems/lapis', Fluid.of('create_enchantment_industry:experience', 100)]
    )

    //BSARecipes
    event.remove({id: 'bsa:crafting/ceramic/unfired_decorated_pot'})

    //SNSRecipes
    event.recipes.kubejs.shapeless('sns:leather_strip', ['magistuarmory:leather_strip'])

    //AlekishipsRecipes
    event.remove({id: 'alekiships:crafting/cannon'})
    event.remove({id: 'alekiships:crafting/anchor'})

    //AntiqueLegacyRecipes
    event.recipes.kubejs.shapeless('antiquelegacy:fur_cloak_decoration', ['tfc:large_raw_hide', '#forge:string'])

    //BeneathRecipes
    event.recipes.create.milling(
        'minecraft:slime_ball',
        'beneath:raw_slime'
    ).processingTime(200).id('twt:milling/slime')

}