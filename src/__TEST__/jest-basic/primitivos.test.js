const getValue = (exp) => {
  switch (exp) {
    case 'definido':
      return {}

    case 'indefinido':
      return undefined

    case 'verdadero':
      return true

    case 'false':
      return false

    default:
      return null
  }
}

describe('Testear valores null, undefined y booleanos', () => {
  test('Validar si existe o esta definido un valor', () => {
    expect(getValue('definido')).toBeDefined()
  })

  test('Validar si el valor es null', () => {
    expect(getValue()).toBeNull()
  })

  test('Validar si el valor es verdadero', () => {
    expect(getValue('verdadero')).toBeTruthy()
  })

  test('Validar si el valor es false', () => {
    expect(getValue('false')).toBeFalsy()
  })

  test('Validar si el valor es NaN', () => {
    expect(NaN).toBeNaN()
  })
})
