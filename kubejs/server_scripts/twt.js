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
  event.remove({ id: /^everycomp:fd\/cutting\/tfc\/.*/ });
  //move later
  event.remove({ id: "farmersdelight:cutting/gravel" });

  //Replace input
  event.replaceInput({ input: "minecraft:campfire" }, "minecraft:campfire", "minecraft:charcoal");
  event.replaceInput({ input: "minecraft:smooth_stone" }, "minecraft:smooth_stone", "#forge:stone");
  event.replaceInput({ input: "minecraft:dried_kelp" }, "minecraft:dried_kelp", "tfc:food/dried_kelp");
  event.replaceInput({ input: "minecraft:chest" }, "minecraft:chest", "#forge:chests");
  event.replaceInput(
    { id: "man_of_many_planes:scarlet_biplane" },
    "minecraft:iron_ingot",
    "tfc:metal/sheet/wrought_iron",
  );
  event.replaceInput({ input: "minecraft:barrel" }, "minecraft:barrel", "#tfc:barrels");

  //replace output
  event.replaceOutput({ output: "minecraft:amethyst_shard" }, "minecraft:amethyst_shard", "tfc:gem/amethyst");

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
  const DUSTS_AND_NUGGETS = {
    hematite: { idPrefix: "tfc:powder/", fluid: "cast_iron", MP: 1535, recipeIdAffix: "_powder" },
    magnetite: { idPrefix: "tfc:powder/", fluid: "cast_iron", MP: 1535, recipeIdAffix: "_powder" },
    limonite: { idPrefix: "tfc:powder/", fluid: "cast_iron", MP: 1535, recipeIdAffix: "_powder" },
    sphalerite: { idPrefix: "tfc:powder/", fluid: "zinc", MP: 420, recipeIdAffix: "_powder" },
    tetrahedrite: { idPrefix: "tfc:powder/", fluid: "copper", MP: 1080, recipeIdAffix: "_powder" },
    malachite: { idPrefix: "tfc:powder/", fluid: "copper", MP: 1080, recipeIdAffix: "_powder" },
    native_copper: { idPrefix: "tfc:powder/", fluid: "copper", MP: 1080, recipeIdAffix: "_powder" },
    cassiterite: { idPrefix: "tfc:powder/", fluid: "tin", MP: 230, recipeIdAffix: "_powder" },
    bismuthinite: { idPrefix: "tfc:powder/", fluid: "bismuth", MP: 270, recipeIdAffix: "_powder" },
    garnierite: { idPrefix: "tfc:powder/", fluid: "nickel", MP: 1453, recipeIdAffix: "_powder" },
    native_gold: { idPrefix: "tfc:powder/", fluid: "gold", MP: 1060, recipeIdAffix: "_powder" },
    native_silver: { idPrefix: "tfc:powder/", fluid: "silver", MP: 961, recipeIdAffix: "_powder" },

    gold_nugget: { idPrefix: "minecraft:", fluid: "gold", MP: 1060, recipeIdAffix: "" },
    copper_nugget: { idPrefix: "create:", fluid: "copper", MP: 1080, recipeIdAffix: "" },
    tin_nugget: { idPrefix: "antiquelegacy:", fluid: "tin", MP: 230, recipeIdAffix: "" },
    zinc_nugget: { idPrefix: "create:", fluid: "zinc", MP: 420, recipeIdAffix: "" },
    brass_nugget: { idPrefix: "create:", fluid: "brass", MP: 930, recipeIdAffix: "" },
  };

  Object.entries(DUSTS_AND_NUGGETS).forEach(([object, data]) => {
    let fluid = `tfc:metal/${data.fluid}`;
    let item = `${data.idPrefix}${object}`;
    let temperature = data.MP;
    let recipeId = `twt:heating/${object}${data.recipeIdAffix}`;

    event.recipes.tfc.heating(item, temperature).resultFluid(Fluid.of(fluid, 5)).id(recipeId);
  });

  //TFC Smithing
  const INGOT_TO_NUGGET = {
    gold: { ingotNS: "tfc", nuggetNS: "minecraft", tier: 1 },
    copper: { ingotNS: "tfc", nuggetNS: "create", tier: 1 },
    tin: { ingotNS: "tfc", nuggetNS: "antiquelegacy", tier: 1 },
    zinc: { ingotNS: "tfc", nuggetNS: "antiquelegacy", tier: 1 },
    brass: { ingotNS: "tfc", nuggetNS: "create", tier: 2 },
  };
  Object.entries(INGOT_TO_NUGGET).forEach(([metal, data]) => {
    let ingot = `${data.ingotNS}:metal/ingot/${metal}`;
    let nugget = `${data.nuggetNS}:${metal}_nugget`;
    let tier = data.tier;

    event.recipes.tfc
      .anvil(Item.of(nugget, 20), ingot, ["punch_any", "punch_any", "punch_any"])
      .tier(tier)
      .apply_forging_bonus(false)
      .id(`twt:anvil/${metal}_nugget`);
  });

  //Create Cutting, Holy Overengineering
  const getNamespace = (wood) => (wood === "crimson" || wood === "warped" ? "beneath" : "tfc");

  const WOOD_DATA = {
    stripped_log: { path: (w) => `stripped_log/${w}`, amounts: [8, 1, 4, 400] },
    planks: { path: (w) => `planks/${w}`, amounts: [4, 0.7, 3, 200] },
    stairs: { path: (w) => `planks/${w}_stairs`, amounts: [3, 0.5, 2, 100] },
    slab: { path: (w) => `planks/${w}_slab`, amounts: [2, 0.3, 1, 50] },
  };
  Object.entries(WOOD_DATA).forEach(([type, data]) => {
    let amounts = data.amounts;
    let lumberAmount = amounts[0];
    let chipChance = amounts[1];
    let chipAmount = amounts[2];
    let time = amounts[3];

    $woods.forEach((wood) => {
      let namespace = getNamespace(wood);
      let inputPath = `${namespace}:wood/${data.path(wood)}`;

      event.recipes.create
        .cutting(
          [
            Item.of(`${namespace}:wood/lumber/${wood}`, lumberAmount),
            Item.of("createdieselgenerators:wood_chip", chipAmount).withChance(chipChance),
          ],
          inputPath,
        )
        .processingTime(time)
        .id(`twt:cutting/${wood}_lumber_from_${wood}_${type}`);
    });
  });

  $woods.forEach((wood) => {
    event.recipes.create
      .cutting(
        [
          getNamespace(wood) + `:wood/stripped_log/${wood}`,
          "farmersdelight:tree_bark",
          Item.of("farmersdelight:tree_bark").withChance(0.5),
        ],
        getNamespace(wood) + `:wood/log/${wood}`,
      )
      .processingTime(600)
      .id(`twt:cutting/stripped_${wood}_from_${wood}_log`);
  });
  //Create Deploying
  const NUGGET_DATA = {
    gold: { ingotNS: "tfc", ingotPrefix: "", nuggetNS: "minecraft" },
    copper: { ingotNS: "tfc", ingotPrefix: "", nuggetNS: "create" },
    tin: { ingotNS: "tfc", ingotPrefix: "", nuggetNS: "antiquelegacy" },
    zinc: { ingotNS: "tfc", ingotPrefix: "", nuggetNS: "create" },
    brass: { ingotNS: "tfc", ingotPrefix: "", nuggetNS: "create" },
    iron: { ingotNS: "tfc", ingotPrefix: "wrought_", nuggetNS: "minecraft" },
    steel: { ingotNS: "tfc", ingotPrefix: "", nuggetNS: "magistuarmory" },
    black_bronze: { ingotNS: "tfc", ingotPrefix: "", nuggetNS: "knightsofterrafirma" },
    bismuth_bronze: { ingotNS: "tfc", ingotPrefix: "", nuggetNS: "knightsofterrafirma" },
    bronze: { ingotNS: "tfc", ingotPrefix: "", nuggetNS: "antiquelegacy" },
  };

  Object.entries(NUGGET_DATA).forEach(([metal, data]) => {
    let ingot = `${data.ingotNS}:metal/ingot/${data.ingotPrefix}${metal}`;
    let nugget = `${data.nuggetNS}:${metal}_nugget`;

    event.recipes.create
      .deploying(Item.of(nugget, 20), [ingot, "#tfc:chisels"])
      .keepHeldItem()
      .id(`twt:deploying/${metal}_nugget`);
  });

  //Create Mixing
  const ORE_POWDER_DATA = {
    native_copper: { fluid: "copper" },
    tetrahedrite: { fluid: "copper" },
    malachite: { fluid: "copper" },
    native_gold: { fluid: "gold" },
    native_silver: { fluid: "silver" },
    hematite: { fluid: "cast_iron" },
    magnetite: { fluid: "cast_iron" },
    limonite: { fluid: "cast_iron" },
    cassiterite: { fluid: "tin" },
    garnierite: { fluid: "nickel" },
    sphalerite: { fluid: "zinc" },
    bismuthinite: { fluid: "bismuth" },
  };
  Object.entries(ORE_POWDER_DATA).forEach(([ore, data]) => {
    let powder = `tfc:powder/${ore}`;
    let metal = `tfc:metal/${data.fluid}`;

    event.recipes.create.mixing([Fluid.of(metal, 5)], [Item.of(powder)]).id(`twt:mixing/${ore}`);
  });
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
