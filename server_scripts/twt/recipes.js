
const creategempolishing = [
  'diamond',
  'amethyst',
  'emerald',
  'lapis_lazuli',
  'opal',
  'pyrite',
  'ruby',
  'sapphire',
  'topaz',
  'kimberlite'
]
const nuggetIngot = [
  'minecraft:iron',
  'minecraft:gold',
  'create:zinc',
  'minecraft:copper',
  'create:brass'
]
ServerEvents.recipes(event => {
 
    event.remove({type: "minecraft:crafting_shapeless", output: '#forge:nuggets'})
    nuggetIngot.forEach((nuggy) => {
    event.remove({type: "minecraft:crafting_shaped", output: `${nuggy}_ingot`})
  })
  
 creategempolishing.forEach((cutgem) => {
  // Make sure to use `back quotes` when using a ${}. 'Single' or "double" quotes will give a KJS error.
  event.remove({id: `tfc:${cutgem}_cut`})
  event.remove({input: 'tfmg:mesh_concrete'})
})
  event.replaceInput({input: 'minecraft:gold_ingot'}, 'minecraft:gold_ingot', '#forge:ingots/gold')
  event.custom({
    type: 'lychee:item_burning',
    item_in: [{tag: 'tfc:can_be_lit_on_torch'}],
    post: {
      type: 'drop_item',
      item: 'tfc:torch',
      count: 2,
    }
  })
  creategempolishing.forEach((cutgem) => {
    event.recipes.create.sandpaper_polishing(`tfc:gem/${cutgem}`, `tfc:ore/${cutgem}`)
  })
   let nuggeting = (output, nuggetmetal) => {
    event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.kubejs.shapeless(
    `10x ${output}`, [ 
       `${nuggetmetal}`,
       `#tfc:chisels`, 	
   ])
    )}
    nuggeting('create:copper_nugget', '#forge:ingots/copper')
    nuggeting('create:zinc_nugget', '#forge:ingots/zinc')
    nuggeting('create:brass_nugget', '#forge:ingots/brass')
    nuggeting('minecraft:iron_nugget', '#forge:ingots/cast_iron')
    nuggeting('minecraft:gold_nugget', '#forge:ingots/gold')
    
})
