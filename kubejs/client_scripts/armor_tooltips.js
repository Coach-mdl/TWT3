const twtArmorTooltips = (event) => {
  //scguns armors
  event.addAdvanced(
    [
      "scguns:anthralite_helmet",
      "scguns:anthralite_chestplate",
      "scguns:anthralite_leggings",
      "scguns:anthralite_boots",
    ],
    (item, advanced, text) => {
      if (!event.alt) {
        text.add(1, [Text.translatable("tooltip.kubejs.armor.info").blue().italic(true)]);
      } else {
        text.add(1, [Text.translatable("tooltip.kubejs.armor.this").blue().italic(true)]);
        text.add(2, [Text.translatable("tooltip.kubejs.armor.platecarrier").green()]);
        text.add(3, [Text.translatable("tooltip.kubejs.armor.magmaresist").green()]);
        text.add(4, [Text.translatable("tooltip.kubejs.armor.heavy").red()]);
      }
    },
  );
  event.addAdvanced(
    ["scguns:scrap_helmet", "scguns:scrap_chestplate", "scguns:scrap_leggings", "scguns:scrap_boots"],
    (item, advanced, text) => {
      if (!event.alt) {
        text.add(1, [Text.translatable("tooltip.kubejs.armor.info").blue().italic(true)]);
      } else {
        text.add(1, [Text.translatable("tooltip.kubejs.armor.this").blue().italic(true)]);
        text.add(2, [Text.translatable("tooltip.kubejs.armor.stylish").green()]);
        text.add(3, [Text.translatable("tooltip.kubejs.armor.spiky").green()]);
        text.add(4, [Text.translatable("tooltip.kubejs.armor.cheap").yellow()]);
      }
    },
  );
  event.addAdvanced(
    ["scguns:adrien_helm", "scguns:adrien_chestplate", "scguns:adrien_leggings", "scguns:adrien_boots"],
    (item, advanced, text) => {
      if (!event.alt) {
        text.add(1, [Text.translatable("tooltip.kubejs.armor.info").blue().italic(true)]);
      } else {
        text.add(1, [Text.translatable("tooltip.kubejs.armor.this").blue().italic(true)]);
        text.add(2, [Text.translatable("tooltip.kubejs.armor.sealed").green()]);
        text.add(3, [Text.translatable("tooltip.kubejs.armor.magmaresist").green()]);
        text.add(4, [Text.translatable("tooltip.kubejs.armor.veryheavy").red()]);
        text.add(5, [Text.translatable("tooltip.kubejs.armor.cumbersome").red()]);
      }
    },
  );
  event.addAdvanced(
    [
      "scguns:diamond_steel_helmet",
      "scguns:diamond_steel_chestplate",
      "scguns:diamond_steel_leggings",
      "scguns:diamond_steel_boots",
    ],
    (item, advanced, text) => {
      if (!event.alt) {
        text.add(1, [Text.translatable("tooltip.kubejs.armor.info").blue().italic(true)]);
      } else {
        text.add(1, [Text.translatable("tooltip.kubejs.armor.this").blue().italic(true)]);
        text.add(2, [Text.translatable("tooltip.kubejs.armor.platecarrier").green()]);
        text.add(3, [Text.translatable("tooltip.kubejs.armor.slowdown_immune").green()]);
      }
    },
  );
  event.addAdvanced(
    [
      "scguns:treated_brass_helmet",
      "scguns:treated_brass_chestplate",
      "scguns:treated_brass_leggings",
      "scguns:treated_brass_boots",
    ],
    (item, advanced, text) => {
      if (!event.alt) {
        text.add(1, [Text.translatable("tooltip.kubejs.armor.info").blue().italic(true)]);
      } else {
        text.add(1, [Text.translatable("tooltip.kubejs.armor.this").blue().italic(true)]);
        text.add(2, [Text.translatable("tooltip.kubejs.armor.platecarrier").green()]);
        text.add(3, [Text.translatable("tooltip.kubejs.armor.slowdown_immune").green()]);
        text.add(4, [Text.translatable("tooltip.kubejs.armor.cheap").yellow()]);
        text.add(5, [Text.translatable("tooltip.kubejs.armor.heavy").red()]);
      }
    },
  );
  event.addAdvanced(
    [
      "scguns:cog_knight_helmet",
      "scguns:cog_knight_chestplate",
      "scguns:cog_knight_leggings",
      "scguns:cog_knight_boots",
    ],
    (item, advanced, text) => {
      if (!event.alt) {
        text.add(1, [Text.translatable("tooltip.kubejs.armor.info").blue().italic(true)]);
      } else {
        text.add(1, [Text.translatable("tooltip.kubejs.armor.this").blue().italic(true)]);
        text.add(2, [Text.translatable("tooltip.kubejs.armor.stylish").green()]);
        text.add(3, [Text.translatable("tooltip.kubejs.armor.magmaresist").green()]);
        text.add(4, [Text.translatable("tooltip.kubejs.armor.sealed").green()]);
        text.add(5, [Text.translatable("tooltip.kubejs.armor.cumbersome").red()]);
        text.add(6, [Text.translatable("tooltip.kubejs.armor.veryheavy").red()]);
      }
    },
  );
  event.addAdvanced(
    ["scguns:redcoat_hat", "scguns:redcoat_coat", "scguns:redcoat_pants", "scguns:redcoat_boots"],
    (item, advanced, text) => {
      if (!event.alt) {
        text.add(1, [Text.translatable("tooltip.kubejs.armor.info").blue().italic(true)]);
      } else {
        text.add(1, [Text.translatable("tooltip.kubejs.armor.this").blue().italic(true)]);
        text.add(2, [Text.translatable("tooltip.kubejs.armor.stylish").green()]);
        text.add(3, [Text.translatable("tooltip.kubejs.armor.slowdown_immune").green()]);
      }
    },
  );
  event.addAdvanced(["scguns:brass_mask", "scguns:iron_mask"], (item, advanced, text) => {
    if (!event.alt) {
      text.add(1, [Text.translatable("tooltip.kubejs.armor.info").blue().italic(true)]);
    } else {
      text.add(1, [Text.translatable("tooltip.kubejs.armor.this").blue().italic(true)]);
      text.add(2, [Text.translatable("tooltip.kubejs.armor.cheap").yellow()]);
    }
  });
  event.addAdvanced("scguns:ridgetop", (item, advanced, text) => {
    if (!event.alt) {
      text.add(1, [Text.translatable("tooltip.kubejs.armor.info").blue().italic(true)]);
    } else {
      text.add(1, [Text.translatable("tooltip.kubejs.armor.this").blue().italic(true)]);
      text.add(2, [Text.translatable("tooltip.kubejs.armor.stylish").green()]);
    }
  });
};
