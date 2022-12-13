import {createStitches} from '@stitches/react'
import breakpoints from './breakpoints'
import themeConfig from './theme'

const stitches = createStitches({
  theme: themeConfig,
  media: breakpoints,
})

export const {styled, globalCss, getCssText, theme, keyframes} = stitches
