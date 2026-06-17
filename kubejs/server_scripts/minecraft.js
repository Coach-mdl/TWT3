"use strict";

const VanillaRecipes = (event) => {
  //removal
  event.remove({ id: /^minecraft:.*_ingot_from_nuggets$/ });
  event.remove({ id: "minecraft:tripwire_hook" });
  event.remove({ output: "minecraft:gold_ingot" });
  event.remove({ output: "minecraft:gold_block" });
  event.remove({ output: "minecraft:copper_ingot" });
  event.remove({ output: "minecraft:iron_ingot" });
  event.remove({ output: "minecraft:iron_block" });
  event.remove({ id: "minecraft:iron_bars" });
  event.remove({ id: "minecraft:glowstone" });
  event.remove({ id: "minecraft:sandstone" });
  event.remove({ id: "minecraft:charcoal" });
  event.remove({ id: "minecraft:glass" });
  event.remove({ id: "minecraft:golden_apple" });
  event.remove({ id: "minecraft:golden_carrot" });
  event.remove({ id: "minecraft:enchanted_golden_apple" });
  event.remove({ id: "minecraft:smooth_stone_slab" });

  event.remove({ not: { type: "firmalife:oven" }, output: "minecraft:pumpkin_pie" });

  //replace input
  event.replaceInput({ id: "minecraft:grindstone" }, "minecraft:stone_slab", "tfc:handstone");
  event.replaceInput(
    { input: "minecraft:amethyst_shard" },
    "minecraft:amethyst_shard",
    "#forge:gems/amethyst",
  );
  event.replaceInput(
    { id: "tfc:crafting/vanilla/redstone/tripwire_hook" },
    "tfc:metal/sheet/wrought_iron",
    "#forge:plates/iron",
  );
  event.replaceInput({ id: "minecraft:stonecutter" }, "minecraft:stone", "#forge:stone");
  event.replaceInput({ id: "minecraft:stonecutter" }, "minecraft:iron_ingot", "#forge:ingots/wrought_iron");
  event.replaceInput(
    { id: "minecraft:warped_fungus_on_a_stick" },
    "minecraft:fishing_rod",
    "#forge:tools/fishing_rods",
  );
  event.replaceInput({ input: "minecraft:sand" }, "minecraft:sand", "#forge:sand");
  event.replaceInput(
    { input: "minecraft:iron_trapdoor" },
    "minecraft:iron_trapdoor",
    "tfc:metal/sheet/wrought_iron",
  );
  event.replaceInput({ input: "minecraft:apple" }, "minecraft:apple", "#tfc:foods/apples");
  event.replaceInput({ input: "minecraft:carrot" }, "minecraft:carrot", "#forge:vegetables/carrot");

  //replace output

  //shaped
  event.recipes.kubejs
    .shaped("minecraft:anvil", ["DDD", " C ", "CCC"], {
      D: "tfc:metal/double_ingot/cast_iron",
      C: "tfc:metal/ingot/cast_iron",
    })
    .id("twt:shaped/anvil");

  //shapeless
  event
    .shapeless(Item.of("minecraft:glass_bottle", 1), ["#tfc:glass_bottles"])
    .id("twt:shapeless/glass_bottle");

  //Furnace
  event.smelting("minecraft:charcoal", "#tfc:pit_kiln_logs").xp(0.35).id("twt:smelting/charcoal");
  event.smelting("minecraft:glass", "tfc:silica_glass_batch").xp(0.35).id("twt:smelting/glass");
  event
    .smelting("minecraft:orange_stained_glass", "tfc:hematitic_glass_batch")
    .xp(0.35)
    .id("twt:smelting/orange_stained_glass");
  event
    .smelting("minecraft:green_stained_glass", "tfc:olivine_glass_batch")
    .xp(0.35)
    .id("twt:smelting/green_stained_glass");
  event
    .smelting("minecraft:blue_stained_glass", "tfc:volcanic_glass_batch")
    .xp(0.35)
    .id("twt:smelting/blue_stained_glass");

  //TFC Welding
  event.recipes.tfc.welding("minecraft:anvil", "minecraft:chipped_anvil", "tfc:metal/ingot/cast_iron");
  event.recipes.tfc
    .welding("minecraft:chipped_anvil", "minecraft:damaged_anvil", "tfc:metal/ingot/cast_iron")
    .id("twt:welding/damaged_anvil_repair");
  event.recipes.tfc
    .welding("minecraft:anvil", "minecraft:damaged_anvil", "tfc:metal/double_ingot/cast_iron")
    .id("twt:welding/chipped_anvil_repair");
  event.recipes.tfc
    .welding("minecraft:bucket", "tfc:metal/bucket/blue_steel", "tfc:metal/bucket/red_steel")
    .id("twt:welding/bucket");

  //TFC Heating
  event.recipes.tfc
    .heating("minecraft:anvil", 1535)
    .resultFluid(Fluid.of("tfc:metal/cast_iron", 1000))
    .id("twt:heating/anvil");
  event.recipes.tfc
    .heating("minecraft:chipped_anvil", 1535)
    .resultFluid(Fluid.of("tfc:metal/cast_iron", 900))
    .id("twt:heating/chipped_anvil");
  event.recipes.tfc
    .heating("minecraft:damaged_anvil", 1535)
    .resultFluid(Fluid.of("tfc:metal/cast_iron", 800))
    .id("twt:heating/damaged_anvil");

  //Create Compacting
  function panecompacting(output, input, id) {
    event.recipes.create
      .compacting(Item.of(output, 16), input)
      .heated()
      .id("twt:compacting/" + id + "glass_pane");
  }

  panecompacting("minecraft:glass_pane", "tfc:silica_glass_batch", "");
  panecompacting("minecraft:orange_stained_glass_pane", "tfc:hematitic_glass_batch", "orange_stained_");
  panecompacting("minecraft:green_stained_glass_pane", "tfc:olivine_glass_batch", "green_stained_");
  panecompacting("minecraft:blue_stained_glass_pane", "tfc:volcanic_glass_batch", "blue_stained_");

  //laser_cutting
  event.recipes.vintageimprovements
    .laser_cutting(Item.of("minecraft:glass_pane", 16), "minecraft:glass")
    .energyCost(2000)
    .maxChargeRate(50)
    .id("twt:laser_cutting/glass_pane");

  $dyes.forEach((dye) => {
    event.recipes.vintageimprovements
      .laser_cutting(Item.of(`minecraft:${dye}_stained_glass_pane`, 16), `minecraft:${dye}_stained_glass`)
      .energyCost(2000)
      .maxChargeRate(50)
      .id(`twt:laser_cutting/${dye}_glass_pane`);
  });
};

const VanillaData = (event) => {
  //Heat Definitions
  event.itemHeat("minecraft:anvil", 3.057, null, 1128);
  event.itemHeat("minecraft:chipped_anvil", 3.057, null, 1128);
  event.itemHeat("minecraft:damaged_anvil", 3.057, null, 1128);
  event.itemHeat("minecraft:netherite_ingot", 2.857, 1125, 1325);

  //fuel
  event.fuel("minecraft:blaze_rod", 1825, 1100, 0.95);
  event.fuel("minecraft:blaze_powder", 1900, 550, null);

  //size
  event.itemSize(/^minecraft:.*anvil$/, "huge", "very_heavy");

  //nutrition
  event.foodItem("minecraft:golden_carrot", (food) => {
    food.hunger(2);
    food.vegetables(3);
    food.saturation(2);
    food.decayModifier(0.5);
  });
  event.foodItem("minecraft:golden_apple", (food) => {
    food.hunger(3);
    food.fruit(3);
    food.saturation(3);
    food.water(10);
    food.decayModifier(0.2);
  });
  event.foodItem("minecraft:enchanted_golden_apple", (food) => {
    food.hunger(5);
    food.fruit(5);
    food.saturation(5);
    food.water(30);
    food.decayModifier(0);
  });
};

const VanillaItemTags = (event) => {
  event.add("minecraft:compasses", "firmaciv:firmaciv_compass");
  event.add("c:gems/lapis", "tfc:gem/lapis_lazuli");
};
