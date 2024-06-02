import config from '../config'
import axios from 'axios'

export default {
  name: 'UserService',

  getUsers(page = 1, query = '') {
    let url = config.USERS_URL
    const params = {
      page: page,
      q: query
    }
    return axios
      .get(url, { params: params })
      .then((response) => response.data)
      .catch((error) => {
        console.log(error)
      })
  },

  getUser(id) {
    let url = config.USER_URL + '/' + id
    return axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error)
      })
  },

  createUser(user) {
    let url = config.USER_URL
    return axios
      .post(url, user)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error)
      })
  },
  login(user) {
    let url = config.USER_URL + '/login'
    return axios
      .post(url, user)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error)
      })
  },

  updateUser(user) {
    let url = config.USER_URL + '/' + user.id
    return axios
      .put(url, user)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error)
      })
  },

  deleteUser(id) {
    let url = config.USER_URL + '/' + id
    return axios
      .delete(url)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error)
      })
  }
}
