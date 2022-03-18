import axios from 'axios'

function checkEmail() {
  return axios.post()
}

function getUsedList() {
  //return axios.get('/api/usedList')
  return [
    {
      id: 1,
      title: 'ddd',
      body : 'contents',
      writer: 'ddd'
    },
    {
      id: 2,
      title: 'ddd',
      body : 'contents',
      writer: 'ddd'
    }
    {
      id: 3,
      title: 'ddd',
      body : 'contents',
      writer: 'ddd'
    }
  ]
}