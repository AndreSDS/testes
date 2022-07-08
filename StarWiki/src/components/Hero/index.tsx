import React from 'react'
import { CustomText } from '../Text'
import { Logo } from '../Logo'
import { IconButton } from '../IconButton'
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

interface HeroProps {
  onDetail?: boolean
  item: {
    title: string
    subtitle: string
    image_Url: string
    type: string
  }
}

export const Hero = ({ item, onDetail }: HeroProps) => {
  const { title, subtitle, image_Url, type } = item

  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: image_Url,
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
                  label="Favoritos"
                  iconName="add-circle-outline"
                  onPress={() => {}}
                />

                {type === 'filme' && <PlayButton onPress={() => {}} />}

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
