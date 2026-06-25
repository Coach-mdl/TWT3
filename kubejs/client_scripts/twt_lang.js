//For renaming items, recipes and adding langs. If you use another language, you can contribute here.
const twt_lang = (event) => {
  event.renameItem("scguns:stone_gun_barrel", "Primitive Gun Barrel");
  event.renameItem("scguns:treated_iron_gun_frame", "Steel Gun Frame");

  event.add("item.kubejs.mystique", "Mystique");
  event.add("item.kubejs.unprepared_copper_coil", "Unprepared Copper Coil");
  event.add("item.kubejs.unprepared_iron_coil", "Unprepared Iron Coil");
  event.add("metal.kubejs.impure_anthralite", "Impure Anthralite");
  event.add("metal.kubejs.anthralite", "Anthralite");
  event.add("metal.kubejs.diamond_steel", "Diamond Steel");

  event.add("item.kubejs.wrought_iron_toolkit", "Wrought Iron Tool Kit");

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
};
