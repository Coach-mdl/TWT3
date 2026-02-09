"use strict";


const FarmersDelightRecipes = (event) => {

    //removal
    event.remove({id: 'farmersdelight_tfc:heating/baked_potato'})
    event.remove({id: 'farmersdelight:cutting/leather_horse_armor'})
    event.remove({id: 'farmersdelight:cutting/leather_helmet'})
    event.remove({id: 'farmersdelight:cutting/leather_chestplate'})
    event.remove({id: 'farmersdelight:cutting/leather_leggings'})
    event.remove({id: 'farmersdelight:cutting/leather_boots'})

    //Create Filling
    event.custom({
        type: 'create:filling',
        ingredients: [
            {
                amount: 250,
                fluid: 'create:honey'
            },
            {
                item: 'tfc:empty_jar'
            }
        ],
        results: [
            {
                item: 'tfc:jar/honey'
            }
        ]
    })
}