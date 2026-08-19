"use strict";

const farmersDelightRecipes = (event) => {
  event
    .shapeless(Item.of("farmersdelight:sweet_berry_cookie"), [
      "#forge:fruits/berries/red",
      "firmalife:food/sugar_cookie",
    ])
    .id("twt:farmersdelight/shapeless/sweet_berry_cookie");

  event
    .shapeless(Item.of("farmersdelight:honey_cookie"), ["firmalife:raw_honey", "firmalife:food/sugar_cookie"])
    .id("twt:farmersdelight/shapeless/honey_cookie");

  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.shapeless(Item.of("farmersdelight:cutting_board"), [
      "#minecraft:wooden_pressure_plates",
      "#tfc:knives",
    ]),
  );
};

const farmersDelightItemTags = (event) => {};

const farmersDelightData = (event) => {
  event.foodItem("farmersdelight:pumpkin_pie_slice", (f) => {
    (f.hunger(1), f.saturation(0.5), f.water(1), f.grain(0.25), f.fruit(0.375), f.decayModifier(3));
  });
};
