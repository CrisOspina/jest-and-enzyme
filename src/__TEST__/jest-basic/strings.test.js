import { saluda, getId, despide } from '../../utils/strings'

describe('Pruebas de strings', () => {
  const saludo = saluda('cris')
  const id = getId()
  const saludoDespide = despide()

  test('Probando la función saluda', () => {
    expect(saludo)
    .toMatch('soy')
  })

  test('Probando la función getId', () => {
    expect(id)
    .toMatch(/\d{2}-\d{3}/)
  })

  test('Probando la función despide', () => {
    expect(saludoDespide)
    .not.toMatch('ad')
  })
})
