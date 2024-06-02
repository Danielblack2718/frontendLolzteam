
import axios from 'axios'
import config from '../config'


export default {
  name: 'CommentService',

  getComments(postId) {
    let url = config.COMMENTS_URL + '/' + postId
    return axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error)
      })
  },

  createComment(comment) {
    let url = config.COMMENT_URL
    return axios
      .post(url, comment)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error)
      })
  },

  updateComment(comment) {
    let url = config.COMMENT_URL + '/' + comment.id
    return axios
      .put(url, comment)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error)
      })
  },

  deleteComment(id) {
    let url = config.COMMENT_URL + '/' + id
    return axios
      .delete(url)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error)
      })
  }
}
