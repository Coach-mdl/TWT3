"use strict";

//This is going to be a big one.

const scgunsRecipes = (event) => {
  //Shaped
  event
    .shaped(Item.of("scguns:range_finder"), [" A ", "BCD", "EA "], {
      D: "tfc:lens",
      C: "scguns:laser_sight",
      A: "kubejs:anthralite_sheet",
      B: "powergrid:potato_battery",
      E: "scguns:gun_grip",
    })
    .id("twt:scguns/shaped/range_finder");

  event
    .shaped(Item.of("scguns:laser_sight"), ["AB ", "CDE", "   "], {
      E: "tfc:lens",
      C: "vintageimprovements:laser_item",
      B: "kubejs:anthralite_sheet",
      D: "tfc:lamp_glass",
      A: "powergrid:potato_battery",
    })
    .id("twt:scguns/shaped/laser_sight");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("scguns:gun_grip"), ["DA ", "BAC", "BCC"], {
        B: "#tfc:lumber",
        A: "createdieselgenerators:kelp_handle",
        C: "scguns:anthralite_nugget",
        D: "#tfc:knives",
      }),
    )
    .id("twt:scguns/advanced_shaped/gun_grip");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("scguns:wooden_stock"), ["AAA", "ABB", "C  "], {
        A: "#tfc:lumber",
        B: "tfc:metal/rod/wrought_iron",
        C: "#tfc:knives",
      }),
    )
    .id("twt:scguns/advanced_shaped/wooden_stock");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.recipes.tfc.advanced_shaped_crafting(
        TFC.itemStackProvider.of("scguns:light_stock").addHeat(wrought_iron.W),
        ["A  ", "BCD", "BEC"],
        {
          E: "minecraft:fire_charge",
          D: "tfc:powder/flux",
          C: "tfc:metal/rod/wrought_iron",
          B: "create:iron_sheet",
          A: "#tfc:hammers",
        },
        0,
        0,
      ),
    )
    .id("twt:scguns/advanced_shaped/light_stock");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("scguns:weighted_stock"), ["ABC", "DED", "DFG"], {
        F: "kubejs:anthralite_double_sheet",
        D: "#tfc:lumber",
        B: "minecraft:leather",
        G: "tfc:metal/rod/wrought_iron",
        A: "#tfc:knives",
        E: "scguns:wooden_stock",
        C: "scguns:anthralite_nugget",
      }),
    )
    .id("twt:scguns/advanced_shaped/weighted_stock");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("scguns:bump_stock"), ["ABC", "DEF", "   "], {
        B: "minecraft:leather",
        F: "tfc:metal/rod/wrought_iron",
        A: "#tfc:knives",
        D: "scguns:wooden_stock",
        C: "scguns:anthralite_nugget",
        E: "vintageimprovements:iron_spring",
      }),
    )
    .id("twt:scguns/advanced_shaped/bump_stock");

  event
    .shaped(Item.of("scguns:silencer"), ["ABA", "CDC", "ABA"], {
      D: "tfc:metal/tuyere/steel",
      C: "#tfc:high_quality_cloth",
      A: "#forge:string",
      B: "tfc:jute_fiber",
    })
    .id("twt:scguns/shaped/silencer");

  event
    .shaped(Item.of("scguns:pistol_ammo_box"), [" AB", "CDC", "ECE"], {
      A: "minecraft:red_dye",
      C: "create:cardboard",
      B: "minecraft:black_dye",
      E: "tfc:glue",
      D: "scguns:small_copper_casing",
    })
    .id("twt:scguns/shaped/pistol_ammo_box");

  event
    .shaped(Item.of("scguns:rifle_ammo_box"), ["ABC", "BDB", "EBE"], {
      B: "create:cardboard",
      D: "scguns:medium_copper_casing",
      A: "minecraft:light_gray_dye",
      C: "minecraft:gray_dye",
      E: "tfc:glue",
    })
    .id("twt:scguns/shaped/rifle_ammo_box");

  event
    .shaped(Item.of("scguns:shotgun_ammo_box"), ["ABC", "BDB", "BEB"], {
      A: "minecraft:yellow_dye",
      D: "scguns:shotgun_shell",
      C: "minecraft:green_dye",
      B: "create:cardboard",
      E: "tfc:glue",
    })
    .id("twt:scguns/shaped/shotgun_ammo_box");

  event
    .shaped(Item.of("scguns:magnum_ammo_box"), ["ABA", "CDE", "AFA"], {
      F: "minecraft:red_dye",
      B: "scguns:ramrod_round",
      A: "create:cardboard",
      E: "minecraft:gray_dye",
      C: "minecraft:black_dye",
      D: "tfc:glue",
    })
    .id("twt:scguns/shaped/magnum_ammo_box");

  event
    .shaped(Item.of("scguns:energy_ammo_box"), ["ABA", "CDC", "EFE"], {
      F: "tfc:metal/sheet/wrought_iron",
      B: "tfc:metal/rod/wrought_iron",
      D: "scguns:empty_cell",
      E: "minecraft:orange_dye",
      C: "create:iron_sheet",
      A: "minecraft:gray_dye",
    })
    .id("twt:scguns/shaped/energy_ammo_box");

  event
    .shaped(Item.of("scguns:special_ammo_box"), ["ABA", "CDC", "EBE"], {
      D: "scguns:powder_and_ball",
      C: "tfc:metal/rod/wrought_iron",
      B: "create:iron_sheet",
      A: "minecraft:brown_dye",
      E: "minecraft:black_dye",
    })
    .id("twt:scguns/shaped/special_ammo_box");

  event
    .shaped(Item.of("scguns:rocket_ammo_box"), ["ABA", "BCB", "ADA"], {
      D: "tfc:metal/sheet/wrought_iron",
      A: "minecraft:green_dye",
      B: "create:iron_sheet",
      C: "scguns:microjet",
    })
    .id("twt:scguns/shaped/rocket_ammo_box");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("scguns:empty_casing_pouch"), [" A ", "BAC", "DED"], {
        A: "sns:bound_leather_strip",
        B: "#scguns:empty_casing",
        D: "sns:reinforced_fiber",
        E: "scguns:armor_pouches",
        C: "tfc:bone_needle",
      }),
    )
    .id("twt:scguns/advanced_shaped/empty_casing_pouch");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("scguns:dishes_pouch"), [" A ", "BCB", "DED"], {
        E: "scguns:heavy_armor_pouches",
        B: "sns:bound_leather_strip",
        D: "sns:reinforced_fiber",
        A: "tfc:bone_needle",
        C: "#scguns:dishes",
      }),
    )
    .id("twt:scguns/advanced_shaped/dishes_pouch");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("scguns:rock_pouch"), [" AB", "CDC", "AEA"], {
        E: "scguns:heavy_armor_pouches",
        A: "sns:bound_leather_strip",
        C: "sns:reinforced_fiber",
        D: "#scguns:rocks",
        B: "tfc:bone_needle",
      }),
    )
    .id("twt:scguns/advanced_shaped/rock_pouch");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("scguns:armor_pouches"), ["ABC", "BDB", "BEB"], {
        A: "sns:reinforced_fiber",
        B: "sns:bound_leather_strip",
        D: "sns:buckle",
        E: "sns:unfinished_leather_sack",
        C: "tfc:bone_needle",
      }),
    )
    .id("twt:scguns/advanced_shaped/armor_pouches");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("scguns:heavy_armor_pouches"), ["ABC", "DED", "DED"], {
        A: "sns:reinforced_fiber",
        D: "sns:bound_leather_strip",
        B: "sns:buckle",
        E: "sns:unfinished_leather_sack",
        C: "tfc:bone_needle",
      }),
    )
    .id("twt:scguns/advanced_shaped/heavy_armor_pouches");

  //TFC Anvil
  const SCGUNS_ANVIL_SHENANIGANS = {
    brass_mask: {
      ns: "scguns:",
      in: "tfc:metal/double_sheet/brass",
      rules: ["upset_any", "upset_any", "upset_any"],
      tier: 2,
      fb: true,
    },
    iron_mask: {
      ns: "scguns:",
      in: "tfc:metal/double_sheet/wrought_iron",
      rules: ["upset_any", "upset_any", "upset_any"],
      tier: 3,
      fb: true,
    },
    stone_gun_barrel: {
      ns: "scguns:",
      in: "kubejs:anthralite_double_sheet",
      rules: ["shrink_not_last", "bend_any", "bend_any"],
      tier: 3,
      fb: false,
    },
    gun_parts: {
      ns: "scguns:",
      in: "kubejs:anthralite_double_ingot",
      rules: ["punch_not_last", "draw_not_last", "bend_any"],
      tier: 3,
      fb: false,
    },
    anthralite_sheet: {
      ns: "kubejs:",
      in: "kubejs:anthralite_double_ingot",
      rules: ["hit_any", "hit_any", "hit_any"],
      tier: 3,
      fb: false,
    },
    empty_tank: {
      ns: "scguns:",
      in: "kubejs:anthralite_sheet",
      rules: ["bend_any", "bend_any", "draw_any"],
      tier: 3,
      fb: false,
    },
  };

  Object.entries(SCGUNS_ANVIL_SHENANIGANS).forEach(([item, data]) => {
    let output = `${data.ns}${item}`;

    event.recipes.tfc
      .anvil(Item.of(output), data.in, data.rules)
      .tier(data.tier)
      .apply_forging_bonus(data.fb)
      .id(`twt:scguns/anvil/${item}`);
  });

  //TFC Welding
  event.recipes.tfc
    .welding("kubejs:anthralite_double_ingot", "scguns:anthralite_ingot", "scguns:anthralite_ingot")
    .id("twt:scguns/welding/anthralite_double_ingot");
  event.recipes.tfc
    .welding("kubejs:anthralite_double_sheet", "kubejs:anthralite_sheet", "kubejs:anthralite_sheet")
    .id("twt:scguns/welding/anthralite_double_sheet");
  event.recipes.tfc
    .welding("scguns:gun_magazine", "kubejs:anthralite_sheet", "vintageimprovements:iron_spring")
    .id("twt:scguns/welding/gun_magazine");

  //laser_cutting
  event.recipes.vintageimprovements
    .laser_cutting("scguns:gun_parts", "kubejs:anthralite_double_ingot")
    .energyCost(4000)
    .maxChargeRate(50)
    .id("twt:scguns/laser_cutting/gun_parts");

  //Lathe
  event.recipes.vintageimprovements
    .turning("scguns:gun_barrel", "tfc:metal/tuyere/steel")
    .processingTime(400)
    .id("twt:scguns/turning/gun_barrel");

  //Sequenced Assembly
  event.recipes.create
    .sequenced_assembly("scguns:heavy_gun_parts", "scguns:gun_parts", [
      event.recipes.create.deploying("scguns:gun_parts", ["scguns:gun_parts", "tfc:metal/sheet/black_steel"]),
      event.recipes.vintageimprovements.turning("scguns:gun_parts", "scguns:gun_parts").processingTime(200),
      event.recipes.create.pressing("scguns:gun_parts", "scguns:gun_parts"),
      event.recipes.vintageimprovements
        .laser_cutting("scguns:gun_parts", "scguns:gun_parts")
        .energyCost(4000)
        .maxChargeRate(50),
    ])
    .loops(1)
    .transitionalItem("scguns:gun_parts")
    .id("twt:scguns/sequenced_assembly/heavy_gun_parts");

  event.recipes.create
    .sequenced_assembly("scguns:heavy_gun_barrel", "tfc:metal/tuyere/black_steel", [
      event.recipes.create.deploying("tfc:metal/tuyere/black_steel", [
        "tfc:metal/tuyere/black_steel",
        "tfc:metal/tuyere/black_steel",
      ]),
      event.recipes.create.deploying("tfc:metal/tuyere/black_steel", [
        "tfc:metal/tuyere/black_steel",
        "#tfc:flux",
      ]),
      event.recipes.create.pressing("tfc:metal/tuyere/black_steel", "tfc:metal/tuyere/black_steel"),
      event.recipes.vintageimprovements
        .turning("tfc:metal/tuyere/black_steel", "tfc:metal/tuyere/black_steel")
        .processingTime(400),
    ])
    .loops(1)
    .transitionalItem("tfc:metal/tuyere/black_steel")
    .id("twt:scguns/sequenced_assembly/heavy_gun_barrel");

  event
    .stonecutting(Item.of("scguns:anthralite_block", 16), "kubejs:anthralite_double_ingot")
    .id("twt:scguns/stonecutting/anthralite_block");
  event
    .stonecutting(Item.of("scguns:anthralite_grate_pane", 16), "scguns:anthralite_grate")
    .id("twt:scguns/stonecutting/anthralite_grate_pane");
  event
    .stonecutting("scguns:cut_anthralite", "scguns:anthralite_block")
    .id("twt:scguns/stonecutting/cut_anthralite");
  event
    .stonecutting("scguns:anthralite_tiles", "scguns:anthralite_block")
    .id("twt:scguns/stonecutting/anthralite_tiles");
  event
    .stonecutting("scguns:anthralite_block", "scguns:cut_anthralite")
    .id("twt:scguns/stonecutting/anthralite_block_2");
  event
    .stonecutting("scguns:anthralite_block", "scguns:anthralite_tiles")
    .id("twt:scguns/stonecutting/anthralite_block_3");

  //GUNS
  event
    .shaped(Item.of("scguns:flintlock_pistol"), ["AHG", "BCD", "EF "], {
      D: "scguns:stone_gun_barrel",
      B: "minecraft:fire_charge",
      F: "#tfc:lumber",
      A: "tfc:metal/rod/wrought_iron",
      C: "kubejs:anthralite_sheet",
      E: "scguns:gun_grip",
      G: "scguns:repair_kit",
      H: "scguns:antique_blueprint",
    })
    .id("twt:scguns/shaped/flintlock_pistol");

  //TFC Heating
  const SCGUNS_HEATING_DATA = {
    anthralite_ingot: { NS: "scguns", amount: 100, MP: anthralite.m, fluid: anthralite.f },
    anthralite_pickaxe: { NS: "scguns", amount: 100, MP: anthralite.m, fluid: anthralite.f },
    anthralite_axe: { NS: "scguns", amount: 100, MP: anthralite.m, fluid: anthralite.f },
    anthralite_hoe: { NS: "scguns", amount: 100, MP: anthralite.m, fluid: anthralite.f },
    anthralite_shovel: { NS: "scguns", amount: 100, MP: anthralite.m, fluid: anthralite.f },
    anthralite_bayonet: { NS: "scguns", amount: 100, MP: anthralite.m, fluid: anthralite.f },
    anthralite_sword: { NS: "scguns", amount: 200, MP: anthralite.m, fluid: anthralite.f },
    anthralite_helmet: { NS: "scguns", amount: 600, MP: anthralite.m, fluid: anthralite.f },
    anthralite_chestplate: { NS: "scguns", amount: 800, MP: anthralite.m, fluid: anthralite.f },
    anthralite_leggings: { NS: "scguns", amount: 600, MP: anthralite.m, fluid: anthralite.f },
    anthralite_boots: { NS: "scguns", amount: 400, MP: anthralite.m, fluid: anthralite.f },
    anthralite_pickaxe_head: { NS: "kubejs", amount: 100, MP: anthralite.m, fluid: anthralite.f },
    anthralite_axe_head: { NS: "kubejs", amount: 100, MP: anthralite.m, fluid: anthralite.f },
    anthralite_hoe_head: { NS: "kubejs", amount: 100, MP: anthralite.m, fluid: anthralite.f },
    anthralite_shovel_head: { NS: "kubejs", amount: 100, MP: anthralite.m, fluid: anthralite.f },
    anthralite_double_ingot: { NS: "kubejs", amount: 200, MP: anthralite.m, fluid: anthralite.f },
    anthralite_sheet: { NS: "kubejs", amount: 200, MP: anthralite.m, fluid: anthralite.f },
    anthralite_double_sheet: { NS: "kubejs", amount: 400, MP: anthralite.m, fluid: anthralite.f },
    anthralite_bayonet_head: { NS: "kubejs", amount: 100, MP: anthralite.m, fluid: anthralite.f },
    anthralite_sword_head: { NS: "kubejs", amount: 200, MP: anthralite.m, fluid: anthralite.f },
    unfinished_anthralite_helmet: { NS: "kubejs", amount: 400, MP: anthralite.m, fluid: anthralite.f },
    unfinished_anthralite_chestplate: {
      NS: "kubejs",
      amount: 400,
      MP: anthralite.m,
      fluid: anthralite.f,
    },
    unfinished_anthralite_leggings: {
      NS: "kubejs",
      amount: 400,
      MP: anthralite.m,
      fluid: anthralite.f,
    },
    unfinished_anthralite_boots: { NS: "kubejs", amount: 400, MP: anthralite.m, fluid: anthralite.f },

    diamond_steel_ingot: { NS: "scguns", amount: 100, MP: diamond_steel.m, fluid: diamond_steel.f },
    diamond_steel_helmet: { NS: "scguns", amount: 600, MP: diamond_steel.m, fluid: diamond_steel.f },
    diamond_steel_chestplate: { NS: "scguns", amount: 800, MP: diamond_steel.m, fluid: diamond_steel.f },
    diamond_steel_leggings: { NS: "scguns", amount: 600, MP: diamond_steel.m, fluid: diamond_steel.f },
    diamond_steel_boots: { NS: "scguns", amount: 400, MP: diamond_steel.m, fluid: diamond_steel.f },
    diamond_steel_double_ingot: { NS: "kubejs", amount: 200, MP: diamond_steel.m, fluid: diamond_steel.f },
    diamond_steel_sheet: { NS: "kubejs", amount: 200, MP: diamond_steel.m, fluid: diamond_steel.f },
    diamond_steel_double_sheet: { NS: "kubejs", amount: 400, MP: diamond_steel.m, fluid: diamond_steel.f },
    unfinished_diamond_steel_helmet: {
      NS: "kubejs",
      amount: 400,
      MP: diamond_steel.m,
      fluid: diamond_steel.f,
    },
    unfinished_diamond_steel_chestplate: {
      NS: "kubejs",
      amount: 400,
      MP: diamond_steel.m,
      fluid: diamond_steel.f,
    },
    unfinished_diamond_steel_leggings: {
      NS: "kubejs",
      amount: 400,
      MP: diamond_steel.m,
      fluid: steel.f,
    },
    unfinished_diamond_steel_boots: {
      NS: "kubejs",
      amount: 400,
      MP: diamond_steel.m,
      fluid: diamond_steel.f,
    },
    brass_mask: { NS: "scguns", amount: 400, MP: brass.m, fluid: brass.f },
    iron_mask: { NS: "scguns", amount: 400, MP: wrought_iron.m, fluid: wrought_iron.f },
    ancient_brass: { NS: "scguns", amount: 100, MP: brass.m, fluid: brass.f },
    depleted_diamond_steel_ingot: { NS: "scguns", amount: 100, MP: 1100, fluid: steel.f },
    gun_parts: { NS: "scguns", amount: 200, MP: anthralite.m, fluid: anthralite.f },
    stone_gun_barrel: { NS: "scguns", amount: 400, MP: anthralite.m, fluid: anthralite.f },
    empty_tank: { NS: "scguns", amount: 200, MP: anthralite.m, fluid: anthralite.f },
    gun_barrel: { NS: "scguns", amount: 400, MP: steel.m, fluid: steel.f },
    heavy_gun_barrel: { NS: "scguns", amount: 800, MP: black_steel.m, fluid: black_steel.f },
    light_stock: { NS: "scguns", amount: 300, MP: wrought_iron.m, fluid: wrought_iron.f },
    wooden_stock: { NS: "scguns", amount: 100, MP: wrought_iron.m, fluid: wrought_iron.f },
    bump_stock: { NS: "scguns", amount: 200, MP: wrought_iron.m, fluid: wrought_iron.f },
    silencer: { NS: "scguns", amount: 400, MP: steel.m, fluid: steel.f },
  };

  Object.entries(SCGUNS_HEATING_DATA).forEach(([object, data]) => {
    let input = `${data.NS}:${object}`;
    let mPoint = data.MP;
    let output = data.fluid;
    let amount = data.amount;

    event.recipes.tfc
      .heating(input, `${data.MP}`)
      .resultFluid(Fluid.of(output, amount))
      .useDurability(true)
      .id(`twt:scguns/heating/${object}`);
  });

  //TFC Casting
  event.recipes.tfc
    .casting(
      "scguns:anthralite_ingot",
      "tfc:ceramic/ingot_mold",
      TFC.fluidStackIngredient(anthralite.f, 100),
      0.25,
    )
    .id("twt:scguns/casting/anthralite_ingot");
  event.recipes.tfc
    .casting(
      "scguns:depleted_diamond_steel_ingot",
      "tfc:ceramic/ingot_mold",
      TFC.fluidStackIngredient(anthralite.f, 100),
      0.25,
    )
    .id("twt:scguns/casting/depleted_diamond_steel_ingot");
  event.recipes.tfc
    .casting(
      "scguns:anthralite_ingot",
      "tfc:ceramic/fire_ingot_mold",
      TFC.fluidStackIngredient(anthralite.f, 100),
      0.25,
    )
    .id("twt:scguns/casting/anthralite_ingot_fire_mold");
  event.recipes.tfc
    .casting(
      "scguns:depleted_diamond_steel_ingot",
      "tfc:ceramic/fire_ingot_mold",
      TFC.fluidStackIngredient("kubejs:molten_diamond_steel", 100),
      0.25,
    )
    .id("twt:scguns/casting/depleted_diamond_steel_ingot_fire_mold");
};

const scgunsData = (event) => {
  //TFC Fuels
  event.fuel("scguns:vehement_coal", 1825, 2200, 0.65);

  //TFC Heat Def
  event.itemHeat("scguns:ancient_brass", ingot, brass.w, brass.W);
  event.itemHeat("scguns:depleted_diamond_steel_ingot", ingot, 984, 1015);

  event.itemHeat("scguns:anthralite_pickaxe", ingot, anthralite.w, anthralite.W);
  event.itemHeat("scguns:anthralite_axe", ingot, anthralite.w, anthralite.W);
  event.itemHeat("scguns:anthralite_hoe", ingot, anthralite.w, anthralite.W);
  event.itemHeat("scguns:anthralite_shovel", ingot, anthralite.w, anthralite.W);
  event.itemHeat("scguns:anthralite_sword", double_ingot, anthralite.w, anthralite.W);
  event.itemHeat("kubejs:anthralite_pickaxe_head", ingot, anthralite.w, anthralite.W);
  event.itemHeat("kubejs:anthralite_axe_head", ingot, anthralite.w, anthralite.W);
  event.itemHeat("kubejs:anthralite_hoe_head", ingot, anthralite.w, anthralite.W);
  event.itemHeat("kubejs:anthralite_bayonet_head", ingot, anthralite.w, anthralite.W);
  event.itemHeat("kubejs:anthralite_shovel_head", ingot, anthralite.w, anthralite.W);
  event.itemHeat("kubejs:anthralite_sword_head", double_ingot, anthralite.w, anthralite.W);
  event.itemHeat("scguns:anthralite_bayonet", ingot, anthralite.w, anthralite.W);
  event.itemHeat("scguns:anthralite_ingot", ingot, anthralite.w, anthralite.W);
  event.itemHeat("kubejs:anthralite_double_ingot", double_ingot, anthralite.w, anthralite.W);
  event.itemHeat("kubejs:anthralite_sheet", double_ingot, anthralite.w, anthralite.W);
  event.itemHeat("kubejs:anthralite_double_sheet", double_sheet, anthralite.w, anthralite.W);
  event.itemHeat("kubejs:unfinished_anthralite_helmet", double_sheet, anthralite.w, anthralite.W);
  event.itemHeat("kubejs:unfinished_anthralite_chestplate", double_sheet, anthralite.w, anthralite.W);
  event.itemHeat("kubejs:unfinished_anthralite_leggings", double_sheet, anthralite.w, anthralite.W);
  event.itemHeat("kubejs:unfinished_anthralite_boots", double_sheet, anthralite.w, anthralite.W);
  event.itemHeat("scguns:anthralite_helmet", helmet, anthralite.w, anthralite.W);
  event.itemHeat("scguns:anthralite_chestplate", chestplate, anthralite.w, anthralite.W);
  event.itemHeat("scguns:anthralite_leggings", helmet, anthralite.w, anthralite.W);
  event.itemHeat("scguns:anthralite_boots", double_sheet, anthralite.w, anthralite.W);

  event.itemHeat("scguns:diamond_steel_ingot", ingot, diamond_steel.w, diamond_steel.W);
  event.itemHeat("kubejs:diamond_steel_double_ingot", double_ingot, diamond_steel.w, diamond_steel.W);
  event.itemHeat("kubejs:diamond_steel_sheet", double_ingot, diamond_steel.w, diamond_steel.W);
  event.itemHeat("kubejs:diamond_steel_double_sheet", double_sheet, diamond_steel.w, diamond_steel.W);
  event.itemHeat("kubejs:unfinished_diamond_steel_helmet", double_sheet, diamond_steel.w, diamond_steel.W);
  event.itemHeat(
    "kubejs:unfinished_diamond_steel_chestplate",
    double_sheet,
    diamond_steel.w,
    diamond_steel.W,
  );
  event.itemHeat("kubejs:unfinished_diamond_steel_leggings", double_sheet, diamond_steel.w, diamond_steel.W);
  event.itemHeat("kubejs:unfinished_diamond_steel_boots", double_sheet, diamond_steel.w, diamond_steel.W);
  event.itemHeat("scguns:diamond_steel_helmet", helmet, diamond_steel.w, diamond_steel.W);
  event.itemHeat("scguns:diamond_steel_chestplate", chestplate, diamond_steel.w, diamond_steel.W);
  event.itemHeat("scguns:diamond_steel_leggings", helmet, diamond_steel.w, diamond_steel.W);
  event.itemHeat("scguns:diamond_steel_boots", double_sheet, diamond_steel.w, diamond_steel.W);

  event.itemHeat("scguns:brass_mask", double_sheet, brass.w, brass.W);
  event.itemHeat("scguns:iron_mask", double_sheet, wrought_iron.w, wrought_iron.W);
  event.itemHeat("scguns:gun_parts", double_ingot, anthralite.w, anthralite.W);
  event.itemHeat("scguns:empty_tank", double_ingot, anthralite.w, anthralite.W);
  event.itemHeat("scguns:stone_gun_barrel", double_sheet, anthralite.w, anthralite.W);
  event.itemHeat("scguns:gun_barrel", double_sheet, steel.w, steel.W);
  event.itemHeat("scguns:heavy_gun_barrel", chestplate, black_steel.w, black_steel.W);
  event.itemHeat("scguns:light_stock", ingot, wrought_iron.w, wrought_iron.W);
  event.itemHeat("scguns:wooden_stock", ingot, wrought_iron.w, wrought_iron.W);
  event.itemHeat("scguns:bump_stock", double_ingot, wrought_iron.w, wrought_iron.W);
  event.itemHeat("scguns:silencer", double_sheet, steel.w, steel.W);

  event.metal(
    "kubejs:molten_anthralite",
    1435,
    0.00795,
    "scguns:anthralite_ingot",
    "kubejs:anthralite_double_ingot",
    "kubejs:anthralite_sheet",
    3,
    "kubejs:anthralite",
  );
  event.metal(
    "kubejs:molten_diamond_steel",
    1400,
    0.00857,
    "scguns:diamond_steel_ingot",
    "kubejs:diamond_steel_double_ingot",
    "kubejs:diamond_steel_sheet",
    4,
    "kubejs:diamond_steel",
  );

  const SCGUNS_ARMOR_STATS = {
    anthralite_helmet: { piercing: 15, slashing: 4, crushing: 4 },
    anthralite_chestplate: { piercing: 15, slashing: 4, crushing: 4 },
    anthralite_leggings: { piercing: 15, slashing: 4, crushing: 4 },
    anthralite_boots: { piercing: 15, slashing: 4, crushing: 4 },
    scrap_helmet: { piercing: 10, slashing: 6, crushing: 3 },
    scrap_chestplate: { piercing: 10, slashing: 6, crushing: 3 },
    scrap_leggings: { piercing: 10, slashing: 6, crushing: 3 },
    scrap_boots: { piercing: 10, slashing: 6, crushing: 3 },
    adrien_helm: { piercing: 18, slashing: 6, crushing: 3 },
    adrien_chestplate: { piercing: 18, slashing: 10, crushing: -5 },
    adrien_leggings: { piercing: 18, slashing: 10, crushing: -5 },
    adrien_boots: { piercing: 18, slashing: 10, crushing: -5 },
    diamond_steel_helmet: { piercing: 13, slashing: 6, crushing: 3 },
    diamond_steel_chestplate: { piercing: 13, slashing: 10, crushing: 7 },
    diamond_steel_leggings: { piercing: 13, slashing: 10, crushing: 7 },
    diamond_steel_boots: { piercing: 13, slashing: 10, crushing: 7 },
    treated_brass_helmet: { piercing: 20, slashing: 10, crushing: 10 },
    treated_brass_chestplate: { piercing: 20, slashing: 10, crushing: 10 },
    treated_brass_leggings: { piercing: 20, slashing: 10, crushing: 10 },
    treated_brass_boots: { piercing: 20, slashing: 10, crushing: 10 },
    cog_knight_helmet: { piercing: 30, slashing: 15, crushing: 12 },
    cog_knight_chestplate: { piercing: 30, slashing: 15, crushing: 12 },
    cog_knight_leggings: { piercing: 30, slashing: 15, crushing: 12 },
    cog_knight_boots: { piercing: 30, slashing: 15, crushing: 12 },
    redcoat_hat: { piercing: 0, slashing: 5, crushing: 0 },
    redcoat_coat: { piercing: 0, slashing: 5, crushing: 0 },
    redcoat_pants: { piercing: 0, slashing: 5, crushing: 0 },
    redcoat_boots: { piercing: 0, slashing: 5, crushing: 0 },
    ridgetop: { piercing: 1, slashing: 3, crushing: 0 },
    brass_mask: { piercing: 7, slashing: 7, crushing: 5 },
    iron_mask: { piercing: 10, slashing: 7, crushing: 5 },
  };
  Object.entries(SCGUNS_ARMOR_STATS).forEach(([item, data]) => {
    event.itemDamageResistance(`scguns:${item}`, data.piercing, data.slashing, data.crushing);
  });
};

const scgunsItemTags = (event) => {
  event.add("scguns:entity_blacklisted_gun", "#scguns:disableditems");
  event.add("scguns:viventrum_banned_items", "#scguns:disableditems");

  event.add("scguns:dishes", [
    "tfc:ceramic/bowl",
    "tfc:empty_jar",
    "firmalife:pie_pan",
    /^firmalife:empty_.*_wine_bottle$/,
    /^tfc:.*_glass_bottle$/,
  ]);
  event.add("scguns:rocks", [
    "#forge:cobblestone",
    "#rnr:loose_rock_items",
    "beneath:nether_pebble",
    "beneath:blackstone_pebble",
  ]);

  event.add("tfc:pileable_ingots", ["scguns:anthralite_ingot", "scguns:diamond_steel_ingot"]);
  event.add("tfc:pileable_sheets", ["kubejs:anthralite_sheet", "kubejs:diamond_steel_sheet"]);
  event.add("tfc:pileable_double_ingots", [
    "kubejs:anthralite_double_ingot",
    "kubejs:diamond_steel_double_ingot",
  ]);

  event.add("curios:sidearms", [
    "scguns:tl_runner",
    "scguns:krauser",
    "scguns:micina",
    "scguns:m22_waltz",
    "scguns:osgood_50",
    "scguns:blasphemy",
    "scguns:raygun",
    "scguns:prima_materia",
    "scguns:rat_king_and_queen",
    "scguns:flintlock_pistol",
    "scguns:longarm",
    "scguns:pax",
    "scguns:defender_pistol",
    "scguns:trenchur",
    "scguns:auvtomag",
    "scguns:brawler",
    "scguns:hyperbaria",
    "scguns:sequoia",
    "scguns:mokova",
    "scguns:mak_mkii",
  ]);

  event.add("tfc:deals_piercing_damage", [
    "scguns:pax",
    "scguns:winnie_millend",
    "scguns:saketini",
    "scguns:scrapper",
    "scguns:makeshift_rifle",
    "scguns:bruiser",
    "scguns:llr_birdfeeder",
    "scguns:whistler",
    "scguns:defender_pistol",
    "scguns:trenchur",
    "scguns:greaser_smg",
    "scguns:m3_carabine",
    "scguns:iron_spear",
    "scguns:auvtomag",
    "scguns:crusader",
    "scguns:marlin",
    "scguns:sequoia",
    "scguns:spirulida",
    "scguns:mokova",
    "scguns:mak_mkii",
    "scguns:turnpike",
    "scguns:kalaskah",
    "scguns:stigg",
    "scguns:krauser",
    "scguns:micina",
    "scguns:prush_gun",
    "scguns:lockewood",
    "scguns:mas_55",
    "scguns:m22_waltz",
    "scguns:osgood_50",
    "scguns:grandle_og",
    "scguns:grandle",
    "scguns:cogloader",
    "scguns:gattaler",
    "scguns:freyr",
    "scguns:vulcanic_repeater",
    "scguns:trotters",
    "scguns:prima_materia",
    "scguns:rat_king_and_queen",
    "scguns:locust",
    "scguns:earths_corpse",
    "scguns:nervepinch",
    "scguns:astella",
  ]);
  event.add("tfc:deals_slashing_damage", [
    "scguns:blooper",
    "scguns:m3_marksman",
    "scguns:hyperbaria",
    "scguns:bomb_lance",
    "scguns:homemaker",
    "scguns:rg_jigsaw",
    "scguns:truant",
    "scguns:howler",
    "scguns:thunderhead",
    "scguns:terra_incognita",
  ]);
  event.add("tfc:deals_crushing_damage", [
    "scguns:flintlock_pistol",
    "scguns:musket",
    "scguns:blunderbuss",
    "scguns:longarm",
    "scguns:fencer_carabine",
    "scguns:red_raydar",
    "scguns:callwell",
    "scguns:callwell_terminal",
    "scguns:combat_shotgun",
    "scguns:brawler",
    "scguns:hullbreaker",
    "scguns:killer_23",
    "scguns:drill_conversion",
    "scguns:intertial",
    "scguns:jackhammer",

    "scguns:dozier_rl",
    "scguns:super_shotgun",
    "scguns:mangalitsa",
  ]);
};

const scgunsBlockTags = (event) => {
  event.add("scguns:metal/detectable", [
    "#forge:ores/iron",
    "#forge:ores/copper",
    "#forge:ores/gold",
    "#forge:ores/nickel",
    "#forge:ores/zinc",
    "#forge:ores/bismuth",
    "#forge:ores/silver",
    "#forge:ores/tin",
    "#forge:ores/chromite",
  ]);
  event.add("scguns:metal_detectable", [
    "#forge:ores/iron",
    "#forge:ores/copper",
    "#forge:ores/gold",
    "#forge:ores/nickel",
    "#forge:ores/zinc",
    "#forge:ores/bismuth",
    "#forge:ores/silver",
    "#forge:ores/tin",
    "#forge:ores/chromite",
  ]);
};

const scgunsFluidTags = (event) => {
  event.add("tfc:usable_in_ingot_mold", ["kubejs:molten_anthralite", "kubejs:molten_diamond_steel"]);
};

const scgunsEntityTags = (event) => {
  //event.add("tfc:deals_piercing_damage", ["opposing_force:tomahawk"]);
};
