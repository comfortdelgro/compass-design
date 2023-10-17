import theme from '../../theme/theme'
export interface StyleObject {
  [key: string]: string | StyleObject
}
function handleVariables<T>(
  obj: Record<string, unknown>,
  value: string | number,
): T | undefined {
  const valueWithout$prefix = (value: string | number) => {
    // This is to handle the case where the value is a string
    if (typeof value === 'string') {
      return value.toString().startsWith('$')
        ? value.toString().slice(1)
        : value.toString()
    }
    // This is to handle the case where the value is a number
    if (typeof value === 'number') {
      return value.toString() + 'px'
    }
    return value
  }

  // Recursively terate over the theme object to see if the css value is one of its keys. If yes, return the value. If not, return the original value
  for (const key in obj) {
    if (key in obj) {
      if (key === valueWithout$prefix(value)) {
        return obj[key] as T
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        const foundValue = handleVariables<T>(
          obj[key] as Record<string, unknown>,
          valueWithout$prefix(value),
        )
        if (foundValue !== undefined) {
          return foundValue
        }
      }
    }
  }

  return value as unknown as T
}

function objectToCSS(obj: StyleObject, selector = '', indent = ''): string {
  let css = ''
  // eslint-disable-next-line prefer-const
  let map = new Map<string, string>()
  const space = ' ' // space between parent class and child class

  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      const newSelector = `${selector}${space}${key.replace(/&/g, '')}`.trim()
      css += objectToCSS(obj[key] as StyleObject, newSelector, indent)
    } else {
      // Convert the key from camelCase to kebab-case
      const kebabKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      // Get the value from the theme
      const value = handleVariables<string>(theme, obj[key] as string | number)
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
