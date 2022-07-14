import React, { useEffect, useState } from 'react'
import { CustomText } from '../Text'
import { IconButton } from '../IconButton'
import { Logo } from '../Logo'
import { Tag } from '../Tag'
import { colors } from '~/styles/colors'
import {
  HeroContainer,
  HeroImageBackground,
  HeroGradient,
  HeroHeadertContainer,
  TitleContainer,
  ButtonView,
} from './styles'
import { PlayButton } from '../PlayButton'
import { useFavorites } from '~/hooks'

interface HeroProps {
  onDetail?: boolean
  item: {
    description: string
    id: number
    image_url: string
    subtitle: string
    title: string
    trailer_url?: string
  }
}

export const Hero = ({ item, onDetail }: HeroProps) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const { addFavorite, getFavorites, removeFavorite } = useFavorites()
  const { image_url, subtitle, title, trailer_url } = item
  const type = trailer_url ? 'Filme' : 'Personagem'

  const checkIsFavorite = async () => {
    const favorites = await getFavorites()
    const isInFavorites = favorites.some(
      (favorite) => favorite.id === item.id && favorite.title === item.title
    )

    setIsFavorite(isInFavorites)
  }

  async function addDataToFavorites() {
    await addFavorite(item)
    checkIsFavorite()
  }

  async function removeDataFromFavorites() {
    await removeFavorite(item)
    checkIsFavorite()
  }

  useEffect(() => {
    checkIsFavorite()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <HeroContainer>
      <HeroImageBackground
        accessibilityRole="image"
        source={{
          uri: image_url,
        }}
      >
        <HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
          <HeroHeadertContainer>
            {!onDetail && <Logo size="small" />}

            <TitleContainer>
              <Tag>{type}</Tag>

              <CustomText fontFamily="bold" size={28} mt={8}>
                {title}
              </CustomText>

              <CustomText size={18}>{subtitle}</CustomText>

              <ButtonView>
                <IconButton
                  label={isFavorite ? 'Remove' : 'Add to favorites'}
                  iconName={
                    isFavorite ? 'remove-circle-outline' : 'add-circle-outline'
                  }
                  onPress={() =>
                    isFavorite
                      ? removeDataFromFavorites()
                      : addDataToFavorites()
                  }
                />

                {type === 'Filme' && <PlayButton onPress={() => {}} />}

                {!onDetail && (
                  <IconButton
                    label="Saiba mais"
                    iconName="information-circle-outline"
                    onPress={() => {}}
                  />
                )}
              </ButtonView>
            </TitleContainer>
          </HeroHeadertContainer>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  )
}
