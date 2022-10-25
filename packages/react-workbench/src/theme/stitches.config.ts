import {createStitches} from '@stitches/react'
import themeConfig from './theme'

const stitches = createStitches({theme: themeConfig})

export const {styled, globalCss, getCssText, theme} = stitches
