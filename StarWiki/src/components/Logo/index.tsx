import React from 'react'
import logoImage from '~/assets/LogoEmpire.png'

import { LogoImage } from './styles'

interface LogoProps {
  size: 'small' | 'large'
}

export const Logo = ({ size }: LogoProps) => {
  return <LogoImage testID="logo-image" size={size} source={logoImage} />
}
