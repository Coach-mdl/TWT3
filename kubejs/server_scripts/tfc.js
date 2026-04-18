"use strict";

const TFCRecipes = (event) => {
  //replace

  //Create Filling
  function milkconversion(input) {
    event.custom({
      type: "create:filling",
      ingredients: [
        {
          fluid: input,
          amount: 250,
        },
        {
          item: "minecraft:glass_bottle",
        },
      ],
      results: [
        {
          item: "farmersdelight:milk_bottle",
        },
      ],
    });
  }

  milkconversion("firmalife:coconut_milk");
  milkconversion("firmalife:yak_milk");
  milkconversion("firmalife:goat_milk");

  //Why did I never think of combining forEach's like this?
  $grains.forEach((grain) => {
    event.recipes.create
      .milling(Item.of(`tfc:food/${grain}_flour`, 2), `tfc:food/${grain}_grain`)
      .id(`twt:milling/${grain}_flour`);

    event.recipes.create
      .splashing(Item.of(`tfc:food/${grain}_dough`, 2), `tfc:food/${grain}_flour`)
      .id(`twt:splashing/${grain}_flatbread_dough`);

    event.recipes.create
      .mixing(`firmalife:food/${grain}_dough`, [
        `tfc:food/${grain}_flour`,
        "#tfc:sweetener",
        Fluid.of("firmalife:yeast_starter", 250),
      ])
      .id(`twt:mixing/${grain}_dough`);
  });

  //Create crushing
  //This is just a forEach.
  for (const ore of $ores) {
    event.recipes.create
      .crushing(Item.of(`tfc:powder/` + ore, 4), `tfc:ore/small_` + ore)
      .id(`twt:crushing/small_` + ore);
    event.recipes.create
      .crushing(Item.of(`tfc:powder/` + ore, 6), `tfc:ore/poor_` + ore)
      .id(`twt:crushing/poor_` + ore);
    event.recipes.create
      .crushing(Item.of(`tfc:powder/` + ore, 10), `tfc:ore/normal_` + ore)
      .id(`twt:crushing/normal_` + ore);
    event.recipes.create
      .crushing(Item.of(`tfc:powder/` + ore, 14), `tfc:ore/rich_` + ore)
      .id(`twt:crushing/rich_` + ore);
  }

  //Create sequenced_assembly
  event.recipes.create
    .sequenced_assembly("tfc:empty_jar_with_lid", "tfc:empty_jar", [
      event.recipes.create.deploying("tfc:empty_jar", ["tfc:empty_jar", "firmalife:beeswax"]),
      event.recipes.create.deploying("tfc:empty_jar", ["tfc:empty_jar", "farmersdelight:canvas"]),
      event.recipes.create.deploying("tfc:empty_jar", ["tfc:empty_jar", "#forge:string"]),
    ])
    .loops(1)
    .transitionalItem("tfc:empty_jar")
    .id("twt:sequenced_assembly/empty_jar_with_lid");

  event.recipes.create
    .sequenced_assembly([Item.of("tfc:empty_jar")], "#tfc:glass_batches_tier_2", [
      event.recipes.create
        .deploying("tfc:empty_jar", ["tfc:empty_jar", "tfc:empty_jar"])
        .keepHeldItem(),
      event.recipes.create
        .deploying("tfc:empty_jar", ["tfc:empty_jar", "tfc:blowpipe"])
        .keepHeldItem(),
      event.recipes.create
        .deploying("tfc:empty_jar", ["tfc:empty_jar", "tfc:jacks"])
        .keepHeldItem(),
      event.recipes.create
        .deploying("tfc:empty_jar", ["tfc:empty_jar", "tfc:wool_cloth"])
        .keepHeldItem(),
      event.recipes.create
        .deploying("tfc:empty_jar", ["tfc:empty_jar", "tfc:gem_saw"])
        .keepHeldItem(),
    ])
    .transitionalItem("tfc:empty_jar")
    .loops(1)
    .id("twt:sequenced_assembly/empty_jar");

  event.recipes.create
    .sequenced_assembly([Item.of("tfc:lens")], "tfc:silica_glass_batch", [
      event.recipes.create.deploying("tfc:lens", ["tfc:lens", "tfc:lens"]).keepHeldItem(),
      event.recipes.create.deploying("tfc:lens", ["tfc:lens", "tfc:blowpipe"]).keepHeldItem(),
      event.recipes.create.deploying("tfc:lens", ["tfc:lens", "tfc:blowpipe"]).keepHeldItem(),
      event.recipes.create.deploying("tfc:lens", ["tfc:lens", "tfc:wool_cloth"]).keepHeldItem(),
      event.recipes.create.deploying("tfc:lens", ["tfc:lens", "tfc:gem_saw"]).keepHeldItem(),
    ])
    .transitionalItem("tfc:lens")
    .loops(1)
    .id("twt:sequenced_assembly/lens");

  event.recipes.create
    .sequenced_assembly([Item.of("tfc:lamp_glass")], "#tfc:glass_batches", [
      event.recipes.create
        .deploying("tfc:lamp_glass", ["tfc:lamp_glass", "tfc:lamp_glass"])
        .keepHeldItem(),
      event.recipes.create
        .deploying("tfc:lamp_glass", ["tfc:lamp_glass", "tfc:blowpipe"])
        .keepHeldItem(),
      event.recipes.create
        .deploying("tfc:lamp_glass", ["tfc:lamp_glass", "tfc:jacks"])
        .keepHeldItem(),
      event.recipes.create
        .deploying("tfc:lamp_glass", ["tfc:lamp_glass", "tfc:paddle"])
        .keepHeldItem(),
      event.recipes.create
        .deploying("tfc:lamp_glass", ["tfc:lamp_glass", "tfc:blowpipe"])
        .keepHeldItem(),
      event.recipes.create
        .deploying("tfc:lamp_glass", ["tfc:lamp_glass", "tfc:gem_saw"])
        .keepHeldItem(),
    ])
    .transitionalItem("tfc:lamp_glass")
    .loops(1)
    .id("twt:sequenced_assembly/lamp_glass");
};

const TFCData = (event) => {
  //Heat Definitions
  event.itemHeat("tfc:metal/bucket/blue_steel", 2.0, 1000, 1200);
  event.itemHeat("tfc:metal/bucket/red_steel", 2.0, 1000, 1200);

  $ores.forEach((ore) => {
    event.itemHeat(`tfc:powder/${ore}`, 0.8, null, null);
  });
};

const TFCItemTags = (event) => {
  event.add("tfc:hammers", "magistuarmory:blacksmith_hammer");
  event.add("tfc:saplings", [
    "tfc:wood/sapling/willow",
    "firmalife:plant/cocoa_sapling",
    "firmalife:plant/fig_sapling",
    "tfc:plant/cherry_sapling",
    "tfc:plant/green_apple_sapling",
    "tfc:plant/lemon_sapling",
    "tfc:plant/olive_sapling",
    "tfc:plant/orange_sapling",
    "tfc:plant/peach_sapling",
    "tfc:plant/plum_sapling",
    "tfc:plant/red_apple_sapling",
    "tfc:plant/banana_sapling",
    "tfc:wood/sapling/acacia",
    "tfc:wood/sapling/ash",
    "tfc:wood/sapling/aspen",
    "tfc:wood/sapling/birch",
    "tfc:wood/sapling/blackwood",
    "tfc:wood/sapling/chestnut",
    "tfc:wood/sapling/douglas_fir",
    "tfc:wood/sapling/kapok",
    "tfc:wood/sapling/maple",
    "tfc:wood/sapling/oak",
    "tfc:wood/sapling/pine",
    "tfc:wood/sapling/rosewood",
    "tfc:wood/sapling/sequoia",
    "tfc:wood/sapling/spruce",
    "tfc:wood/sapling/sycamore",
    "tfc:wood/sapling/white_cedar",
  ]);
  event.add("tfc:compost_browns_low", "farmersdelight:tree_bark");
};
