"use strict";

//This allows items to be hidden from JEI with a tag, which will take effect on the client without editing the client script.
const JEItags = (event) => {
  event.add("jei:hidden_items", [
    "minecraft:spawner",
    "minecraft:gold_ingot",
    "create:zinc_ingot",
    "create:brass_ingot",
    "antiquelegacy:bronze_ingot",
    "antiquelegacy:tin_ingot",
    "epic_knights_ores_and_alloys:bronze_ingot",
    "epic_knights_ores_and_alloys:tin_ingot",
    "epic_knights_ores_and_alloys:steel_ingot",
    "epic_knights_ores_and_alloys:silver_ingot",
    "magistuarmory:steel_ingot",
    "antiquelegacy:bronze_mixture",
    "antiquelegacy:copper_nugget",
    "antiquelegacy:raw_tin",
    "antiquelegacy:tin_ore",
    "antiquelegacy:deepslate_tin_ore",
    "epic_knights_ores_and_alloys:coppernugget",
    "epic_knights_ores_and_alloys:bronzenugget",
    "epic_knights_ores_and_alloys:tin_nugget",
    "epic_knights_ores_and_alloys:silver_nugget",
    "epic_knights_ores_and_alloys:steel_nugget",
    "scguns:sulfur_dust",
    /^create_connected:copycat_.*/,
    "vintageimprovements:copper_sulfate",
    /^vintageimprovements:sulfur_.*$/,
    "vintageimprovements:sulfuric_acid",
    /^vintageimprovements:vanadium_.*/,
    /^vintageimprovements:(?!iron|steel).*_spring$/,
    /^vintageimprovements:small_.*_spring$/,
    /^vintageimprovements:.*_rod$/,
    /^vintageimprovements:.*_wire$/,
    /^vintageimprovements:.*_sheet$/,
  ]);
};
