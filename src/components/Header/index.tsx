// src/components/Header/index.tsx
import { HeaderContainer, Background, LeftEffect, RightEffect, Logo } from './styles'
import logoImg from '../../assets/logo.svg';
import backgroundImg from '../../assets/header_background.svg'
import leftEffectImg from '../../assets/effectLeft.svg'
import rightEffectImg from '../../assets/effectRight.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Background src={backgroundImg} alt="" />
      <LeftEffect src={leftEffectImg} alt="" />
      <RightEffect src={rightEffectImg} alt="" />
      <Logo src={logoImg} alt="Github Blog" />
    </HeaderContainer>
  )
}
