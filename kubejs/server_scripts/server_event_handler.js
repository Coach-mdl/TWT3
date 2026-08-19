// priority: 1
"use strict";

//Picked up this trick from TFG.
/*
 This file loads all server-side scripts in a specific order.

 Recipe ID format: "twt:handcrafted/shapeless/wooden_pickaxe"
                     ^        ^          ^           ^
              Namespace  file/location  type       result
 */

//Tags should always load before anything that uses them.
ServerEvents.tags("item", (event) => {
  errorSilencerItemTags(event);
  twtItemTags(event);
  minecraftItemTags(event);
  createItemTags(event);
  vintageimprovementsItemTags(event);
  forgeItemTags(event);
  tfcItemTags(event);
  scgunsItemTags(event);
  aetherItemTags(event);
  backpackedItemTags(event);
  handcraftedItemTags(event);
  farmersDelightItemTags(event);
});

ServerEvents.tags("block", (event) => {
  errorSilencerBlockTags(event);
  powergridBlockTags(event);
  scgunsBlockTags(event);
  yohooksBlockTags(event);
  locksBlockTags(event);
  miscBlockTags(event);
});

ServerEvents.tags("fluid", (event) => {
  forgeFluidTags(event);
  scgunsFluidTags(event);
});

ServerEvents.tags("entity_type", (event) => {
  scgunsEntityTags(event);
});

MoreJSEvents.structureAfterPlace((event) => {
  twtWorldgen(event);
});

LootJS.modifiers((event) => {
  aetherLoot(event);
});

//TFC Data should load before recipes as some TFC recipes depend on them.
TFCEvents.data((event) => {
  errorSilencerData(event);
  twtData(event);
  minecraftData(event);
  tfcData(event);
  createData(event);
  scgunsData(event);
  miscData(event);
  aetherData(event);
  locksData(event);
  yoHooksData(event);
  ironchestsData(event);
  farmersDelightData(event);
});

ServerEvents.recipes((event) => {
  errorSilencerRecipes(event);
  twtRecipes(event);
  vanillaRecipes(event);
  tfcRecipes(event);
  createRecipes(event);
  cdgRecipes(event);
  vintageimprovementsRecipes(event);
  powergridRecipes(event);
  scgunsRecipes(event);
  miscRecipes(event);
  farmersDelightRecipes(event);
  lycheeRecipes(event);
  aetherRecipes(event);
  yohooksRecipes(event);
  waystonesRecipes(event);
  backpackedRecipes(event);
  locksRecipes(event);
  handcraftedRecipes(event);
  ironchestRecipes(event);
});

MoreJSEvents.filterAvailableEnchantments((event) => {
  twtEnchants(event);
});

ServerEvents.commandRegistry((event) => {
  twtCommands(event);
});
