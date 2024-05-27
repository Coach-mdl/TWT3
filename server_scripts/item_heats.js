//@ts-check
//kubejs\server_scripts\item_heats.js

//Use for standalone heating recipes
   TFCEvents.data(event => {
    event.itemHeat("tfc:gem/amethyst", 2.500, 1080, 1280)
    event.itemHeat("create:powdered_obsidian", 2.500, 3000, 3000)
    event.itemHeat("waystones:warp_dust", 1.500, 3000, 3000)
})

 ServerEvents.recipes(heating => {
//Use this for the standalone recipes. Item and fluid outputs are nullable.
    heating.recipes.tfc.heating('tfc:gem/amethyst', 1650+75)
    // @ts-ignore
    heating.custom(
        {   type: 'tfc:heating',
            ingredient: {item: 'create:powdered_obsidian'},
            result_fluid: {fluid: 'kubejs:molten_obsidian',
                amount: 100},
                temperature: 1300}
    )
    // @ts-ignore
    heating.custom(
        {   type: 'tfc:heating',
            ingredient: {item: 'waystones:warp_dust'},
            result_fluid: {fluid: 'kubejs:unstable_warp_fluid',
                amount: 500},
                temperature: 1300}
    )
    
 }) 




