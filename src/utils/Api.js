import axios from 'axios'
import Token from './Token'

const options = {
  headers: {
    'Authorization': `Bearer ${Token.getToken()}`
  },
}

export default {
  checkEmail: (email) => {
    return axios.post(`/api/confirm`,{
      email
    })
  },

  signIn: (email, password) => {
    return axios.post('/api/signin', {
      email,
      password,
    })
  },
  signUp: (email, memberName, password) => {
    return axios.post('/api/signup', {
      email,
      memberName,
      password,
    })
  },
  getFreeBoard: (id) => {
    return axios.get(`/api/board/categories/${id}`, options)
  },
  postFreeBoard: () => {
    return axios.post('/api/board', {title: 'title'}, options)
  },
  getCatetories: () => {
    return axios.get('/api/categories', options)
  },
  getMyBoard: (id) => {
    return axios.get(`/api/board/member/${id}`, options)
  },
  getFreeBoardOne: (id) => {
    return axios.get(`/api/board/${id}`, options)
  },
  
}