"use strict";

/**
 * @param {Internal.RecipesEventJS} event
 */

const powergridRecipes = (event) => {
  //Shapeless
  event.recipes.kubejs
    .shapeless("powergrid:wire", ["powergrid:insulated_copper_wire", "powergrid:wire_cutter"])
    .keepIngredient("powergrid:wire_cutter")
    .id("twt:powergrid/shapeless/copper_wire");
  event.recipes.kubejs
    .shapeless("powergrid:copper_cord", ["powergrid:string_light_cord", "powergrid:wire_cutter"])
    .keepIngredient("powergrid:wire_cutter")
    .id("twt:powergrid/shapeless/copper_cord");
  event.recipes.kubejs
    .shapeless(Item.of("powergrid:insulated_copper_wire", 2), [
      "powergrid:copper_cord",
      "powergrid:wire_cutter",
    ])
    .keepIngredient("powergrid:wire_cutter")
    .id("twt:powergrid/shapeless/insulated_copper_wire");

  //Shaped
  event.recipes.kubejs
    .shaped("kubejs:unprepared_copper_coil", ["WWW", "WRW", "WWW"], {
      W: "powergrid:wire",
      R: "tfc:metal/rod/copper",
    })
    .id("twt:powergrid/shaped/unprepared_copper_coil");
  event.recipes.kubejs
    .shaped("kubejs:unprepared_iron_coil", ["WWW", "WRW", "WWW"], {
      W: "powergrid:iron_wire",
      R: "tfc:metal/rod/wrought_iron",
    })
    .id("twt:powergrid/shaped/unprepared_iron_coil");
  event.recipes.kubejs
    .shaped("powergrid:constant_speed_motor", ["BMB", "ESE", "RCR"], {
      B: "tfc:metal/sheet/brass",
      M: "create:precision_mechanism",
      E: "create:electron_tube",
      S: "create:shaft",
      R: "tfc:metal/rod/steel",
      C: "powergrid:electric_motor",
    })
    .id("twt:powergrid/shaped/constant_speed_motor");
  event
    .shaped(Item.of("powergrid:wire_connector"), ["   ", " A ", " B "], {
      B: "create:andesite_alloy",
      A: "tfc:metal/rod/copper",
    })
    .id("twt:powergrid/shaped/wire_connector");
  event
    .shaped(Item.of("powergrid:heavy_wire_connector"), [" A ", " A ", " B "], {
      A: "tfc:metal/rod/wrought_iron",
      B: "minecraft:terracotta",
    })
    .id("twt:powergrid/shaped/heavy_wire_connector");
  event
    .shaped(Item.of("powergrid:device_connector"), ["   ", "ABA", "CDC"], {
      C: "create:andesite_alloy",
      D: "powergrid:diode",
      B: "powergrid:socket",
      A: "powergrid:wire_connector",
    })
    .id("twt:powergrid/shaped/device_connector");

  //mechanical_crafting
  event.recipes.create
    .mechanical_crafting("powergrid:basin_heater", ["RRRRR", "NNNNN", "SnHnS", "SnCnS"], {
      R: "powergrid:resistive_coil",
      N: "tfc:metal/ingot/nickel",
      S: "tfc:metal/sheet/steel",
      n: "tfc:metal/rod/nickel",
      H: "powergrid:heating_coil",
      C: "powergrid:conductive_casing",
    })
    .id("twt:powergrid/mechanical_crafting/basin_heater");

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
        .maxChargeRate(2),
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
    .id("twt:powergrid/sequenced/electrical_gizmo");
  event.recipes.create
    .sequenced_assembly(Item.of("powergrid:transformer_core", 2), "powergrid:resistive_coil", [
      event.recipes.create.deploying("powergrid:incomplete_transformer_core", [
        "powergrid:incomplete_transformer_core",
        "tfc:metal/sheet/steel",
      ]),
      event.recipes.create.deploying("powergrid:incomplete_transformer_core", [
        "powergrid:incomplete_transformer_core",
        "tfc:metal/sheet/black_steel",
      ]),
      event.recipes.create.deploying("powergrid:incomplete_transformer_core", [
        "powergrid:incomplete_transformer_core",
        "tfc:metal/sheet/steel",
      ]),
      event.recipes.create.cutting(
        "powergrid:incomplete_transformer_core",
        "powergrid:incomplete_transformer_core",
      ),
    ])
    .transitionalItem("powergrid:incomplete_transformer_core")
    .loops(1)
    .id("twt:powergrid/sequenced/transformer_core");

  //Magnetization
  event
    .custom({
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
    })
    .id("twt:powergrid/magnetization/magnet");

  //coiling
  event.recipes.vintageimprovements
    .coiling(Item.of("powergrid:copper_coil"), "kubejs:unprepared_copper_coil")
    .processingTime(200)
    .springColor("a45642")
    .id("twt:powergrid/coiling/copper_coil");
  event.recipes.vintageimprovements
    .coiling(Item.of("powergrid:wire", 4), "tfc:metal/sheet/copper")
    .processingTime(400)
    .springColor("a45642")
    .id("twt:powergrid/coiling/copper_wire");
  event.recipes.vintageimprovements
    .coiling(Item.of("powergrid:resistive_coil"), "kubejs:unprepared_iron_coil")
    .processingTime(200)
    .springColor("9e9e9e")
    .id("twt:powergrid/coiling/resistive_coil");
  event.recipes.vintageimprovements
    .coiling(Item.of("powergrid:iron_wire", 4), "tfc:metal/sheet/wrought_iron")
    .processingTime(400)
    .springColor("9e9e9e")
    .id("twt:powergrid/coiling/iron_wire");
  event.recipes.vintageimprovements
    .coiling(Item.of("powergrid:golden_wire", 4), "tfc:metal/sheet/gold")
    .processingTime(400)
    .springColor("EFBF04")
    .id("twt:powergrid/coiling/golden_wire");

  //TFC Welding
  event.recipes.tfc
    .welding("powergrid:wire_cutter", "tfc:metal/rod/wrought_iron", "tfc:metal/shears/wrought_iron")
    .id("twt:powergrid/welding/wire_cutter");

  //TFC Heating
  event.recipes.tfc
    .heating("powergrid:zinc_sheet", 420)
    .resultFluid(Fluid.of("tfc:metal/zinc", 100))
    .id("twt:powergrid/heating/zinc_sheet");
  event.recipes.tfc
    .heating("powergrid:wire", 1080)
    .resultFluid(Fluid.of("tfc:metal/copper", 50))
    .id("twt:powergrid/heating/copper_wire");
  event.recipes.tfc
    .heating("powergrid:iron_wire", 1585)
    .resultFluid(Fluid.of("tfc:metal/cast_iron", 50))
    .id("twt:powergrid/heating/iron_wire");
  event.recipes.tfc
    .heating("powergrid:golden_wire", 1060)
    .resultFluid(Fluid.of("tfc:metal/gold", 50))
    .id("twt:powergrid/heating/golden_wire");
};

const powergridBlockTags = (event) => {
  event.add("powergrid:conductive_ground", [
    /^tfc:metal\/block\/silver.*/,
    /^tfc:metal\/block\/sterling_silver.*/,
    /^tfc:metal\/block\/copper.*/,
    /^tfc:metal\/block\/gold.*/,
    /^tfc:metal\/block\/silver.*/,
    /^tfc:metal\/block\/zinc.*/,
    /^tfc:metal\/block\/nickel.*/,
    /^tfc:metal\/block\/wrought_iron.*/,
    "tfc:metal/bars/wrought_iron",
    "tfc:metal/bars/copper",
  ]);
};
