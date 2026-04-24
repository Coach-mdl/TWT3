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

  //Create crushing/milling
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
  $rock.forEach((rock) => {
    event.recipes.create
      .milling(`tfc:rock/gravel/${rock}`, `tfc:rock/cobble/${rock}`)
      .processingTime(400)
      .id(`twt:crushing/${rock}_gravel`);

    event.recipes.vintageimprovements
      .vibrating([Item.of(`rnr:gravel_fill/${rock}`, 8), "minecraft:flint"], `tfc:rock/gravel/${rock}`)
      .processingTime(100)
      .id(`twt:vibrating/${rock}_gravel`);
  });

  const SAND_ROCKS = {
    brown: ["claystone"],
    white: ["diorite", "chalk", "marble"],
    black: ["gabbro", "shale", "dolomite", "basalt", "andesite", "phyllite", "dacite"],
    red: ["chert"],
    yellow: ["limestone", "conglomerate", "slate", "rhyolite", "gneiss"],
    green: ["schist"],
    pink: ["granite", "quartzite"],
  };
  Object.entries(SAND_ROCKS).forEach(([sand, rocks]) => {
    rocks.forEach((rock) => {
      event.recipes.create
        .milling(
          [
            "tfc:sand/" + sand,
            Item.of("minecraft:clay_ball").withChance(0.5),
            Item.of("minecraft:flint").withChance(0.3),
          ],
          Item.of("tfc:rock/gravel/" + rock),
        )
        .processingTime(250)
        .id("twt:milling/" + sand + "_sand_from_" + rock);
    });
  });

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
      event.recipes.create.deploying("tfc:empty_jar", ["tfc:empty_jar", "tfc:empty_jar"]).keepHeldItem(),
      event.recipes.create.deploying("tfc:empty_jar", ["tfc:empty_jar", "tfc:blowpipe"]).keepHeldItem(),
      event.recipes.create.deploying("tfc:empty_jar", ["tfc:empty_jar", "tfc:jacks"]).keepHeldItem(),
      event.recipes.create.deploying("tfc:empty_jar", ["tfc:empty_jar", "tfc:wool_cloth"]).keepHeldItem(),
      event.recipes.create.deploying("tfc:empty_jar", ["tfc:empty_jar", "tfc:gem_saw"]).keepHeldItem(),
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
      event.recipes.create.deploying("tfc:lamp_glass", ["tfc:lamp_glass", "tfc:lamp_glass"]).keepHeldItem(),
      event.recipes.create.deploying("tfc:lamp_glass", ["tfc:lamp_glass", "tfc:blowpipe"]).keepHeldItem(),
      event.recipes.create.deploying("tfc:lamp_glass", ["tfc:lamp_glass", "tfc:jacks"]).keepHeldItem(),
      event.recipes.create.deploying("tfc:lamp_glass", ["tfc:lamp_glass", "tfc:paddle"]).keepHeldItem(),
      event.recipes.create.deploying("tfc:lamp_glass", ["tfc:lamp_glass", "tfc:blowpipe"]).keepHeldItem(),
      event.recipes.create.deploying("tfc:lamp_glass", ["tfc:lamp_glass", "tfc:gem_saw"]).keepHeldItem(),
    ])
    .transitionalItem("tfc:lamp_glass")
    .loops(1)
    .id("twt:sequenced_assembly/lamp_glass");

  //Heating
  event.recipes.tfc
    .heating("tfc:steel_pipe", 1540)
    .resultFluid(Fluid.of("tfc:metal/steel", 25))
    .id("twt:heating/steel_pipe");
  event.recipes.tfc
    .heating("tfc:brass_mechanisms", 930)
    .resultFluid(Fluid.of("tfc:metal/brass", 50))
    .id("twt:heating/brass_mechanisms");

  //lathe
  event.recipes.vintageimprovements
    .turning(Item.of("firmalife:copper_pipe", 8), "tfc:metal/double_ingot/copper")
    .processingTime(200)
    .id("twt:turning/copper_pipe");
  event.recipes.vintageimprovements
    .turning(Item.of("tfc:steel_pipe", 8), "tfc:metal/double_ingot/steel")
    .processingTime(200)
    .id("twt:turning/steel_pipe");

  //laser_cutting
  event.recipes.vintageimprovements
    .laser_cutting(Item.of("tfc:brass_mechanisms", 8), "tfc:metal/double_sheet/brass")
    .energyCost(4000)
    .maxChargeRate(50)
    .id("twt:laser_cutting/brass_mechanisms_8x");
  event.recipes.vintageimprovements
    .laser_cutting(Item.of("tfc:brass_mechanisms", 4), "tfc:metal/sheet/brass")
    .energyCost(4000)
    .maxChargeRate(50)
    .id("twt:laser_cutting/brass_mechanisms_4x");
  event.recipes.vintageimprovements
    .laser_cutting(Item.of("tfc:brass_mechanisms", 2), "create:brass_sheet")
    .energyCost(2000)
    .maxChargeRate(50)
    .id("twt:laser_cutting/brass_mechanisms_2x");
  event.recipes.vintageimprovements
    .laser_cutting(Item.of("tfc:wrought_iron_grill"), "tfc:metal/double_sheet/wrought_iron")
    .energyCost(8000)
    .maxChargeRate(50)
    .id("twt:laser_cutting/wrought_iron_grill");

  //forEach: turning/laser_cutting/coiling
  $toolmetals.forEach((metal) => {
    event.recipes.vintageimprovements
      .turning(`tfc:metal/unfinished_lamp/${metal}`, `tfc:metal/ingot/${metal}`)
      .processingTime(100)
      .id(`twt:turning/unfinished_${metal}_lamp`);

    event.recipes.vintageimprovements
      .laser_cutting(Item.of(`tfc:metal/bars/${metal}`, 8), `tfc:metal/sheet/${metal}`)
      .energyCost(4000)
      .maxChargeRate(50)
      .id(`twt:laser_cutting/${metal}_bars_8x`);
    event.recipes.vintageimprovements
      .laser_cutting(Item.of(`tfc:metal/bars/${metal}`, 8), `tfc:metal/double_sheet/${metal}`)
      .energyCost(8000)
      .maxChargeRate(50)
      .id(`twt:laser_cutting/${metal}_bars_16x`);
  });
  $tfcMetals.forEach((metal) => {
    event.recipes.vintageimprovements
      .coiling(Item.of(`tfc:metal/rod/${metal}`, 2), `tfc:metal/ingot/${metal}`)
      .processingTime(200)
      .springColor("9e9e9e")
      .id(`twt:coiling/${metal}_rod`);
  });

  //vibrating (Have mercy on me)
  const ORE_DEPOSIT_DATA = {
    native_copper: {
      ore_out: "tfc:ore/small_native_copper",
      gem_out: "tfc:ore/pyrite",
    },
    native_silver: {
      ore_out: "tfc:ore/small_native_silver",
      gem_out: "tfc:ore/opal",
    },
    native_gold: {
      ore_out: "tfc:ore/small_native_gold",
      gem_out: "tfc:ore/lapis_lazuli",
    },
    cassiterite: {
      ore_out: "tfc:ore/small_cassiterite",
      gem_out: "tfc:ore/topaz",
    },
  };
  const ORE_ROCKS = {
    native_copper: ["rhyolite", "andesite", "basalt", "dacite"],
    native_gold: ["rhyolite", "andesite", "basalt", "dacite", "granite", "diorite", "gabbro"],
    native_silver: ["granite", "diorite"],
    cassiterite: ["granite", "diorite", "gabbro"],
  };
  Object.entries(ORE_ROCKS).forEach(([ore, rocks]) => {
    let data = ORE_DEPOSIT_DATA[ore];
    rocks.forEach((rock) => {
      event.recipes.vintageimprovements
        .vibrating(
          [
            Item.of(data.ore_out).withChance(0.4),
            Item.of("tfc:rock/loose/" + rock).withChance(0.65),
            Item.of(data.gem_out).withChance(0.15),
          ],
          "tfc:deposit/" + ore + "/" + rock,
        )
        .processingTime(300)
        .id("twt:vibrating/" + rock + "_" + ore + "_deposit");
    });
  });
};

const TFCData = (event) => {
  //Heat Definitions
  event.itemHeat("tfc:metal/bucket/blue_steel", 2.0, 1000, 1200);
  event.itemHeat("tfc:metal/bucket/red_steel", 2.0, 1000, 1200);
  event.itemHeat("tfc:steel_pipe", 0.171, null, null);
  event.itemHeat("tfc:brass_mechanisms", 1.429, 558.0, 744.0);

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
