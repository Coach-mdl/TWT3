//priority: 0
"use strict";

/*
This array contains useful data for metals. w is work temp, W is weld temp, m is melting point and f
is the id for the fluid of the metal. As long as the key for the metal is in the array below this one,
you can use the key and the element to use this data anywhere in server_scripts.
*/
const METAL_DATA = {
  chromium: { w: 750, W: 1000, m: 1250, f: "firmalife:metal/chromium" },
  stainless_steel: { w: 924, W: 1232, m: 1540, f: "firmalife:metal/stainless_steel" },
  bismuth: { w: 162, W: 216, m: 270, f: "tfc:metal/bismuth" },
  bismuth_bronze: { w: 591, W: 788, m: 985, f: "tfc:metal/bismuth_bronze" },
  black_bronze: { w: 642, W: 856, m: 1070, f: "tfc:metal/black_bronze" },
  bronze: { w: 570, W: 760, m: 950, f: "tfc:metal/bronze" },
  brass: { w: 558, W: 744, m: 930, f: "tfc:metal/brass" },
  copper: { w: 648, W: 864, m: 1080, f: "tfc:metal/copper" },
  gold: { w: 636, W: 848, m: 1060, f: "tfc:metal/gold" },
  nickel: { w: 872, W: 1162, m: 1453, f: "tfc:metal/nickel" },
  rose_gold: { w: 576, W: 768, m: 960, f: "tfc:metal/rose_gold" },
  silver: { w: 577, W: 769, m: 961, f: "tfc:metal/silver" },
  tin: { w: 138, W: 184, m: 230, f: "tfc:metal/tin" },
  zinc: { w: 252, W: 336, m: 420, f: "tfc:metal/zinc" },
  sterling_silver: { w: 570, W: 760, m: 950, f: "tfc:metal/sterling_silver" },
  wrought_iron: { w: 921, W: 1228, m: 1535, f: "tfc:metal/cast_iron" },
  cast_iron: { w: 921, W: 1228, m: 1535, f: "tfc:metal/cast_iron" },
  steel: { w: 924, W: 1232, m: 1540, f: "tfc:metal/steel" },
  black_steel: { w: 891, W: 1188, m: 1485, f: "tfc:metal/black_steel" },
  blue_steel: { w: 924, W: 1232, m: 1540, f: "tfc:metal/blue_steel" },
  red_steel: { w: 924, W: 1232, m: 1540, f: "tfc:metal/red_steel" },
  anthralite: { w: 1024, W: 1224, m: 1435, f: "kubejs:molten_anthralite" },
  diamond_steel: { w: 1024, W: 1224, m: 1435, f: "tfc:metal/steel" },
};
const {
  chromium,
  stainless_steel,
  bismuth,
  bismuth_bronze,
  black_bronze,
  bronze,
  brass,
  copper,
  gold,
  nickel,
  rose_gold,
  silver,
  tin,
  zinc,
  sterling_silver,
  wrought_iron,
  cast_iron,
  steel,
  black_steel,
  blue_steel,
  red_steel,
  anthralite,
  diamond_steel,
} = METAL_DATA;

//I keep forgetting the heat capacities. Now I can't.
const HEAT_CAP = {
  nugget: 0.4,
  bars: 0.714,
  rod: 1.429,
  ingot: 2.857,
  double_ingot: 5.714,
  double_sheet: 11.429,
  helmet: 17.143,
  chestplate: 22.857,
  horse_armor: 34.286,
  anvil: 40.0,
};

const { nugget, bars, rod, ingot, double_ingot, double_sheet, helmet, chestplate, horse_armor, anvil } =
  HEAT_CAP;
//console.log(Object.keys(METAL_DATA).join(", "));

const $grains = ["barley", "maize", "oat", "rye", "rice", "wheat"];

const $dyes = [
  "white",
  "light_gray",
  "gray",
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "cyan",
  "light_blue",
  "blue",
  "purple",
  "magenta",
  "pink",
];

const $toolmetals = [
  "copper",
  "bismuth_bronze",
  "bronze",
  "black_bronze",
  "wrought_iron",
  "steel",
  "black_steel",
  "blue_steel",
  "red_steel",
];

const $gems = [
  "amethyst",
  "diamond",
  "emerald",
  "lapis_lazuli",
  "opal",
  "pyrite",
  "ruby",
  "sapphire",
  "topaz",
];

const $rock = [
  "granite",
  "diorite",
  "gabbro",
  "shale",
  "claystone",
  "limestone",
  "conglomerate",
  "dolomite",
  "chert",
  "chalk",
  "rhyolite",
  "basalt",
  "andesite",
  "dacite",
  "quartzite",
  "slate",
  "phyllite",
  "schist",
  "gneiss",
  "marble",
];

const $woods = [
  "acacia",
  "ash",
  "aspen",
  "birch",
  "blackwood",
  "chestnut",
  "douglas_fir",
  "hickory",
  "kapok",
  "mangrove",
  "maple",
  "oak",
  "palm",
  "pine",
  "rosewood",
  "sequoia",
  "spruce",
  "sycamore",
  "white_cedar",
  "willow",
  //beneath
  "crimson",
  "warped",
];

const $tfcMetals = [
  "bismuth",
  "bismuth_bronze",
  "black_bronze",
  "bronze",
  "brass",
  "copper",
  "gold",
  "nickel",
  "rose_gold",
  "silver",
  "tin",
  "zinc",
  "sterling_silver",
  "wrought_iron",
  "cast_iron",
  "steel",
  "black_steel",
  "blue_steel",
  "red_steel",
];

const $ores = [
  "native_copper",
  "native_gold",
  "hematite",
  "native_silver",
  "cassiterite",
  "bismuthinite",
  "garnierite",
  "malachite",
  "magnetite",
  "limonite",
  "sphalerite",
  "tetrahedrite",
];
