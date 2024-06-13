import React, {
  Children,
  ElementType,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from 'react'

const processChildren = (children: ReactNode) => {
  if (!isValidElement(children)) {
    return children
  }

  const isFragment =
    children.type.toString() === Symbol.for('react.fragment').toString()

  if (isFragment) {
    return (children.props as PropsWithChildren<unknown>)?.children || children
  }

  return children
}

export const drawerPickChild = (
  children: ReactNode,
  targetType: ElementType,
): {child: ReactNode | undefined; rest: ReactNode} => {
  const matched: ReactNode[] = []

  const rest = Children.map(processChildren(children), (item) => {
    if (!isValidElement(item)) {
      return item
    }

    if (item.type === targetType) {
      matched.push(React.cloneElement(item, item.props))
      return null
    }
    return React.cloneElement(item, item.props)
  })
  const child = matched.length >= 0 ? matched[0] : undefined

  return {
    child: child,
    rest: rest as unknown as ReactElement,
  }
}
