//pritority 10 
//kubejs\server_scripts\waystones\recipes.js
ServerEvents.recipes(event => {

    console.log('skollerninnilooks recipes init')
 
    const activescrolls = [
      'return_scroll',
      'warp_scroll',
      'bound_scroll'
    ]
    const $dyes = [
      'white',
      'gray',
      'light_gray',
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'lime',
      'green',
      'cyan',
      'light_blue',
      'blue',
      'purple',
      'magenta',
      'pink'
    ]
//Removes ALL base waystones recipes exluding the attuned shard recipes which is required for the warp plates to work properly.  

     event.remove({not: {output: 'waystones:attuned_shard'}, mod: 'waystones'}) 
         
     //Adds new recipes. Waystones will be available at steel as well as warp stones and it's counterparts. Scrolls will require access to a few create things.
     
   
     event.recipes.tfc.welding('minecraft:ender_pearl','firmalife:metal/sheet/chromium','tfc:gem/amethyst')

     event.recipes.tfc.quern({
      ingredient: {item: 'minecraft:ender_pearl'},
      result: {item: 'waystones:warp_dust', count: 4}
    }) 
    
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
   
    event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.kubejs.shapeless(
         `kubejs:dull_gem`, [ 
         `minecraft:obsidian`,
         `#tfc:hammers`, 	
      ]))
    // Scroll cleaning
      activescrolls.forEach((scroll) => {
      
      event.custom({
      type: 'tfc:barrel_instant',
      input_item: {ingredient: {item: `waystones:${scroll}`}},
      input_fluid: {ingredient: 'minecraft:water', amount: 100},
      output_item: {item: 'kubejs:blank_scroll'}
    })
  })
// Sequenced recipes for various waystones items.
  event.recipes.createSequencedAssembly([
    'waystones:return_scroll', 
], 'kubejs:blank_scroll', [
    event.recipes.createDeploying('kubejs:unfinished_scroll', ['kubejs:unfinished_scroll', 'minecraft:gold_nugget']),
    event.recipes.createFilling('kubejs:unfinished_scroll', ['kubejs:unfinished_scroll', Fluid.of('kubejs:unstable_warp_fluid', 200)]),
    event.recipes.createDeploying('kubejs:unfinished_scroll', ['kubejs:unfinished_scroll', 'minecraft:purple_dye']),
]).transitionalItem('kubejs:unfinished_scroll').loops(1)

event.recipes.createSequencedAssembly([
  'waystones:bound_scroll', 
], 'kubejs:blank_scroll', [
  event.recipes.createDeploying('kubejs:unfinished_scroll', ['kubejs:unfinished_scroll', 'tfc:metal/rod/gold']),
  event.recipes.createFilling('kubejs:unfinished_scroll', ['kubejs:unfinished_scroll', Fluid.of('kubejs:unstable_warp_fluid', 200)]),
  event.recipes.createFilling('kubejs:unfinished_scroll', ['kubejs:unfinished_scroll', Fluid.of('tfc:purple_dye', 200)])
]).transitionalItem('kubejs:unfinished_scroll').loops(1)

event.recipes.createSequencedAssembly([
  'waystones:warp_scroll', 
], 'kubejs:blank_scroll', [
  event.recipes.createFilling('kubejs:unfinished_scroll', ['kubejs:unfinished_scroll', Fluid.of('tfc:metal/gold', 75)]),
  event.recipes.createFilling('kubejs:unfinished_scroll', ['kubejs:unfinished_scroll', Fluid.of('kubejs:unstable_warp_fluid', 400)]),
  event.recipes.createFilling('kubejs:unfinished_scroll', ['kubejs:unfinished_scroll', Fluid.of('tfc:purple_dye', 400)]),
  event.recipes.createDeploying('kubejs:unfinished_scroll', ['kubejs:unfinished_scroll', 'tfc:metal/rod/cast_iron'])
]).transitionalItem('kubejs:unfinished_scroll').loops(1)     

event.recipes.createSequencedAssembly([
  'waystones:warp_stone', 
], 'kubejs:dull_gem', [
  event.recipes.createFilling('kubejs:unfinished_warp_stone', ['kubejs:unfinished_warp_stone', Fluid.of('kubejs:unstable_warp_fluid', 1000)]),
  event.recipes.createDeploying('kubejs:unfinished_warp_stone', ['kubejs:unfinished_warp_stone', 'minecraft:ender_pearl']),
  event.recipes.createFilling('kubejs:unfinished_warp_stone', ['kubejs:unfinished_warp_stone', Fluid.of('kubejs:molten_obsidian', 1000)]),
  event.recipes.createPressing('kubejs:unfinished_warp_stone', ['kubejs:unfinished_warp_stone'])
]).transitionalItem('kubejs:unfinished_warp_stone').loops(1)

event.recipes.createSequencedAssembly([
  '2x waystones:warp_plate', 
], '#minecraft:stone_pressure_plates', [
  event.recipes.createDeploying('kubejs:unfinished_warp_plate', ['kubejs:unfinished_warp_plate', 'kubejs:dull_gem']),
  event.recipes.createFilling('kubejs:unfinished_warp_plate', ['kubejs:unfinished_warp_plate', Fluid.of('kubejs:unstable_warp_fluid', 200)]),
  event.recipes.createDeploying('kubejs:unfinished_warp_plate', ['kubejs:unfinished_warp_plate', '#minecraft:stone_pressure_plates']),
  event.recipes.createCutting('kubejs:unfinished_warp_plate', ['kubejs:unfinished_warp_plate'])
]).transitionalItem('kubejs:unfinished_warp_plate').loops(1)

event.recipes.createSequencedAssembly([
  'waystones:portstone', 
], '#forge:stone_bricks', [
  event.recipes.createCutting('kubejs:unfinished_portstone', ['kubejs:unfinished_portstone']),
  event.recipes.createCutting('kubejs:unfinished_portstone', ['kubejs:unfinished_portstone']),
  event.recipes.createCutting('kubejs:unfinished_portstone', ['kubejs:unfinished_portstone']),
  event.recipes.createDeploying('kubejs:unfinished_portstone', ['kubejs:unfinished_portstone', 'waystones:warp_stone']),
]).transitionalItem('kubejs:unfinished_portstone').loops(1)

event.recipes.createSequencedAssembly([
  'waystones:sharestone', 
], '#forge:stone_bricks', [
  event.recipes.createDeploying('kubejs:unfinished_sharestone', ['kubejs:unfinished_sharestone', 'minecraft:obsidian']),
  event.recipes.createCutting('kubejs:unfinished_sharestone', ['kubejs:unfinished_sharestone']),
  event.recipes.createDeploying('kubejs:unfinished_sharestone', ['kubejs:unfinished_sharestone', 'waystones:warp_stone']),
  event.recipes.createDeploying('kubejs:unfinished_sharestone', ['kubejs:unfinished_sharestone', '#forge:stone_bricks']),
  event.recipes.createPressing('kubejs:unfinished_sharestone', ['kubejs:unfinished_sharestone'])
]).transitionalItem('kubejs:unfinished_sharestone').loops(1)

event.recipes.createSequencedAssembly([
  'waystones:waystone',
], '#forge:stone_bricks', [
  event.recipes.createDeploying('kubejs:unfinished_waystone', ['kubejs:unfinished_waystone', 'minecraft:obsidian']),
  event.recipes.createCutting('kubejs:unfinished_waystone', ['kubejs:unfinished_waystone']),
  event.recipes.createFilling('kubejs:unfinished_waystone', ['kubejs:unfinished_waystone', Fluid.of('kubejs:unstable_warp_fluid', 100)]),
  event.recipes.createDeploying('kubejs:unfinished_waystone', ['kubejs:unfinished_waystone', 'waystones:warp_stone']),
  event.recipes.createDeploying('kubejs:unfinished_waystone', ['kubejs:unfinished_waystone', '#forge:stone_bricks']),
  event.recipes.createCutting('kubejs:unfinished_waystone', ['kubejs:unfinished_waystone']),
  event.recipes.createPressing('kubejs:unfinished_waystone', ['kubejs:unfinished_waystone'])
   ]).transitionalItem('kubejs:unfinished_waystone').loops(1)

event.recipes.createSequencedAssembly([
  'waystones:sandy_waystone',
], '#forge:sandstone', [
  event.recipes.createDeploying('kubejs:unfinished_sandy_waystone', ['kubejs:unfinished_sandy_waystone', 'minecraft:obsidian']),
  event.recipes.createCutting('kubejs:unfinished_sandy_waystone', ['kubejs:unfinished_sandy_waystone']),
  event.recipes.createFilling('kubejs:unfinished_sandy_waystone', ['kubejs:unfinished_sandy_waystone', Fluid.of('kubejs:unstable_warp_fluid', 100)]),
  event.recipes.createDeploying('kubejs:unfinished_sandy_waystone', ['kubejs:unfinished_sandy_waystone', 'waystones:warp_stone']),
  event.recipes.createDeploying('kubejs:unfinished_sandy_waystone', ['kubejs:unfinished_sandy_waystone', '#forge:sandstone']),
  event.recipes.createCutting('kubejs:unfinished_sandy_waystone', ['kubejs:unfinished_sandy_waystone']),
  event.recipes.createPressing('kubejs:unfinished_sandy_waystone', ['kubejs:unfinished_sandy_waystone'])
   ]).transitionalItem('kubejs:unfinished_sandy_waystone').loops(1)
   
event.recipes.createSequencedAssembly([
  'waystones:mossy_waystone',
], '#forge:cobblestone', [
  event.recipes.createDeploying('kubejs:unfinished_mossy_waystone', ['kubejs:unfinished_mossy_waystone', 'minecraft:obsidian']),
  event.recipes.createCutting('kubejs:unfinished_mossy_waystone', ['kubejs:unfinished_mossy_waystone']),
  event.recipes.createFilling('kubejs:unfinished_mossy_waystone', ['kubejs:unfinished_mossy_waystone', Fluid.of('kubejs:unstable_warp_fluid', 100)]),
  event.recipes.createDeploying('kubejs:unfinished_mossy_waystone', ['kubejs:unfinished_mossy_waystone', 'waystones:warp_stone']),
  event.recipes.createDeploying('kubejs:unfinished_mossy_waystone', ['kubejs:unfinished_mossy_waystone', '#forge:cobblestone']),
  event.recipes.createCutting('kubejs:unfinished_mossy_waystone', ['kubejs:unfinished_mossy_waystone']),
  event.recipes.createPressing('kubejs:unfinished_mossy_waystone', ['kubejs:unfinished_mossy_waystone'])
   ]).transitionalItem('kubejs:unfinished_mossy_waystone').loops(1)   
// Sharestone dyeing
   $dyes.forEach((dye) => {
   event.custom({
    type: "tfc:barrel_sealed",
       input_item: {
        ingredient: {
          item: 'waystones:sharestone'
        }
       },
    input_fluid: {
      ingredient: `tfc:${dye}_dye`,
      amount: 25
    },
    output_item: {
      item: `waystones:${dye}_sharestone`
    },
    duration: 1200   
   }).id(`together_we_thrive:sharestone_dyeing_${dye}`)
   })
// Sharestone un-dyeing
   $dyes.forEach((dye) => {
    event.custom({
      type: 'tfc:barrel_instant',
      input_item: {ingredient: {item: `waystones:${dye}_sharestone`}},
      input_fluid: {ingredient: 'minecraft:water', amount: 100},
      output_item: {item: 'waystones:sharestone'}
    })
   })
})

/* If any recipes are overkill, let me know, or tweak them to your hearts content. While the greater content is locked behind steel, 
some clever players might find a way around it. As long as it's not completely busted, it's good. */ 

