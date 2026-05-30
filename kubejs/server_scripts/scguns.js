"use strict";

//This is going to be a big one.

const ScgunsRecipes = (event) => {
  //Removals
  event.remove({ mod: "scguns" });

  //TFC Heating
  event.recipes.tfc
    .heating("scguns:ancient_brass", 930)
    .resultFluid(Fluid.of("tfc:metal/brass", 100))
    .id("twt:heating/ancient_brass");
  event.recipes.tfc
    .heating("scguns:diamond_steel_ingot", 1400)
    .resultFluid(Fluid.of("tfc:metal/steel", 100))
    .id("twt:heating/diamond_steel_ingot");
  event.recipes.tfc
    .heating("scguns:depleted_diamond_steel_ingot", 1100)
    .resultFluid(Fluid.of("tfc:metal/steel", 100))
    .id("twt:heating/depleted_diamond_steel_ingot");
};

const ScgunsData = (event) => {
  //TFC Fuels
  event.fuel("scguns:vehement_coal", 1825, 2200, 0.65);

  //TFC Heat Def
  event.itemHeat("scguns:ancient_brass", 2.857, 558.0, 744.0);
  event.itemHeat("scguns:diamond_steel_ingot", 2.857, 1048, 1315);
  event.itemHeat("scguns:depleted_diamond_steel_ingot", 2.857, 984, 1015);

  event.metals(
    "kubejs:molten_anthralite",
    1435,
    0.00795,
    "scguns:anthralite_ingot",
    "kubejs:anthralite_double_ingot",
    "kubejs:anthralite_sheet",
    3,
    "kubejs:anthralite",
  );
  event.metals(
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
  event.add("jei:hidden_items", ["#scguns:disableditems", "scguns:sulfur_dust"]);
  event.add("scguns:entity_blacklisted_gun", "#scguns:disableditems");
  event.add("scguns:viventrum_banned_items", "#scguns:disableditems");
  event.add("tfc:pileable_sheets", ["kubejs:anthralite_sheet"]);

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
    //Not_Guns
    "scguns:war_axe",
    "scguns:cog_mace",
    "scguns:gas_grenade_round",
    "scguns:gas_grenade",
    "scguns:fire_grenade_round",
  ]);
};

const ScgunsEntityTags = (event) => {
  //event.add("tfc:deals_piercing_damage", ["opposing_force:tomahawk"]);
};
