//priority 5
//@ts-check
//kubejs\startup_scripts\twt\fluids_add.js

StartupEvents.registry('fluid', event => {

    event.create('twt:molten_obsidian').thickTexture(() => 0X450554).color(() => 0x450554).bucketColor(() => 0x450554).noBlock()
    event.create('twt:unstable_warp_fluid').thinTexture(() => 0Xad1fcd).color(() => 0xad1fcd).bucketColor(() => 0xad1fcd).noBlock()
})

 