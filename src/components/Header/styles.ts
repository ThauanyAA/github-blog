import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 296px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`

export const LeftEffect = styled.img`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`

export const RightEffect = styled.img`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`

export const Logo = styled.img`
  position: relative;
  z-index: 2;
  width: auto;
`
