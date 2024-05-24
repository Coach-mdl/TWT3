//pritority 10
//@ts-check
//kubejs\server_scripts\waystones\recipes.js
ServerEvents.recipes(event => {

    console.log('skollerninnilooks init')
    
//Removes some pre-existing recipes.

     event.remove({mod: 'waystones'}) 
         
     //Adds new recipes. Waystones will be available at steel as well as warp stones and it's counterparts. Warp scrolls are a different matter.
     
     // @ts-ignore
     event.recipes.tfc.welding('minecraft:ender_pearl','firmalife:metal/sheet/chromium','tfc:gem/amethyst')
     // @ts-ignore
     event.recipes.tfc.quern({
      ingredient: {item: 'minecraft:ender_pearl'},
      result: {item: 'waystones:warp_dust', count: 4}
    })
     
     // @ts-ignore
     event.recipes.kubejs.shaped('twt:blank_scroll',
     [
      ' W ',
      'WPW',
      ' W '
     ],
     {
       W: 'waystones:warp_dust',
       P: '#forge:paper'
     })
  
  })