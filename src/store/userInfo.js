const state = {
  userName: '',
  password: ''
}

const mutations = {
  updateUserInfo(state, info) {
    state.userName = info.userName
    state.password = info.password
  }
}

export default {
  state,
  mutations
}