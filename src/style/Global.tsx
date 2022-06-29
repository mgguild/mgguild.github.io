import styled, { createGlobalStyle } from 'styled-components'
import { Button, Flex } from '@metagg/mgg-uikit'
import { Fonts } from 'theme/Base';
// import defaultBG from "../assets/background/MainBG.png";
import { breakpoints } from '../theme/Breakpoints';


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
  bgImage?: any;
  bgColor?: string;
  position?: string;
  size?: string;
  height?: string;
  mobileHeight?: string
}>`
  min-height: ${({ height }) => height ?? "100"}vh;
  display: flex;
  padding: 15px;
  @media screen and (max-width: ${breakpoints.Mobile.tablet}px){
    min-height: ${({mobileHeight, height}) => mobileHeight ?? height}vh;
  }

  position: relative;
  z-index: 0;
  background-image: ${({ bgImage }) => (bgImage ? `url(${bgImage})` : 'none')};
  background-color: ${({ bgColor }) => (bgColor ?? 'none')};
  background-repeat: no-repeat;
  background-position: ${({ position }) => (position ?? 'center top')};
  background-size: ${({ size }) => (size ?? 'cover')};

`

export const NavOptionContainer = styled(Flex)<{ maxScreen?: string }>`
  justify-content: center;
  border-bottom: 0.5px solid #00f4fd;
  width: 100%;
  flex-flow: wrap row;
  row-gap: 1rem;
  column-gap: 1.5rem;

  @media screen and (max-width: ${({maxScreen}) => maxScreen ?? `1163px`}){
    flex-flow: wrap column;
  }
`

export default GlobalStyle