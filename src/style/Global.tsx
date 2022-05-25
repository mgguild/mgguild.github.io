import styled, { createGlobalStyle } from 'styled-components'
import { Button } from '@metagg/mgg-uikit'
import { Fonts } from 'theme/Base';


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


export default GlobalStyle