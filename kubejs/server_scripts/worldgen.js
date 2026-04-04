"use strict";

const worldgen = (event) => {
  //HARDENS UNDERGROUND STRUCTURES, now covers DFC stone

  const STONE_MAP = [
    { raw: "tfc:rock/raw/", hardened: "tfc:rock/hardened/" },
    { raw: "dfc:rock/raw/", hardened: "dfc:rock/hardened/" },
  ];

  const SCAN_DEPTH = 3;

  function hardenIfRaw(level, pos) {
    let blockId = level.getBlockState(pos).block.id;
    for (let mapping of STONE_MAP) {
      if (blockId.startsWith(mapping.raw)) {
        let stoneType = blockId.slice(mapping.raw.length);
        let hardenedBlock = Block.getBlock(mapping.hardened + stoneType);

        if (hardenedBlock != null) {
          level
            .getChunk(pos)
            .setBlockState(pos, hardenedBlock.defaultBlockState(), false);
          return 1;
        }
      }
    }
    return 0;
  }

  const level = event.worldGenLevel;
  let replaced = 0;

  event.intersectionBoxes.forEach((box) => {
    let minX = box.minX();
    let maxX = box.maxX();
    let minY = box.minY();
    let maxY = box.maxY();
    let minZ = box.minZ();
    let maxZ = box.maxZ();

    //Roof
    BlockPos.betweenClosed(
      minX,
      minY,
      minZ,
      maxX,
      maxY + SCAN_DEPTH,
      maxZ,
    ).forEach((pos) => {
      replaced += hardenIfRaw(level, pos);
    });
    //Floor
    BlockPos.betweenClosed(
      minX,
      minY - SCAN_DEPTH,
      minZ,
      maxX,
      minY - 1,
      maxZ,
    ).forEach((pos) => {
      replaced += hardenIfRaw(level, pos);
    });
    //X- Wall
    BlockPos.betweenClosed(
      minX - SCAN_DEPTH,
      minY,
      minZ - SCAN_DEPTH,
      minX - 1,
      maxY,
      maxZ + SCAN_DEPTH,
    ).forEach((pos) => {
      replaced += hardenIfRaw(level, pos);
    });
    //X+ Wall
    BlockPos.betweenClosed(
      maxX + 1,
      minY,
      minZ - SCAN_DEPTH,
      maxX + SCAN_DEPTH,
      maxY,
      maxZ + SCAN_DEPTH,
    ).forEach((pos) => {
      replaced += hardenIfRaw(level, pos);
    });
    //Z- Wall
    BlockPos.betweenClosed(
      minX,
      minY,
      minZ - SCAN_DEPTH,
      maxX,
      maxY,
      minZ - 1,
    ).forEach((pos) => {
      replaced += hardenIfRaw(level, pos);
    });
    //Z+ Wall
    BlockPos.betweenClosed(
      minX,
      minY,
      maxZ + 1,
      maxX,
      maxY,
      maxZ + SCAN_DEPTH,
    ).forEach((pos) => {
      replaced += hardenIfRaw(level, pos);
    });
  });

  if (replaced > 0) {
    console.log(`[Hardener] Hardened ${replaced} blocks in ${event.getId()}`);
  }

  //Chest Protection
  const PROTECTED_STRUCTURES = [
    "minecraft:ocean_ruin_warm",
    "minecraft:ocean_ruin_cold",
    "minecraft:buried_treasure",
    "minecraft:shipwreck",
    "minecraft:shipwreck_beached",
    "minecraft:ruined_portal_ocean",
    "minecraft:ruined_portal_desert",
  ];

  const SAFE_BLOCK_ID = "tfc:wood/planks/oak";

  const structureId = event.getId().toString();

  if (!PROTECTED_STRUCTURES.includes(structureId)) return;

  const safeBlock = Block.getBlock(SAFE_BLOCK_ID);

  let chestsProtected = 0;

  event.intersectionBoxes.forEach((box) => {
    const minX = box.minX();
    const maxX = box.maxX();
    const minY = box.minY();
    const maxY = box.maxY();
    const minZ = box.minZ();
    const maxZ = box.maxZ();

    BlockPos.betweenClosed(minX, minY, minZ, maxX, maxY, maxZ).forEach(
      (pos) => {
        const blockId = level.getBlockState(pos).block.id;
        if (blockId.includes("chest")) {
          const abovePos = pos.above();
          level
            .getChunk(abovePos)
            .setBlockState(abovePos, safeBlock.defaultBlockState(), false);
          chestsProtected++;
        }
      },
    );
  });

  if (chestsProtected > 0) {
    console.log(
      `[ChestProtector] Protected ${chestsProtected} chest(s) in ${structureId}`,
    );
  }
};
