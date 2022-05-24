import 'styled-components';
// eslint-disable-next-line import/no-unresolved
import { SparkSwapTheme } from '@metagg/mgg-uikit'
declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends SparkSwapTheme {
    addOnColors: {
      background1: string
      background2: string
      container1: string
      border: string
    },
  }
}