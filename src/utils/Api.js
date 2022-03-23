import axios from 'axios'
import Token from './Token'

const options = {
  headers: `Bearer ${Token.getToken()}`
}

export default {

  checkEmail: (email) => {
    return axios.post(`/api/confirm/`,{
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

  getFreeBoard: (params) => {
    // object params 을 query string parameter 로 변환 <-
    // 
    return axios.get('/api/board?keyword=1&limit=5', options)
  },

  postFreeBoard: () => {
  },
}