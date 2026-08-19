//Start-up script handler
StartupEvents.registry("item", (event) => {
  twtItemRegistry(event);
});
StartupEvents.registry("fluid", (event) => {
  twtFluidRegistry(event);
});
StartupEvents.registry("block", (event) => {
  twtBlockRegistry(event);
});

ItemEvents.modification((event) => {
  twtItemModification(event);
});
