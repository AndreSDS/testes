import React from 'react'
import { CardContainer, CardImage } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDataStore } from '~/stores'

interface CardProps {
  item: {
    description: string
    id: number
    image_url: string
    subtitle: string
    title: string
    trailer_url?: string
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
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  )
}
