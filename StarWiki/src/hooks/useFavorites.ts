import AsyncStorage from '@react-native-async-storage/async-storage'

const DB_KEY = '@StarWarsFavoriteKey'

export const useFavorites = () => {
  const addFavorite = async (data) => {
    try {
      let newDB: any[] = []
      const keyAlreadyExists = await AsyncStorage.getItem(DB_KEY)

      if (keyAlreadyExists !== null) {
        const db = JSON.parse(keyAlreadyExists)
        newDB = [...db, data]
      } else {
        newDB = [data]
      }

      await AsyncStorage.setItem(DB_KEY, JSON.stringify(newDB))
      return newDB
    } catch (e) {
      console.log({ error: e })
      return { error: e }
    }
  }

  const removeFavorite = async (data) => {
    try {
      let newDB: any[] = []
      const keyAlreadyExists = await AsyncStorage.getItem(DB_KEY)

      if (keyAlreadyExists !== null) {
        const db = JSON.parse(keyAlreadyExists)
        newDB = db.filter(
          (item) => item.id !== data.id && item.title !== data.title
        )
      }

      await AsyncStorage.setItem(DB_KEY, JSON.stringify(newDB))
      return newDB
    } catch (e) {
      console.log({ error: e })
      return { error: e }
    }
  }

  const getFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem(DB_KEY)
      if (value !== null) {
        return JSON.parse(value)
      }
      return []
    } catch (e) {
      console.log({ error: e })
      return { error: e }
    }
  }

  return { addFavorite, getFavorites, removeFavorite }
}
