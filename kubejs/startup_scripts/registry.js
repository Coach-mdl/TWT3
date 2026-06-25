//priority = 1

Platform.mods.kubejs.name = "Together We Thrive";

/**
 * @param {Internal.RegistryEventJS} event
 */

StartupEvents.registry("item", (event) => {
  //Item registry. Server must be RESTARTED to register changes. Make sure to test elsewhere first to avoid repeat restarts.
  //Item requires dependency: Fusion
  event
    .create("mystique", "basic")
    .displayName(Text.translatable("item.kubejs.mystique"))
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
  event
    .create("unprepared_copper_coil", "basic")
    .displayName(Text.translatable("item.kubejs.unprepared_copper_coil"))
    .texture("vintageimprovements:item/small_copper_spring");
  event
    .create("unprepared_iron_coil", "basic")
    .displayName(Text.translatable("item.kubejs.unprepared_iron_coil"))
    .texture("vintageimprovements:item/small_iron_spring");
  event
    .create("wrought_iron_toolkit", "basic")
    .displayName(Text.translatable("item.kubeks.wrought_iron_toolkit"))
    .texture("scguns:item/repair_kit")
    .maxDamage(30);

  //SCGuns Stuff
  event.create("unfinished_adrien_helmet", "basic").texture("scguns:item/adrien_helm_2d");
  event.create("unfinished_adrien_chestplate", "basic").texture("scguns:item/adrien_chestplate");
  event.create("unfinished_adrien_leggings", "basic").texture("scguns:item/adrien_leggings");
  event.create("unfinished_adrien_boots", "basic").texture("scguns:item/adrien_boots");
  event.create("unfinished_anthralite_helmet", "basic").texture("scguns:item/anthralite_helmet");
  event.create("unfinished_anthralite_chestplate", "basic").texture("scguns:item/anthralite_chestplate");
  event.create("unfinished_anthralite_leggings", "basic").texture("scguns:item/anthralite_leggings");
  event.create("unfinished_anthralite_boots", "basic").texture("scguns:item/anthralite_boots");
  event.create("anthralite_axe_head", "basic").texture("scguns:item/anthralite_axe");
  event.create("anthralite_pickaxe_head", "basic").texture("scguns:item/anthralite_pickaxe");
  event.create("anthralite_shovel_head", "basic").texture("scguns:item/anthralite_shovel");
  event.create("anthralite_hoe_head", "basic").texture("scguns:item/anthralite_hoe");
  event.create("anthralite_bayonet_head", "basic").texture("scguns:item/anthralite_bayonet");
  event.create("anthralite_sword_head", "basic").texture("scguns:item/anthralite_sword");
  event.create("raw_anthralite_bloom", "basic").texture("tfc:item/bloom/unrefined");
  event.create("refined_anthralite_bloom", "basic").texture("tfc:item/bloom/refined");
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
  event.create("diamond_steel_sheet", "basic").texture("scguns:item/diamond_steel_ingot");
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

  //Endergetic
  create("poise_lumber", "basic")
    .displayName(Text.translatable("item.kubejs.poise_lumber"))
    .texture("tfc:item/wood/lumber")
    .color(0, 0x841eba);
  //Aether
  create("skyroot_lumber", "basic")
    .displayName(Text.translatable("item.kubejs.skyroot_lumber"))
    .texture("tfc:item/wood/lumber")
    .color(0, 0xa2ab9d);

  //Sin Biome Stuff
  const SIN_SLATE_DATA = {
    Axe: { id: "axe", type: "axe", damage: 7 },
    Shovel: { id: "shovel", type: "shovel", damage: 3 },
    Hammer: { id: "hammer", type: "tfc:hammer", damage: 4 },
    Javelin: { id: "javelin", type: "tfc:javelin", damage: 4 },
    Axe_Head: { id: "axe_head", type: "basic", damage: 0 },
    Shovel_Head: { id: "shovel_head", type: "basic", damage: 0 },
    Hammer_Head: { id: "hammer_head", type: "basic", damage: 0 },
    Javelin_Head: { id: "javelin_head", type: "basic", damage: 0 },
  };

  Object.entries(SIN_SLATE_DATA).forEach(([object, data]) => {
    let id = `sin_slate_${data.id}`;
    let type = data.type;
    let damage = data.damage;

    if (data.damage !== 0) {
      event
        .create(id, type)
        .displayName(Text.translatable(`item.kubejs.sin_slate_${data.id}`))
        .texture(`tfc:item/stone/${data.id}`)
        .fireResistant(true)
        .maxDamage(120)
        .glow(true)
        .color(0, 0xff2700)
        .tier("igneous_extrusive");
    } else if (data.id === "javelin") {
      event
        .create(id, type)
        .displayName(Text.translatable(`item.kubejs.sin_slate_${data.id}`))
        .texture(`tfc:item/stone/${data.id}`)
        .fireResistant(true)
        .maxDamage(damage)
        .glow(true)
        .color(0, 0xff2700)
        .tier("igneous_extrusive")
        .thrownDamage(6)
        .skeletonWeapon();
    } else {
      event
        .create(id, type)
        .displayName(Text.translatable(`item.kubejs.sin_slate_${data.id}`))
        .texture(`tfc:item/stone/${data.id}`)
        .fireResistant(true)
        .glow(true)
        .color(0, 0xff2700);
    }
  });
});

StartupEvents.registry("fluid", (event) => {
  event
    .create("impure_anthralite")
    .displayName("Impure Anthralite")
    .thickTexture(0x463b33)
    .bucketColor(0x463b33)
    .noBlock();
  event
    .create("molten_anthralite")
    .displayName("Molten Anthralite")
    .thickTexture(0x5f5147)
    .bucketColor(0x5f5147)
    .noBlock();
  event
    .create("molten_diamond_steel")
    .displayName("Molten Diamond Steel")
    .thickTexture(0xa3c3c3)
    .bucketColor(0xa3c3c3)
    .noBlock();
});

StartupEvents.registry("block", (event) => {
  //Sin Biome
  event
    .create("sin_stone", "tfc:loose_rock")
    .displayName("Sin Stone")
    .itemTexture("tfc:item/loose_rock/basalt")
    .rockTypeModel("igneous_extrusive");
  event
    .create("sin_slate", "tfc:raw_rock")
    .displayName("Sin Slate")
    .naturallySupported(false)
    .rockTypeTooltip(Text.translatable("tooltip.kubejs.cursed_rock"));
  event
    .create("hardened_sin_slate", "tfc:raw_rock")
    .displayName("Hardened Sin Slate")
    .naturallySupported(true)
    .rockTypeTooltip(Text.translatable("tooltip.kubejs.cursed_rock"));
  event.create("sin_cobble").displayName("Sin Cobble");
  event
    .create("sin_spike", "tfc:rock_spike")
    .displayName("Sin Spike")
    .models((type, m) => {
      if (type.base()) {
        m.texture("texture", "tfc:block/rock/raw/basalt");
      } else if (type.middle()) {
        m.texture("texture", "tfc:block/rock/raw/gabbro");
      } else if (type.tip()) {
        m.texture("texture", "tfc:block/rock/raw/slate");
      }
    });
  event.create("smooth_sin_slate").displayName("Smooth Sin Slate");
  event.create("chiseled_sin_slate").displayName("Chiseled Sin Slate");
  event.create("sin_magma").displayName("Sin Magma");
});
