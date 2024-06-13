import React from 'react'

export const pickChild = (
  children: React.ReactNode | undefined,
  targetType: React.ElementType,
) => {
  const matched: React.ReactNode[] = []
  const rest = React.Children.map(children, (item) => {
    if (!React.isValidElement(item)) return item
    if (item.type === targetType) {
      matched.push(React.cloneElement(item, item.props))
      return null
    }
    return React.cloneElement(item, item.props)
  })
  const child = matched.length >= 0 ? matched[0] : undefined

  return {
    child: child,
    rest: rest as unknown as React.ReactElement,
  }
}
