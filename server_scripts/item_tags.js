//@ts-check
//kubejs\server_scripts\item_tags.js
ServerEvents.tags('item', event => {
    
    event.add('create:sandpaper', 'tfc:sandpaper')

    // @ts-ignore
    event.add('twt:raw_gems', [ 
    'tfc:ore/diamond',
    'tfc:ore/amethyst',
    'tfc:ore/emerald',
    'tfc:ore/lapis_lazuli',
    'tfc:ore/opal',
    'tfc:ore/pyrite',
    'tfc:ore/ruby',
    'tfc:ore/sapphire',
    'tfc:ore/topaz'])
})