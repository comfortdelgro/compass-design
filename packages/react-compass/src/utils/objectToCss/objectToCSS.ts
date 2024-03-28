import {
  comma,
  toCamelCase,
  toCssString,
  toHyphenCase,
  toPolyfilledValue,
  toResolvedMediaQueryRanges,
  toResolvedSelectors,
  toSizingValue,
  toStringOfObject,
  unitlessProps,
} from './utils'
import {CSS} from './types'

const toCssRules = (
  style: CSS,
  selectors: string[],
  conditions: string[],
  onCssText: (v: string) => void,
) => {
  let currentRule: [string[], string[], string[]] = undefined

  /** Last polyfill that was used, cached to prevent recursion. */
  let lastPoly

  /** Walks CSS styles and converts them into CSSOM-compatible rules. */
  const walk = (style: CSS, selectors: string[], conditions: string[]) => {
    /** Represents the left-side "name" for the property (the at-rule prelude, style-rule selector, or declaration name). */
    let name: keyof CSS

    /** Represents the right-side "data" for the property (the rule block, or declaration value). */
    let data: CSS[keyof CSS]

    const each = (style) => {
      for (name in style) {
        /** Whether the current name represents an at-rule. */
        const isAtRuleLike = name.charCodeAt(0) === 64

        const datas =
          isAtRuleLike && Array.isArray(style[name])
            ? style[name]
            : [style[name]]

        for (data of datas) {
          const camelName = toCamelCase(name)

          /** Whether the current data represents a nesting rule, which is a plain object whose key is not already a util. */
          const isRuleLike =
            typeof data === 'object' &&
            data &&
            data.toString === toStringOfObject

          // conditionally transform the current data using the polyfill
          if (camelName in toPolyfilledValue) {
            const poly = toPolyfilledValue[camelName]

            if (poly !== lastPoly) {
              lastPoly = poly

              each(poly(data))

              lastPoly = null

              continue
            }
          }

          // if the left-hand "name" matches a configured at-rule
          if (isAtRuleLike) {
            // transform the current name with the configured media at-rule prelude
            name = toResolvedMediaQueryRanges(name)
          }

          if (isRuleLike) {
            /** Next conditions, which may include one new condition (if this is an at-rule). */
            const nextConditions = isAtRuleLike
              ? conditions.concat(name)
              : [...conditions]
            /** Next selectors, which may include one new selector (if this is not an at-rule). */
            const nextSelections = isAtRuleLike
              ? [...selectors]
              : toResolvedSelectors(selectors, name.split(comma))

            if (currentRule !== undefined) {
              onCssText(toCssString(...currentRule))
            }

            currentRule = undefined

            walk(data as CSS, nextSelections, nextConditions)
          } else {
            if (currentRule === undefined)
              currentRule = [[], selectors, conditions]

            /** CSS right-hand side value, which may be a specially-formatted custom property. */
            data =
              // preserve object-like data
              isRuleLike
                ? data
                : // replace all non-unitless props that are not custom properties with pixel versions
                typeof data === 'number'
                ? data &&
                  !(camelName in unitlessProps) &&
                  !(name.charCodeAt(0) === 45)
                  ? String(data) + 'px'
                  : String(data)
                : // replace tokens with stringified primitive values
                  toSizingValue(camelName, data == null ? '' : data as string)

            currentRule[0].push(
              `${isAtRuleLike ? `${name} ` : `${toHyphenCase(name)}:`}${data}`,
            )
          }
        }
      }
    }

    each(style)

    if (currentRule !== undefined) {
      onCssText(toCssString(...currentRule))
    }
    currentRule = undefined
  }

  walk(style, selectors, conditions)
}

export const objectToCSS = (style, selectors = [''], conditions = []) => {
  const str = []
  toCssRules(style, selectors, conditions, (cssText) => str.push(cssText))
  return str.join('\r\n')
}
