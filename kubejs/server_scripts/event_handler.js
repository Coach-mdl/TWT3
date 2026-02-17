// priority: 1
"use strict";

//Picked up this trick from TFG.
/*This file loads all events in a specific order. This is more modular than setting a priority.
Furthermore, separating recipes by mod makes it easier to find errors and generally makes it safer if something goes
 wrong. The TWT namespace will be the home for any functions that bridge across mods or things that don't quite
  fit anywhere else such as recipes with multiple outputs. Scripts load in typical top to bottom fashion.
 */

//Code for mods that are compats of another mod should be stored within the main mods files. IE, IE TFC Compat
// recipes should go in IE's recipe files or WoodenCog Recipes should go in Create's recipe file.

const $nuggetcompat = ['immersiveengineering:nugget_lead', 'immersiveengineering:nugget_silver', 'antiquelegacy:copper_nugget', 'immersiveengineering:nugget_nickel', 'antiquelegacy:bronze_nugget', 'minecraft:iron_nugget', 'knightsofterrafirma:black_bronze_nugget', 'knightsofterrafirma:bismuth_bronze_nugget', 'magistuarmory:steel_nugget', 'immersiveengineering:nugget_uranium', 'antiquelegacy:tin_nugget', 'immersiveengineering:nugget_electrum', 'immersiveengineering:nugget_constantan', 'minecraft:gold_nugget', 'immersiveengineering:nugget_copper', 'immersiveengineering:nugget_aluminum']
const $ores = ['native_copper', 'native_gold', 'hematite', 'native_silver', 'cassiterite', 'bismuthinite', 'garnierite', 'malachite', 'magnetite', 'limonite', 'sphalerite', 'tetrahedrite']
const $metals = ['bismuth', 'bismuth_bronze', 'black_bronze', 'bronze', 'brass', 'copper', 'gold', 'nickel', 'rose_gold', 'silver', 'tin', 'zinc', 'sterling_silver', 'wrought_iron', 'cast_iron', 'steel', 'black_steel', 'blue_steel', 'red_steel', 'aluminum', 'alumina', 'lead', 'pewter', 'platinum']
const $tfcMetals = ['bismuth', 'bismuth_bronze', 'black_bronze', 'bronze', 'brass', 'copper', 'gold', 'nickel', 'rose_gold', 'silver', 'tin', 'zinc', 'sterling_silver', 'wrought_iron', 'cast_iron', 'steel', 'black_steel', 'blue_steel', 'red_steel']
const $AllOres = ['chromite', 'native_copper', 'native_gold', 'hematite', 'native_silver', 'cassiterite', 'bismuthinite', 'garnierite', 'malachite', 'magnetite', 'limonite', 'sphalerite', 'tetrahedrite', 'bauxite', 'galena', 'native_aluminum', 'native_platinum', 'uraninite']
const $dfcOres = ['native_platinum', 'native_aluminum', 'bauxite', 'galena']
const $IEores = ['bauxite', 'galena', 'uraninite']
const $woods = ['acacia', 'ash', 'aspen', 'birch', 'blackwood', 'chestnut', 'douglas_fir', 'hickory', 'kapok', 'mangrove', 'maple', 'oak', 'palm', 'pine', 'rosewood', 'sequoia', 'spruce', 'sycamore', 'white_cedar', 'willow']
const $tfmgExistingIngots = ['steel', 'cast_iron', 'aluminum', 'lead', 'nickel', 'constantan']

//Tags should always load before anything that uses them.
ServerEvents.tags('item', event => {
    ErrorSilencerItemTags(event)
    TWTItemTags(event)
    VanillaItemTags(event)
    CreateItemTags(event)
    TFMGTags(event)
    ForgeItemTags(event)
    TFCItemTags(event)
    JEItags(event)
})

ServerEvents.tags('block', event => {
    ErrorSilencerBlockTags(event)
})

LootJS.modifiers(event => {
    DFCLoot(event)
})

//TFC Data should load before recipes as some TFC recipes depend on them.
TFCEvents.data(event => {
    ErrorSilencerData(event)
    TWTData(event)
    VanillaData(event)
    TFCData(event)
    CreateData(event)
    DFCData(event)
    IronchestsData(event)
    ImmersiveEngineeringData(event)
})

ServerEvents.recipes(event => {
    TWTRecipes(event)
    VanillaRecipes(event)
    TFCRecipes(event)
    FirmalifeRecipes(event)
    BeneathRecipes(event)
    CreateRecipes(event)
    TFMGRecipes(event)
    ImmersiveEngineeringRecipes(event)
    FarmersDelightRecipes(event)
    WaystonesRecipes(event)
    SNSRecipes(event)
    ToolbeltRecipes(event)
    TombstoneRecipes(event)
    HandcraftedRecipes(event)
    DFCRecipes(event)
    BSARecipes(event)
    MagistuArmoryRecipes(event)
    AntiqueLegacyRecipes(event)
    ParcoolRecipes(event)
    IronchestRecipes(event)
    MusketModRecipes(event)
    SimpleRadioRecipes(event)
})