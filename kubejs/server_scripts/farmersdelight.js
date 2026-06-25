"use strict";

const FarmersDelightRecipes = (event) => {
  event
    .shapeless(Item.of("farmersdelight:sweet_berry_cookie"), [
      "#forge:fruits/berries/red",
      "firmalife:food/sugar_cookie",
    ])
    .id("twt:shapeless/sweet_berry_cookie");

  event
    .shapeless(Item.of("farmersdelight:honey_cookie"), ["firmalife:raw_honey", "firmalife:food/sugar_cookie"])
    .id("twt:shapeless/honey_cookie");
};

const FarmersDelightItemTags = (event) => {};
