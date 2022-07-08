import React from 'react'
import { CardContainer, CardImage } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDataStore } from '~/stores/DataStore'

interface CardProps {
  item: {
    title: string
    subtitle: string
    image_Url: string
    type: string
  }
}

export const Card = ({ item }: CardProps) => {
  const { navigate } = useNavigation()
  const { setSelectedData } = useDataStore()

  function handleNavigate() {
    setSelectedData({ ...item })
    navigate('Detail' as never, {} as never)
  }

  return (
    <CardContainer onPress={handleNavigate}>
      <CardImage source={{ uri: item.image_Url }} />
    </CardContainer>
  )
}
