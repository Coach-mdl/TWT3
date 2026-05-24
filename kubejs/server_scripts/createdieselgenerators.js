"use strict";

const CDGRecipes = (event) => {
  //event.printAllTypes();

  //removals
  event.remove({ id: /^createdieselgenerators:crushing\/wood_chip_.*$/ });
  event.remove({ id: "createdieselgenerators:compression_molding/bucket" });
  event.remove({ id: "createdieselgenerators:crafting/wire_cutters" });
  event.remove({ id: "createdieselgenerators:crafting/hammer" });
  event.remove({ id: "createdieselgenerators:crafting/engine_piston" });
  event.remove({ id: "createdieselgenerators:crafting/engine_silencer" });
  event.remove({ id: "createdieselgenerators:crafting/diesel_engine" });
  event.remove({ id: "createdieselgenerators:crafting/large_diesel_engine" });
  event.remove({ id: "createdieselgenerators:crafting/huge_diesel_engine" });
  event.remove({ id: "createdieselgenerators:crafting/distillation_controller" });
  event.remove({ id: "createdieselgenerators:crafting/oil_scanner" });
  event.remove({ id: "createdieselgenerators:crafting/pumpjack_hole" });
  event.remove({ id: "createdieselgenerators:crafting/pumpjack_bearing" });
  event.remove({ id: "createdieselgenerators:crafting/lighter" });
  event.remove({ id: "createdieselgenerators:crafting/canister" });
  event.remove({ id: "createdieselgenerators:crafting/basin_lid" });
  event.remove({ id: "createdieselgenerators:crafting/asphalt_block" });
  event.remove({ id: "createdieselgenerators:crafting/bulk_fermenter" });
  event.remove({ id: "createdieselgenerators:crafting/burner" });
  event.remove({ id: "createdieselgenerators:basin_fermenting/magma_cream" });
  event.remove({ id: "createdieselgenerators:bulk_fermenting/magma_cream" });
  event.remove({ id: "createdieselgenerators:basin_fermenting/dough" });
  event.remove({ id: "createdieselgenerators:basin_fermenting/fermentable" });
  event.remove({ id: "createdieselgenerators:basin_fermenting/fermented_spider_eye" });
  event.remove({ id: "createdieselgenerators:basin_fermenting/golden_carrot" });
  event.remove({ id: "createdieselgenerators:basin_fermenting/golden_apple" });
  event.remove({ id: "createdieselgenerators:bulk_fermenting/fermentable" });
  event.remove({ id: "createdieselgenerators:cutting/bar_mold" });

  event.remove({ type: "createdieselgenerators:wire_cutting" });
  event.remove({ type: "createdieselgenerators:hammering" });
  event.remove({ type: "createdieselgenerators:casting" });

  //replaceInput
  event.replaceInput(
    { id: "createdieselgenerators:crafting/entity_filter" },
    "#minecraft:wool",
    "#exposure:photo_papers",
  );
  event.replaceInput(
    { id: "createdieselgenerators:crafting/engine_turbocharger" },
    "#railways:internal/plates/iron_plates",
    "tfc:metal/sheet/steel",
  );
  event.replaceInput(
    { id: "createdieselgenerators:crafting/engine_turbocharger" },
    "#forge:ingots/zinc",
    "tfc:metal/sheet/steel",
  );
  event.replaceInput(
    { id: "createdieselgenerators:crafting/engine_turbocharger" },
    "create:fluid_pipe",
    "tfc:steel_pipe",
  );
  event.replaceInput(
    { id: "createdieselgenerators:mechanical_crafting/pumpjack_crank" },
    "create:andesite_alloy",
    "tfc:metal/sheet/nickel",
  );
  event.replaceInput(
    { id: "createdieselgenerators:mechanical_crafting/pumpjack_crank" },
    "create:shaft",
    "tfc:metal/rod/steel",
  );
  event.replaceInput(
    { id: "createdieselgenerators:mechanical_crafting/pumpjack_crank" },
    "#forge:plates/iron",
    "tfc:metal/sheet/steel",
  );
  event.replaceInput(
    { id: "createdieselgenerators:mechanical_crafting/pumpjack_crank" },
    "#forge:ingots/zinc",
    "create:precision_mechanism",
  );
  event.replaceInput(
    { id: "createdieselgenerators:crafting/pumpjack_head" },
    "#forge:ingots/zinc",
    "tfc:metal/rod/steel",
  );
  event.replaceInput(
    { id: "createdieselgenerators:crafting/pumpjack_head" },
    "create:andesite_alloy",
    "tfc:metal/double_sheet/nickel",
  );
  event.replaceInput(
    { id: "createdieselgenerators:mixing/asphalt_block" },
    "minecraft:gravel",
    "#tfc:rock/gravel",
  );

  //shapeless
  event.recipes.tfc
    .extra_products_shapeless_crafting(
      [
        Item.of("create:electron_tube", 4),
        Item.of("create:precision_mechanism", 2),
        Item.of("tfc:brass_mechanisms", 2),
      ],
      event.recipes.tfc.damage_inputs_shapeless_crafting(
        event.recipes.minecraft.crafting_shapeless("createdieselgenerators:diesel_engine", [
          "supplementaries:wrench",
          "#tfc:hammers",
          "createdieselgenerators:large_diesel_engine",
        ]),
      ),
    )
    .id("twt:shapeless/modular_engine_recycling");

  //Shaped
  event.recipes.kubejs
    .shaped("createdieselgenerators:engine_piston", ["S  ", " R ", "  P"], {
      S: "tfc:metal/sheet/steel",
      R: "tfc:metal/rod/steel",
      P: "tfc:metal/sheet/steel",
    })
    .id("twt:shaped/engine_piston");
  event.recipes.kubejs
    .shaped("createdieselgenerators:engine_silencer", ["SC ", " P ", " CS"], {
      S: "tfc:metal/sheet/steel",
      P: "tfc:steel_pipe",
      C: "#tfc:high_quality_cloth",
    })
    .id("twt:shaped/engine_silencer");
  event.recipes.kubejs
    .shaped("createdieselgenerators:large_diesel_engine", ["EME", "PDP", "EME"], {
      E: "create:electron_tube",
      M: "tfc:brass_mechanisms",
      P: "create:precision_mechanism",
      D: "createdieselgenerators:diesel_engine",
    })
    .id("twt:shaped/large_diesel_engine");
  event.recipes.kubejs
    .shaped("createdieselgenerators:distillation_controller", ["ISI", "PCP", "ISI"], {
      I: "create:iron_sheet",
      S: "tfc:metal/sheet/steel",
      P: "tfc:steel_pipe",
      C: "minecraft:clock",
    })
    .id("twt:shaped/distillation_controller");
  event.recipes.kubejs
    .shaped("createdieselgenerators:oil_scanner", ["PCP", "PTP", " p "], {
      P: "tfc:metal/sheet/steel",
      C: "minecraft:clock",
      T: "#tfc:tuyeres",
      p: "#tfc:propicks",
    })
    .id("twt:shaped/oil_scanner");
  event.recipes.kubejs
    .shaped("createdieselgenerators:pumpjack_hole", ["SPS", "PCP", "SPS"], {
      S: "tfc:metal/sheet/copper",
      P: "create:fluid_pipe",
      C: "create:chain_conveyor",
    })
    .id("twt:shaped/pumpjack_hole");
  event.recipes.kubejs
    .shaped("createdieselgenerators:lighter", [" p ", "SsS", " F "], {
      p: "create:brass_sheet",
      S: "tfc:metal/sheet/brass",
      s: "#forge:string",
      F: "minecraft:flint_and_steel",
    })
    .id("twt:shaped/lighter");
  event.recipes.kubejs
    .shaped("createdieselgenerators:canister", ["RVR", "SBS", "PSP"], {
      R: "tfc:metal/rod/wrought_iron",
      V: "#create:valve_handles",
      S: "tfc:metal/sheet/wrought_iron",
      B: "#tfc:barrels",
      P: "create:iron_sheet",
    })
    .id("twt:shaped/canister");
  event.recipes.kubejs
    .shaped("createdieselgenerators:basin_lid", ["R R", "SCS", "AAA"], {
      A: "create:andesite_alloy",
      S: "tfc:metal/sheet/steel",
      C: "minecraft:clock",
      R: "tfc:metal/rod/steel",
    })
    .id("twt:shaped/basin_lid");
  event.recipes.kubejs
    .shaped("createdieselgenerators:bulk_fermenter", ["P P", "SBS", "P P"], {
      P: "tfc:metal/sheet/steel",
      S: "tfc:metal/sheet/steel",
      B: "#tfc:barrels",
    })
    .id("twt:shaped/bulk_fermenter");

  //mechanical crafting
  event.recipes.create
    .mechanical_crafting(
      "createdieselgenerators:diesel_engine",
      ["PSBSP", "bsMsb", "BMCMB", "bsMsb", "PSBSP"],
      {
        P: "createdieselgenerators:engine_piston",
        S: "powergrid:spark_gap",
        B: "tfc:metal/sheet/brass",
        b: "create:brass_sheet",
        s: "tfc:metal/double_sheet/steel",
        M: "create:precision_mechanism",
        C: "createdieselgenerators:canister",
      },
    )
    .id("twt:mechanical_crafting/diesel_engine");
  event.recipes.create
    .mechanical_crafting(
      "createdieselgenerators:huge_diesel_engine",
      [" RRR ", " SRS ", "BPsPB", "BCbCB", " DDD "],
      {
        R: "tfc:metal/rod/steel",
        S: "tfc:metal/sheet/brass",
        P: "create:precision_mechanism",
        B: "tfc:metal/double_sheet/brass",
        s: "powergrid:spark_gap",
        C: "createdieselgenerators:canister",
        b: "create:brass_block",
        D: "tfc:metal/double_sheet/steel",
      },
    )
    .id("twt:mechanical_crafting/huge_diesel_engine");
  event.recipes.create
    .mechanical_crafting(
      "createdieselgenerators:pumpjack_bearing",
      ["SSSSS", "NMPMN", "NPBPN", "NEPEN", "NNNNN"],
      {
        S: "tfc:metal/sheet/steel",
        N: "tfc:metal/sheet/nickel",
        M: "tfc:brass_mechanisms",
        P: "create:precision_mechanism",
        B: "create:mechanical_bearing",
        E: "create:electron_tube",
      },
    )
    .id("twt:mechanical_crafting/pumpjack_bearing");
  event.recipes.create
    .mechanical_crafting("createdieselgenerators:burner", [" RBR ", " sPs ", " RFR ", "SAbAS", " SCS "], {
      R: "tfc:metal/rod/steel",
      B: "tfc:metal/sheet/brass",
      s: "create:shaft",
      P: "create:smart_fluid_pipe",
      F: "createdieselgenerators:lighter",
      S: "tfc:metal/sheet/steel",
      A: "create:andesite_alloy",
      b: "create:empty_blaze_burner",
      C: "createdieselgenerators:canister",
    })
    .id("twt:mechanical_crafting/burner");

  //basin_processing
  event
    .custom({
      type: "createdieselgenerators:basin_fermenting",
      results: [
        {
          item: "tfc:powder/salt",
          count: 6,
        },
        {
          fluid: "minecraft:water",
          amount: 500,
        },
      ],
      ingredients: [
        {
          fluid: "tfc:salt_water",
          amount: 1000,
        },
      ],
      heatRequirement: "superheated",
      processingTime: 2000,
    })
    .id("twt:basin_fermenting/desalination");
  event
    .custom({
      type: "createdieselgenerators:basin_fermenting",
      results: [
        {
          item: "minecraft:golden_carrot",
        },
      ],
      ingredients: [
        {
          tag: "forge:vegetables/carrot",
        },
        {
          item: "create:golden_sheet",
        },
        {
          fluid: "firmalife:mead",
          amount: 250,
        },
      ],
      heatRequirement: "heated",
      processingTime: 1000,
    })
    .id("twt:basin_fermenting/golden_carrot");
  event
    .custom({
      type: "createdieselgenerators:basin_fermenting",
      results: [
        {
          item: "minecraft:golden_apple",
        },
      ],
      ingredients: [
        {
          tag: "tfc:foods/apples",
        },
        {
          item: "tfc:metal/sheet/gold",
        },
        {
          item: "tfc:metal/sheet/gold",
        },
        {
          fluid: "tfcagedalcohol:aged_mead",
          amount: 250,
        },
      ],
      heatRequirement: "heated",
      processingTime: 1000,
    })
    .id("twt:basin_fermenting/golden_apple");

  //bulk_fermenter
  const GRAIN_TO_BOOZE = {
    beer: { ingredient: { item: "tfc:food/barley_flour" }, output: "tfc:beer" },
    cider: { ingredient: { tag: "tfc:foods/apples" }, output: "tfc:cider" },
    rum: { ingredient: { item: "minecraft:sugar" }, output: "tfc:rum" },
    sake: { ingredient: { item: "tfc:food/rice_flour" }, output: "tfc:sake" },
    vodka: { ingredient: { item: "tfc:food/potato" }, output: "tfc:vodka" },
    whiskey: { ingredient: { item: "tfc:food/wheat_flour" }, output: "tfc:whiskey" },
    corn_whiskey: { ingredient: { item: "tfc:food/maize_flour" }, output: "tfc:corn_whiskey" },
    rye_whiskey: { ingredient: { item: "tfc:food/rye_flour" }, output: "tfc:rye_whiskey" },
    mead: { ingredient: { item: "firmalife:raw_honey" }, output: "firmalife:mead" },
  };

  Object.entries(GRAIN_TO_BOOZE).forEach(([booze, data]) => {
    event
      .custom({
        type: "createdieselgenerators:bulk_fermenting",
        results: [
          {
            fluid: data.output,
            amount: 1000,
          },
        ],
        ingredients: [
          data.ingredient,
          {
            fluid: "minecraft:water",
            amount: 1000,
          },
        ],
        processingTime: 1000,
      })
      .id(`twt:bulk_fermenting/${booze}`);
  });
  event
    .custom({
      type: "createdieselgenerators:bulk_fermenting",
      results: [
        {
          fluid: "createdieselgenerators:ethanol",
          amount: 600,
        },
      ],
      ingredients: [
        {
          item: "tfc:food/maize_grain",
        },
        {
          fluid: "minecraft:water",
          amount: 200,
        },
      ],
      heatRequirement: "heated",
      processingTime: 500,
    })
    .id(`twt:bulk_fermenting/ethanol`);

  //distillation
  event
    .custom({
      type: "createdieselgenerators:distillation",
      results: [
        {
          fluid: "tfc:olive_oil",
          amount: 100,
        },
        {
          fluid: "tfc:olive_oil_water",
          amount: 25,
        },
      ],
      ingredients: [
        {
          fluid: "tfc:olive_oil_water",
          amount: 250,
        },
      ],
      heatRequirement: "heated",
      processingTime: 250,
    })
    .id("twt:distillation/olive_oil");

  //compression_molding
  event
    .custom({
      type: "createdieselgenerators:compression_molding",
      ingredients: [
        {
          item: "minecraft:clay_ball",
        },
      ],
      mold: "createdieselgenerators:bowl",
      results: [
        {
          item: "tfc:ceramic/unfired_bowl",
        },
      ],
    })
    .id("twt:compression_molding/unfired_bowl");
  event
    .custom({
      type: "createdieselgenerators:compression_molding",
      ingredients: [
        {
          item: "minecraft:clay_ball",
        },
        {
          item: "minecraft:clay_ball",
        },
        {
          item: "minecraft:clay_ball",
        },
        {
          item: "minecraft:clay_ball",
        },
        {
          item: "minecraft:clay_ball",
        },
      ],
      mold: "createdieselgenerators:bowl",
      results: [
        {
          item: "tfc:ceramic/unfired_pot",
        },
      ],
    })
    .id("twt:compression_molding/unfired_pot");
  event
    .custom({
      type: "createdieselgenerators:compression_molding",
      ingredients: [
        {
          item: "minecraft:clay_ball",
        },
      ],
      mold: "createdieselgenerators:lines",
      results: [
        {
          item: "rnr:unfired_roof_tile",
        },
      ],
    })
    .id("twt:compression_molding/unfired_roof_tile");
  event
    .custom({
      type: "createdieselgenerators:compression_molding",
      ingredients: [
        {
          item: "minecraft:clay_ball",
        },
      ],
      mold: "createdieselgenerators:lines",
      results: [
        {
          item: "tfc:ceramic/unfired_ingot_mold",
        },
      ],
    })
    .id("twt:compression_molding/unfired_ingot_mold");
  event
    .custom({
      type: "createdieselgenerators:compression_molding",
      ingredients: [
        {
          item: "tfc:fire_clay",
        },
      ],
      mold: "createdieselgenerators:lines",
      results: [
        {
          item: "tfc:ceramic/unfired_fire_ingot_mold",
        },
      ],
    })
    .id("twt:compression_molding/unfired_fire_ingot_mold");

  $toolmetals.forEach((metal) => {
    event
      .custom({
        type: "createdieselgenerators:compression_molding",
        ingredients: [
          {
            item: `tfc:metal/ingot/${metal}`,
          },
        ],
        mold: "createdieselgenerators:chain",
        heatRequirement: "heated",
        results: [
          {
            item: `tfc:metal/chain/${metal}`,
            count: 16,
          },
        ],
      })
      .id(`twt:compression_molding/${metal}_chain`);
  });
};
