import { createTamagui } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
import { tokens } from '@tamagui/themes'
import { createTheme } from '@tamagui/core'

const darkTheme = createTheme({
  background: '#000',
  foreground: '#fff',
  primary: '#0a7ea4',
  secondary: '#303030',
})

const lightTheme = createTheme({
  background: '#fff',
  foreground: '#000',
  primary: '#0a7ea4',
  secondary: '#e0e0e0',
})

const config = createTamagui({
  defaultTheme: 'dark',
  themes: {
    dark: darkTheme,
    light: lightTheme
  },
  fonts: {
    body: createInterFont(),
    heading: createInterFont({
      face: {
        700: { normal: 'InterBold' }
      }
    })
  },
  tokens,
  shorthands
})

export type AppConfig = typeof config
export default config