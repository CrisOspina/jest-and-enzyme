import { createStore } from '../../utils/objects'

describe('Test a objetos', () => {
  test('Agregar un item en store ', () => {
    const store = createStore()

    store.addItem({
      id: 1,
      name: 'Cris',
      country: 'Colombia'
    })

    expect(store.getStore()[0]).toEqual({
      id: 1,
      name: 'Cris',
      country: 'Colombia'
    })
  })

  test('Buscar item por id', () => {
    const store = createStore()

    store.addItem({
      id: 1,
      name: 'Cris',
      country: 'Colombia'
    })

    expect(store.getById(1)).toEqual({
      id: 1,
      name: 'Cris',
      country: 'Colombia'
    })
  })

  test('Validar si existe alguna propiedad en el objeto', () => {
    const store = createStore()

    store.addItem({
      id: 1,
      name: 'Cris',
      country: 'Colombia'
    })

    expect(store.getById(1)).toMatchObject({
      name: 'Cris'
    })
  })

  test('Validar si existe propiedad', () => {
    const store = createStore()

    store.addItem({
      id: 1,
      name: 'Cris',
      country: 'Colombia'
    })

    expect(store.getById(1)).toHaveProperty('id', 1)
  })
})
