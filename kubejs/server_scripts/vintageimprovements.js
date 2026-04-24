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
  event.remove({ id: /^vintageimprovements:coiling\/.*_ingot$/ });
  event.remove({ id: "vintageimprovements:curving/iron_sheet" });
  event.remove({ id: "vintageimprovements:pressurizing/copper_sulfate" });
  event.remove({ id: "vintageimprovements:coiling/iron_plate" });
  event.remove({ id: "vintageimprovements:craft/spring_coiling_machine" });
  event.remove({ id: "vintageimprovements:hammering/netherite_ingot" });

  event.remove({ output: "vintageimprovements:vanadium_nugget" });

  event.remove({ type: "vintageimprovements:pressurizing", mod: "vintageimprovements" });
  event.remove({ mod: "vintageimprovements", type: "vintageimprovements:laser_cutting" });

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

  //TFC heating
  event.recipes.tfc
    .heating("vintageimprovements:iron_spring", 1535)
    .resultFluid(Fluid.of("tfc:metal/cast_iron", 50))
    .id("twt:heating/iron_spring");
  event.recipes.tfc
    .heating("vintageimprovements:steel_spring", 1540)
    .resultFluid(Fluid.of("tfc:metal/steel", 50))
    .id("twt:heating/steel_spring");

  //coiling
  event.recipes.vintageimprovements
    .coiling(Item.of("vintageimprovements:steel_spring"), "tfc:metal/rod/steel")
    .processingTime(200)
    .springColor("5b6e72")
    .id("twt:coiling/steel_spring");
  event.recipes.vintageimprovements
    .coiling(Item.of("vintageimprovements:iron_spring"), "tfc:metal/rod/wrought_iron")
    .processingTime(200)
    .springColor("9e9e9e")
    .id("twt:coiling/iron_spring");

  //polishing
  $gems.forEach((gem) => {
    event.recipes.vintageimprovements
      .polishing([`tfc:gem/${gem}`, Item.of(`tfc:powder/${gem}`, 2).withChance(0.5)], `tfc:ore/${gem}`)
      .processingTime(150)
      .speedLimits(2)
      .id(`twt:polishing/${gem}`);
  });
  $rock.forEach((rock) => {
    event.recipes.vintageimprovements
      .polishing(
        [`tfc:rock/smooth/${rock}`, Item.of(`tfc:rock/loose/${rock}`, 2).withChance(0.3)],
        `tfc:rock/raw/${rock}`,
      )
      .processingTime(200)
      .id(`twt:polishing/${rock}`);
  });

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
