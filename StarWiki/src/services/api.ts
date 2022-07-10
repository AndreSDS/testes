import axios from 'axios'

const api = axios.create({
  baseURL: 'https://sevencoders-starwars-wiki.herokuapp.com',
})

const apiCharacters = axios.create({
  baseURL: '',
})

const apiMovies = axios.create({
  baseURL: '',
})

export { apiCharacters, apiMovies, api }
