"use strict";

/**
 * @param {Internal.RecipesEventJS} event
 */

const PowergridRecipes = (event) => {
  //remove
  event.remove({ id: "powergrid:mechanical_crafting/basin_heater" });
  event.remove({ id: "powergrid:crafting/constant_speed_motor" });
  event.remove({ id: "powergrid:crafting/wire_cutter" });
  event.remove({ id: "powergrid:crafting/copper_coil" });
  event.remove({ id: "powergrid:crafting/resistive_coil" });
  event.remove({ id: "powergrid:cutting/copper_wire_cutting" });
  event.remove({ id: "powergrid:cutting/iron_wire_cutting" });
  event.remove({ id: "powergrid:cutting/gold_wire_cutting" });

  //replaceInput
  event.replaceInput(
    { id: "powergrid:item_application/conductive_casing" },
    "#forge:ingots/zinc",
    "powergrid:zinc_sheet",
  );
  event.replaceInput(
    { id: "powergrid:item_application/conductive_casing" },
    "create:andesite_casing",
    "tfc:metal/block/black_steel",
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
  event.replaceInput({ id: "powergrid:crafting/potato_battery" }, "#forge:crops/potato", "tfc:food/potato");
  event.replaceInput(
    { id: "powergrid:mechanical_crafting/generator_induction_rotor" },
    "create:andesite_alloy",
    "magistuarmory:steel_plate",
  );
  event.replaceInput(
    { id: "powergrid:mechanical_crafting/generator_induction_rotor" },
    "create:shaft",
    "tfc:metal/rod/black_steel",
  );
  event.replaceInput(
    { id: "powergrid:mechanical_crafting/generator_commutator" },
    "create:andesite_alloy",
    "tfc:metal/ingot/black_steel",
  );
  event.replaceInput(
    { id: "powergrid:mechanical_crafting/generator_commutator" },
    "create:andesite_casing",
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
  event.replaceInput({ id: "powergrid:crafting/power_resistor" }, "minecraft:coal_block", "tfc:ore/lignite");
  event.replaceInput(
    { id: "powergrid:mechanical_crafting/electric_motor" },
    "#railways:internal/plates/iron_plates",
    "magistuarmory:steel_plate",
  );
  event.replaceInput(
    { id: "powergrid:crafting/fuse_holder" },
    "#railways:internal/plates/iron_plates",
    "magistuarmory:steel_plate",
  );
  event.replaceInput(
    { id: "powergrid:crafting/fuse_holder" },
    "create:andesite_casing",
    "powergrid:conductive_casing",
  );
  event.replaceInput(
    { id: "powergrid:crafting/electromagnet" },
    "#railways:internal/plates/iron_plates",
    "tfc:metal/double_ingot/wrought_iron",
  );

  //replaceOutput

  //Shaped
  event.recipes.kubejs
    .shaped("kubejs:unprepared_copper_coil", ["WWW", "WRW", "WWW"], {
      W: "powergrid:wire",
      R: "tfc:metal/rod/copper",
    })
    .id("twt:shaped/unprepared_copper_coil");
  event.recipes.kubejs
    .shaped("kubejs:unprepared_iron_coil", ["WWW", "WRW", "WWW"], {
      W: "powergrid:iron_wire",
      R: "tfc:metal/rod/wrought_iron",
    })
    .id("twt:shaped/unprepared_iron_coil");
  event.recipes.kubejs
    .shaped("powergrid:constant_speed_motor", ["BMB", "ESE", "RCR"], {
      B: "tfc:metal/sheet/brass",
      M: "create:precision_mechanism",
      E: "create:electron_tube",
      S: "create:shaft",
      R: "tfc:metal/rod/steel",
      C: "powergrid:electric_motor",
    })
    .id("twt:shaped/constant_speed_motor");
  event.recipes.kubejs
    .shaped(Item.of("powergrid:transformer_core", 4), ["SBS", "SBS", "SBS"], {
      S: "magistuarmory:steel_plate",
      B: "tfc:metal/sheet/black_steel",
    })
    .id("twt:shaped/transformer_core");

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

  //Sequenced
  event.recipes.create
    .sequenced_assembly("powergrid:electrical_gizmo", "powergrid:zinc_sheet", [
      event.recipes.create.deploying("powergrid:incomplete_electrical_gizmo", [
        "powergrid:incomplete_electrical_gizmo",
        "tfc:metal/sheet/black_steel",
      ]),
      event.recipes.create.deploying("powergrid:incomplete_electrical_gizmo", [
        "powergrid:incomplete_electrical_gizmo",
        "powergrid:golden_wire",
      ]),
      event.recipes.create.deploying("powergrid:incomplete_electrical_gizmo", [
        "powergrid:incomplete_electrical_gizmo",
        "powergrid:vfet",
      ]),
      event.recipes.create.deploying("powergrid:incomplete_electrical_gizmo", [
        "powergrid:incomplete_electrical_gizmo",
        "powergrid:integrated_circuit",
      ]),
      event.recipes.vintageimprovements
        .laser_cutting("powergrid:incomplete_electrical_gizmo", "powergrid:incomplete_electrical_gizmo")
        .energyCost(200)
        .maxChargeRate(120),
      event.recipes.create.deploying("powergrid:incomplete_electrical_gizmo", [
        "powergrid:incomplete_electrical_gizmo",
        "powergrid:zinc_sheet",
      ]),
      event.recipes.create.pressing(
        "powergrid:incomplete_electrical_gizmo",
        "powergrid:incomplete_electrical_gizmo",
      ),
    ])
    .transitionalItem("powergrid:incomplete_electrical_gizmo")
    .loops(1)
    .id("twt:sequenced/electrical_gizmo");

  //Magnetization
  event.custom({
    type: "powergrid:magnetization",
    ingredients: [
      {
        item: "tfc:metal/ingot/wrought_iron",
      },
    ],
    results: [
      {
        item: "powergrid:magnet",
      },
    ],
  });

  //coiling
  event.recipes.vintageimprovements
    .coiling(Item.of("powergrid:copper_coil"), "kubejs:unprepared_copper_coil")
    .processingTime(200)
    .springColor("a45642")
    .id("twt:coiling/copper_coil");
  event.recipes.vintageimprovements
    .coiling(Item.of("powergrid:wire", 4), "tfc:metal/sheet/copper")
    .processingTime(400)
    .springColor("a45642")
    .id("twt:coiling/copper_wire");
  event.recipes.vintageimprovements
    .coiling(Item.of("powergrid:resistive_coil"), "kubejs:unprepared_iron_coil")
    .processingTime(200)
    .springColor("9e9e9e")
    .id("twt:coiling/resistive_coil");
  event.recipes.vintageimprovements
    .coiling(Item.of("powergrid:iron_wire", 4), "tfc:metal/sheet/wrought_iron")
    .processingTime(400)
    .springColor("9e9e9e")
    .id("twt:coiling/iron_wire");
  event.recipes.vintageimprovements
    .coiling(Item.of("powergrid:golden_wire", 4), "tfc:metal/sheet/gold")
    .processingTime(400)
    .springColor("EFBF04")
    .id("twt:coiling/golden_wire");

  //TFC Welding
  event.recipes.tfc
    .welding("powergrid:wire_cutter", "tfc:metal/rod/wrought_iron", "tfc:metal/shears/wrought_iron")
    .id("twt:welding/wire_cutter");

  //TFC Heating
  event.recipes.tfc
    .heating("powergrid:zinc_sheet", 420)
    .resultFluid(Fluid.of("tfc:metal/zinc", 100))
    .id("twt:heating/zinc_sheet");
};
