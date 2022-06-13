import React from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { dark } from '@metagg/mgg-uikit'
import { Colors as addOnColors } from 'theme/Base'

const newDark = {
  ...dark, 
  ...addOnColors,
}

const ThemeContext = React.createContext({ isDark: true})

const ThemeContextProvider = ({ children }: {children: any}) => {
  const isDark = true

  return (
    <ThemeContext.Provider value={{ isDark }}>
      <SCThemeProvider theme={newDark}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }