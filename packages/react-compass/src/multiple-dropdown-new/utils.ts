import {MultipleDropdownItemProps} from '../multiple-dropdown'

/**
 * Get text in Element
 * @param elem React.ReactElement
 * @returns string
 */
export function textContent(
  elem: React.ReactElement<MultipleDropdownItemProps> | string,
): string {
  if (!elem) {
    return ''
  }
  if (typeof elem === 'string') {
    return elem
  }

  const children = elem.props.children
  if (children instanceof Array) {
    return children.map(textContent).join(' ')
  }
  return textContent(children as React.ReactElement<MultipleDropdownItemProps>)
}
