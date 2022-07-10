import { api } from '~/services/api'

export const useGetData = () => {
  const getFilmes = async () => {
    try {
      const response = await api.get('/films')
      return response.data
    } catch (error) {
      console.log(error)
      return { error }
    }
  }

  const getPersonagens = async () => {
    try {
      const response = await api.get('/characters')
      return response.data
    } catch (error) {
      console.log(error)
      return { error }
    }
  }

  return { getFilmes, getPersonagens }
}
