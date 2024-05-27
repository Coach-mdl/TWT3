//priority 5
//@ts-check
//kubejs\startup_scripts\twt\fluids_add.js
console.log('skollerninnilooks fluids init')
Platform.getInfo('kubejs').name = 'Together We Thrive'
StartupEvents.registry('fluid', event => {

    // @ts-ignore
    event.create('molten_obsidian').thickTexture(0X450554).color(0x450554).bucketColor(0x450554).noBlock()
    // @ts-ignore
    event.create('unstable_warp_fluid').thinTexture(0Xad1fcd).color(0xad1fcd).bucketColor(0xad1fcd).noBlock()
})

 