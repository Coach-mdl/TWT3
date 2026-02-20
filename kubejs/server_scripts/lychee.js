

const LycheeRecipes = (event) => {

    //Sphalhammer
    event.recipes.lychee.block_interacting(
        Item.of('magistuarmory:tin_heavywarhammer', 1)
        .withNBT("{Damage:200,display:{Name:'{\"bold\":true,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false,\"color\":\"#523d42\",\"text\":\"Unblessed Sphalhammer\"}'}}"),
        '#tfc:ores/zinc/poor'
    ).post([
        Post.damage_item(1000),
        Post.place('supplementaries:ash'),
        Post.execute('execute at @p run playsound minecraft:item.trident.thunder block @a'),
        Post.explode(false, 'none'),
        Post.drop_item(Item.of('magistuarmory:gold_heavywarhammer', 1).enchant('tombstone:sanctified', 1).withNBT("{Damage:0,display:{Name:'{\"bold\":true,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false,\"color\":\"#CC8899\",\"text\":\"Sphalhammer\"}'}}"))
    ]).id('twt:block_interacting/sphalhammer')

    //Bedrock to Oil Deposit
    event.recipes.lychee.block_interacting(
        Item.of('magistuarmory:gold_heavywarhammer')
         .enchant('tombstone:sanctified', 1)
         .withNBT("{Damage:0,display:{Name:'{\"bold\":true,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false,\"color\":\"#CC8899\",\"text\":\"Sphalhammer\"}'}}"),
        'minecraft:bedrock'
    ).post([
        Post.explode(false, 'none'),
        Post.hurt(4),
        Post.damage_item(1000),
        Post.execute('execute on target run fill ~ ~ ~ ~ ~ ~ minecraft:air'),
        Post.place('tfmg:oil_deposit'),
        Post.execute('execute at @p run playsound supplementaries:item.aeugh block @a')
    ]).id('twt:block_interacting/bedrock_to_oil_deposit')

    //Winter Food
    event.recipes.lychee.block_interacting(
        '#minecraft:shovels',
        'minecraft:snow'
    ).post([
        Post.damage_item(1),
        Post.place('minecraft:air'),
        Post.execute('execute at @p run playsound minecraft:block.snow.break block @a'),
        Post.execute('execute on target as @p run summon minecraft:lightning_bolt ~ ~ ~'),
        Post.drop_item('minecraft:snowball'),
        Post.drop_item('tfc:food/cattail_root').withChance(0.03),
        Post.drop_item('tfc:food/green_bell_pepper').withChance(0.03),
        Post.drop_item('tfc:food/wintergreen_berry').withChance(0.03)
    ]).id('twt:block_interacting/winter_food')
}