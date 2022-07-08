import React from 'react'
import { CardList, Hero } from '~/components'
import { ScreenScrollContainer } from '~/components/Container'

const dataFakePersonagens = [
  {
    id: 1,
    image_Url:
      'https://i1.wp.com/www.hollywoodreporter.com/wp-content/uploads/2022/06/jtf-ff-002507_0bfed42dxx-H-2022.jpg?resize=780&w=780',
    title: 'Darth Vader',
    subtitle: 'Anakin Skywalker',
    description:
      'Darth Vader is a fictional character in the Star Wars universe. He is a former slave who has been trained as a Jedi Knight.',
    type: 'personagem',
  },
  {
    id: 2,
    image_Url:
      'https://i1.wp.com/www.hollywoodreporter.com/wp-content/uploads/2022/06/jtf-ff-002507_0bfed42dxx-H-2022.jpg?resize=780&w=780',

    title: 'Darth Vader',
    subtitle: 'Anakin Skywalker',
    description:
      'Darth Vader is a fictional character in the Star Wars universe. He is a former slave who has been trained as a Jedi Knight.',
    type: 'personagem',
  },
  {
    id: 3,
    image_Url:
      'https://i1.wp.com/www.hollywoodreporter.com/wp-content/uploads/2022/06/jtf-ff-002507_0bfed42dxx-H-2022.jpg?resize=780&w=780',
    title: 'Darth Vader',
    subtitle: 'Anakin Skywalker',
    description:
      'Darth Vader is a fictional character in the Star Wars universe. He is a former slave who has been trained as a Jedi Knight.',
    type: 'personagem',
  },
]

const dataFakeFilmes = [
  {
    id: 1,
    image_Url:
      'https://i1.wp.com/www.hollywoodreporter.com/wp-content/uploads/2022/06/jtf-ff-002507_0bfed42dxx-H-2022.jpg?resize=780&w=780',
    title: 'Darth Vader',
    subtitle: 'Anakin Skywalker',
    description:
      'Darth Vader is a fictional character in the Star Wars universe. He is a former slave who has been trained as a Jedi Knight.',
    type: 'filme',
  },
  {
    id: 2,
    image_Url:
      'https://i1.wp.com/www.hollywoodreporter.com/wp-content/uploads/2022/06/jtf-ff-002507_0bfed42dxx-H-2022.jpg?resize=780&w=780',

    title: 'Darth Vader',
    subtitle: 'Anakin Skywalker',
    description:
      'Darth Vader is a fictional character in the Star Wars universe. He is a former slave who has been trained as a Jedi Knight.',
    type: 'filme',
  },
  {
    id: 3,
    image_Url:
      'https://i1.wp.com/www.hollywoodreporter.com/wp-content/uploads/2022/06/jtf-ff-002507_0bfed42dxx-H-2022.jpg?resize=780&w=780',
    title: 'Darth Vader',
    subtitle: 'Anakin Skywalker',
    description:
      'Darth Vader is a fictional character in the Star Wars universe. He is a former slave who has been trained as a Jedi Knight.',
    type: 'filme',
  },
]

export const Home = () => {
  return (
    <ScreenScrollContainer>
      <Hero
        item={{
          image_Url:
            'https://i1.wp.com/www.hollywoodreporter.com/wp-content/uploads/2022/06/jtf-ff-002507_0bfed42dxx-H-2022.jpg?resize=780&w=780',
          title: 'Darth Vader',
          subtitle: 'Anakin Skywalker',
          type: 'filme',
        }}
      />
      <CardList title="Personagens" data={dataFakePersonagens} />
      <CardList title="Filmes" data={dataFakeFilmes} />
    </ScreenScrollContainer>
  )
}
