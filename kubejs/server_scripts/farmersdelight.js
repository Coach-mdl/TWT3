"use strict";

const FarmersDelightRecipes = (event) => {
  //removal
  event.remove({ id: "farmersdelight_tfc:heating/baked_potato" });
  event.remove({ id: "farmersdelight:cutting/leather_horse_armor" });
  event.remove({ id: "farmersdelight:cutting/leather_helmet" });
  event.remove({ id: "farmersdelight:cutting/leather_chestplate" });
  event.remove({ id: "farmersdelight:cutting/leather_leggings" });
  event.remove({ id: "farmersdelight:cutting/leather_boots" });
  event.remove({ id: "farmersdelight:pie_crust" });
  event.remove({ id: "farmersdelight:pie_crust_with_pie_dough" });
  event.remove({ id: "farmersdelight:basket" });
  event.remove({ id: "farmersdelight:cutting_board" });
  event.remove({ id: "farmersdelight:cooking/hot_cocoa" });
  event.remove({ id: "survivorsdelight:cooking/apple_cider" });
  event.remove({ id: "farmersdelight:cooking/apple_cider" });
  event.remove({ id: "farmersdelight:melon_juice" });
  event.remove({ id: "survivorsdelight:cooking/soup/tomato_sauce" });
  event.remove({ id: "farmersdelight:cutting/tag_dough" });
  event.remove({ id: "farmersdelight:cutting/cabbage" });
  event.remove({ id: "farmersdelight:cutting/beef" });
  event.remove({ id: "farmersdelight:cutting/chicken" });
  event.remove({ id: "farmersdelight:cutting/cooked_chicken" });
  event.remove({ id: "farmersdelight:cutting/porkchop" });
  event.remove({ id: "farmersdelight:cutting/cod" });
  event.remove({ id: "farmersdelight:cutting/cooked_cod" });
  event.remove({ id: "farmersdelight:cutting/salmon" });
  event.remove({ id: "farmersdelight:cutting/cooked_salmon" });
  event.remove({ id: "farmersdelight:cutting/mutton" });
  event.remove({ id: "farmersdelight:cutting/cooked_mutton" });
  event.remove({ id: "farmersdelight:cutting/ham" });
  event.remove({ id: "farmersdelight:cutting/smoked_ham" });
  event.remove({ id: "farmersdelight:apple_pie" });
  event.remove({ id: "farmersdelight:integration/create/mixing/pie_crust_from_mixing" });
  event.remove({ id: "farmersdelight:sweet_berry_cheesecake" });
  event.remove({ id: "farmersdelight:chocolate_pie" });
  event.remove({ id: "farmersdelight:honey_cookie" });
  event.remove({ id: "farmersdelight:barbecue_stick" });
  event.remove({ id: "farmersdelight:cooking/dumplings" });
  event.remove({ id: "farmersdelight:stuffed_potato" });
  event.remove({ id: "farmersdelight:cooking/cabbage_rolls" });
  event.remove({ id: "farmersdelight:cooking/bone_broth" });
  event.remove({ id: "farmersdelight:cooking/beef_stew" });
  event.remove({ id: "farmersdelight:cooking/chicken_soup" });
  event.remove({ id: "farmersdelight:cooking/vegetable_soup" });
  event.remove({ id: "farmersdelight:cooking/fish_stew" });
  event.remove({ id: "farmersdelight:cooking/fried_rice" });
  event.remove({ id: "farmersdelight:cooking/pumpkin_soup" });
  event.remove({ id: "farmersdelight:cooking/baked_cod_stew" });
  event.remove({ id: "farmersdelight:cooking/noodle_soup" });
  event.remove({ id: "farmersdelight:cooking/onion_soup" });
  event.remove({ id: "farmersdelight:bacon_and_eggs" });
  event.remove({ id: "farmersdelight:cooking/pasta_with_meatballs" });
  event.remove({ id: "farmersdelight:cooking/pasta_with_mutton_chop" });
  event.remove({ id: "farmersdelight:cooking/mushroom_rice" });
  event.remove({ id: "farmersdelight:roasted_mutton_chops" });
  event.remove({ id: "farmersdelight:cooking/vegetable_noodles" });
  event.remove({ id: "farmersdelight:steak_and_potatoes" });
  event.remove({ id: "farmersdelight:cooking/ratatouille" });
  event.remove({ id: "farmersdelight:cooking/squid_ink_pasta" });
  event.remove({ id: "farmersdelight:grilled_salmon" });
  event.remove({ id: "farmersdelight:roast_chicken_block" });
  event.remove({ id: "farmersdelight:cooking/stuffed_pumpkin_block" });
  event.remove({ id: "farmersdelight:honey_glazed_ham_block" });
  event.remove({ id: "farmersdelight:shepherds_pie_block_with_butter" });
  event.remove({ id: "farmersdelight:shepherds_pie_block" });
  event.remove({ id: "farmersdelight:gleaming_salad_block" });
  event.remove({ id: "farmersdelight:cooking/dog_food" });
  event.remove({ id: "farmersdelight:horse_feed" });
  event.remove({ id: "farmersdelight:sweet_berry_cookie" });

  event.remove({ output: "#twt:fd_disabled_items" });

  event.replaceInput({ id: "farmersdelight:rope" }, "#forge:straw", "farmersdelight:straw");

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

const FarmersDelightItemTags = (event) => {
  event.add("twt:fd_disabled_items", [
    "farmersdelight:flint_knife",
    "farmersdelight:iron_knife",
    "farmersdelight:diamond_knife",
    "farmersdelight:netherite_knife",
    "farmersdelight:golden_knife",
    "farmersdelight:oak_cabinet",
    "farmersdelight:spruce_cabinet",
    "farmersdelight:birch_cabinet",
    "farmersdelight:jungle_cabinet",
    "farmersdelight:acacia_cabinet",
    "farmersdelight:dark_oak_cabinet",
    "farmersdelight:mangrove_cabinet",
    "farmersdelight:cherry_cabinet",
    "farmersdelight:bamboo_cabinet",
    "farmersdelight:crimson_cabinet",
    "farmersdelight:warped_cabinet",
    "farmersdelight:sandy_shrub",
    "farmersdelight:wild_cabbages",
    "farmersdelight:wild_onions",
    "farmersdelight:wild_tomatoes",
    "farmersdelight:wild_carrots",
    "farmersdelight:wild_potatoes",
    "farmersdelight:wild_beetroots",
    "farmersdelight:wild_rice",
    "farmersdelight:cabbage",
    "farmersdelight:tomato",
    "farmersdelight:onion",
    "farmersdelight:rice_panicle",
    "farmersdelight:rice",
    "farmersdelight:cabbage_seeds",
    "farmersdelight:tomato_seeds",
    "farmersdelight:rotten_tomato",
    "farmersdelight:wheat_dough",
    "farmersdelight:pumpkin_slice",
    "farmersdelight:carrot_crate",
    "farmersdelight:potato_crate",
    "farmersdelight:beetroot_crate",
    "farmersdelight:cabbage_crate",
    "farmersdelight:tomato_crate",
    "farmersdelight:onion_crate",
    "farmersdelight:rice_bale",
    "farmersdelight:straw_bale",
    "farmersdelight:rice_bag",
    "farmersdelight:skillet",
  ]);

  event.remove("opposing_force:knives", "#twt:fd_disabled_items");
  event.remove("farmersdelight:tools/knives", "#twt:fd_disabled_items");
  event.remove("farmersdelight:straw_harvesters", "#twt:fd_disabled_items");
  event.remove("tfc:sharp_tools", "#twt:fd_disabled_items");
  event.remove("forge:tools/knives", "#twt:fd_disabled_items");
  event.remove("tfc:knives", "#twt:fd_disabled_items");
};
