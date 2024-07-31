import {
  Children,
  cloneElement,
  isValidElement,
  type ComponentPropsWithoutRef,
  type ElementType,
  type HTMLAttributes,
  type PropsWithChildren,
  type ReactElement,
  type ReactNode,
} from 'react'
import {classNames} from '../utils/string'

type CustomStyles = {[key: string]: string | number | undefined | null}
type UpdateStyleOptions = {
  /** @default false */
  ignoreNilValue?: boolean
  /**
   * Cache the original styles.
   * Only cache value of provided properties that have been updated (depending on `ignoreNilValue` option).
   * ___
   * If set to `once`, it won't override existing cached styles.
   * @default false
   */
  cache?: boolean | 'once'
}

const styleCached = new WeakMap<HTMLElement, CustomStyles>()

export function updateElementStyles(
  element: Element | HTMLElement | null,
  /** CSS property name should be a kebab-case string (eg: `border-radius`) */
  styles: CustomStyles,
  options: UpdateStyleOptions = {cache: false},
) {
  if (!element || !(element instanceof HTMLElement)) {
    return
  }

  const originalStyles: CustomStyles = {}
  Object.entries(styles).forEach(([key, value]) => {
    if (options.ignoreNilValue && (value === undefined || value === null)) {
      return
    }

    originalStyles[key] = element.style.getPropertyValue(key)
    element.style.setProperty(key, (value as string) ?? null)
  })

  if (!options.cache) {
    return
  }

  if (options.cache === 'once' && styleCached.has(element)) {
    return
  }

  styleCached.set(element, originalStyles)
}

/**
 * Reset the element's styles.
 *
 * Depending on provided `properties`, if the original styles have been cached,
 * it will restore the original styles, otherwise, it will remove the current styles.
 */
export function resetElementStyles(
  element: Element | HTMLElement | null,
  /**
   * Property name should be a kebab-case string.
   * ___
   * If not provided, it will reset only properties that have been updated and cached by `updateElementStyles` before.
   */
  properties?: string[],
) {
  if (!element || !(element instanceof HTMLElement)) {
    return
  }

  const originalStyles = styleCached.get(element)
  if (!properties) {
    // reset all properties that have been updated before.
    if (originalStyles) {
      updateElementStyles(element, originalStyles)
      styleCached.delete(element)
    }
    return
  }

  for (const property of properties) {
    element.style.setProperty(
      property,
      (originalStyles?.[property] as string) ?? null,
    )
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

export const dragDeceleration = (velocity: number) =>
  8 * (Math.log(Math.abs(velocity) + 1) - 2)
