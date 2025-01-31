import { createTamagui } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'

const config = createTamagui({
  fonts: {
    body: createInterFont(),
    heading: createInterFont({
      face: {
        700: { normal: 'InterBold' }
      }
    })
  },
  tokens,
  themes,
  shorthands
})

export type AppConfig = typeof config
export default config