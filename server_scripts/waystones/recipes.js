//pritority 10 
//kubejs\server_scripts\waystones\recipes.js
ServerEvents.recipes(event => {
//@ts-check
    console.log('skollerninnilooks recipes init')
 
    const activescrolls = [
      'return_scroll',
      'warp_scroll',
      'bound_scroll'
    ]

//Removes some pre-existing recipes.

     event.remove({not: {output: 'waystones:attuned_shard'}, mod: 'waystones'}) 
         
     //Adds new recipes. Waystones will be available at steel as well as warp stones and it's counterparts. Warp scrolls will require access to a few create things.
     
     // @ts-ignore
     event.recipes.tfc.welding('minecraft:ender_pearl','firmalife:metal/sheet/chromium','tfc:gem/amethyst')
     // @ts-ignore
     event.recipes.tfc.quern({
      ingredient: {item: 'minecraft:ender_pearl'},
      result: {item: 'waystones:warp_dust', count: 4}
    }) 
     // @ts-ignore
     event.recipes.kubejs.shaped('kubejs:blank_scroll',
     [
      ' W ',
      'WPW',
      ' W '
     ],
     {
       W: 'waystones:warp_dust',
       P: '#forge:paper'
     })
    // @ts-igno
    event.custom({
      type: 'tfc:knapping',
      knapping_type: 'tfc:rock',
      outside_slot_reqired: false,
      pattern: [
      '  x  ',
      ' xxx ',
      'xxxxx',
      ' xxx ',
      '  x  '  ],
      result: {item: 'kubejs:dull_gem'},
      ingredient: {item: 'minecraft:obsidian'} 
    })
      activescrolls.forEach((scroll) => {
      // @ts-ignore
      event.custom({
      type: 'tfc:barrel_instant',
      input_item: {ingredient: {item: `waystones:${scroll}`}},
      input_fluid: {ingredient: 'minecraft:water', amount: 100},
      output_item: {item: 'kubejs:blank_scroll'}
    })
  })
  event.recipes.createSequencedAssembly([
    'waystones:return_scroll', 
], 'kubejs:blank_scroll', [
    event.recipes.createDeploying('kubejs:unfinished_scroll', ['kubejs:unfinished_scroll', 'minecraft:gold_nugget']),
    event.recipes.createFilling('kubejs:unfinished_scroll', ['kubejs:unfinished_scroll', Fluid.of('kubejs:unstable_warp_fluid', 200)]),
    event.recipes.createDeploying('kubejs:unfinished_scroll', ['kubejs:unfinished_scroll', 'minecraft:purple_dye']),
]).transitionalItem('kubejs:unfinished_scroll')

event.recipes.createSequencedAssembly([
  'waystones:bound_scroll', 
], 'kubejs:blank_scroll', [
  event.recipes.createDeploying('kubejs:unfinished_scroll', ['kubejs:unfinished_scroll', 'minecraft:gold_nugget']),
  event.recipes.createFilling('kubejs:unfinished_scroll', ['kubejs:unfinished_scroll', Fluid.of('kubejs:unstable_warp_fluid', 400)]),
  event.recipes.createDeploying('kubejs:unfinished_scroll', ['kubejs:unfinished_scroll', 'minecraft:purple_dye']),
]).transitionalItem('kubejs:unfinished_scroll')   
}) 
