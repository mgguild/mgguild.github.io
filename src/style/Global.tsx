import styled, { createGlobalStyle } from 'styled-components'
import { Button } from '@metagg/mgg-uikit'
import { Fonts } from 'theme/Base';
import defaultBG from "../assets/background/MainBG.png";


const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${Fonts.primary};
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    img {
      height: auto;
      max-width: 100%;
    }
    p {
      font-family: ${Fonts.secondary};
    }
  }
`
export const NavOption = styled(Button)<{ activeIndex: boolean }>`
  background-color: ${({ activeIndex }) => (activeIndex ? '#00f4fd' : 'transparent')};
  color: ${({ theme, activeIndex }) => (activeIndex ? 'black' : theme.colors.textSubtle)};
`

export const BgContainer = styled.div<{
  bgImage?: any,
  bgColor?: string,
  position?: string,
  size?: string
}>`
  padding: 5rem;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-image: ${({ bgImage }) => (bgImage ? `url(${bgImage})` : 'none')};
    background-color: ${({ bgColor }) => (bgColor ?? 'none')};
    background-repeat: no-repeat;
    background-position: ${({ position }) => (position ?? 'center top')};
    background-size: ${({ size }) => (size ?? 'cover')};
  }
`


export default GlobalStyle