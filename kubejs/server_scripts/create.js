"use strict";

/**
 * @param {Internal.RecipesEventJS} event
 */

const CreateRecipes = (event) => {
  //removal
  event.remove({ id: "create:crafting/materials/zinc_ingot_from_compacting" });
  event.remove({ id: "create:crafting/materials/brass_ingot_from_compacting" });
  event.remove({ id: "create:crafting/materials/zinc_nugget_from_decompacting" });
  event.remove({ id: "create:crafting/materials/brass_nugget_from_decompacting" });
  event.remove({ id: "create:crafting/materials/copper_ingot" });
  event.remove({ id: "create:crafting/materials/copper_nugget" });
  event.remove({ id: "minecraft:copper_block" });
  event.remove({ id: "minecraft:copper_ingot" });
  event.remove({ id: "minecraft:copper_ingot_from_waxed_copper_block" });
  event.remove({ id: "create:mixing/brass_ingot" });
  event.remove({ id: "create:crushing/leather_horse_armor" });
  event.remove({ id: "create:milling/saddle" });
  event.remove({ id: "create:crafting/kinetics/basin" });
  event.remove({ id: "create:mixing/andesite_alloy_from_zinc" });
  event.remove({ id: "create:mixing/andesite_alloy" });
  event.remove({ id: "create:mixing/chocolate" });
  event.remove({ id: "create:haunting/soul_campfire" });
  event.remove({ id: "create:crafting/materials/brass_block_from_compacting" });
  event.remove({ id: "create:crafting/materials/brass_ingot_from_decompacting" });
  event.remove({ id: "create:crafting/materials/zinc_ingot_from_decompacting" });
  event.remove({ id: "create:crafting/materials/zinc_block_from_compacting" });
  event.remove({ id: "create:item_application/brass_casing_from_wood_using_deployer" });
  event.remove({ id: "create:item_application/brass_casing_from_wood" });
  event.remove({ id: "create:crafting/appliances/netherite_backtank_from_netherite" });
  event.remove({ id: "create:crafting/appliances/netherite_backtank" });

  //replace
  event.replaceOutput({ mod: "create" }, "create:zinc_ingot", "tfc:metal/ingot/zinc");
  event.replaceOutput({ mod: "create" }, "create:brass_ingot", "tfc:metal/ingot/brass");
  event.replaceInput(
    { id: "create:crafting/materials/andesite_alloy" },
    "minecraft:andesite",
    "tfc:rock/raw/andesite",
  );
  event.replaceInput(
    { id: "create:crafting/materials/andesite_alloy_from_zinc" },
    "minecraft:andesite",
    "tfc:rock/raw/andesite",
  );
  event.replaceInput(
    { id: "create:crafting/kinetics/water_wheel" },
    "#minecraft:planks",
    "#tfc:lumber",
  );
  event.replaceInput(
    { id: "create:crafting/kinetics/large_water_wheel" },
    "#minecraft:planks",
    "#tfc:lumber",
  );
  event.replaceInput(
    { id: "create:crafting/kinetics/hand_crank" },
    "#minecraft:planks",
    "#tfc:lumber",
  );
  event.replaceInput(
    { id: "create:crafting/kinetics/nozzle" },
    "#minecraft:wool",
    "#tfc:high_quality_cloth",
  );

  //shapeless
  event.recipes.kubejs
    .shapeless(Item.of("create:tree_fertilizer", 2), [
      "#minecraft:small_flowers",
      "#minecraft:small_flowers",
      "#twt:corals",
      "minecraft:bone_meal",
    ])
    .id("twt:shapeless/tree_fertilizer");

  //shaped
  event.recipes.kubejs.shaped("create:basin", ["   ", "ACA", "AAA"], {
    A: "create:andesite_alloy",
    C: "tfc:crucible",
  });

  //Create Mixing
  event.recipes.create
    .mixing("create:andesite_alloy", ["#twt:create_component_nuggets", "tfc:rock/raw/andesite"])
    .heated()
    .id("twt:mixing/andesite_alloy");

  event.recipes.create
    .mixing(Fluid.of("create:chocolate", 1000), [
      "#forge:seeds/cocoa",
      "#tfc:sweetener",
      Fluid.of("minecraft:milk", 1000),
    ])
    .heated()
    .id("twt:mixing/chocolate");

  event.recipes.create
    .mixing(Fluid.of("create:honey", 250), "firmalife:raw_honey")
    .heated()
    .id("twt:mixing/honey");

  //Create Mechanical Saw
  event.recipes.create
    .cutting(Item.of("create:belt_connector", 2), "minecraft:leather")
    .processingTime(50)
    .id("twt:cutting/belt_connector_from_saw");

  //Create Emptying
  event.recipes.create
    .emptying([Fluid.of("create:honey", 250), "tfc:empty_jar"], "firmalife:jar/honey")
    .id("twt:emptying/honey");

  event.recipes.create
    .filling("firmalife:jar/honey", [Fluid.of("create:honey", 250), "tfc:empty_jar"])
    .id("twt:filling/honey");

  //Create Sequenced Assembly
  event.recipes.create
    .sequenced_assembly("create:precision_mechanism", "create:golden_sheet", [
      event.recipes.create.deploying("create:incomplete_precision_mechanism", [
        "create:incomplete_precision_mechanism",
        "create:cogwheel",
      ]),
      event.recipes.create.deploying("create:incomplete_precision_mechanism", [
        "create:incomplete_precision_mechanism",
        "create:large_cogwheel",
      ]),
      event.recipes.create.deploying("create:incomplete_precision_mechanism", [
        "create:incomplete_precision_mechanism",
        "magistuarmory:steel_nugget",
      ]),
      event.recipes.create.pressing(
        "create:incomplete_precision_mechanism",
        "create:incomplete_precision_mechanism",
      ),
    ])
    .transitionalItem("create:incomplete_precision_mechanism")
    .loops(1)
    .id("twt:sequenced/precision_mechanism");

  //TFC Forging
  event.recipes.tfc.welding(
    "create:netherite_backtank",
    "create:copper_backtank",
    "tfc:metal/chestplate/red_steel",
  );

  //TFC Knapping
  event.recipes.tfc
    .knapping(Item.of("create:belt_connector"), "tfc:leather", [
      "xxxxx",
      "xxxxx",
      "x   x",
      "xxxxx",
      "xxxxx",
    ])
    .id("twt:knapping/belt_connector_from_leather");
};

const CreateData = (event) => {
  //TFC Heat Definitions
  event.itemHeat("create:copper_backtank", 22.857, 648.0, 864.0);

  //Nutrition
  event.foodItem("create:builders_tea", (food) => {
    food.hunger(2);
    food.dairy(1);
    food.vegetables(0.5);
    food.water(30);
    food.saturation(1);
  });
  event.foodItem("create:bar_of_chocolate", (food) => {
    food.hunger(2);
    food.dairy(0.5);
    food.grain(0.5);
  });
};

const CreateItemTags = (event) => {
  event.add("create:sleepers", "#forge:smooth_stone_slab");
};
