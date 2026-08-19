//priority: 1

//Client-Side script loader
ClientEvents.lang("en_us", (event) => {
  twtLangEnUs(event);
});

ItemEvents.tooltip((event) => {
  twtArmorTooltips(event);
});

EmiPlusPlusEvents.registerGroups((event) => {
  EMIXX(event);
});
