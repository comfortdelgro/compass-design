export const unitlessProps = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,

  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
}

export const sizeProps = {
  blockSize: 1,
  height: 1,
  inlineSize: 1,
  maxBlockSize: 1,
  maxHeight: 1,
  maxInlineSize: 1,
  maxWidth: 1,
  minBlockSize: 1,
  minHeight: 1,
  minInlineSize: 1,
  minWidth: 1,
  width: 1,
}
export const splitBySpace = /\s+(?![^()]*\))/
export const mqunit = /([\d.]+)([^]*)/
export const comma = /\s*,\s*(?![^()]*\))/

export const toStringOfObject = Object.prototype.toString

export const split = (fn) => (data) =>
  fn(...(typeof data === 'string' ? String(data).split(splitBySpace) : [data]))

export const toCamelCase = (value: string) =>
  !/[A-Z]/.test(value)
    ? value.replace(/-[^]/g, (capital) => capital[1].toUpperCase())
    : value

export const toHyphenCase = (value: string) =>
  value.includes('-')
    ? value
    : value.replace(/[A-Z]/g, (capital) => '-' + capital.toLowerCase())

export const toCssString = (declarations, selectors, conditions) =>
  `${conditions.map((condition) => `${condition}{`).join('')}${
    selectors.length ? `${selectors.join(',')}{` : ''
  }${declarations.join(';')}${selectors.length ? `}` : ''}${Array(
    conditions.length ? conditions.length + 1 : 0,
  ).join('}')}`

export const toResolvedSelectors = (
  parentSelectors: string[],
  nestedSelectors: string[],
) =>
  parentSelectors.length
    ? parentSelectors.reduce((resolvedSelectors, parentSelector) => {
        resolvedSelectors.push(
          ...nestedSelectors.map((selector) =>
            selector.includes('&')
              ? selector.replace(
                  /&/g,
                  /[ +>|~]/.test(parentSelector) && /&.*&/.test(selector)
                    ? `:is(${parentSelector})`
                    : parentSelector,
                )
              : parentSelector + ' ' + selector,
          ),
        )

        return resolvedSelectors
      }, [])
    : nestedSelectors

export const toSizingValue = (
  declarationName: string,
  declarationValue: string,
) =>
  declarationName in sizeProps && typeof declarationValue === 'string'
    ? declarationValue.replace(
        /^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,
        (data, lead, main, tail) =>
          lead +
          (main === 'stretch'
            ? `-moz-available${tail};${toHyphenCase(
                declarationName,
              )}:${lead}-webkit-fill-available`
            : `-moz-fit-content${tail};${toHyphenCase(
                declarationName,
              )}:${lead}fit-content`) +
          tail,
      )
    : String(declarationValue)

export const toPolyfilledValue = {
  // prefixed properties
  appearance: (d) => ({WebkitAppearance: d, appearance: d}),
  backfaceVisibility: (d) => ({
    WebkitBackfaceVisibility: d,
    backfaceVisibility: d,
  }),
  backdropFilter: (d) => ({WebkitBackdropFilter: d, backdropFilter: d}),
  backgroundClip: (d) => ({WebkitBackgroundClip: d, backgroundClip: d}),
  boxDecorationBreak: (d) => ({
    WebkitBoxDecorationBreak: d,
    boxDecorationBreak: d,
  }),
  clipPath: (d) => ({WebkitClipPath: d, clipPath: d}),
  content: (d) => ({
    content:
      d.includes('"') ||
      d.includes("'") ||
      /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(
        d,
      )
        ? d
        : `"${d}"`,
  }),
  hyphens: (d) => ({WebkitHyphens: d, hyphens: d}),
  maskImage: (d) => ({WebkitMaskImage: d, maskImage: d}),
  maskSize: (d) => ({WebkitMaskSize: d, maskSize: d}),
  textSizeAdjust: (d) => ({WebkitTextSizeAdjust: d, textSizeAdjust: d}),
  userSelect: (d) => ({WebkitUserSelect: d, userSelect: d}),

  // logical properties
  marginBlock: split((s, e) => ({marginBlockStart: s, marginBlockEnd: e || s})),
  marginInline: split((s, e) => ({
    marginInlineStart: s,
    marginInlineEnd: e || s,
  })),
  maxSize: split((b, i) => ({maxBlockSize: b, maxInlineSize: i || b})),
  minSize: split((b, i) => ({minBlockSize: b, minInlineSize: i || b})),
  paddingBlock: split((s, e) => ({
    paddingBlockStart: s,
    paddingBlockEnd: e || s,
  })),
  paddingInline: split((s, e) => ({
    paddingInlineStart: s,
    paddingInlineEnd: e || s,
  })),
}

export const toResolvedMediaQueryRanges = (media: string) =>
  media.replace(
    /\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,
    (
      __: string,
      p1: string,
      o1: string,
      p2: string,
      o2: string,
      p3: string,
    ) => {
      /** Whether the first param is a value. */
      const isP1Value = mqunit.test(p1)

      /** Numeric shift applied to a value when an operator is `<` or `>`. */
      const shift = 0.0625 * (isP1Value ? -1 : 1)

      const [name, value] = isP1Value ? [p2, p1] : [p1, p2]

      return (
        '(' +
        (o1[0] === '=' ? '' : (o1[0] === '>') === isP1Value ? 'max-' : 'min-') +
        name +
        ':' +
        (o1[0] !== '=' && o1.length === 1
          ? value.replace(
              mqunit,
              (_, v, u) => Number(v) + shift * (o1 === '>' ? 1 : -1) + u,
            )
          : value) +
        (o2
          ? ') and (' +
            ((o2[0] === '>' ? 'min-' : 'max-') +
              name +
              ':' +
              (o2.length === 1
                ? p3.replace(
                    mqunit,
                    (_, v, u) => Number(v) + shift * (o2 === '>' ? -1 : 1) + u,
                  )
                : p3))
          : '') +
        ')'
      )
    },
  )
