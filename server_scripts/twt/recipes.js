//@ts-check

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

ServerEvents.recipes(event => {
 creategempolishing.forEach((cutgem) => {
  // @ts-ignore Make sure to use `back quotes` when using a ${}. 'Single' or "double" quotes will give a KJS error.
  event.remove({id: `tfc:${cutgem}_cut`})
  // @ts-ignore
  event.remove({input: 'tfmg:mesh_concrete'})
})
  event.replaceInput({input: 'minecraft:gold_ingot'}, 'minecraft:gold_ingot', '#forge:ingots/gold')
 // @ts-ignore
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
    // @ts-ignore
    event.recipes.create.sandpaper_polishing(`tfc:gem/${cutgem}`, `tfc:ore/${cutgem}`)
  })
})