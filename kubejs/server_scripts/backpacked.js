const backpackedRecipes = (event) => {
  //shaped
  event.recipes.tfc
    .damage_inputs_shaped_crafting(
      event.shaped(Item.of("backpacked:backpack"), ["ABC", "DED", "FEF"], {
        E: "scguns:heavy_armor_pouches",
        A: "sns:reinforced_fiber",
        D: "sns:bound_leather_strip",
        B: "sns:buckle",
        F: "scguns:armor_pouches",
        C: "tfc:bone_needle",
      }),
    )
    .id("twt:backpacked/advanced_shaped/backpack");

  const getNamespace = (wood) => (wood === "crimson" || wood === "warped" ? "beneath" : "tfc");
  let getFurnitureNamespace = (wood) =>
    wood === "crimson" || wood === "warped" ? "backpacked:" : "everycomp:bp/tfc/";

  $woods.forEach((wood) => {
    let namespace = getNamespace(wood);
    let furnitureNS = getFurnitureNamespace(wood);

    //Backpack Shelves
    event.recipes.tfc
      .damage_inputs_shaped_crafting(
        event.shaped(`${furnitureNS}${wood}_backpack_shelf`, ["   ", "AAA", "BCB"], {
          A: `${namespace}:wood/lumber/${wood}`,
          C: "#tfc:saws",
          B: "minecraft:stick",
        }),
      )
      .id(`twt:backpacked/advanced_shaped/${wood}_backpack_shelf_manual_only`);
  });
};

const backpackedItemTags = (event) => {
  event.add("backpacked:backpack_shelves", [
    "backpacked:crimson_backpack_shelf",
    "backpacked:warped_backpack_shelf",
    "everycomp:bp/tfc/acacia_backpack_shelf",
    "everycomp:bp/tfc/ash_backpack_shelf",
    "everycomp:bp/tfc/aspen_backpack_shelf",
    "everycomp:bp/tfc/birch_backpack_shelf",
    "everycomp:bp/tfc/blackwood_backpack_shelf",
    "everycomp:bp/tfc/chestnut_backpack_shelf",
    "everycomp:bp/tfc/douglas_fir_backpack_shelf",
    "everycomp:bp/tfc/hickory_backpack_shelf",
    "everycomp:bp/tfc/kapok_backpack_shelf",
    "everycomp:bp/tfc/mangrove_backpack_shelf",
    "everycomp:bp/tfc/maple_backpack_shelf",
    "everycomp:bp/tfc/oak_backpack_shelf",
    "everycomp:bp/tfc/palm_backpack_shelf",
    "everycomp:bp/tfc/pine_backpack_shelf",
    "everycomp:bp/tfc/rosewood_backpack_shelf",
    "everycomp:bp/tfc/sequoia_backpack_shelf",
    "everycomp:bp/tfc/spruce_backpack_shelf",
    "everycomp:bp/tfc/sycamore_backpack_shelf",
    "everycomp:bp/tfc/white_cedar_backpack_shelf",
    "everycomp:bp/tfc/willow_backpack_shelf",
    "everycomp:bp/aether/skyroot_backpack_shelf",
    "everycomp:bp/endergetic/poise_backpack_shelf",
  ]);
};
