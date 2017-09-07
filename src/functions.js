class TodoList {
  constructor() {
    this.items = []
  }

  add(item) {
    this.items.push(item)
  }

  toggle(itemId) {
    this.items.forEach((item) => {
      if (itemId === item.id)
        item.completed = true
    })
  }

  delete(itemId) {
    const index = this.items.findIndex((item) => {
      return itemId === item.id
    })
    this.items.splice(index, 1)
  }
}
