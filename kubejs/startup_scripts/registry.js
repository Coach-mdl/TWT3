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
});
