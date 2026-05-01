"use strict";

/**
 * @param {Internal.RecipesEventJS} event
 */
const VintageimprovementsRecipes = (event) => {
  //Removals
  event.remove({ id: "vintageimprovements:crushing/scoria" });
  event.remove({ id: "vintageimprovements:crushing/scoria_recycling" });
  event.remove({ id: /^vintageimprovements:pressing\/.*_ingot$/ });
  event.remove({ id: /^vintageimprovements:craft\/.*_rod$/ });
  event.remove({ id: /^vintageimprovements:craft\/.*_wire$/ });
  event.remove({ id: /^vintageimprovements:coiling\/.*_rod$/ });
  event.remove({ id: /^vintageimprovements:coiling\/.*_wire$/ });
  event.remove({ id: /^vintageimprovements:coiling\/.*_plate$/ });
  event.remove({ id: /^vintageimprovements:coiling\/.*_ingot$/ });
  event.remove({ id: "vintageimprovements:curving/iron_sheet" });
  event.remove({ id: "vintageimprovements:coiling/iron_plate" });
  event.remove({ id: "vintageimprovements:craft/spring_coiling_machine" });
  event.remove({ id: "vintageimprovements:hammering/netherite_ingot" });
  event.remove({ id: "vintageimprovements:craft/vacuum_chamber" });
  event.remove({ id: /^vintageimprovements:.*_curving_head$/ });
  event.remove({ id: "vintageimprovements:craft/curving_press" });

  event.remove({ output: "vintageimprovements:vanadium_nugget" });

  event.remove({ type: "vintageimprovements:pressurizing", mod: "vintageimprovements" });
  event.remove({ type: "vintageimprovements:curving", mod: "vintageimprovements" });
  event.remove({ type: "vintageimprovements:vacuumizing", mod: "vintageimprovements" });
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
  const METAL_HAMMERING = {
    raw_iron_bloom: {
      prefix: "tfc:",
      output: "tfc:refined_iron_bloom",
      anvilBlock: "tfc:metal/block/wrought_iron_slab",
    },
    refined_iron_bloom: {
      prefix: "tfc:",
      output: "tfc:metal/ingot/wrought_iron",
      anvilBlock: "tfc:metal/block/wrought_iron_slab",
    },
    pig_iron: {
      prefix: "tfc:metal/ingot/",
      output: "tfc:metal/ingot/steel",
      anvilBlock: "tfc:metal/block/steel_slab",
    },
    high_carbon_black_steel: {
      prefix: "tfc:metal/ingot/",
      output: "tfc:metal/ingot/black_steel",
      anvilBlock: "tfc:metal/block/black_steel_slab",
    },
    high_carbon_blue_steel: {
      prefix: "tfc:metal/ingot/",
      output: "tfc:metal/ingot/blue_steel",
      anvilBlock: "tfc:metal/block/blue_steel_slab",
    },
    high_carbon_red_steel: {
      prefix: "tfc:metal/ingot/",
      output: "tfc:metal/ingot/red_steel",
      anvilBlock: "tfc:metal/block/red_steel_slab",
    },
  };
  Object.entries(METAL_HAMMERING).forEach(([metal, data]) => {
    let input = `${data.prefix}${metal}`;
    let output = data.output;
    let anvil = data.anvilBlock;
    let recipeId = `twt:hammering/${metal}`;

    event.recipes.vintageimprovements.hammering(output, input).hammerBlows(4).anvilBlock(anvil).id(recipeId);
  });

  //centrifugation
  const ALLOYS_TO_METALS = {
    bronze: { outputs: 2, tin: 1, copper: 8, total: 9 },
    brass: { outputs: 2, zinc: 1, copper: 8, total: 9 },
    rose_gold: { outputs: 2, copper: 2, gold: 6, total: 8 },
    sterling_silver: { outputs: 2, copper: 1, silver: 2, total: 3 },
    bismuth_bronze: { outputs: 3, bismuth: 1, zinc: 2, copper: 4, total: 7 },
    black_bronze: { outputs: 3, gold: 1, silver: 1, copper: 2, total: 4 },
    unknown: { outputs: 6, copper: 1, zinc: 1, bismuth: 1, tin: 1, silver: 1, gold: 1, total: 6 },
  };

  const metalFluid = (metal, amount) => {
    return Fluid.of(`tfc:metal/${metal}`, amount);
  };
  Object.entries(ALLOYS_TO_METALS).forEach(([alloy, data]) => {
    let components = Object.entries(data).filter(([key]) => key !== "outputs" && key !== "total");

    if (components.length !== data.outputs) {
      console.warn(`twt: ${alloy} has ${components.length} components but output declares ${data.outputs}`);
    }

    let outputs = components.slice(0, data.outputs).map(([metal, amount]) => metalFluid(metal, amount));

    event.recipes.vintageimprovements
      .centrifugation(outputs, metalFluid(alloy, data.total))
      .processingTime(600)
      .minimalRPM(256)
      .id(`twt:centrifugation/${alloy}`);
  });

  event.recipes.vintageimprovements
    .centrifugation([Fluid.of("tfc:vinegar", 1), Fluid.of("tfc:salt_water", 9)], Fluid.of("tfc:brine", 10))
    .processingTime(300)
    .minimalRPM(128)
    .id("twt:centrifugation/brine");
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
