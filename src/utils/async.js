export const getDataCallback = (callback) => {
  let name = 'Cris'
  setTimeout(() => {
    callback(name)
  }, 300)
}

export const getDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok')
    }, 300)
  })
}

export const getDataPromiseError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error')
    }, 300)
  })
}

// getDataPromise()
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

export const getUsers = async () => {
  const URL = 'https://jsonplaceholder.typicode.com/users/1'
  const res = await fetch(URL)
  const user = await res.json()
  return user
}