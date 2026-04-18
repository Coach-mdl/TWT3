"use strict";

//This is a JSDoc. These are necessary for event suggestions if you use an event handler file. This one is set to recipes.
/**
 * @param {Internal.RecipesEventJS} event
 */

const TWTRecipes = (event) => {
  //removal
  $nuggetcompat.forEach((nugget) => {
    event.remove({ not: { type: "tfc:anvil" }, output: `${nugget}` });
  });
  event.remove({ id: "exposure:lightroom" });
  event.remove({ output: /^.*:crushed_raw_.*$/, type: "create:crushing" });
  event.remove({
    id: "create:splashing/runtime_generated/compat/supplementaries/sugar_cube_to_water",
  });

  //Replace input
  event.replaceInput({ input: "minecraft:campfire" }, "minecraft:campfire", "minecraft:charcoal");
  event.replaceInput({ input: "minecraft:smooth_stone" }, "minecraft:smooth_stone", "#forge:stone");
  event.replaceInput(
    { input: "minecraft:dried_kelp" },
    "minecraft:dried_kelp",
    "tfc:food/dried_kelp",
  );
  event.replaceInput({ input: "minecraft:chest" }, "minecraft:chest", "#forge:chests");
  event.replaceInput(
    { id: "man_of_many_planes:scarlet_biplane" },
    "minecraft:iron_ingot",
    "tfc:metal/sheet/wrought_iron",
  );
  event.replaceInput({ input: "minecraft:barrel" }, "minecraft:barrel", "#tfc:barrels");

  //replace output
  event.replaceOutput(
    { output: "minecraft:amethyst_shard" },
    "minecraft:amethyst_shard",
    "tfc:gem/amethyst",
  );

  //Shapeless
  $ores.forEach((ore) => {
    event.recipes.tfc.extra_products_shapeless_crafting(
      [{ item: `tfc:ore/small_${ore}`, count: 1 }],
      event.recipes.tfc.damage_inputs_shapeless_crafting(
        event.recipes.minecraft.crafting_shapeless(`tfc:ore/normal_${ore}`, [
          "#tfc:hammers",
          `tfc:ore/rich_${ore}`,
        ]),
      ),
    );
  });
  event.recipes.tfc.extra_products_shapeless_crafting(
    [{ item: `firmalife:ore/small_chromite`, count: 1 }],
    event.recipes.tfc.damage_inputs_shapeless_crafting(
      event.recipes.minecraft.crafting_shapeless(`firmalife:ore/normal_chromite`, [
        "#tfc:hammers",
        `firmalife:ore/rich_chromite`,
      ]),
    ),
  );

  //Solid Metal Blocks: Shaped
  function blockCrafting(input, output) {
    event.recipes.kubejs.shaped(output, [" S ", "SBS", " S "], {
      S: input,
      B: "#forge:smooth_stone",
    });
  }
  blockCrafting("tfc:metal/sheet/wrought_iron", "minecraft:iron_block");
  blockCrafting("tfc:metal/sheet/copper", "minecraft:copper_block");
  blockCrafting("tfc:metal/sheet/zinc", "create:zinc_block");
  blockCrafting("tfc:metal/sheet/brass", "create:brass_block");
  blockCrafting("tfc:metal/sheet/gold", "minecraft:gold_block");

  //TFC Heating
  function oredustsmelting(input, temperature, output) {
    event.recipes.tfc.heating(input, temperature).resultFluid(Fluid.of(output, 5));
  }

  oredustsmelting("tfc:powder/hematite", 1535, "tfc:metal/cast_iron");
  oredustsmelting("tfc:powder/magnetite", 1535, "tfc:metal/cast_iron");
  oredustsmelting("tfc:powder/limonite", 1535, "tfc:metal/cast_iron");
  oredustsmelting("tfc:powder/sphalerite", 420, "tfc:metal/zinc");
  oredustsmelting("tfc:powder/tetrahedrite", 1080, "tfc:metal/copper");
  oredustsmelting("tfc:powder/cassiterite", 230, "tfc:metal/tin");
  oredustsmelting("tfc:powder/bismuthinite", 270, "tfc:metal/bismuth");
  oredustsmelting("tfc:powder/garnierite", 1453, "tfc:metal/nickel");
  oredustsmelting("tfc:powder/malachite", 1080, "tfc:metal/copper");
  oredustsmelting("tfc:powder/native_copper", 1080, "tfc:metal/copper");
  oredustsmelting("tfc:powder/native_gold", 1060, "tfc:metal/gold");
  oredustsmelting("tfc:powder/native_silver", 961, "tfc:metal/silver");

  oredustsmelting("minecraft:gold_nugget", 1060, "tfc:metal/gold");
  oredustsmelting("create:copper_nugget", 1080, "tfc:metal/copper");
  oredustsmelting("antiquelegacy:tin_nugget", 230, "tfc:metal/tin");
  oredustsmelting("create:zinc_nugget", 420, "tfc:metal/zinc");
  oredustsmelting("create:brass_nugget", 930, "tfc:metal/brass");

  //TFC Smithing
  function nuggetsmithing(input, output) {
    event.recipes.tfc
      .anvil(Item.of(output, 20), input, ["punch_any", "punch_any", "punch_any"])
      .tier(1)
      .apply_forging_bonus(false);
  }

  nuggetsmithing("tfc:metal/ingot/gold", "20x minecraft:gold_nugget");
  nuggetsmithing("tfc:metal/ingot/copper", "20x create:copper_nugget");
  nuggetsmithing("tfc:metal/ingot/tin", "20x antiquelegacy:tin_nugget");
  nuggetsmithing("tfc:metal/ingot/zinc", "20x create:zinc_nugget");
  nuggetsmithing("tfc:metal/ingot/brass", "20x create:brass_nugget");

  //Create Cutting
  function woodsawing(output, input, amount) {
    event.recipes.create.cutting(
      [Item.of(output, amount), Item.of("createdieselgenerators:wood_chip", 1).withChance(0.7)],
      [Item.of(input)],
    );
  }

  $woods.forEach((wood) => {
    woodsawing(`tfc:wood/stripped_log/${wood}`, `tfc:wood/log/${wood}`, 1);
    woodsawing(`tfc:wood/lumber/${wood}`, `tfc:wood/stripped_log/${wood}`, 8);
    woodsawing(`tfc:wood/lumber/${wood}`, `tfc:wood/planks/${wood}`, 4);
    woodsawing(`tfc:wood/lumber/${wood}`, `tfc:wood/planks/${wood}_stairs`, 3);
    woodsawing(`tfc:wood/lumber/${wood}`, `tfc:wood/planks/${wood}_slab`, 2);
    woodsawing(`tfc:wood/lumber/${wood}`, `firmaciv:wood/${wood}_roofing`, 2);
  });
  woodsawing(`beneath:wood/stripped_log/crimson`, `beneath:wood/log/crimson`, 1);
  woodsawing(`beneath:wood/lumber/crimson`, `beneath:wood/stripped_log/crimson`, 8);
  woodsawing(`beneath:wood/lumber/crimson`, `beneath:wood/planks/crimson`, 4);
  woodsawing(`beneath:wood/lumber/crimson`, `beneath:wood/planks/crimson_stairs`, 3);
  woodsawing(`beneath:wood/lumber/crimson`, `beneath:wood/planks/crimson_slab`, 2);
  woodsawing(`beneath:wood/stripped_log/warped`, `beneath:wood/log/warped`, 1);
  woodsawing(`beneath:wood/lumber/warped`, `beneath:wood/stripped_log/warped`, 8);
  woodsawing(`beneath:wood/lumber/warped`, `beneath:wood/planks/warped`, 4);
  woodsawing(`beneath:wood/lumber/warped`, `beneath:wood/planks/warped_stairs`, 3);
  woodsawing(`beneath:wood/lumber/warped`, `beneath:wood/planks/warped_slab`, 2);

  //Create Deploying
  function nuggetdeploying(input, output) {
    event.recipes.create
      .deploying([Item.of(output, 20)], [Item.of(input), "#tfc:chisels"])
      .keepHeldItem();
  }

  nuggetdeploying("tfc:metal/ingot/gold", "minecraft:gold_nugget");
  nuggetdeploying("tfc:metal/ingot/copper", "create:copper_nugget");
  nuggetdeploying("tfc:metal/ingot/tin", "antiquelegacy:tin_nugget");
  nuggetdeploying("tfc:metal/ingot/zinc", "create:zinc_nugget");
  nuggetdeploying("tfc:metal/ingot/brass", "create:brass_nugget");
  nuggetdeploying("tfc:metal/ingot/wrought_iron", "minecraft:iron_nugget");
  nuggetdeploying("tfc:metal/ingot/steel", "magistuarmory:steel_nugget");
  nuggetdeploying("tfc:metal/ingot/black_bronze", "knightsofterrafirma:black_bronze_nugget");
  nuggetdeploying("tfc:metal/ingot/bismuth_bronze", "knightsofterrafirma:bismuth_bronze_nugget");
  nuggetdeploying("tfc:metal/ingot/bronze", "antiquelegacy:bronze_nugget");

  //Create Mixing
  function powdermelting(input, output) {
    event.recipes.create.mixing([Fluid.of(output, 5)], [Item.of(input)]);
  }

  powdermelting("tfc:powder/native_copper", "tfc:metal/copper");
  powdermelting("tfc:powder/native_gold", "tfc:metal/gold");
  powdermelting("tfc:powder/hematite", "tfc:metal/cast_iron");
  powdermelting("tfc:powder/native_silver", "tfc:metal/silver");
  powdermelting("tfc:powder/cassiterite", "tfc:metal/tin");
  powdermelting("tfc:powder/bismuthinite", "tfc:metal/bismuth");
  powdermelting("tfc:powder/garnierite", "tfc:metal/nickel");
  powdermelting("tfc:powder/malachite", "tfc:metal/copper");
  powdermelting("tfc:powder/magnetite", "tfc:metal/cast_iron");
  powdermelting("tfc:powder/limonite", "tfc:metal/cast_iron");
  powdermelting("tfc:powder/sphalerite", "tfc:metal/zinc");
  powdermelting("tfc:powder/tetrahedrite", "tfc:metal/copper");
};

const TWTData = (event) => {
  //Heat Definitions
  function nuggetheats(input) {
    event.itemHeat(input, 0.4, null, null);
  }

  nuggetheats("minecraft:gold_nugget");
  nuggetheats("create:copper_nugget");
  nuggetheats("antiquelegacy:tin_nugget");
  nuggetheats("create:zinc_nugget");
  nuggetheats("create:brass_nugget");
};

const TWTItemTags = (event) => {
  event.add("twt:create_component_nuggets", ["minecraft:iron_nugget", "create:zinc_nugget"]);
  event.add("twt:corals", [
    "minecraft:tube_coral",
    "minecraft:brain_coral",
    "minecraft:bubble_coral",
    "minecraft:fire_coral",
    "minecraft:horn_coral",
    "tfc:coral/tube_coral",
    "tfc:coral/brain_coral",
    "tfc:coral/bubble_coral",
    "tfc:coral/fire_coral",
    "tfc:coral/horn_coral",
  ]);

  //Move Later
  event.add("survivorsdelight:food_model_coating", "forge:slimeballs");
};

const TWTCommands = (event) => {
  //Command: /tfcdate : returns in game date and time.

  const { commands: Commands } = event;

  event.register(
    Commands.literal("tfcdate")
      .requires((src) => true)
      .executes((ctx) => {
        const source = ctx.getSource();
        const level = source.getLevel();

        const cal = TFC.calendar.getCalendar(level);
        const daysInMonth = cal.getCalendarDaysInMonth();

        const fullDate = cal.getCalendarTimeAndDate();
        const month = cal.getCalendarMonthOfYear();
        const monthName = String(month);

        const season = getSeasonInfo(monthName, cal.getCalendarDayOfMonth(), daysInMonth);

        source.sendSuccess("§6[TFC Date] §f" + fullDate.getString(), false);
        source.sendSuccess("§7Season: §f" + season.name, false);
        source.sendSuccess("§7Next season in: §f" + season.daysRemaining + " day(s)", false);

        return 1;
      }),
  );

  function getSeasonInfo(monthName, dayOfMonth, daysInMonth) {
    const MONTH_ORDINALS = {
      JANUARY: 0,
      FEBRUARY: 1,
      MARCH: 2,
      APRIL: 3,
      MAY: 4,
      JUNE: 5,
      JULY: 6,
      AUGUST: 7,
      SEPTEMBER: 8,
      OCTOBER: 9,
      NOVEMBER: 10,
      DECEMBER: 11,
    };

    const SEASONS = [
      { name: "Winter *", startMonth: 11 },
      { name: "Spring <3", startMonth: 2 },
      { name: "Summer @", startMonth: 5 },
      { name: "Autumn #", startMonth: 8 },
    ];

    const monthIndex = MONTH_ORDINALS[monthName];

    let currentSeason;
    let monthsIntoSeason;

    if (monthIndex === 11 || monthIndex === 0 || monthIndex === 1) {
      currentSeason = SEASONS[0];
      monthsIntoSeason = monthIndex === 11 ? 0 : monthIndex + 1;
    } else if (monthIndex >= 2 && monthIndex <= 4) {
      currentSeason = SEASONS[1];
      monthsIntoSeason = monthIndex - 2;
    } else if (monthIndex >= 5 && monthIndex <= 7) {
      currentSeason = SEASONS[2];
      monthsIntoSeason = monthIndex - 5;
    } else {
      currentSeason = SEASONS[3];
      monthsIntoSeason = monthIndex - 8;
    }

    const monthsRemaining = 2 - monthsIntoSeason;
    const daysRemainingInMonth = daysInMonth - dayOfMonth;
    const daysRemaining = monthsRemaining * daysInMonth + daysRemainingInMonth;

    return { name: currentSeason.name, daysRemaining: daysRemaining };
  }
};

const ErrorSilencerItemTags = (event) => {
  event.add("tfc:pileable_sheets", "minecraft:barrier");
};

const ErrorSilencerBlockTags = (event) => {
  event.add("tfc:can_landslide", [
    /^rnr:rock\/.*\/.*$/,
    /^rnr:.*_.*_flagstones$/,
    /^rnr:hoggin.*$/,
    "minecraft:cobblestone",
    "minecraft:mossy_cobblestone",
    "minecraft:sand",
    "minecraft:sand",
    "minecraft:red_sand",
    "minecraft:dirt",
    "minecraft:coarse_dirt",
    "beneath:cobblerack",
    "beneath:fungal_cobblerack",
  ]);

  event.add("minecraft:replaceable", [
    "exposure:flash",
    "create:fake_track",
    "create:honey",
    "create:chocolate",
    "vintage:sulfuric_acid",
    "endergetic:poise_bush",
    "endergetic:tall_poise_bush",
    "endergetic:ender_fire",
    "powergrid:string_light_block",
    "powergrid:acid",
    /^farmersdelight:wild_.*$/,
    "rnr:fluid/concrete",
    "mca:infernal_flame",
    "railways:casing_collision",
    "create_enchantment_industry:ink",
    "createdieselgenerators:plant_oil",
    "createdieselgenerators:crude_oil",
    "createdieselgenerators:biodiesel",
    "createdieselgenerators:diesel",
    "createdieselgenerators:gasoline",
    "createdieselgenerators:ethanol",
    /^createdieselgenerators:.*_cement$/,
    "scguns:vicious_acid_block",
    "scguns:fake_soul_fire",
    "scguns:temporary_light",
    "vintageimprovements:sulfuric_acid",
    "bigreactors:steam",
    /^bigreactors:.*_fluid$/,
  ]);
};

const ErrorSilencerData = (event) => {
  //Heat Definitions
  event.itemHeat("firmaciv:cannon", 3.057, null, null);
  event.itemHeat("tfcbetterbf:insulation", 3.057, null, null);
  event.itemHeat("antiquelegacy:scale_thorax", 3.057, null, null);
};
