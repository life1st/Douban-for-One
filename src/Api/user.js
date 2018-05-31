import store from 'store'

function updateIntro(msg) {
  let userInfo = store.get('userInfo')
  userInfo.intro = msg
  store.set('userInfo', userInfo)
  return new Promise(resolve => resolve(true))
}

function updateDesc(msg) {
  let userInfo = store.get('userInfo')
  userInfo.desc = msg
  store.set('userInfo', userInfo)
  return new Promise(resolve => resolve(true))
}

export {
  updateDesc,
  updateIntro
}