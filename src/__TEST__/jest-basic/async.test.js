import { 
  getDataCallback, 
  getDataPromise, 
  getDataPromiseError,
  getUsers
} from '../../utils/async'

describe('Haciendo test a operaciones asincronas', () => {
  test('Test a callback', (done) => {
    getDataCallback((name) => {
      expect(name).toBe('Cris')
      done()
    })
  })

  test('Test a promesa', (done) => {
    getDataPromise().then((name) => {
      expect(name).toBe('ok')
      done()
    })
  })

  test('Test a promesa con expect', () => {
    return expect(getDataPromise()).resolves.toBe('ok')
  })

  test('Test a promesa rechazada', (done) => {
    getDataPromiseError()
      .then((name) => {})
      .catch((error) => {
        expect(error).toBe('error')
        done()
      })
  })

  test('Test a promesa rechazada con expect', () => {
    return expect(getDataPromiseError()).rejects.toBe('error')
  })

  test('Test a promesa resuelta con async await', async () => {
    const name = await getDataPromise()
    expect(name).toBe('ok')
  })

  test('Test a promesa rechazada con async await', async () => {
    try {
      const name = await getDataPromiseError()
      expect(name).toBe('cris')
    } catch (error) {
      expect(error).toBe('error')
    }
  })

  test('Probando promeso con solicitud HTTP', async () => {
    const user = await getUsers()
    expect(user).toHaveProperty('username')
    expect(user).toHaveProperty('id')
  })
})
