import { createGlobalStyle } from 'styled-components'
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

export default GlobalStyle