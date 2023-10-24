import Body from './body'
import Display from './display'
import Header from './header'
import Label from './label'
import Link from './link'

interface ComposableChart {
  Body: typeof Body
  Display: typeof Display
  Header: typeof Header
  Label: typeof Label
  Link: typeof Link
}

const Typography: ComposableChart = {
  Body: Body,
  Display: Display,
  Header: Header,
  Label: Label,
  Link: Link,
}

Typography.Body.displayName = 'Typography.Body'
Typography.Display.displayName = 'Typography.Display'
Typography.Header.displayName = 'Typography.Header'
Typography.Label.displayName = 'Typography.Label'
Typography.Link.displayName = 'Typography.Link'

export default Typography
