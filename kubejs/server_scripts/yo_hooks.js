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
};
