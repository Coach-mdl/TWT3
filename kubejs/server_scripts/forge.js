"use strict";

/**
 *
 * @param {TagEvent.Item} event
 */
const ForgeItemTags = (event) => {

    event.add('forge:gems/amethyst', 'tfc:gem/amethyst')
    event.add('forge:rods/gold', 'tfc:plant/goldenrod')
    event.add('forge:tools/fishing_rods', ['bsa:bone/fishing_rod', 'tfc:metal/fishing_rod/copper', 'tfc:metal/fishing_rod/bronze', 'tfc:metal/fishing_rod/bismuth_bronze', 'tfc:metal/fishing_rod/black_bronze', 'tfc:metal/fishing_rod/wrought_iron', 'tfc:metal/fishing_rod/steel', 'tfc:metal/fishing_rod/black_steel', 'tfc:metal/fishing_rod/blue_steel', 'tfc:metal/fishing_rod/red_steel'])

}