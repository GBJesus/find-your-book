import axios from 'axios'

const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1'
})

// https://www.googleapis.com/books/v1/volumes?q=search

export default api
