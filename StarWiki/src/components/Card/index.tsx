import React from 'react'
import { CardContainer, CardImage } from './styles'

interface CardProps {
  item: {
    id?: number
    image_Url: string
  }
}

export const Card = ({ item }: CardProps) => {
  return (
    <CardContainer>
      <CardImage source={{ uri: item.image_Url }} />
    </CardContainer>
  )
}
