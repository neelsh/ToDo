describe('Todo List', () => {
  it('starts with an empty list', () => {
    const todoList = new TodoList()

    expect(todoList.items).toEqual([])
  })

  it('adds an item to the list', () => {
    const todoList = new TodoList()
    const item = {
      name: 'item one',
      id: 1,
      completed: false
    }

    todoList.add(item)

    expect(todoList.items).toEqual([item])
  })

  it('adds multiple items to the list', () => {
    const todoList = new TodoList()
    const itemOne = {
      name: 'item one',
      id: 1,
      completed: false
    }
    const itemTwo = {
      name: 'item two',
      id: 2,
      completed: false
    }

    todoList.add(itemOne)
    todoList.add(itemTwo)

    expect(todoList.items).toEqual([itemOne, itemTwo])
  })

  it('checks an item on the list', () => {
    const todoList = new TodoList()
    const item = {
      name: 'item one',
      id: 1,
      completed: false
    }

    todoList.add(item)
    todoList.toggle(1)

    const checkedItem = todoList.items[0]

    expect(checkedItem.completed).toEqual(true)
  })

  it('deletes an item on the list', () => {
    const todoList = new TodoList()
    const item = {
      name: 'item one',
      id: 1,
      completed: false
    }

    todoList.add(item)
    todoList.delete(1)

    expect(todoList.items).toEqual([])
  })
})
