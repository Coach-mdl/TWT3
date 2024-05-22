//@ts-check

   TFCEvents.data(event => {
    event.itemHeat("tfc:gem/amethyst", 2.500, 1080, 1280)
})

 ServerEvents.recipes(heating => {
//Yes, this is the actual melting point of amethyst...
    heating.recipes.tfc.heating('tfc:gem/amethyst', 1650+75)

 }) 





