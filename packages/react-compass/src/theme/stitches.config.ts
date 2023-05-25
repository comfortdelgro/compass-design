import {createStitches} from '@stitches/react'
import breakpoints from './breakpoints'
import {lightTheme} from './theme'

const stitches = createStitches({
  theme: lightTheme,
  media: breakpoints,
})

export const {styled, globalCss, getCssText, theme, keyframes} = stitches
