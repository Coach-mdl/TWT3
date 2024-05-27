
//priority 5
//kubejs\startup_scripts\twt\items_add.js
console.log('skollerninnilooks items init')
const $sandpaper = Java.loadClass('com.simibubi.create.content.equipment.sandPaper.SandPaperItem')
StartupEvents.registry('item', event => {

    Platform.getInfo('kubejs').name = 'Together We Thrive' 
    
    event.create('blank_scroll', "basic").maxStackSize(16).texture("twt:item/blank_scroll")
    event.create('dull_gem', "basic").texture('twt:item/dull_gem').maxStackSize(1)
    event.create('unfinished_scroll', 'create:sequenced_assembly').texture("twt:item/blank_scroll")
    event.create('unfinished_warp_stone', 'create:sequenced_assembly')
    
})
/*ItemEvents.modification(event => {
    event.modify('tfc:sandpaper', item => {
        item.class(['com.simibubi.create.content.equipment.sandPaper.SandPaperItem'])
    })*/
        
//trying to change tfc sandpaper's class.
