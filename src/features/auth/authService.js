import axios from 'axios'

const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
  const config = {
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json",
      "X-XSRF-TOKEN": "XSRF-TOKEN"
    }
  }
  const response = await axios.post('/api/register', userData, config)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post('/api/login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
