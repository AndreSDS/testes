import React, { useState } from 'react'
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from '@testing-library/react-native'
import { renderHook } from '@testing-library/react-hooks'

import { Hero } from '../../../src/components'
import { CustomTheme } from '../../../src/components/CustomTheme'
import { useFavorites } from '../../../src/hooks'

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage)

const mockUseState = useState as jest.Mock

const setup = {
  favorites: [
    {
      id: 1,
      title: 'Titulo 1',
      image_url: 'https://image.tmdb.org/t/p/w500/',
      description: 'Descrição 1',
      subtitle: 'Subtitulo 1',
      trailer_url: 'https://www.youtube.com/watch?v=',
    },
  ],
  onDetail: false,
  item: {
    description: '',
    id: 1,
    image_url: 'mock-image-url',
    subtitle: 'mock-subtitle',
    title: 'mock-title',
    trailer_url: 'mock-url',
  },
}

describe('Hero component', () => {
  let result

  beforeEach(() => {
    render(<Hero item={setup.item} onDetail={setup.onDetail} />, {
      wrapper: CustomTheme,
    })

    result = renderHook(() => useFavorites())
  })

  it('should be render background image', () => {
    const backgroundImage = screen.getByRole('image').props.source.uri

    expect(backgroundImage).toBe('mock-image-url')
  })

  it('should be render a logo image', () => {
    const logoImage = screen.getByTestId('logo-image').props.source

    expect(logoImage).toBeGreaterThan(0)
  })

  it('should render a tag with type text', () => {
    const type = screen.getByText('Filme' || 'Personagem').props.children

    expect(type).toBe('Filme' || 'Personagem')
  })

  it('shoud be render a title', () => {
    const title = screen.getByText(setup.item.title).props.children

    expect(title).toBe('mock-title')
  })

  it('shoud be render a subtitle', () => {
    const subtitle = screen.getByText(setup.item.subtitle).props.children

    expect(subtitle).toBe('mock-subtitle')
  })

  it('should be render a button to add to favorites', () => {
    const addButton = screen.getByTestId('Add to favorites')

    expect(addButton).toBeDefined()
    expect(addButton.props.children.length).toBeGreaterThan(0)
  })

  it('should be change the button label after press it', async () => {
    const addButton = screen.getByTestId('Add to favorites')

    await act(async () => {
      fireEvent.press(addButton)
      await result.current.addFavorite(setup.item).then(() => {
        mockUseState.mockImplementationOnce(() => [true, jest.fn()])
      })
    })

    const removeButton = screen.getByTestId('Remove')

    expect(removeButton).toBeDefined()
  })
})
