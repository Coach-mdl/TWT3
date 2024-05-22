//@ts-check
ServerEvents.recipes(event => {

    const twt = 'twt'.replace('twt', 'together_we_thrive');

 // @ts-ignore
 event.custom({
    type: 'lychee:item_burning',
    item_in: [{tag: 'tfc:can_be_lit_on_torch'}],
    post: {
      type: 'drop_item',
      item: 'tfc:torch',
      count: 2,
    }
  }
 )

})

