describe('Add item', function () {
  it('should add an item to an array', function () {
    expect(addItem('Grocery shop')).toEqual('Grocery shop');
  });
});

describe('Remove item', function () {
  it('should delete an item from an array', function () {
    let todoItems = []
    expect(todoItems).toEqual([]);
  });
});
