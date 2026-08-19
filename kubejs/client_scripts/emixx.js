//For EMI grouping

const EMIXX = (event) => {
  //handcrafted
  event.register("handcrafted:decorative_pots", "#handcrafted:pots");
  event.register("handcrafted:crockery", "#handcrafted:crockery");
  event.register("handcrafted:trophies", "#handcrafted:trophies");
  event.register("handcrafted:cushions", "#handcrafted:cushions");
  event.register("handcrafted:sheets", "#handcrafted:sheets");
  event.register("handcrafted:benches", "#handcrafted:benches");
  event.register("handcrafted:couches", "#handcrafted:couches");
  event.register("handcrafted:chairs", "#handcrafted:chairs");
  event.register("handcrafted:desks", "#handcrafted:desks");
  event.register("handcrafted:counters", "#handcrafted:counters");
  event.register("handcrafted:cupboards", "#handcrafted:cupboards");
  event.register("handcrafted:drawers", "#handcrafted:drawers");
  event.register("handcrafted:dining_benches", "#handcrafted:dining_benches");
  event.register("handcrafted:side_tables", "#handcrafted:side_tables");
  event.register("handcrafted:tables", "#handcrafted:tables");
  event.register("handcrafted:fancy_beds", "#handcrafted:fancy_beds");
  event.register("handcrafted:shelves", "#handcrafted:shelves");
  event.register("handcrafted:nightstands", "#handcrafted:nightstands");
  event.register("handcrafted:pillar_trims", "#handcrafted:pillar_trims");
  event.register("handcrafted:corner_trims", "#handcrafted:corner_trims");

  //backpacked
  event.register("backpacked:backpack_shelves", "#backpacked:backpack_shelves");

  //create
  event.register("create:windows", "#create:windows");
  event.register("create:window_panes", "#create:window_panes");

  //copycats
  event.register("copycats:copycats", [
    "copycats:copycat_block",
    "copycats:copycat_slab",
    "copycats:copycat_stairs",
    "copycats:copycat_vertical_stairs",
    "copycats:copycat_fence",
    "copycats:copycat_wall",
    "copycats:copycat_vertical_step",
    "copycats:copycat_beam",
    "copycats:copycat_slice",
    "copycats:copycat_vertical_slice",
    "copycats:copycat_corner_slice",
    "copycats:copycat_ghost_block",
    "copycats:copycat_layer",
    "copycats:copycat_half_panel",
    "copycats:copycat_pane",
    "copycats:copycat_flat_pane",
    "copycats:copycat_byte",
    "copycats:copycat_byte_panel",
    "copycats:copycat_board",
    "copycats:copycat_catwalk",
    "copycats:copycat_box",
    "copycats:copycat_half_layer",
    "copycats:copycat_vertical_half_layer",
    "copycats:copycat_stacked_half_layer",
    "copycats:copycat_slope",
    "copycats:copycat_vertical_slope",
    "copycats:copycat_slope_layer",
    "copycats:copycat_door",
    "copycats:copycat_sliding_door",
    "copycats:copycat_folding_door",
    "copycats:copycat_iron_door",
    "copycats:copycat_trapdoor",
    "copycats:copycat_iron_trapdoor",
    "copycats:copycat_fence_gate",
    "copycats:copycat_wooden_button",
    "copycats:copycat_stone_button",
    "copycats:copycat_wooden_pressure_plate",
    "copycats:copycat_stone_pressure_plate",
    "copycats:copycat_light_weighted_pressure_plate",
    "copycats:copycat_heavy_weighted_pressure_plate",
    "copycats:copycat_ladder",
    "copycats:copycat_fluid_pipe",
    "copycats:copycat_shaft",
    "copycats:copycat_cogwheel",
    "copycats:copycat_large_cogwheel",
  ]);
};
