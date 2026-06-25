"use strict";

const HandcraftedRecipes = (event) => {
  //SHAPED
  event
    .shaped("handcrafted:hammer", [" L", "S "], {
      L: "#minecraft:logs",
      S: "#forge:rods/wooden",
    })
    .id("twt:shaped/decor_hammer");
  event
    .shaped("handcrafted:hammer", ["L ", " S"], {
      L: "#minecraft:logs",
      S: "#forge:rods/wooden",
    })
    .id("twt:shaped/decor_hammer_2");
};

const handcraftedItemTags = (event) => {
  event.add("handcrafted:counter_materials", "tfc:rock/raw/schist");
  event.add("handcrafted:trim_materials", "tfc:rock/raw/schist");
};
