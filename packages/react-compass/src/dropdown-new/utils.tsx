export function textContent(elem: React.ReactElement | string): string {
  if (!elem) {
    return ''
  }
  if (typeof elem === 'string') {
    return elem
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const children = elem.props && elem.props.children
  if (children instanceof Array) {
    return children.map(textContent).join(' ')
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return textContent(children)
}
