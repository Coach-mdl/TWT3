"use strict";

//This script is for miscellanious mods that only need a single tweak.

const MiscRecipes = (event) => {
  //AlekishipsRecipes
  event.remove({ id: "alekiships:crafting/cannon" });
  event.remove({ id: "alekiships:crafting/anchor" });

  //AntiqueLegacyRecipes
  event.recipes.kubejs.shapeless("antiquelegacy:fur_cloak_decoration", [
    "tfc:large_raw_hide",
    "#forge:string",
  ]);

  //BeneathRecipes
  event.remove({ id: "beneath:collapse/nether_bricks" });
  event.remove({ id: "beneath:collapse/nether_brick_decor" });

  event.recipes.create
    .milling("minecraft:slime_ball", "beneath:raw_slime")
    .processingTime(200)
    .id("twt:milling/slime");

  //TerrificTrashCanRecipes
  event.replaceInput(
    { mod: "terrific_trash_cans" },
    "minecraft:iron_ingot",
    "tfc:metal/ingot/wrought_iron",
  );
  event.replaceInput({ mod: "terrific_trash_cans" }, "minecraft:cobblestone", "#forge:cobblestone");
  event.replaceInput({ mod: "terrific_trash_cans" }, "minecraft:bucket", "#tfc:buckets");

  //CreatePhotomovementRecipes
  event.replaceInput(
    { mod: "createphotomovement" },
    Item.of("minecraft:polished_deepslate_slab"),
    Item.of("tfc:rock/smooth/basalt_slab"),
  );
  event.replaceInput(
    { mod: "createphotomovement" },
    Item.of("minecraft:polished_blackstone_slab"),
    Item.of("tfc:rock/smooth/basalt_slab"),
  );
  event.replaceInput(
    { id: "createphotomovement:crafting/adv_solar_generator" },
    "create:shaft",
    "tfc:metal/rod/steel",
  );
  event.replaceInput(
    { id: "createphotomovement:crafting/adv_solar_generator" },
    "minecraft:redstone",
    "create:electron_tube",
  );
  event.replaceInput({ mod: "createphotomovement" }, "#minecraft:wool", "#tfc:high_quality_cloth");

  //Create Connected
  event.replaceInput(
    { id: "create_connected:crafting/kinetics/sequenced_pulse_generator" },
    "create_connected:control_chip",
    "create:cardboard",
  );
  event.replaceInput(
    { id: "create_connected:crafting/kinetics/kinetic_battery" },
    "#railways:internal/plates/iron_plates",
    "#forge:plates/steel",
  );

  //Railways
  event.replaceInput(
    { id: "railways:crafting/paint_brush" },
    "minecraft:iron_ingot",
    "tfc:metal/rod/copper",
  );
  event.replaceInput(
    { input: "minecraft:iron_ingot" },
    "minecraft:iron_ingot",
    "#forge:ingots/wrought_iron",
  );
};

const MiscData = (event) => {
  //powergrid
  event.itemHeat("powergrid:zinc_sheet", 2.257, 252.0, 336.0);
};

//If a tag doesn't want to be removed, check the JSON file for the tag. If it was added to a tag through another tag, that tag will have to go.
// Ensure you have also removed the collapse recipe when removing blocks from the collapse tags.
const MiscBlockTags = (event) => {
  //BeneathBlockTags
  event.remove("tfc:can_collapse", "#beneath:nether_bricks");
  event.remove("tfc:can_trigger_collapse", "#beneath:nether_bricks");
  event.remove("tfc:can_start_collapse", "#beneath:nether_bricks");

  event.add("yo_hooks:iron_repairable", "tfc:metal/wrought_iron");
};
