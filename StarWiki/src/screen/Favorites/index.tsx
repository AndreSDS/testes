import React, { useEffect, useState } from 'react'
import { useFavorites } from '~/hooks/useFavorites'
import { CardList, CustomText, ScreenScrollContainer } from '~/components'

export const Favorites = ({ navigation }) => {
  const { getFavorites } = useFavorites()
  const [favoritesData, setFavoritesData] = useState([])

  async function callGetFavorites() {
    const favorites = await getFavorites()
    setFavoritesData(favorites)
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      callGetFavorites()
    })

    return unsubscribe
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ScreenScrollContainer withPadding>
      <CustomText fontFamily="bold" size={28}>
        Favorites
      </CustomText>

      {favoritesData && <CardList title="" data={favoritesData} />}
    </ScreenScrollContainer>
  )
}
