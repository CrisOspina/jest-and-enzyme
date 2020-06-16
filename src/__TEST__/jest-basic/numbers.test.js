import { 
  suma, 
  resta, 
  multiplicacion, 
  division,
  getRandom
} from '../../utils/numbers'

describe('Probando funciones matematicas', () => {
  const sumar = suma(5, 5)
  const restar = resta(5, 5)
  const multiplicar = multiplicacion(5, 5)
  const dividir = division(5, 5)
  const random = getRandom(10, 20)

  test('Probar suma', () => {
    expect(sumar).toBe(10)
  })

  test('Probar resta', () => {
    expect(restar).toBe(0)
  })

  test('Probar multiplicacion', () => {
    expect(multiplicar).toBe(25)
  })

  test('Probar division', () => {
    expect(dividir).toBe(1)
  })

  test('Probar getRandom mayor que', () => {
    expect(random).toBeGreaterThan(5)
  })

  test('Probar getRandom mayor o igual a', () => {
    expect(random).toBeGreaterThanOrEqual(10)
  })

  test('Probar getRandom menor que', () => {
    expect(random).toBeLessThan(20)
  })

  test('Probar getRandom menor o igual a', () => {
    expect(random).toBeLessThanOrEqual(20)
  })
})
