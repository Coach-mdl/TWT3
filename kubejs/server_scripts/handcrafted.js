"use strict";

const handcraftedRecipes = (event) => {
  //SHAPED
  event
    .shaped("handcrafted:hammer", [" L", "S "], {
      L: "#minecraft:logs",
      S: "#forge:rods/wooden",
    })
    .id("twt:handcrafted/shaped/decor_hammer_manual_only");
  event
    .shaped("handcrafted:hammer", ["L ", " S"], {
      L: "#minecraft:logs",
      S: "#forge:rods/wooden",
    })
    .id("twt:handcrafted/shaped/decor_hammer_2_manual_only");

  event
    .shaped(Item.of("handcrafted:bricks_pillar_trim"), ["AB ", " B ", "   "], {
      A: "tfc:mortar",
      B: "minecraft:brick",
    })
    .id("twt:handcrafted/shaped/bricks_pillar_trim");

  event
    .shaped(Item.of("handcrafted:bricks_corner_trim"), ["AA ", "AB ", "   "], {
      B: "tfc:mortar",
      A: "minecraft:brick",
    })
    .id("twt:handcrafted/shaped/bricks_corner_trim");

  event
    .shaped(Item.of("handcrafted:blackstone_pillar_trim"), ["AB ", " B ", "   "], {
      A: "tfc:mortar",
      B: "beneath:blackstone_brick",
    })
    .id("twt:handcrafted/shaped/blackstone_pillar_trim");

  event
    .shaped(Item.of("handcrafted:blackstone_corner_trim"), ["AA ", "AB ", "   "], {
      B: "tfc:mortar",
      A: "beneath:blackstone_brick",
    })
    .id("twt:handcrafted/shaped/blackstone_corner_trim");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("handcrafted:bear_trophy"), ["AEC", "BDB", "FFF"], {
        E: "tfc:food/bear",
        F: "#tfc:lumber",
        B: "#forge:string",
        C: "tfc:bone_needle",
        D: "tfc:large_raw_hide",
        A: "#tfc:saws",
      }),
    )
    .id("twt:handcrafted/advanced_shaped/bear_trophy_manual_only");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("handcrafted:blaze_trophy"), ["AB ", "BCB", "DDD"], {
        C: "minecraft:blaze_powder",
        B: "minecraft:blaze_rod",
        D: "#tfc:lumber",
        A: "#tfc:saws",
      }),
    )
    .id("twt:handcrafted/advanced_shaped/blaze_trophy_manual_only");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("handcrafted:fox_trophy"), ["AEC", "BDB", "FFF"], {
        E: "#forge:fruit/berries/red",
        D: "tfc:small_raw_hide",
        F: "#tfc:lumber",
        B: "#forge:string",
        C: "tfc:bone_needle",
        A: "#tfc:saws",
      }),
    )
    .id("twt:handcrafted/advanced_shaped/fox_trophy_manual_only");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("handcrafted:goat_trophy"), ["ABC", "DED", "FFF"], {
        E: "tfc:medium_raw_hide",
        F: "#tfc:lumber",
        D: "#forge:string",
        C: "tfc:bone_needle",
        A: "#tfc:saws",
        B: "tfc:goat_horn",
      }),
    )
    .id("twt:handcrafted/advanced_shaped/goat_trophy_manual_only");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("handcrafted:pufferfish_trophy"), ["ABC", "DED", "FFF"], {
        B: "minecraft:pufferfish",
        F: "#tfc:lumber",
        E: "#forge:slimeballs",
        D: "#forge:string",
        C: "tfc:bone_needle",
        A: "#tfc:saws",
      }),
    )
    .id("twt:handcrafted/advanced_shaped/pufferfish_trophy_manual_only");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("handcrafted:salmon_trophy"), ["ABC", "DED", "FFF"], {
        F: "#tfc:lumber",
        E: "#forge:slimeballs",
        B: "tfc:food/salmon",
        D: "#forge:string",
        C: "tfc:bone_needle",
        A: "#tfc:saws",
      }),
    )
    .id("twt:handcrafted/advanced_shaped/salmon_trophy_manual_only");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("handcrafted:silverfish_trophy"), ["AB ", "CDC", "EEE"], {
        B: "tfc:powder/native_silver",
        E: "#tfc:lumber",
        C: "#forge:slimeballs",
        D: "#forge:raw_fishes",
        A: "#tfc:saws",
      }),
    )
    .id("twt:handcrafted/advanced_shaped/silverfish_trophy_manual_only");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("handcrafted:spider_trophy"), ["ABC", "DED", "FFF"], {
        F: "#tfc:lumber",
        B: "minecraft:spider_eye",
        E: "#forge:slimeballs",
        D: "#forge:string",
        C: "tfc:bone_needle",
        A: "#tfc:saws",
      }),
    )
    .id("twt:handcrafted/advanced_shaped/spider_trophy_manual_only");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("handcrafted:tropical_fish_trophy"), ["ABC", "DED", "FFF"], {
        F: "#tfc:lumber",
        E: "#forge:slimeballs",
        B: "tfc:food/tropical_fish",
        D: "#forge:string",
        C: "tfc:bone_needle",
        A: "#tfc:saws",
      }),
    )
    .id("twt:handcrafted/advanced_shaped/tropical_fish_trophy_manual_only");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("handcrafted:wither_skeleton_trophy"), ["AB ", " C ", "DDD"], {
        B: "minecraft:wither_skeleton_skull",
        D: "#tfc:lumber",
        C: "#forge:slimeballs",
        A: "#tfc:saws",
      }),
    )
    .id("twt:handcrafted/advanced_shaped/wither_skeleton_trophy_manual_only");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("handcrafted:wolf_trophy"), ["ABC", "DED", "FFF"], {
        E: "tfc:small_raw_hide",
        F: "#tfc:lumber",
        B: "minecraft:bone",
        D: "#forge:string",
        C: "tfc:bone_needle",
        A: "#tfc:saws",
      }),
    )
    .id("twt:handcrafted/advanced_shaped/wolf_trophy_manual_only");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("handcrafted:creeper_trophy"), ["ABC", "DED", "DFD"], {
        B: "minecraft:gunpowder",
        E: "minecraft:tnt",
        F: "#minecraft:wooden_pressure_plates",
        D: "#forge:string",
        C: "tfc:bone_needle",
        A: "#tfc:saws",
      }),
    )
    .id("twt:handcrafted/advanced_shaped/creeper_trophy_manual_only");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("handcrafted:skeleton_trophy"), ["AB ", "CCC", "DED"], {
        E: "#minecraft:wooden_pressure_plates",
        B: "minecraft:skeleton_skull",
        C: "minecraft:bone",
        D: "#forge:slimeballs",
        A: "#tfc:saws",
      }),
    )
    .id("twt:handcrafted/advanced_shaped/skeleton_trophy_manual_only");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("handcrafted:phantom_trophy"), ["ABA", "CDE", "FGH"], {
        D: "minecraft:phantom_membrane",
        A: "#forge:metal/chain",
        E: "minecraft:bone",
        B: "#forge:slimeballs",
        C: "minecraft:feather",
        G: "#forge:string",
        H: "tfc:bone_needle",
        F: "#tfc:saws",
      }),
    )
    .id("twt:handcrafted/advanced_shaped/phantom_trophy_manual_only");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("handcrafted:wood_cup"), ["AB", "CD"], {
        C: "#tfc:knives",
        A: "#tfc:lumber",
        D: "#forge:slimeballs",
        B: "#minecraft:wooden_slabs",
      }),
    )
    .id("twt:handcrafted/advanced_shaped/wood_cup_manual_only");

  event
    .shaped(Item.of("handcrafted:terracotta_cup"), ["AB", "CA"], {
      A: "minecraft:clay_ball",
      B: "tfc:ceramic/unfired_flower_pot",
      C: "minecraft:fire_charge",
    })
    .id("twt:handcrafted/shaped/terracotta_cup");

  event
    .shaped(Item.of("handcrafted:terracotta_plate"), ["AB", "C "], {
      C: "minecraft:clay_ball",
      B: "minecraft:fire_charge",
      A: "tfc:ceramic/unfired_pan",
    })
    .id("twt:handcrafted/shaped/terracotta_plate");

  //shapeless
  event
    .shapeless("handcrafted:fancy_painting", ["minecraft:painting", "#forge:rods/gold"])
    .id("twt:handcrafted/shapeless/fancy_painting_manual_only");

  event
    .shapeless("handcrafted:wood_bowl", ["minecraft:bowl"])
    .id("twt:handcrafted/shapeless/wood_bowl_manual_only");
  event
    .shapeless("minecraft:bowl", ["handcrafted:wood_bowl"])
    .id("twt:handcrafted/shapeless/bowl_manual_only");
  event
    .shapeless("handcrafted:terracotta_bowl", ["tfc:ceramic/bowl"])
    .id("twt:handcrafted/shapeless/terracotta_bowl_manual_only");
  event
    .shapeless("tfc:ceramic/bowl", ["handcrafted:terracotta_bowl"])
    .id("twt:handcrafted/shapeless/ceramic_bowl_manual_only");

  event
    .shapeless(Item.of("handcrafted:blue_crockery_combo"), ["handcrafted:blue_cup", "handcrafted:blue_plate"])
    .id("twt:handcrafted/shapeless/blue_crockery_combo_manual_only");
  event
    .shapeless(Item.of("handcrafted:white_crockery_combo"), [
      "handcrafted:white_cup",
      "handcrafted:white_plate",
    ])
    .id("twt:handcrafted/shapeless/white_crockery_combo_manual_only");
  event
    .shapeless(Item.of("handcrafted:yellow_crockery_combo"), [
      "handcrafted:yellow_cup",
      "handcrafted:yellow_plate",
    ])
    .id("twt:handcrafted/shapeless/yellow_crockery_combo_manual_only");
  event
    .shapeless(Item.of("handcrafted:wood_crockery_combo"), ["handcrafted:wood_cup", "handcrafted:wood_plate"])
    .id("twt:handcrafted/shapeless/wood_crockery_combo_manual_only");
  event
    .shapeless(Item.of("handcrafted:terracotta_crockery_combo"), [
      "handcrafted:terracotta_cup",
      "handcrafted:terracotta_plate",
    ])
    .id("twt:handcrafted/shapeless/terracotta_crockery_combo_manual_only");

  event.recipes.tfc
    .damage_inputs_shapeless_crafting(
      event.shapeless(Item.of("handcrafted:wood_plate", 2), ["#tfc:knives", "#minecraft:wooden_slabs"]),
    )
    .id("twt:handcrafted/advanced_shaped/wood_plate_manual_only");

  //Barrel Sealed
  $dyes.forEach((dye) => {
    event.recipes.tfc
      .barrel_sealed(1200)
      .outputItem(`handcrafted:${dye}_sheet`)
      .inputs("#handcrafted:sheets", TFC.fluidStackIngredient(`tfc:${dye}_dye`, 100))
      .id(`twt:handcrafted/barrel_sealed/${dye}_sheet`);

    event.recipes.tfc
      .barrel_sealed(1200)
      .outputItem(`handcrafted:${dye}_cushion`)
      .inputs("#handcrafted:cushions", TFC.fluidStackIngredient(`tfc:${dye}_dye`, 100))
      .id(`twt:handcrafted/barrel_sealed/${dye}_cushion`);
  });

  const $crockeryColours = ["yellow", "blue", "white"];

  $crockeryColours.forEach((colour) => {
    event.recipes.tfc
      .barrel_sealed(1200)
      .outputItem(`handcrafted:${colour}_bowl`)
      .inputs("handcrafted:terracotta_bowl", TFC.fluidStackIngredient(`tfc:${colour}_dye`))
      .id(`twt:handcrafted/barrel_sealed/${colour}_bowl`);
    event.recipes.tfc
      .barrel_sealed(1200)
      .outputItem(`handcrafted:${colour}_plate`)
      .inputs("handcrafted:terracotta_plate", TFC.fluidStackIngredient(`tfc:${colour}_dye`))
      .id(`twt:handcrafted/barrel_sealed/${colour}_plate`);
    event.recipes.tfc
      .barrel_sealed(1200)
      .outputItem(`handcrafted:${colour}_cup`)
      .inputs("handcrafted:terracotta_cup", TFC.fluidStackIngredient(`tfc:${colour}_dye`))
      .id(`twt:handcrafted/barrel_sealed/${colour}_cup`);
    event.recipes.tfc
      .barrel_sealed(1200)
      .outputItem(`handcrafted:${colour}_crockery_combo`)
      .inputs("handcrafted:terracotta_crockery_combo", TFC.fluidStackIngredient(`tfc:${colour}_dye`))
      .id(`twt:handcrafted/barrel_sealed/${colour}_crockery_combo`);
  });

  const getNamespace = (wood) => (wood === "crimson" || wood === "warped" ? "beneath" : "tfc");
  let getFurnitureNamespace = (wood) =>
    wood === "crimson" || wood === "warped" ? "handcrafted:" : "everycomp:hc/tfc/";

  //sewing
  event.recipes.tfc
    .sewing(
      Item.of("handcrafted:white_sheet", 2),
      [
        1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
      ],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    )
    .id("twt:handcrafted/sewing/white_sheet");
  event.recipes.tfc
    .sewing(
      "handcrafted:white_cushion",
      [
        0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,
      ],
      [
        -1, -1, 1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1,
        1, -1, -1,
      ],
    )
    .id("twt:handcrafted/sewing/white_cushion");

  //Random Bullshit GO!
  $woods.forEach((wood) => {
    let namespace = getNamespace(wood);
    let furnitureNS = getFurnitureNamespace(wood);

    //Chair
    event.recipes.tfc
      .damage_inputs_shaped_crafting(
        event.shaped(`${furnitureNS}${wood}_chair`, ["A  ", "ABA", "ACA"], {
          A: `${namespace}:wood/lumber/${wood}`,
          C: "#tfc:saws",
          B: `${namespace}:wood/planks/${wood}_slab`,
        }),
      )
      .id(`twt:handcrafted/advanced_shaped/${wood}_chair_manual_only`);
    //Table
    event.recipes.tfc
      .damage_inputs_shaped_crafting(
        event.shaped(Item.of(`${furnitureNS}${wood}_table`), ["AAA", "BCB", "B B"], {
          C: "#tfc:saws",
          B: `${namespace}:wood/support/${wood}`,
          A: `${namespace}:wood/planks/${wood}_slab`,
        }),
      )
      .id(`twt:handcrafted/advanced_shaped/${wood}_table_manual_only`);
    //Bench
    event.recipes.tfc
      .damage_inputs_shaped_crafting(
        event.shaped(Item.of(`${furnitureNS}${wood}_bench`), [`A  `, `ABB`, `ACA`], {
          A: `${namespace}:wood/lumber/${wood}`,
          C: "#tfc:saws",
          B: `${namespace}:wood/planks/${wood}_slab`,
        }),
      )
      .id(`twt:handcrafted/advanced_shaped/${wood}_bench_manual_only`);
    //Couch
    event.recipes.tfc
      .damage_inputs_shaped_crafting(
        event.shaped(Item.of(`${furnitureNS}${wood}_couch`), ["ABC", "DED", "FFF"], {
          E: "#handcrafted:cushions",
          D: "#tfc:high_quality_cloth",
          A: "#tfc:saws",
          B: "#forge:string",
          C: "#tfc:sewing_needles",
          F: `${namespace}:wood/planks/${wood}_slab`,
        }),
      )
      .id(`twt:handcrafted/advanced_shaped/${wood}_couch_manual_only`);
    //Fancy Bed
    event.recipes.tfc
      .damage_inputs_shaped_crafting(
        event.shaped(Item.of(`${furnitureNS}${wood}_fancy_bed`), ["ABC", "DEE", "DFD"], {
          B: "#handcrafted:cushions",
          C: "#handcrafted:sheets",
          D: `${namespace}:wood/lumber/${wood}`,
          E: "#tfc:high_quality_cloth",
          A: "#tfc:saws",
          F: `${namespace}:wood/planks/${wood}_slab`,
        }),
      )
      .id(`twt:handcrafted/advanced_shaped/${wood}_fancy_bed_manual_only`);
    //Dining Bench
    event.recipes.tfc
      .damage_inputs_shaped_crafting(
        event.shaped(Item.of(`${furnitureNS}${wood}_dining_bench`), ["B  ", "CC ", "AA "], {
          A: `${namespace}:wood/lumber/${wood}`,
          B: "#tfc:saws",
          C: `${namespace}:wood/planks/${wood}_slab`,
        }),
      )
      .id(`twt:handcrafted/advanced_shaped/${wood}_dining_bench_manual_only`);
    //Nightstand
    event.recipes.tfc
      .damage_inputs_shaped_crafting(
        event.shaped(Item.of(`${furnitureNS}${wood}_nightstand`), [" B ", "CCC", "ADA"], {
          A: `${namespace}:wood/lumber/${wood}`,
          B: "#tfc:saws",
          C: `${namespace}:wood/planks/${wood}_slab`,
          D: "#firmaciv:chests",
        }),
      )
      .id(`twt:handcrafted/advanced_shaped/${wood}_nightstand_manual_only`);
    //Desk
    event.recipes.tfc
      .damage_inputs_shaped_crafting(
        event.shaped(Item.of(`${furnitureNS}${wood}_desk`), [" B ", "CCC", "ADA"], {
          A: `${namespace}:wood/support/${wood}`,
          B: "#tfc:saws",
          C: `${namespace}:wood/planks/${wood}_slab`,
          D: "#firmaciv:chests",
        }),
      )
      .id(`twt:handcrafted/advanced_shaped/${wood}_desk_manual_only`);
    //Side Table
    event.recipes.tfc
      .damage_inputs_shaped_crafting(
        event.shaped(Item.of(`${furnitureNS}${wood}_side_table`), ["BC ", " D ", " A "], {
          A: `${namespace}:wood/support/${wood}`,
          B: "#tfc:saws",
          C: `${namespace}:wood/planks/${wood}_slab`,
          D: "#firmaciv:chests",
        }),
      )
      .id(`twt:handcrafted/advanced_shaped/${wood}_side_table_manual_only`);
    //Counter
    event.recipes.tfc
      .damage_inputs_shaped_crafting(
        event.shaped(Item.of(`${furnitureNS}${wood}_counter`), ["CCC", "ADA", "ABA"], {
          A: `${namespace}:wood/lumber/${wood}`,
          B: "#tfc:saws",
          C: "#tfc:rock/raw",
          D: "#firmaciv:chests",
        }),
      )
      .id(`twt:handcrafted/advanced_shaped/${wood}_counter_manual_only`);
    //Cupboard
    event.recipes.tfc
      .damage_inputs_shaped_crafting(
        event.shaped(Item.of(`${furnitureNS}${wood}_cupboard`), ["AAA", "BD ", "AAA"], {
          A: `${namespace}:wood/lumber/${wood}`,
          B: "#tfc:saws",
          D: "#firmaciv:chests",
        }),
      )
      .id(`twt:handcrafted/advanced_shaped/${wood}_cupboard_manual_only`);
    //Drawer
    event.recipes.tfc
      .damage_inputs_shaped_crafting(
        event.shaped(Item.of(`${furnitureNS}${wood}_drawer`), ["AAA", "CDB", "AAA"], {
          A: `${namespace}:wood/lumber/${wood}`,
          B: `${namespace}:wood/planks/${wood}_slab`,
          C: "#tfc:saws",
          D: "#firmaciv:chests",
        }),
      )
      .id(`twt:handcrafted/advanced_shaped/${wood}_drawer_manual_only`);
    //Shelf
    event.recipes.tfc
      .damage_inputs_shaped_crafting(
        event.shaped(Item.of(`${furnitureNS}${wood}_shelf`), ["BBB", "CD ", "AAA"], {
          A: `${namespace}:wood/lumber/${wood}`,
          B: `${namespace}:wood/planks/${wood}_slab`,
          C: "#tfc:saws",
          D: "#firmaciv:chests",
        }),
      )
      .id(`twt:handcrafted/advanced_shaped/${wood}_shelf_manual_only`);
    //Pillar Trim
    event.recipes.tfc
      .damage_inputs_shaped_crafting(
        event.shaped(Item.of(`${furnitureNS}${wood}_pillar_trim`), ["DA", " A"], {
          A: `${namespace}:wood/lumber/${wood}`,
          D: "#tfc:saws",
        }),
      )
      .id(`twt:handcrafted/advanced_shaped/${wood}_pillar_trim_manual_only`);
    //Corner Trim
    event.recipes.tfc
      .damage_inputs_shaped_crafting(
        event.shaped(Item.of(`${furnitureNS}${wood}_corner_trim`), ["AA", "AD"], {
          A: `${namespace}:wood/lumber/${wood}`,
          D: "#tfc:saws",
        }),
      )
      .id(`twt:handcrafted/advanced_shaped/${wood}_corner_trim_manual_only`);
  });
};

const handcraftedItemTags = (event) => {
  event.add("handcrafted:trophies", "handcrafted:phantom_trophy");
};
