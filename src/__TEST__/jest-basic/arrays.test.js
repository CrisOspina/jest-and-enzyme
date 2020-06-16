import { createStore } from '../../utils/arrays'

describe('Haciendo pruebas a listas / arrays', () => {
  test('Probando agregar una nueva fruta', () => {
    const store = createStore()
    store.addFruit('fresa')

    expect(store.getFruits())
      .toStrictEqual(['fresa'])
  })

  test('Probando agregar dos nuevas frutas', () => {
    const store = createStore()
    store.addFruit('fresa')
    store.addFruit('melon')

    expect(store.getFruits()).toStrictEqual(['fresa', 'melon'])
  })

   test('Probando si contiene una fruta especifica', () => {
    const store = createStore()
    store.addFruit('manzana')
    store.addFruit('pera')

    expect(store.getFruits()).toContain('pera')
  })

  test('Probando si NO contiene una fruta especifica', () => {
    const store = createStore()
    store.addFruit('manzana')
    store.addFruit('pera')

    expect(store.getFruits()).not.toContain(['banana'])
  })

  test('Probando la longitud del array', () => {
    const store = createStore()
    store.addFruit('manzana')
    store.addFruit('pera')

    expect(store.getFruits()).toHaveLength(2)
  })

  test('Probando agregar objeto con informacion de frutas', () => {
    const store = createStore()
    store.addFruit({
      name: 'fruta',
      price: 20
    })

    expect(store.getFruits()).toContainEqual({
      name: 'fruta', 
      price: 20
    })
  })
})
