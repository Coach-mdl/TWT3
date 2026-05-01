"use strict";

const Createdieselgenerators = (event) => {
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

  event.remove({ type: "createdieselgenerators:wire_cutting" });
  event.remove({ type: "createdieselgenerators:hammering" });

  //replaceInput
  event.replaceInput(
    { id: "createdieselgenerators:crafting/entity_filter" },
    "#minecraft:wool",
    "#exposure:photo_papers",
  );
  event.replaceInput(
    { id: "createdieselgenerators:crafting/engine_turbocharger" },
    "#railways:internal/plates/iron_plates",
    "magistuarmory:steel_plate",
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
    "magistuarmory:steel_plate",
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
      P: "magistuarmory:steel_plate",
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
      I: "antiquelegacy:iron_plate",
      S: "tfc:metal/sheet/steel",
      P: "tfc:steel_pipe",
      C: "minecraft:clock",
    })
    .id("twt:shaped/distillation_controller");
  event.recipes.kubejs
    .shaped("createdieselgenerators:oil_scanner", ["PCP", "PTP", " p "], {
      P: "magistuarmory:steel_plate",
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
};
