//No clue if this will work. If you can find a better way, go for it.
//priority 1
//@ts-check
//startup

console.log( 'Skoller custom gloves...')

const $GlovesItem = Java.loadClass("com.aetherteam.aether.item.accessories.gloves.GlovesItem")
const $ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')

StartupEvents.registry('item', event => { 

    function registerGloves (id, properties) {
        event.createCustom(id, () => 
            new $GlovesItem("netherite", 2.3, 'item.armor.equip_netherite', Java.class.util.function.Supplier, Internal.Item$Properties.apply(properties, null)))
    }
    registerGloves('red_steel_gloves', red => red.stacksTo(1))

}) 
    

 

