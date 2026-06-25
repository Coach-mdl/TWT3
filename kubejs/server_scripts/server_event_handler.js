// priority: 1
"use strict";

//Picked up this trick from TFG.
/*
 This file loads all server-side scripts in a specific order. This is more modular than setting a priority.
 Furthermore, separating recipes by mod makes it easier to find errors and generally makes it safer if something goes
 wrong. The TWT namespace will be the home for any functions that bridge across mods or things that don't quite
 fit anywhere else such as recipes with multiple outputs. Scripts load in typical top to bottom fashion.
 Misc is for one and done recipes/tags. That way you don't have to create a new file just for a single recipe/tag.
 */

//Tags should always load before anything that uses them.
ServerEvents.tags("item", (event) => {
  ErrorSilencerItemTags(event);
  TWTItemTags(event);
  VanillaItemTags(event);
  CreateItemTags(event);
  VintageimprovementsItemTags(event);
  ForgeItemTags(event);
  TFCItemTags(event);
  ScgunsItemTags(event);
  AetherItemTags(event);
  backpackedItemTags(event);
  handcraftedItemTags(event);
  FarmersDelightItemTags(event);
  RecipeViewerTags(event);
});

ServerEvents.tags("block", (event) => {
  ErrorSilencerBlockTags(event);
  PowergridBlockTags(event);
  ScgunsBlockTags(event);
  YoHooksBlockTags(event);
  MiscBlockTags(event);
});

ServerEvents.tags("fluid", (event) => {
  ForgeFluidTags(event);
  ScgunsFluidTags(event);
});

ServerEvents.tags("entity_type", (event) => {
  ScgunsEntityTags(event);
});

MoreJSEvents.structureAfterPlace((event) => {
  worldgen(event);
});

LootJS.modifiers((event) => {
  AetherLoot(event);
});

//TFC Data should load before recipes as some TFC recipes depend on them.
TFCEvents.data((event) => {
  ErrorSilencerData(event);
  TWTData(event);
  VanillaData(event);
  TFCData(event);
  CreateData(event);
  ScgunsData(event);
  MiscData(event);
  AetherData(event);
  YoHooksData(event);
  IronchestsData(event);
});

ServerEvents.recipes((event) => {
  ErrorSilencerRecipes(event);
  TWTRecipes(event);
  VanillaRecipes(event);
  TFCRecipes(event);
  CreateRecipes(event);
  CDGRecipes(event);
  VintageimprovementsRecipes(event);
  PowergridRecipes(event);
  ScgunsRecipes(event);
  MiscRecipes(event);
  FarmersDelightRecipes(event);
  LycheeRecipes(event);
  AetherRecipes(event);
  YoHooksRecipes(event);
  WaystonesRecipes(event);
  HandcraftedRecipes(event);
  IronchestRecipes(event);
});

MoreJSEvents.filterAvailableEnchantments((event) => {
  TWTEnchants(event);
});

ServerEvents.commandRegistry((event) => {
  TWTCommands(event);
});
