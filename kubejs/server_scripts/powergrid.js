"use strict";

const PowergridRecipes = (event) => {
  //remove
  event.remove({ id: "powergrid:mechanical_crafting/basin_heater" });

  //replaceInput
  event.replaceInput(
    { id: "powergrid:item_application/conductive_casing" },
    "#forge:ingots/zinc",
    "tfc:metal/sheet/black_steel",
  );
  event.replaceInput(
    { id: "powergrid:item_application/conductive_casing" },
    "create:andesite_casing",
    "create:brass_casing",
  );
  event.replaceInput(
    { id: "powergrid:crafting/growth_lamp" },
    "#railways:internal/plates/iron_plates",
    "magistuarmory:steel_plate",
  );
  event.replaceInput(
    { id: "powergrid:crafting/light_bulb" },
    "#railways:internal/plates/iron_plates",
    "magistuarmory:steel_plate",
  );
  event.replaceInput(
    { id: "powergrid:crafting/heating_coil" },
    "#railways:internal/plates/iron_plates",
    "magistuarmory:steel_plate",
  );
  event.replaceInput(
    { id: "powergrid:crafting/potato_battery" },
    "#forge:crops/potato",
    "tfc:food/potato",
  );
  event.replaceInput(
    { id: "powergrid:mechanical_crafting/generator_induction_rotor" },
    "create:andesite_alloy",
    "magistuarmory:steel_plate",
  );
  event.replaceInput(
    { id: "powergrid:mechanical_crafting/generator_induction_rotor" },
    "create:shaft",
    "tfc:metal/rod/black_steel",
  event.replaceInput(
    { id: "powergrid:mechanical_crafting/generator_commutator" },
    "create:andesite_alloy",
    "tfc:metal/ingot/black_steel",
  event.replaceInput(
    { id: "powergrid:mechanical_crafting/generator_commutator" },
    "create:andesite_casingy",
    "powergrid:conductive_casing",
  );
  event.replaceInput(
    { id: "powergrid:crafting/hv_breaker" },
    "minecraft:iron_ingot",
    "tfc:metal/ingot/black_steel",
  );
  event.replaceInput(
    { id: "powergrid:crafting/contactor" },
    "minecraft:iron_ingot",
    "tfc:metal/ingot/black_steel",
  );
  event.replaceInput(
    { id: "powergrid:crafting/power_resistor" },
    "minecraft:coal_block",
    "tfc:ore/lignite",
  );
  event.replaceInput(
    { id: "powergrid:mechanical_crafting/electric_motor" },
    "#railways:internal/plates/iron_plates",
    "magistuarmory:steel_plate",
  );

  //replaceOutput

  //mechanical_crafting
  event.recipes.create
    .mechanical_crafting("powergrid:basin_heater", ["RRRRR", "NNNNN", "SnHnS", "SnCnS"], {
      R: "powergrid:resistive_coil",
      N: "tfc:metal/ingot/nickel",
      S: "magistuarmory:steel_plate",
      n: "tfc:metal/rod/nickel",
      H: "powergrid:heating_coil",
      C: "powergrid:conductive_casing",
    })
    .id("twt:mechanical_crafting/basin_heater");
};
