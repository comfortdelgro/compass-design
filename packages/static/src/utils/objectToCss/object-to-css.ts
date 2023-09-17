'use client'
import theme from '../../theme-static/theme'
export interface StyleObject {
  [key: string]: string | StyleObject
}
function handleVariables<T>(
  obj: Record<string, unknown>,
  targetKey: string,
): T | undefined {
  const targetKeyWithoutPrefix = targetKey.startsWith('$')
    ? targetKey.slice(1)
    : targetKey
  for (const key in obj) {
    if (key in obj) {
      if (key === targetKeyWithoutPrefix) {
        return obj[key] as T
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        const foundValue = handleVariables<T>(
          obj[key] as Record<string, unknown>,
          targetKeyWithoutPrefix,
        )
        if (foundValue !== undefined) {
          return foundValue
        }
      }
    }
  }

  return targetKey as unknown as T
}

function objectToCSS(obj: StyleObject, selector = '', indent = ''): string {
  let css = ''
  // eslint-disable-next-line prefer-const
  let map = new Map<string, string>()

  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      const newSelector = `${selector}${key.replace(/&/g, '')}`.trim()
      css += objectToCSS(obj[key] as StyleObject, newSelector, indent)
    } else {
      // Convert the key from camelCase to kebab-case
      const kebabKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      // Get the value from the theme
      const value = handleVariables<string>(theme, obj[key] as string)
      // Check if the selector already exists in the map
      if (map.has(selector)) {
        // Append the property to the existing value
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        map.set(selector, map.get(selector) + `; ${kebabKey}: ${value}`)
      } else {
        // Create a new entry with the selector and the property
        map.set(selector, `${kebabKey}: ${value}`)
      }
    }
  }

  // Iterate over the map and generate the CSS string
  for (const [selector, value] of map) {
    css += `${indent}${selector} {\n${indent}  ${value};\n${indent}}\n`
  }

  return css
}

export default objectToCSS
