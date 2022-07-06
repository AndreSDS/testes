import logoImage from '../../assets/LogoEmpire.png'

import { LogoImage } from './styles'

interface LogoProps {
  width?: number
  height?: number
}

export const Logo = ({ width = 64, height = 64 }: LogoProps) => {
  return <LogoImage width={width} height={height} source={logoImage} />
}
