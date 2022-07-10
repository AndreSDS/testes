import React from 'react'
import { FlatList } from 'react-native'
import { theme } from '~/styles'
import { Card } from '../Card'
import { CustomText } from '../Text'

import { CardListContainer } from './styles'

interface IData {
  description: string
  id: number
  image_url: string
  subtitle: string
  title: string
  trailer_url?: string
}

interface CardListProps {
  title: string
  data: IData[]
}

export const CardList = ({ title, data }: CardListProps) => {
  return (
    <CardListContainer>
      {title && (
        <CustomText ml={24} fontFamily="black" size={18}>
          {title}
        </CustomText>
      )}
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          paddingLeft: theme.metrics.px(24),
          paddingTop: theme.metrics.px(12),
          paddingBottom: theme.metrics.px(24),
        }}
      />
    </CardListContainer>
  )
}
