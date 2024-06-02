import config from '../config'
import axios from 'axios'

export default {
  name: 'PostService',

  getPosts(page = 1, query = "") {
    let url = config.POSTS_URL
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

  getPost(id) {
    let url = config.POST_URL + '/' + id
    return axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error)
      })
  },

  createPost(post) {
    let url = config.POST_URL
    return axios
      .post(url, post)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error)
      })
  },

  updatePost(post) {
    let url = config.POST_URL + '/' + post.id
    return axios
      .put(url, post)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error)
      })
  },

  deletePost(id) {
    let url = config.POST_URL + '/' + id
    return axios
      .delete(url)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error)
      })
  }
}
