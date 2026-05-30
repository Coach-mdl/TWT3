//priority = 1

Platform.mods.kubejs.name = "Together We Thrive";

StartupEvents.registry("item", (event) => {
  //Item registry. Server must be RESTARTED to register changes. Make sure to test elsewhere first to avoid repeat restarts.
  //Item requires dependency: Fusion
  event
    .create("mystique", "basic")
    .maxStackSize(64)
    .fireResistant(true)
    .rarity("epic")
    .glow(true)
    .tooltip("Mystical currency from an unknown land.")
    .modelJson({
      targets: ["kubejs:mystique"],
      models: [
        {
          model: "kubejs:item/mystique_0",
          conditions: [
            {
              type: "count",
              max: 7,
            },
          ],
        },
        {
          model: "kubejs:item/mystique_1",
          conditions: [
            {
              type: "count",
              max: 15,
            },
          ],
        },
        {
          model: "kubejs:item/mystique_2",
          conditions: [
            {
              type: "count",
              max: 31,
            },
          ],
        },
        {
          model: "kubejs:item/mystique_3",
          conditions: [
            {
              type: "count",
              max: 64,
            },
          ],
        },
      ],
    });
  event.create("unprepared_copper_coil", "basic").texture("vintageimprovements:item/small_copper_spring");
  event.create("unprepared_iron_coil", "basic").texture("vintageimprovements:item/small_iron_spring");

  //SCGuns Stuff
  event.create("unfinished_adrien_helmet", "basic").texture("scguns:item/adrien_helm_2d");
  event.create("unfinished_adrien_chestplate", "basic").texture("scguns:item/adrien_chestplate");
  event.create("unfinished_adrien_leggings", "basic").texture("scguns:item/adrien_leggings");
  event.create("unfinished_adrien_boots", "basic").texture("scguns:item/adrien_boots");
  event.create("anthralite_axe_head", "basic").texture("scguns:item/anthralite_axe");
  event.create("anthralite_pickaxe_head", "basic").texture("scguns:item/anthralite_pickaxe");
  event.create("anthralite_shovel_head", "basic").texture("scguns:item/anthralite_shovel");
  event.create("anthralite_hoe_head", "basic").texture("scguns:item/anthralite_hoe");
  event.create("anthralite_sword_head", "basic").texture("scguns:item/anthralite_sword");
  event.create("anthralite_double_ingot", "basic").texture("scguns:item/anthralite_ingot");
  event.create("anthralite_sheet", "basic").texture("scguns:item/anthralite_sheet");
  event.create("anthralite_double_sheet", "basic").texture("scguns:item/anthralite_ingot");
  event.create("unfinished_cog_boots", "basic").texture("scguns:item/cog_knight_boots");
  event.create("unfinished_cog_leggings", "basic").texture("scguns:item/cog_knight_leggings");
  event.create("unfinished_cog_chestplate", "basic").texture("scguns:item/cog_knight_chestplate");
  event.create("unfinished_cog_helmet", "basic").texture("scguns:item/cog_knight_helmet");
  event.create("unfinished_diamond_steel_helmet", "basic").texture("scguns:item/diamond_steel_helmet");
  event
    .create("unfinished_diamond_steel_chestplate", "basic")
    .texture("scguns:item/diamond_steel_chestplate");
  event.create("unfinished_diamond_steel_leggings", "basic").texture("scguns:item/diamond_steel_leggings");
  event.create("unfinished_diamond_steel_boots", "basic").texture("scguns:item/diamond_steel_boots");
  event.create("diamond_steel_double_ingot", "basic").texture("scguns:item/diamond_steel_ingot");
  event.create("diamond_steel_sheet", "basic").texture("scguns:item/diamond_steel_sheet");
  event.create("diamond_steel_double_sheet", "basic").texture("scguns:item/diamond_steel_ingot");
  event.create("unfinished_treated_brass_helmet", "basic").texture("scguns:item/treated_brass_helmet");
  event
    .create("unfinished_treated_brass_chestplate", "basic")
    .texture("scguns:item/treated_brass_chestplate");
  event.create("unfinished_treated_brass_leggings", "basic").texture("scguns:item/treated_brass_leggings");
  event.create("unfinished_treated_brass_boots", "basic").texture("scguns:item/treated_brass_boots");
  event.create("unfinished_scrap_helmet", "basic").texture("scguns:item/scrap_helmet");
  event.create("unfinished_scrap_chestplate", "basic").texture("scguns:item/scrap_chestplate");
  event.create("unfinished_scrap_leggings", "basic").texture("scguns:item/scrap_leggings");
  event.create("unfinished_scrap_boots", "basic").texture("scguns:item/scrap_boots");
});

StartupEvents.registry("fluid", (event) => {
  event.create("molten_anthralite", "thin").displayName("Molten Anthralite");
  event.create("molten_diamond_steel", "thin").displayName("Molten Diamond Steel");
});
