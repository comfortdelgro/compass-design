import theme from '../../theme/theme'
export interface StyleObject {
  [key: string]: string | StyleObject
}

const cssUnitMapping = {
  width: 'px',
  maxWidth: 'px',
  minWidth: 'px',
  height: 'px',
  maxHeight: 'px',
  minHeight: 'px',
  fontSize: 'px',
  lineHeight: 'px',
  margin: 'px',
  marginTop: 'px',
  marginRight: 'px',
  marginBottom: 'px',
  marginLeft: 'px',
  padding: 'px',
  paddingTop: 'px',
  paddingRight: 'px',
  paddingBottom: 'px',
  paddingLeft: 'px',
  borderWidth: 'px',
  borderTopWidth: 'px',
  borderRightWidth: 'px',
  borderBottomWidth: 'px',
  borderLeftWidth: 'px',
  borderRadius: 'px',
  borderTopLeftRadius: 'px',
  borderTopRightRadius: 'px',
  borderBottomRightRadius: 'px',
  borderBottomLeftRadius: 'px',
  borderSpacing: 'px',
  borderImageWidth: 'px',
  borderImageSlice: 'px',
  borderImageOutset: 'px',
  borderImageSource: '',
  borderImageRepeat: '',
  letterSpacing: 'px',
  wordSpacing: 'px',
  columnWidth: 'px',
  columnGap: 'px',
  outlineWidth: 'px',
  outlineOffset: 'px',
  textIndent: 'px',
  top: 'px',
  right: 'px',
  bottom: 'px',
  left: 'px',
  gridGap: 'px',
  columnRuleWidth: 'px',
  maskBorderWidth: 'px',
  maskBorderOutset: 'px',
  maskBorderSlice: 'px',
}
function handleVariables<T>(
  obj: Record<string, unknown>,
  key: string,
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
    // if typeof value === 'number' and the key is in the cssUnitMapping object, then append its value in cssUniMapping to the value. if the ypeof value === 'number' and the key is not in the cssUnitMapping object, then return the value as it is

    return typeof value === 'number' && key in cssUnitMapping
      ? `${value}${cssUnitMapping[key]}`
      : value
  }

  // Recursively terate over the theme object to see if the css value is one of its keys. If yes, return the value. If not, return the original value
  for (const key in obj) {
    if (key in obj) {
      if (key === valueWithout$prefix(value)) {
        return obj[key] as T
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        const foundValue = handleVariables<T>(
          obj[key] as Record<string, unknown>,
          key,
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
  let mediaCss = ''
  // eslint-disable-next-line prefer-const
  let map = new Map<string, string>()
  const space = ' ' // space between parent class and child class
  // logic check if contain @ responsive mark
  for (const key in obj) {
    if (key.startsWith('@')) {
      const mediaQuery = key
      const mediaQueryCSS = objectToCSS(
        obj[key] as StyleObject,
        selector,
        indent + '  ',
      )
      mediaCss += `${mediaQuery} {\n${mediaQueryCSS}\n}\n`
    } else if (typeof obj[key] === 'object') {
      const newSelector = `${selector}${space}${key.replace(/&/g, '')}`.trim()
      css = objectToCSS(obj[key] as StyleObject, newSelector, indent)
    } else {
      // Convert the key from camelCase to kebab-case
      const kebabKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      // Get the value from the theme
      const value = handleVariables<string>(
        theme,
        key,
        obj[key] as string | number,
      )
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
  // push media css config to below for higher priority
  css += mediaCss
  return css
}

export default objectToCSS
