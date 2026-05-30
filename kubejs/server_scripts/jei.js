"use strict";

//This allows items to be hidden from JEI with a tag, which will take effect on the client without editing the client script.
const JEItags = (event) => {
  event.add("jei:hidden_items", [
    "minecraft:spawner",
    "minecraft:gold_ingot",
    "create:zinc_ingot",
    "create:brass_ingot",
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
    "vintageimprovements:vacuum_chamber",
    /^vintageimprovements:.*_curving_head$/,
    "vintageimprovements:curving_press",
    "createdieselgenerators:hammer",
    "createdieselgenerators:wire_cutters",
  ]);
};
