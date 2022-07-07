import React from 'react'
import { FlatList } from 'react-native'
import { Card, CustomText } from '..'

const data = [
  {
    id: 1,
    image_Url:
      'https://i1.wp.com/www.hollywoodreporter.com/wp-content/uploads/2022/06/jtf-ff-002507_0bfed42dxx-H-2022.jpg?resize=780&w=780',
  },
  {
    id: 2,
    image_Url:
      'https://i1.wp.com/www.hollywoodreporter.com/wp-content/uploads/2022/06/jtf-ff-002507_0bfed42dxx-H-2022.jpg?resize=780&w=780',
  },
  {
    id: 3,
    image_Url:
      'https://i1.wp.com/www.hollywoodreporter.com/wp-content/uploads/2022/06/jtf-ff-002507_0bfed42dxx-H-2022.jpg?resize=780&w=780',
  },
  {
    id: 4,
    image_Url:
      'https://i1.wp.com/www.hollywoodreporter.com/wp-content/uploads/2022/06/jtf-ff-002507_0bfed42dxx-H-2022.jpg?resize=780&w=780',
  },
  {
    id: 5,
    image_Url:
      'https://i1.wp.com/www.hollywoodreporter.com/wp-content/uploads/2022/06/jtf-ff-002507_0bfed42dxx-H-2022.jpg?resize=780&w=780',
  },
]

interface CardListProps {
  title: string
}

export const CardList = ({ title }: CardListProps) => {
  return (
    <>
      <CustomText>{title}</CustomText>
      <FlatList
        data={data}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
    </>
  )
}
