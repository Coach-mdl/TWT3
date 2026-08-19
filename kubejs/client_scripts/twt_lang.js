//For renaming items, recipes and adding langs. If you use another language, you can by adding a new lang file.

//Move to dedicated lang file later
const twtLangEnUs = (event) => {
  event.renameItem("scguns:stone_gun_barrel", "Primitive Gun Barrel");
  event.renameItem("scguns:treated_iron_gun_frame", "Steel Gun Frame");
  event.renameItem("scguns:repair_kit", "Basic Tool Kit");

  event.renameItem("handcrafted:hammer", "Mallet");

  event.add("item.kubejs.mystique", "Mystique");
  event.add("item.kubejs.unprepared_copper_coil", "Unprepared Copper Coil");
  event.add("item.kubejs.unprepared_iron_coil", "Unprepared Iron Coil");
  event.add("metal.kubejs.impure_anthralite", "Impure Anthralite");
  event.add("metal.kubejs.anthralite", "Anthralite");
  event.add("metal.kubejs.diamond_steel", "Diamond Steel");

  //Equipment Related
  event.add("tooltip.kubejs.armor.info", "\u00A7d" + "\u00A7o" + "Press ALT for info");
  event.add("tooltip.kubejs.armor.this", "\u00A7d" + "\u00A7o" + "This armor:");
  event.add("tooltip.kubejs.armor.platecarrier", "Has a plate carrier (WIP)");
  event.add("tooltip.kubejs.armor.heavy", "Is heavy");
  event.add("tooltip.kubejs.armor.veryheavy", "Is VERY heavy");
  event.add("tooltip.kubejs.armor.cumbersome", "Is cumbersome");
  event.add("tooltip.kubejs.armor.slowdown_immune", "Is good for hiking");
  event.add("tooltip.kubejs.armor.stylish", "Is stylish");
  event.add("tooltip.kubejs.armor.magmaresist", "Is magma-resistant");
  event.add("tooltip.kubejs.armor.sealed", "Is sealed");
  event.add("tooltip.kubejs.armor.cheap", "Is cheaply made");
  event.add("tooltip.kubejs.armor.spiky", "Is spiky");

  event.add("curios.identifier.hip_holster", "\u00A7d" + "\u00A7o" + "Hip Holster");

  //Sin Scape
  event.add("tooltip.kubejs.cursed_rock", "Accursed");
  event.add("item.kubejs.sin_slate_axe", "Sin Slate Axe");
  event.add("item.kubejs.sin_slate_shovel", "Sin Slate Shovel");
  event.add("item.kubejs.sin_slate_hammer", "Sin Slate Hammer");
  event.add("item.kubejs.sin_slate_javelin", "Sin Slate Javelin");
  event.add("item.kubejs.sin_slate_axe_head", "Sin Slate Axe Head");
  event.add("item.kubejs.sin_slate_shovel_head", "Sin Slate Shovel Head");
  event.add("item.kubejs.sin_slate_hammer_head", "Sin Slate Hammer Head");
  event.add("item.kubejs.sin_slate_javelin_head", "Sin Slate Javelin Head");

  //endergetic
  event.add("item.kubejs.poise_lumber", "Poise Lumber");

  //aether
  event.add("item.kubejs.skyroot_lumber", "Skyroot Lumber");

  //General Tooltips
  event.add("tooltip.handcrafted.hammer", "Not a real hammer! Press shift!");
  event.add("tooltip.handcrafted.hammer_alt", "Use on certain Handcrafted blocks to change it's appearance");
};
