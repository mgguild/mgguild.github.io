import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { SparkSwapTheme } from '@metagg/mgg-uikit'
import { Fonts } from 'theme/Base';

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends SparkSwapTheme {}
}

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