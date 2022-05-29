import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API
})

export const useApi = () => ({
  validationToken: async (token: String) => {
    const response = await api.post('/validate', { token })
    return response.data
  },
  signin: async (email: String, password: String) => {
    const response = await api.post('/signin', { email, password })
    return response.data
  },
  signout: async () => {
    const response = await api.post('/signout')
    return response.data
  }
})