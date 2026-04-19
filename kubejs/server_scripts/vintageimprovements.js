"use strict";

const VintageimprovementsRecipes = (event) => {
  //Removals
  event.remove({ id: "vintageimprovements:crushing/scoria" });
  event.remove({ id: "vintageimprovements:crushing/scoria_recycling" });
  event.remove({ id: "vintageimprovements:pressurizing/sulfur_dioxide" });
  event.remove({ id: "vintageimprovements:pressurizing/sulfur_dioxide" });
  event.remove({ id: /^vintageimprovements:pressing\/.*_ingot$/ });
  event.remove({ id: /^vintageimprovements:craft\/.*_rod$/ });
  event.remove({ id: /^vintageimprovements:craft\/.*_wire$/ });
  event.remove({ id: /^vintageimprovements:coiling\/.*_rod$/ });
  event.remove({ id: /^vintageimprovements:coiling\/.*_wire$/ });
  event.remove({ id: /^vintageimprovements:coiling\/.*_plate$/ });
  event.remove({ id: /^vintageimprovements:coiling\/(?!iron).*_ingot$/ });
  event.remove({ id: "vintageimprovements:curving/iron_sheet" });
  event.remove({ id: "vintageimprovements:pressurizing/copper_sulfate" });
  event.remove({ id: "vintageimprovements:coiling/iron_plate" });
  event.remove({ id: "vintageimprovements:craft/spring_coiling_machine" });
  event.remove({ id: "vintageimprovements:hammering/netherite_ingot" });

  event.remove({ output: "vintageimprovements:vanadium_nugget" });

  event.remove({ type: "vintageimprovements:pressurizing", mod: "vintageimprovements" });

  //Replace Input
  event.replaceInput({ id: "vintageimprovements:craft/grinder_belt" }, "#create:sandpaper", "tfc:sandpaper");
  event.replaceInput(
    { id: "vintageimprovements:craft/spring_coiling_machine_wheel" },
    "minecraft:iron_block",
    "tfc:metal/double_ingot/wrought_iron",
  );
  event.replaceInput(
    { id: "vintageimprovements:mechanical_crafting/helve_hammer" },
    "minecraft:iron_block",
    "tfc:metal/double_ingot/wrought_iron",
  );
  event.replaceInput(
    { id: "vintageimprovements:coiling/iron_ingot" },
    "minecraft:iron_ingot",
    "tfc:metal/ingot/wrought_iron",
  );

  //shaped
  event.recipes.kubejs
    .shaped("vintageimprovements:spring_coiling_machine", ["IIC", "Scs", "IIC"], {
      I: "#forge:plates/iron",
      C: "create:cogwheel",
      S: "vintageimprovements:spring_coiling_machine_wheel",
      c: "create:andesite_casing",
      s: "create:shaft",
    })
    .id("twt:shaped/spring_coiling_machine");

  //coiling
  event
    .custom({
      type: "vintageimprovements:coiling",
      ingredients: [
        {
          item: "tfc:metal/ingot/steel",
        },
      ],
      results: [
        {
          item: "vintageimprovements:steel_spring",
          count: 2,
        },
      ],
      processingTime: 200,
    })
    .id("twt:coiling/steel_spring");

  //hammering
  function Hammer(output, input, anvilBlock, id) {
    event.recipes.vintageimprovements
      .hammering(output, input)
      .hammerBlows(4)
      .anvilBlock("tfc:metal/block/" + anvilBlock + "_slab")
      .id("twt:hammering/" + id);
  }

  let HC = "tfc:metal/ingot/high_carbon_";

  Hammer("tfc:refined_iron_bloom", "tfc:raw_iron_bloom", "wrought_iron", "refined_iron_bloom");
  Hammer("tfc:metal/ingot/wrought_iron", "tfc:refined_iron_bloom", "wrought_iron", "wrought_iron_ingot");
  Hammer("tfc:metal/ingot/steel", "tfc:metal/ingot/pig_iron", "steel", "steel_ingot");
  Hammer("tfc:metal/ingot/black_steel", HC + "black_steel", "black_steel", "black_steel_ingot");
  Hammer("tfc:metal/ingot/blue_steel", HC + "blue_steel", "blue_steel", "blue_steel_ingot");
  Hammer("tfc:metal/ingot/red_steel", HC + "red_steel", "red_steel", "red_steel_ingot");
};

const VintageimprovementsItemTags = (event) => {
  event.add("vintageimprovements:custom_hammering_blocks", [
    "tfc:metal/block/wrought_iron_slab",
    "tfc:metal/block/steel_slab",
    "tfc:metal/block/black_steel_slab",
    "tfc:metal/block/blue_steel_slab",
    "tfc:metal/block/red_steel_slab",
  ]);
};
