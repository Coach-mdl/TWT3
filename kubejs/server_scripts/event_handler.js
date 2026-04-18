// priority: 1
"use strict";

//Picked up this trick from TFG.
/*
 This file loads all events in a specific order. This is more modular than setting a priority.
 Furthermore, separating recipes by mod makes it easier to find errors and generally makes it safer if something goes
 wrong. The TWT namespace will be the home for any functions that bridge across mods or things that don't quite
 fit anywhere else such as recipes with multiple outputs. Scripts load in typical top to bottom fashion.
 Misc is for one and done recipes/tags. That way you don't have to create a new file just for a single recipe/tag.
 */

//Code for mods that are compats of another mod should be stored within the main mods files. IE, IE TFC Compat
// recipes should go in IE's recipe files or WoodenCog Recipes should go in Create's recipe file.

const $nuggetcompat = [
  "antiquelegacy:bronze_nugget",
  "minecraft:iron_nugget",
  "knightsofterrafirma:black_bronze_nugget",
  "knightsofterrafirma:bismuth_bronze_nugget",
  "magistuarmory:steel_nugget",
  "antiquelegacy:tin_nugget",
  "minecraft:gold_nugget",
  "create:copper_nugget",
];
const $ores = [
  "native_copper",
  "native_gold",
  "hematite",
  "native_silver",
  "cassiterite",
  "bismuthinite",
  "garnierite",
  "malachite",
  "magnetite",
  "limonite",
  "sphalerite",
  "tetrahedrite",
];
const $metals = [
  "bismuth",
  "bismuth_bronze",
  "black_bronze",
  "bronze",
  "brass",
  "copper",
  "gold",
  "nickel",
  "rose_gold",
  "silver",
  "tin",
  "zinc",
  "sterling_silver",
  "wrought_iron",
  "cast_iron",
  "steel",
  "black_steel",
  "blue_steel",
  "red_steel",
];
const $tfcMetals = [
  "bismuth",
  "bismuth_bronze",
  "black_bronze",
  "bronze",
  "brass",
  "copper",
  "gold",
  "nickel",
  "rose_gold",
  "silver",
  "tin",
  "zinc",
  "sterling_silver",
  "wrought_iron",
  "cast_iron",
  "steel",
  "black_steel",
  "blue_steel",
  "red_steel",
];
const $AllOres = [
  "chromite",
  "native_copper",
  "native_gold",
  "hematite",
  "native_silver",
  "cassiterite",
  "bismuthinite",
  "garnierite",
  "malachite",
  "magnetite",
  "limonite",
  "sphalerite",
  "tetrahedrite",
];
const $woods = [
  "acacia",
  "ash",
  "aspen",
  "birch",
  "blackwood",
  "chestnut",
  "douglas_fir",
  "hickory",
  "kapok",
  "mangrove",
  "maple",
  "oak",
  "palm",
  "pine",
  "rosewood",
  "sequoia",
  "spruce",
  "sycamore",
  "white_cedar",
  "willow",
];

const $grains = ["barley", "maize", "oat", "rye", "rice", "wheat"];

//Tags should always load before anything that uses them.
ServerEvents.tags("item", (event) => {
  ErrorSilencerItemTags(event);
  TWTItemTags(event);
  VanillaItemTags(event);
  CreateItemTags(event);
  ForgeItemTags(event);
  TFCItemTags(event);
  ScgunsItemTags(event);
  AetherItemTags(event);
  JEItags(event);
});

ServerEvents.tags("block", (event) => {
  ErrorSilencerBlockTags(event);
  MiscBlockTags(event);
});

ServerEvents.tags("fluid", (event) => {});

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
  AetherData(event);
  IronchestsData(event);
});

ServerEvents.recipes((event) => {
  TWTRecipes(event);
  VanillaRecipes(event);
  TFCRecipes(event);
  CreateRecipes(event);
  Createdieselgenerators(event);
  VintageimprovementsRecipes(event);
  PowergridRecipes(event);
  ScgunsRecipes(event);
  MiscRecipes(event);
  FarmersDelightRecipes(event);
  LycheeRecipes(event);
  AetherRecipes(event);
  WaystonesRecipes(event);
  HandcraftedRecipes(event);
  MagistuArmoryRecipes(event);
  IronchestRecipes(event);
});

ServerEvents.commandRegistry((event) => {
  TWTCommands(event);
});
