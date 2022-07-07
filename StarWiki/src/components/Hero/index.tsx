import React from 'react'
import { CustomText, Logo, IconButton } from '..'
import { colors } from '~/styles/colors'
import { Tag } from '../Tag'
import {
  HeroContainer,
  HeroImageBackground,
  HeroGradient,
  HeroHeadertContainer,
  TitleContainer,
  ButtonView,
} from './styles'

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: 'https://www.themoviedb.org/t/p/w500/suaJuFprbgdZaTE0mOt0xWIGFyQ.jpg',
        }}
      >
        <HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
          <HeroHeadertContainer>
            <Logo size="small" />
            <TitleContainer>
              <Tag>Filme</Tag>
              <CustomText fontFamily="bold" size={28} mt={8}>
                Episódio II
              </CustomText>
              <CustomText size={18}>A Ameaça Fantasma</CustomText>
              <ButtonView>
                <IconButton
                  label="Favoritos"
                  iconName="add-circle-outline"
                  onPress={() => {}}
                />
                <IconButton
                  label="Saiba mais"
                  iconName="information-circle-outline"
                  onPress={() => {}}
                />
              </ButtonView>
            </TitleContainer>
          </HeroHeadertContainer>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  )
}
