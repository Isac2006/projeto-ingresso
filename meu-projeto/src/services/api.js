import axios from 'axios'

const api = axios.create({
  baseURL: '/server'
})

export default api
