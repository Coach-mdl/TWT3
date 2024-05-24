//@ts-check
//priority 5
//kubejs\startup_scripts\twt\items_add.js
StartupEvents.registry('item', event => {

    
    // @ts-ignore
    event.create('twt:blank_scroll', "basic").maxStackSize(16).texture("twt:item/blank_scroll")
    event.create('twt:dull_gem', "basic").texture('twt:item/dull_stone').maxStackSize(1)
    // @ts-ignore
    event.create('twt:unfinished_scroll', 'create:sequenced_assembly')
})

 