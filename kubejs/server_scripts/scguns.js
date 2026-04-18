"use strict";

const ScgunsRecipes = (event) => {
  //Removals
  event.remove({ id: /^scguns:create\/recycling.*/ });
  event.remove({ id: "scguns:create/vehement_coal_ore" });
  event.remove({ id: "scguns:create/deepslate_coal_ore" });
  event.remove({ id: "scguns:create/sulfur_ore" });
  event.remove({ id: "scguns:create/nether_coal_ore" });
  event.remove({ id: "scguns:create/basalt_recycling" });
  event.remove({ output: "scguns:treated_iron_blend", mod: "scguns" });
  event.remove({ id: "scguns:treated_iron/treated_iron_ingot_from_blasting_treated_iron_blend" });
  event.remove({ id: "scguns:create/soul_soil" });
  event.remove({ type: "scguns:powered_macerator" });
  event.remove({ type: "scguns:macerator" });
  event.remove({ id: "scguns:powered_macerator" });
  event.remove({ id: "scguns:macerator" });
  event.remove({ id: "scguns:treated_iron/treated_iron_bucket" });
  event.remove({ id: "scguns:create/ancient_brass_brass_from_mixing" });
  event.remove({ id: /^scguns:create\/mechanical_crafting\/.*/ });

  //Replace Input
  event.replaceInput({ mod: "scguns" }, "#minecraft:wool", "#tfc:high_quality_cloth");
  event.replaceOutput({ mod: "scguns" }, "scguns:sulfur_dust", "tfc:powder/sulfur");

  //TFC Heating
  event.recipes.tfc
    .heating("scguns:ancient_brass", 930)
    .resultFluid(Fluid.of("tfc:metal/brass", 100))
    .id("twt:heating/ancient_brass");
};

const ScgunsData = (event) => {
  //TFC Fuels
  event.fuel("scguns:vehement_coal", 1825, 2200, 0.65);

  //TFC Heat Def
  event.itemHeat("scguns:ancient_brass", 2.857, 558.0, 744.0);
};

const ScgunsItemTags = (event) => {};
