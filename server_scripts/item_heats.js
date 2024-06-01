//
//kubejs\server_scripts\item_heats.js

//Use for standalone heating recipes
   TFCEvents.data(event => {
    event.itemHeat("tfc:gem/amethyst", 2.500, 1080, 1280)
    event.itemHeat("create:powdered_obsidian", 2.500, 3000, 3000)
    event.itemHeat("waystones:warp_dust", 1.500, 3000, 3000)

    nuggetIngot.forEach((nuggy) => {
        event.itemHeat(`${nuggy}_nugget`, 1.000, 3000, 3000)
    })
})

 ServerEvents.recipes(event => {
//Use this for the standalone recipes. Item and fluid outputs are nullable.
    event.recipes.tfc.heating('tfc:gem/amethyst', 1650+75)
    // @ts-ignore
    event.custom(
        {   type: 'tfc:heating',
            ingredient: {item: 'create:powdered_obsidian'},
            result_fluid: {fluid: 'kubejs:molten_obsidian',
                amount: 100},
                temperature: 1300}
    )
    // @ts-ignore
    event.custom(
        {   type: 'tfc:heating',
            ingredient: {item: 'waystones:warp_dust'},
            result_fluid: {fluid: 'kubejs:unstable_warp_fluid',
                amount: 500},
                temperature: 1300}

                
    )
    let nuggetmelting = (output, nuggetmetal, temperature) => {
        event.custom(
            {   type: 'tfc:heating',
                ingredient: {item: `${nuggetmetal}`},
                result_fluid: {fluid: `${output}`,
                    amount: 10},
                    temperature: `${temperature}`}
        )}
        nuggetmelting('tfc:metal/gold', 'minecraft:gold_nugget', 1060)
        nuggetmelting('tfc:metal/cast_iron', 'minecraft:iron_nugget', 1535)
        nuggetmelting('tfc:metal/copper', 'create:copper_nugget', 1080)
        nuggetmelting('tfc:metal/zinc', 'create:zinc_nugget', 420)
        nuggetmelting('tfc:metal/brass', 'create:brass_nugget', 930)
 }) 




