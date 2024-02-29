type DrawerType = 'drawer' | 'bottomSheet'

interface Props {
  type?: DrawerType
  children?: React.ReactNode
  header?: React.ReactChild
  fixedContent?: React.ReactChild
  className?: string
  fullscreen?: boolean
  expanded?: boolean
  pullDownToClose?: boolean
  visibleHeight?: number
  drawerScroll?: (event: React.UIEvent<HTMLDivElement>) => void
  onCollapsed: () => void
  onExpanded: () => void
  onReachBottom?: () => void
}

export type NaturalDrawerProps = Props &
  Omit<
    React.HTMLAttributes<HTMLDivElement>,
    keyof Props | 'tabIndex' | 'autoFocus'
  >
