"use strict";

/**
 * @param {Internal.RecipesEventJS} event
 */

const YoHooksRecipes = (event) => {
  event.remove({ mod: "yo_hooks" });

  event.recipes.tfc
    .anvil(TFC.isp.of("yo_hooks:iron_hook_head").copyHeat(), "tfc:metal/ingot/wrought_iron", [
      "shrink_not_last",
      "shrink_not_last",
      "bend_any",
    ])
    .tier(3)
    .apply_forging_bonus(true)
    .id(`twt:anvil/iron_hook_head`);
  event.recipes.tfc
    .anvil(TFC.isp.of("yo_hooks:gold_hook_head").copyHeat(), "tfc:metal/ingot/gold", [
      "shrink_not_last",
      "shrink_not_last",
      "bend_any",
    ])
    .tier(1)
    .apply_forging_bonus(true)
    .id(`twt:anvil/gold_hook_head`);
  event.recipes.tfc
    .anvil(TFC.isp.of("yo_hooks:diamond_hook_head").copyHeat(), "scguns:diamond_steel_ingot", [
      "shrink_not_last",
      "shrink_not_last",
      "bend_any",
    ])
    .tier(4)
    .apply_forging_bonus(true)
    .id(`twt:anvil/diamond_hook_head`);
  event.recipes.tfc
    .anvil(TFC.isp.of("yo_hooks:netherite_hook_head").copyHeat(), "minecraft:netherite_ingot", [
      "shrink_not_last",
      "shrink_not_last",
      "bend_any",
    ])
    .tier(6)
    .apply_forging_bonus(true)
    .id(`twt:anvil/netherite_hook_head`);

  //Being finnicky
  event.recipes.tfc
    .advanced_shaped_crafting(
      TFC.isp.of("yo_hooks:iron_grappling_hook").copyForgingBonus(),
      ["ABB", "C B", "BBB"],
      {
        C: "tfc:metal/rod/wrought_iron",
        A: "yo_hooks:iron_hook_head",
        B: "tfc:metal/chain/wrought_iron",
      },
      0,
      0,
    )
    .id("twt:shaped/iron_grappling_hook");
  event.recipes.tfc
    .advanced_shaped_crafting(
      TFC.isp.of("yo_hooks:gold_grappling_hook").copyForgingBonus(),
      ["ABB", "C B", "BBB"],
      {
        C: "tfc:metal/rod/copper",
        A: "yo_hooks:gold_hook_head",
        B: "tfc:metal/chain/copper",
      },
      0,
      0,
    )
    .id("twt:shaped/gold_grappling_hook");
  event.recipes.tfc
    .advanced_shaped_crafting(
      TFC.isp.of("yo_hooks:diamond_grappling_hook").copyForgingBonus(),
      ["ABB", "C B", "BBB"],
      {
        C: "tfc:metal/rod/steel",
        A: "yo_hooks:diamond_hook_head",
        B: "tfc:metal/chain/steel",
      },
      0,
      0,
    )
    .id("twt:shaped/diamond_grappling_hook");
  event.recipes.tfc
    .advanced_shaped_crafting(
      TFC.isp.of("yo_hooks:netherite_grappling_hook").copyForgingBonus(),
      ["ABB", "C B", "BBB"],
      {
        C: "tfc:metal/rod/black_steel",
        A: "yo_hooks:netherite_hook_head",
        B: "tfc:metal/chain/black_steel",
      },
      0,
      0,
    )
    .id("twt:shaped/netherite_grappling_hook");

  event.recipes.tfc
    .heating("yo_hooks:gold_hook_head", 1060)
    .resultFluid(Fluid.of("tfc:metal/gold", 100))
    .id("twt:heating/gold_hook_head");
  event.recipes.tfc
    .heating("yo_hooks:iron_hook_head", 1535)
    .resultFluid(Fluid.of("tfc:metal/cast_iron", 100))
    .id("twt:heating/iron_hook_head");
  event.recipes.tfc
    .heating("yo_hooks:diamond_hook_head", 1400)
    .resultFluid(Fluid.of("tfc:metal/steel", 100))
    .id("twt:heating/diamond_hook_head");
};

const YoHooksData = (event) => {
  event.itemHeat("yo_hooks:gold_hook_head", 2.857, 636, 848);
  event.itemHeat("yo_hooks:iron_hook_head", 2.857, 921, 1228);
  event.itemHeat("yo_hooks:diamond_hook_head", 2.857, 1048, 1315);
  event.itemHeat("yo_hooks:netherite_hook_head", 2.857, 1125, 1325);
};

const YoHooksBlockTags = (event) => {
  event.add("yo_hooks:fragile", [
    /^tfc:rock\/spike\/.*$/,
    "beneath:haunted_spike",
    "beneath:glowstone_spike",
  ]);
};
