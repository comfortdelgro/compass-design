import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import {
  borderWidths,
  darkThemeColors,
  fontSizes,
  fontWeights,
  fonts,
  lightThemeColors,
  lineHeights,
  radius,
  spacings,
  transitions,
} from './theme.config.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const rootDir = path.resolve(__dirname, '../')
const themeConfigPath = path.resolve(rootDir, 'scripts/theme.config.js')
const themePath = path.resolve(rootDir, 'theme/theme.ts')
const themeModuleCssPath = path.resolve(rootDir, 'theme/theme.module.css')

const writeToFile = (rootPath, data) => {
  fs.writeFileSync(rootPath, data, 'utf8')
}

const cssVariables = []

cssVariables.push('/* Spacings */')
for (const key in spacings) {
  cssVariables.push(`--cdg-spacing-${key} : ${spacings[key]};`)
}

cssVariables.push('/* Fonts */')
for (const key in fonts) {
  cssVariables.push(`--cdg-font-${key} : ${fonts[key]};`)
}

cssVariables.push('/* Font Sizes */')
for (const key in fontSizes) {
  cssVariables.push(
    `--cdg-font-size-${key.replace('_', '-')} : ${fontSizes[key]};`,
  )
}

cssVariables.push('/* Line Heights */')
for (const key in lineHeights) {
  cssVariables.push(`--cdg-line-height-${key} : ${lineHeights[key]};`)
}

cssVariables.push('/* Font Weights */')
for (const key in fontWeights) {
  cssVariables.push(`--cdg-font-weight-${key} : ${fontWeights[key]};`)
}

cssVariables.push('/* Border Widths */')
for (const key in borderWidths) {
  cssVariables.push(`--cdg-border-width-${key} : ${borderWidths[key]};`)
}

cssVariables.push('/* Radii */')
for (const key in radius) {
  cssVariables.push(`--cdg-border-radius-${key} : ${radius[key]};`)
}

cssVariables.push('/* Transitions */')
for (const key in transitions) {
  cssVariables.push(`--cdg-transition-${key} : ${transitions[key]};`)
}

cssVariables.push('/* Light Theme Colors */')
for (const key in lightThemeColors) {
  cssVariables.push(`--cdg-color-${key} : ${lightThemeColors[key]};`)
}

cssVariables.push(`
}
/* Dark Theme Colors */
[data-cdg-theme='dark'] {`)
for (const key in darkThemeColors) {
  cssVariables.push(`--cdg-color-${key} : ${darkThemeColors[key]};`)
}

const cssData = `/* THIS FILE IS AUTO GENERATED. DO NOT MODIFY!  */
:root {
  ${cssVariables.join('\n  ')}
}
`

writeToFile(themeModuleCssPath, cssData)

console.log('Generate theme.module.scss success!')

fs.readFile(themeConfigPath, 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const themeData = [
    '// THIS FILE IS AUTO GENERATED. DO NOT MODIFY!',
    data,
    `const theme = {
  colors: lightThemeColors,
  fonts,
  fontSizes,
  lineHeights,
  fontWeights,
  borderWidths,
  radii: radius,
  space: spacings,
  sizes: spacings,
  transitions,
}
   
export default theme
   `,
    'export type Colors = typeof lightThemeColors',
  ].join('\n')

  console.log('Generate theme.ts success!')

  writeToFile(themePath, themeData)
})
