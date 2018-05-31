import store from 'store'

function login(obj) {
  let userName = obj.userName
  let password = obj.password

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userName === 'yang' && password === 'jiaoyang') {
        store.set('userInfo', {
          userName: 'yang',
          password: 'jiaoyang',
          time: new Date().getTime()
        })
        resolve(true)
      } else {
        reject({code: 0})
      }
    }, 300)
  })
}

function isLogin() {
  let userInfo = store.get('userInfo')
  let now = new Date().getTime()
  const TIME = 1000 * 60 * 60 * 24 * 7

  return new Promise((resolve,reject) => {
    if (userInfo && now - userInfo.time < TIME) {
      resolve(userInfo)
    } else {
      reject(false)
    }
  })
}

function logout() {
  store.set('userInfo', {})
  return new Promise(resolve => resolve(true))
}

export {
  login, isLogin, logout
}