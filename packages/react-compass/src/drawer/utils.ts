import {
  Children,
  HTMLAttributes,
  cloneElement,
  isValidElement,
  type CSSProperties,
  type ComponentPropsWithoutRef,
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
  T extends ElementType = ElementType,
  P extends HTMLAttributes<HTMLElement> = ComponentPropsWithoutRef<T>,
>(
  children: ReactNode,
  targetType: T,
  customProps?: ComponentPropsWithoutRef<T>,
): {matchedNode?: ReactElement<P>; rest: ReactNode} => {
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
    matchedNode: matched.length > 0 ? matched[0] : undefined,
    rest,
  }
}

function testUAPlatform(re: RegExp): boolean | undefined {
  if (typeof window === 'undefined' || !window.navigator) {
    return undefined
  }

  /**
   * Docs & type declaration:
   * https://wicg.github.io/ua-client-hints/#navigatoruadata
   * https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData/platform
   */
  const platform: string =
    // @ts-expect-error: TS doesn't ship with type declarations for the experimental navigator.userAgentData property.
    window.navigator.userAgentData?.platform || window.navigator.platform
  return re.test(platform)
}

export const isIOS = (): boolean | undefined =>
  testUAPlatform(/^iPhone|^iPad/) ||
  (testUAPlatform(/^Mac/) && navigator.maxTouchPoints > 1) // iPadOS 13 lies and says it's a Mac, we can distinguish by detecting touch support.
