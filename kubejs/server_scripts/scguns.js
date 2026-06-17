"use strict";
//
//This is going to be a big one.

const ScgunsRecipes = (event) => {
  //Removals
  event.remove({ not: { type: "scguns:lightning_battery" }, mod: "scguns" });

  //Shaped
  event
    .shaped(Item.of("scguns:range_finder"), [" A ", "BCD", "EA "], {
      D: "tfc:lens",
      C: "scguns:laser_sight",
      A: "kubejs:anthralite_sheet",
      B: "powergrid:potato_battery",
      E: "scguns:gun_grip",
    })
    .id("twt:shaped/range_finder");

  event
    .shaped(Item.of("scguns:laser_sight"), ["AB ", "CDE", "   "], {
      E: "tfc:lens",
      C: "vintageimprovements:laser_item",
      B: "kubejs:anthralite_sheet",
      D: "tfc:lamp_glass",
      A: "powergrid:potato_battery",
    })
    .id("twt:shaped/laser_sight");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("scguns:gun_grip"), ["DA ", "BAC", "BCC"], {
        B: "#tfc:lumber",
        A: "createdieselgenerators:kelp_handle",
        C: "scguns:anthralite_nugget",
        D: "#tfc:knives",
      }),
    )
    .id("twt:advanced_shaped/gun_grip");

  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("scguns:wooden_stock"), ["AAA", "ABB", "C  "], {
        A: "#tfc:lumber",
        B: "tfc:metal/rod/wrought_iron",
        C: "#tfc:knives",
      }),
    )
    .id("twt:advanced_shaped/wooden_stock");

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
    .id("twt:advanced_shaped/light_stock");

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
    .id("twt:advanced_shaped/weighted_stock");

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
    .id("twt:advanced_shaped/bump_stock");

  event
    .shaped(Item.of("scguns:silencer"), ["ABA", "CDC", "ABA"], {
      D: "tfc:metal/tuyere/steel",
      C: "#tfc:high_quality_cloth",
      A: "#forge:string",
      B: "tfc:jute_fiber",
    })
    .id("twt:shaped/silencer");

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
      .id(`twt:anvil/${item}`);
  });

  //TFC Welding
  event.recipes.tfc
    .welding("kubejs:anthralite_double_ingot", "scguns:anthralite_ingot", "scguns:anthralite_ingot")
    .id("twt:welding/anthralite_double_ingot");
  event.recipes.tfc
    .welding("kubejs:anthralite_double_sheet", "kubejs:anthralite_sheet", "kubejs:anthralite_sheet")
    .id("twt:welding/anthralite_double_sheet");
  event.recipes.tfc
    .welding("scguns:gun_magazine", "kubejs:anthralite_sheet", "vintageimprovements:iron_spring")
    .id("twt:welding/gun_magazine");

  //laser_cutting
  event.recipes.vintageimprovements
    .laser_cutting("scguns:gun_parts", "kubejs:anthralite_double_ingot")
    .energyCost(4000)
    .maxChargeRate(50)
    .id("twt:laser_cutting/gun_parts");

  //Lathe
  event.recipes.vintageimprovements
    .turning("scguns:gun_barrel", "tfc:metal/tuyere/steel")
    .processingTime(400)
    .id("twt:turning/gun_barrel");

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
    .id("twt:sequenced_assembly/heavy_gun_parts");

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
    .id("twt:sequenced_assembly/heavy_gun_barrel");

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
    .id("twt:shaped/flintlock_pistol");

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
      .id(`twt:heating/${object}`);
  });

  //TFC Casting
  event.recipes.tfc
    .casting(
      "scguns:anthralite_ingot",
      "tfc:ceramic/ingot_mold",
      TFC.fluidStackIngredient(anthralite.f, 100),
      0.25,
    )
    .id("twt:casting/anthralite_ingot");
  event.recipes.tfc
    .casting(
      "scguns:depleted_diamond_steel_ingot",
      "tfc:ceramic/ingot_mold",
      TFC.fluidStackIngredient(anthralite.f, 100),
      0.25,
    )
    .id("twt:casting/depleted_diamond_steel_ingot");
  event.recipes.tfc
    .casting(
      "scguns:anthralite_ingot",
      "tfc:ceramic/fire_ingot_mold",
      TFC.fluidStackIngredient(anthralite.f, 100),
      0.25,
    )
    .id("twt:casting/anthralite_ingot_fire_mold");
  event.recipes.tfc
    .casting(
      "scguns:depleted_diamond_steel_ingot",
      "tfc:ceramic/fire_ingot_mold",
      TFC.fluidStackIngredient("kubejs:molten_diamond_steel", 100),
      0.25,
    )
    .id("twt:casting/depleted_diamond_steel_ingot_fire_mold");
};

const ScgunsData = (event) => {
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
};

const ScgunsItemTags = (event) => {
  event.add("jei:hidden_items", ["#scguns:disableditems"]);
  event.add("scguns:entity_blacklisted_gun", "#scguns:disableditems");
  event.add("scguns:viventrum_banned_items", "#scguns:disableditems");

  event.add("tfc:pileable_ingots", ["scguns:anthralite_ingot", "scguns:diamond_steel_ingot"]);
  event.add("tfc:pileable_sheets", ["kubejs:anthralite_sheet", "kubejs:diamond_steel_sheet"]);
  event.add("tfc:pileable_double_ingots", [
    "kubejs:anthralite_double_ingot",
    "kubejs:diamond_steel_double_ingot",
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
    "scguns:gattaler",
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
    "scguns:thunderhead",
    "scguns:dozier_rl",
    "scguns:super_shotgun",
    "scguns:mangalitsa",
  ]);
  //This custom tag disables weapons from being obtained.
  event.add("scguns:disableditems", [
    //Antique
    "scguns:handcannon",
    "scguns:doublet",
    "scguns:repeating_musket",
    "scguns:fencer_thumper",
    "scguns:plasmabuss",
    "scguns:laser_musket",
    "scguns:teslock_rifle",
    //Frontier
    "scguns:winnie",
    "scguns:callwell_conversion",
    "scguns:saketini_ironport",
    "scguns:big_bore",
    "scguns:kiln_gun",
    //Rust_Ridge
    "scguns:rusty_gnat",
    "scguns:boomstick",
    "scguns:llr_director",
    "scguns:umax_pistol",
    //Federal
    "scguns:venturi",
    "scguns:iron_javelin",
    "scguns:pulsar",
    "scguns:triquetra",
    "scguns:rocket_rifle",
    "scguns:ultra_knight_hawk",
    "scguns:mk43_rifle",
    "scguns:gyrojet_pistol",
    //Whaler
    "scguns:floundergat",
    //Wrecker
    "scguns:stiletto",
    "scguns:railworker",
    "scguns:whizzbanger",
    //Asgharian
    "scguns:drill",
    "scguns:zilk_45",
    "scguns:nailer",
    "scguns:uppercut",
    "scguns:valora",
    "scguns:minsky",
    "scguns:mas_peddler",
    "scguns:cyclone",
    "scguns:plasgun",
    "scguns:soul_drummer",
    "scguns:inquisitor",
    //COG
    "scguns:waltz_conversion",
    "scguns:gale",
    "scguns:jr_wristbreaker",
    "scguns:howler_conversion",
    "scguns:niami",
    "scguns:hammer_gl",
    "scguns:scratches",
    "scguns:cr4k_mining_laser",
    //Piglin
    //Deep_Dark
    "scguns:whispers",
    "scguns:echoes_2",
    "scguns:sculk_resonator",
    "scguns:forlorn_hope",
    //End
    "scguns:carapice",
    "scguns:shellurker",
    "scguns:weevil",
    "scguns:dark_matter",
    //Scorched
    //Other
    "scguns:war_axe",
    "scguns:cog_mace",
    "scguns:gas_grenade_round",
    "scguns:gas_grenade",
    "scguns:fire_grenade_round",
    "scguns:sulfur_dust",
    /^scguns:.*_flare$/,
    "scguns:gun_bench",
    "scguns:polar_generator",
    "scguns:vent_collector",
    "scguns:sulfur_vent",
    "scguns:geothermal_vent",
    "scguns:macerator",
    "scguns:mechanical_press",
    "scguns:powered_macerator",
    "scguns:powered_mechanical_press",
    "scguns:penetrator",
    "scguns:guano_candle",
    "scguns:sulfur_block",
    "scguns:ancient_brass_block",
    "scguns:treated_iron_block",
    "scguns:treated_brass_block",
    "scguns:plasma_block",
    "scguns:scorched_block",
    "scguns:niter_block",
    "scguns:treated_iron_blend",
    "scguns:treated_iron_ingot",
    "scguns:treated_iron_nugget",
    "scguns:raw_anthralite",
    "scguns:anthralite_knife",
    "scguns:weird_flesh",
    "scguns:vicious_acid_bucket",
    "scguns:phosphorite_brick_wall",
    "scguns:phosphorite_brick_slab",
    "scguns:phosphorite_brick_stairs",
    "scguns:cracked_phosphorite_bricks",
    "scguns:phosphorite_bricks",
    "scguns:polished_phosphorite",
    "scguns:smooth_phosphorite",
    "scguns:phosphorite",
    "scguns:anthralite_ore",
    "scguns:deepslate_anthralite_ore",
    "scguns:raw_anthralite_block",
    "scguns:sulfur_ore",
    "scguns:deepslate_sulfur_ore",
    "scguns:nether_sulfur_ore",
    "scguns:rich_phosphorite",
    "scguns:raw_phosphor_block",
    "scguns:white_flag",
    "scguns:netherite_scrap_chunk",
    "scguns:nether_star_fragment",
    "scguns:flare_pistol",
    "scguns:plasma_lantern",
    "scguns:cut_diamond_steel_slab",
    "scguns:diamond_steel_lamp",
    "scguns:diamond_steel_pillar",
    "scguns:diamond_steel_grate",
    "scguns:treated_brass_plates",
    "scguns:cut_treated_brass",
    "scguns:cut_treated_brass_stairs",
    "scguns:cut_treated_brass_slab",
    "scguns:treated_brass_tiles",
    "scguns:treated_brass_tiles_stairs",
    "scguns:treated_brass_tiles_slab",
    "scguns:chiseled_treated_brass_block",
    "scguns:treated_brass_lamp",
    "scguns:treated_brass_grate",
    "scguns:treated_brass_grate_pane",
    "scguns:diamond_steel_panel",
    "scguns:chiseled_diamond_steel_block",
    "scguns:diamond_steel_tiles",
    "scguns:diamond_steel_tiles_stairs",
    "scguns:diamond_steel_tiles_slab",
    "scguns:cut_diamond_steel",
    "scguns:cut_diamond_steel_stairs",
    "scguns:diamond_steel_grate_pane",
    "scguns:diamond_steel_bars",
    "scguns:vicious_acid_source",
    "scguns:chiseled_treated_iron_block",
    "scguns:treated_iron_plates",
    "scguns:cut_treated_iron",
    "scguns:cut_treated_iron_stairs",
    "scguns:cut_treated_iron_slab",
    "scguns:treated_iron_lamp",
    "scguns:treated_iron_bars",
    "scguns:treated_iron_grate",
    "scguns:treated_iron_grate_pane",
    "scguns:sulfur_chunk",
    "scguns:raw_phosphor",
    "scguns:phosphor_dust",
    "scguns:niter_dust",
    "scguns:bat_guano",
    "scguns:treated_brass_ingot",
    "scguns:treated_brass_blend",
    "scguns:diamond_steel_blend",
    "scguns:scorched_blend",
    "scguns:copper_disc",
    "scguns:diamond_steel_block",
    "scguns:vehement_coal_block",
    "scguns:advanced_composter",
    "scguns:supply_crate",
    /^scguns:.*asgharian.*/,
    /^scguns:.*niter_glass$/,
    "scguns:beacon_grenade",
    "scguns:composite_filter",
    "scguns:anthralite_respirator",
    "scguns:netherite_respirator",
    "scguns:gas_mask_module",
    "scguns:viventrum_package",
    "scguns:choke_bomb",
    "scguns:sculk_cell",
    "scguns:sculk_tome",
    "scguns:swarm_bomb",
    "scguns:gun_parts_mold",
    "scguns:iron_bayonet",
  ]);
};

const ScgunsBlockTags = (event) => {
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

const ScgunsFluidTags = (event) => {
  event.add("tfc:usable_in_ingot_mold", ["kubejs:molten_anthralite", "kubejs:molten_diamond_steel"]);
};

const ScgunsEntityTags = (event) => {
  //event.add("tfc:deals_piercing_damage", ["opposing_force:tomahawk"]);
};
