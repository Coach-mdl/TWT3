"use strict";

/**
 *
 * @param {Internal.RecipesEventJS} event
 */
const FirmalifeRecipes = (event) => {

    //Create Sequenced Assembly
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'tfc:empty_jar'
        },
        loops: 1,
        results: [
            {
                item: 'tfc:empty_jar_with_lid'
            }
        ],
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'create:incomplete_precision_mechanism'
                    },
                    {
                        item: 'firmalife:beeswax'
                    }
                ],
                results: [
                    {
                        item: 'tfc:empty_jar_with_lid'
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'create:incomplete_precision_mechanism'
                    },
                    {
                        item: 'farmersdelight:canvas'
                    }
                ],
                results: [
                    {
                        item: 'tfc:empty_jar_with_lid'
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'create:incomplete_precision_mechanism'
                    },
                    {
                        tag: 'forge:string'
                    }
                ],
                results: [
                    {
                        item: 'tfc:empty_jar_with_lid'
                    }
                ]
            }
        ],
        transitionalItem: {
            item: 'tfc:empty_jar_with_lid'
        }
    }).id('twt:sequenced_jar_lid')

}