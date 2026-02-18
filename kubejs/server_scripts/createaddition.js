

const createadditionRecipes = (event) => {
    //removal
    event.remove({ output: /^createaddition:electrum_(sheet|ingot|nugget|block)$/ })
    event.remove({ id: 'immersiveengineering:metalpress/rod_copper' })
    event.remove({ id: 'immersiveengineering:metalpress/rod_gold' })
    event.remove({ id: 'immersiveengineering:metalpress/rod_brass' })
    event.remove({ id: 'immersiveengineering:metalpress/rod_iron' })

}