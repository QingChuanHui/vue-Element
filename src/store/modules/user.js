import { login, getInfo, getUserMenu } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    userInfo: {},
    userMenu: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_UserInfo: (state, UserInfo) => {
      state.userInfo = UserInfo
    },
    SET_UserMenu: (state, userMenu) => {
      state.userMenu = userMenu
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      userInfo.username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          setToken(response.token)
          commit('SET_TOKEN', response.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo({ token: state.token }).then(response => {
          const data = response.new
          commit('SET_UserInfo', data)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户权限
    GetUserMenu({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserMenu().then(response => {
          const data = response.menuList
          commit('SET_UserMenu', data)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_UserInfo', {})
        commit('SET_UserMenu', [])
        removeToken()
        resolve()
      })
    }
  }
}

export default user
