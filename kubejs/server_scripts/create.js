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

  event.remove({ id: /^create:crushing\/.*_horse_armor$/ });
  event.remove({ id: /^create:crushing\/.*_ore$/ });
  event.remove({ id: /^farmersdelight:integration\/create\/milling\/.*$/ });
  event.remove({ id: "create:crushing/gravel" });
  event.remove({ id: "create:milling/cobblestone" });
  event.remove({ id: "create:milling/granite" });
  event.remove({ id: "create:milling/wheat" });
  event.remove({ id: "create:milling/beetroot" });
  event.remove({ id: "create:milling/andesite" });
  event.remove({ id: "create:milling/compat/supplementaries/flax" });
  event.remove({ id: "create:milling/dandelion" });
  event.remove({ id: "create:milling/pitcher_plant" });
  event.remove({ id: "create:milling/poppy" });
  event.remove({ id: "create:milling/sea_pickle" });
  event.remove({ id: "create:milling/oxeye_daisy" });
  event.remove({ id: "create:milling/terracotta" });
  event.remove({ id: "create:milling/fern" });
  event.remove({ id: "create:milling/pink_tulip" });
  event.remove({ id: "create:milling/peony" });
  event.remove({ id: "create:milling/blue_orchid" });
  event.remove({ id: "create:milling/cornflower" });
  event.remove({ id: "create:milling/allium" });
  event.remove({ id: "create:milling/red_tulip" });
  event.remove({ id: "create:milling/cocoa_beans" });
  event.remove({ id: "create:milling/lily_of_the_valley" });
  event.remove({ id: "create:milling/azure_bluet" });
  event.remove({ id: "create:milling/rose_bush" });
  event.remove({ id: "create:milling/large_fern" });
  event.remove({ id: "create:milling/tall_grass" });
  event.remove({ id: "create:milling/orange_tulip" });
  event.remove({ id: "create:milling/white_tulip" });
  event.remove({ id: "create:milling/grass" });
  event.remove({ id: "create:milling/dripstone_block" });
  event.remove({ id: "create:milling/sandstone" });
  event.remove({ id: "create:milling/sugar_cane" });
  event.remove({ id: "create:milling/sunflower" });
  event.remove({ id: "create:milling/torchflower" });
  event.remove({ id: "create:milling/cactus" });
  event.remove({ id: "create:milling/lilac" });
  event.remove({ id: "create:milling/pink_petals" });

  event.remove({ id: "create:haunting/soul_torch" });

  event.remove({ id: "create:compacting/granite_from_flint" });
  event.remove({ id: "create:compacting/andesite_from_flint" });
  event.remove({ id: "create:compacting/diorite_from_flint" });

  event.remove({ id: "create:pressing/sugar_cane" });

  event.remove({ id: "create:crafting/appliances/netherite_backtank_from_netherite" });
  event.remove({ id: "create:crafting/appliances/netherite_backtank" });
  event.remove({ id: "create:crafting/appliances/netherite_diving_boots_from_netherite" });
  event.remove({ id: "create:crafting/appliances/netherite_diving_boots" });
  event.remove({ id: "create:crafting/appliances/netherite_diving_helmet" });
  event.remove({ id: "create:crafting/appliances/netherite_diving_helmet_from_netherite" });

  event.remove({ id: "create:crafting/kinetics/steam_engine" });
  event.remove({ id: "create:crafting/kinetics/smart_chute" });
  event.remove({ id: "create:crafting/kinetics/elevator_pulley" });
  event.remove({ id: "create:crafting/kinetics/mechanical_crafter" });
  event.remove({ id: "create:crafting/kinetics/rotation_speed_controller" });
  event.remove({ id: "create:crafting/kinetics/mechanical_arm" });
  event.remove({ id: "create:crafting/logistics/stock_link" });
  event.remove({ id: "create:sequenced_assembly/sturdy_sheet" });

  event.remove({ id: "create:mechanical_crafting/wand_of_symmetry" });
  event.remove({ id: "create:mechanical_crafting/extendo_grip" });

  //replace input
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
  event.replaceInput({ mod: "create" }, "minecraft:iron_ingot", "#forge:ingots/wrought_iron");
  event.replaceInput({ input: "create:iron_sheet" }, "create:iron_sheet", "#forge:plates/iron");
  event.replaceInput(
    { input: "minecraft:iron_bars" },
    "minecraft:iron_bars",
    "tfc:metal/bars/wrought_iron",
  );
  event.replaceInput(
    { id: "create:crafting/logistics/redstone_contact" },
    "minecraft:cobblestone",
    "#forge:cobblestone",
  );
  event.replaceInput(
    { id: "create:crafting/kinetics/white_sail" },
    "#minecraft:wool",
    "#tfc:high_quality_cloth",
  );
  event.replaceInput(
    { id: "create:crafting/kinetics/controller_rail" },
    "#forge:ingots/gold",
    "#forge:rods/gold",
  );
  event.replaceInput({ id: "create:crafting/kinetics/goggles" }, "#forge:glass", "tfc:lens");
  event.replaceInput(
    { id: "create:crafting/kinetics/goggles" },
    "#forge:string",
    "#magistuarmory:leather_strips",
  );
  event.replaceInput(
    { id: "create:crafting/kinetics/empty_blaze_burner" },
    "#forge:plates/iron",
    "#forge:plates/steel",
  );
  event.replaceInput(
    { id: /^create:crafting\/kinetics\/.*filter$/ },
    "#minecraft:wool",
    "minecraft:paper",
  );
  event.replaceInput(
    { id: "create:crafting/kinetics/weighted_ejector" },
    "create:golden_sheet",
    "vintageimprovements:iron_spring",
  );
  event.replaceInput(
    { id: "create:crafting/materials/electron_tube" },
    "#railways:internal/plates/iron_plates",
    "#forge:plates/steel",
  );
  event.replaceInput(
    { id: "create:crafting/logistics/brass_funnel" },
    "tfc:food/dried_kelp",
    "minecraft:leather",
  );
  event.replaceInput(
    { id: "create:crafting/logistics/brass_tunnel" },
    "tfc:food/dried_kelp",
    "minecraft:leather",
  );
  event.replaceInput(
    { id: "create:milling/lapis_lazuli" },
    "minecraft:lapis_lazuli",
    "tfc:gem/lapis_lazuli",
  );
  event.replaceInput({ id: "create:milling/gravel" }, "minecraft:gravel", "#forge:gravel");
  event.replaceInput(
    { id: "create:crafting/kinetics/cogwheel" },
    "#minecraft:planks",
    "#tfc:lumber",
  );
  event.replaceInput(
    { id: "create:crafting/kinetics/large_cogwheel" },
    "#minecraft:planks",
    "#tfc:lumber",
  );
  event.replaceInput(
    { id: "petrolsparts:cutting/coaxial_gear_from_wood" },
    "#minecraft:planks",
    "#tfc:lumber",
  );
  event.replaceInput(
    { id: "create:crafting/kinetics/large_cogwheel_from_little" },
    "#minecraft:planks",
    "#tfc:lumber",
  );
  event.replaceInput({ id: "create:deploying/large_cogwheel" }, "#minecraft:planks", "#tfc:lumber");
  event.replaceInput({ id: "create:deploying/cogwheel" }, "#minecraft:planks", "#tfc:lumber");
  event.replaceInput({ id: "create:filling/sweet_roll" }, "minecraft:bread", "#tfc:foods/bread");

  //replace output
  event.replaceOutput({ id: "create:crushing/wool" }, "minecraft:string", "tfc:wool_cloth");
  event.replaceOutput({ id: "create:milling/wool" }, "minecraft:string", "tfc:wool_cloth");
  event.replaceOutput(
    { output: "create:iron_sheet" },
    "create:iron_sheet",
    "antiquelegacy:iron_plate",
  );
  event.replaceOutput({ mod: "create" }, "create:zinc_ingot", "tfc:metal/ingot/zinc");
  event.replaceOutput({ mod: "create" }, "create:brass_ingot", "tfc:metal/ingot/brass");

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
  event.recipes.kubejs
    .shaped("create:basin", ["   ", "SCS", "AAA"], {
      A: "create:andesite_alloy",
      C: "tfc:crucible",
      S: "tfc:metal/sheet/wrought_iron",
    })
    .id("twt:shaped/basin");
  event.recipes.kubejs
    .shaped("create:steam_engine", [" S ", "SAS", "PCP"], {
      S: "magistuarmory:steel_plate",
      A: "create:andesite_alloy",
      P: "tfc:steel_pump",
      C: "minecraft:copper_block",
    })
    .id("twt:shaped/steam_engine");
  event.recipes.kubejs
    .shaped("create:smart_chute", [" B ", "SCS", " E "], {
      B: "create:brass_sheet",
      S: "magistuarmory:steel_plate",
      C: "create:chute",
      E: "create:electron_tube",
    })
    .id("twt:shaped/smart_chute");

  event.recipes.kubejs
    .shaped("create:elevator_pulley", ["RCR", "LKL", " P "], {
      R: "tfc:metal/rod/steel",
      C: "create:brass_casing",
      L: "#forge:leather",
      K: "minecraft:dried_kelp_block",
      P: "#forge:plates/steel",
    })
    .id("twt:shaped/elevator_pulley");
  event.recipes.kubejs
    .shaped("create:mechanical_crafter", ["RER", "cCc", "RWR"], {
      R: "tfc:metal/rod/steel",
      E: "create:electron_tube",
      c: "create:cogwheel",
      C: "create:brass_casing",
      W: "minecraft:crafting_table",
    })
    .id("twt:shaped/mechanical_crafter");
  event.recipes.kubejs
    .shaped("create:rotation_speed_controller", ["BMB", "ESE", "RCR"], {
      B: "tfc:metal/sheet/brass",
      M: "create:precision_mechanism",
      E: "create:electron_tube",
      S: "create:shaft",
      R: "tfc:metal/rod/steel",
      C: "create:brass_casing",
    })
    .id("twt:shaped/rotation_speed_controller");
  event.recipes.kubejs
    .shaped("create:mechanical_arm", ["SBJ", "BE ", "MCM"], {
      S: "tfc:metal/double_ingot/steel",
      B: "tfc:metal/rod/brass",
      J: "tfc:jacks",
      E: "create:electron_tube",
      M: "create:precision_mechanism",
      C: "create:brass_casing",
    })
    .id("twt:shaped/mechanical_arm");
  event.recipes.kubejs
    .shaped("create:stock_link", [" T ", "SVS", " E "], {
      T: "create:transmitter",
      S: "magistuarmory:steel_plate",
      V: "create:item_vault",
      E: "create:electron_tube",
    })
    .id("twt:shaped/stock_link");
  event.recipes.kubejs
    .shaped("create:wand_of_symmetry", [" P ", " B ", " R "], {
      P: "tfc:metal/sheet/zinc",
      B: "create:copper_sheet",
      R: "tfc:metal/rod/copper",
    })
    .id("twt:shaped/wand_of_symmetry");
  event.recipes.kubejs
    .shaped("create:extendo_grip", ["SHS", "SMS", "SRS"], {
      S: "#balm:wooden_rods",
      H: "tfc:metal/pickaxe_head/copper",
      M: "create:copper_sheet",
      R: "tfc:metal/rod/copper",
    })
    .id("twt:shaped/extendo_grip");

  //TFC Forging
  event.recipes.tfc
    .anvil(Item.of("create:copper_sheet", 2), "tfc:metal/sheet/copper", [
      "punch_any",
      "punch_any",
      "punch_any",
    ])
    .tier(1)
    .apply_forging_bonus(false);
  event.recipes.tfc
    .anvil(Item.of("create:golden_sheet", 2), "tfc:metal/sheet/gold", [
      "punch_any",
      "punch_any",
      "punch_any",
    ])
    .tier(1)
    .apply_forging_bonus(false);
  event.recipes.tfc
    .anvil(Item.of("create:brass_sheet", 2), "tfc:metal/sheet/brass", [
      "punch_any",
      "punch_any",
      "punch_any",
    ])
    .tier(2)
    .apply_forging_bonus(false);

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

  //Create pressing
  event.recipes.create
    .pressing("magistuarmory:steel_plate", "#forge:ingots/steel")
    .id("twt:pressing/steel_plate");

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
  event.recipes.create
    .sequenced_assembly(Item.of("create:sturdy_sheet", 4), "tfc:metal/ingot/steel", [
      event.recipes.create.filling("create:unprocessed_obsidian_sheet", [
        "create:unprocessed_obsidian_sheet",
        Fluid.of("minecraft:lava", 500),
      ]),
      event.recipes.create.pressing(
        "create:unprocessed_obsidian_sheet",
        "create:unprocessed_obsidian_sheet",
      ),
      event.recipes.create.cutting(
        "create:unprocessed_obsidian_sheet",
        "create:unprocessed_obsidian_sheet",
      ),
    ])
    .transitionalItem("create:unprocessed_obsidian_sheet")
    .loops(1)
    .id("twt:sequenced/sturdy_sheet_4x");
  event.recipes.create
    .sequenced_assembly(Item.of("create:sturdy_sheet", 16), "tfc:metal/ingot/black_steel", [
      event.recipes.create.filling("create:unprocessed_obsidian_sheet", [
        "create:unprocessed_obsidian_sheet",
        Fluid.of("minecraft:lava", 500),
      ]),
      event.recipes.create.pressing(
        "create:unprocessed_obsidian_sheet",
        "create:unprocessed_obsidian_sheet",
      ),
      event.recipes.create.cutting(
        "create:unprocessed_obsidian_sheet",
        "create:unprocessed_obsidian_sheet",
      ),
    ])
    .transitionalItem("create:unprocessed_obsidian_sheet")
    .loops(1)
    .id("twt:sequenced/sturdy_sheet_16x");

  //TFC heating
  event.recipes.tfc
    .heating("create:copper_sheet", 1080)
    .resultFluid(Fluid.of("tfc:metal/copper", 100))
    .id("twt:heating/copper_sheet");
  event.recipes.tfc
    .heating("create:brass_sheet", 930)
    .resultFluid(Fluid.of("tfc:metal/brass", 100))
    .id("twt:heating/brass_sheet");
  event.recipes.tfc
    .heating("create:golden_sheet", 1060)
    .resultFluid(Fluid.of("tfc:metal/gold", 100))
    .id("twt:heating/golden_sheet");

  //TFC welding
  event.recipes.tfc
    .welding(
      "create:netherite_backtank",
      "create:copper_backtank",
      "tfc:metal/chestplate/red_steel",
    )
    .id("twt:welding/netherite_backtank");
  event.recipes.tfc
    .welding(
      "create:netherite_diving_boots",
      "create:copper_diving_boots",
      "tfc:metal/boots/red_steel",
    )
    .id("twt:welding/netherite_diving_boots");
  event.recipes.tfc
    .welding(
      "create:netherite_diving_helmet",
      "create:copper_diving_helmet",
      "tfc:metal/helmet/red_steel",
    )
    .id("twt:welding/netherite_diving_helmet");
  event.recipes.tfc
    .welding(
      "minecraft:netherite_leggings",
      "tfc:metal/greaves/copper",
      "tfc:metal/greaves/red_steel",
    )
    .id("twt:welding/netherite_leggings");

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
  event.itemHeat("create:copper_diving_boots", 11.429, 648.0, 864.0);
  event.itemHeat("create:copper_diving_helmet", 17.143, 648.0, 864.0);

  event.itemHeat("create:copper_sheet", 2.257, 648.0, 864.0);
  event.itemHeat("create:brass_sheet", 2.257, 558.0, 744.0);
  event.itemHeat("create:golden_sheet", 2.257, 636.0, 848.0);

  //TFC Fuels
  event.fuel("create:cinder_flour", 400, 6200, 0.05);
  event.fuel("create:blaze_cake", 1600, 6200, 0.65);
  event.fuel("create:cardboard", 200, 400, 0.8);

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
