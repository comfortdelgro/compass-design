import {
  Children,
  HTMLAttributes,
  cloneElement,
  isValidElement,
  type CSSProperties,
  type ElementType,
  type PropsWithChildren,
  type ReactElement,
  type ReactNode,
} from 'react'
import {classNames} from '../utils/string'

export function updateElementStyles(
  element: HTMLElement,
  styles: CSSProperties & {[key: string]: string | number | undefined},
) {
  for (const [key, value] of Object.entries(styles)) {
    if (!value) {
      continue
    }
    element.style.setProperty(key, value as string)
  }
}

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

export const drawerPickChild = <
  P extends HTMLAttributes<HTMLElement> = HTMLAttributes<HTMLElement>,
>(
  children: ReactNode,
  targetType: ElementType,
  customProps?: P,
): {child?: ReactElement<P>; rest: ReactNode} => {
  const matched: ReactElement[] = []

  const rest = Children.map(processChildren(children), (item) => {
    if (!isValidElement(item) || item.type !== targetType) {
      return item
    }

    if (!customProps) {
      matched.push(cloneElement(item, item.props))
      return null
    }

    matched.push(
      cloneElement(item, {
        ...item.props,
        ...customProps,
        className: classNames(
          item.props?.className ?? '',
          customProps?.className ?? '',
        ),
        style: item.props.style ?? customProps.style,
      }),
    )
    return null
  })

  return {
    child: matched.length > 0 ? matched[0] : undefined,
    rest,
  }
}
