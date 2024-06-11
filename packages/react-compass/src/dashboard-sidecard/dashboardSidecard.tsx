import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import DashboardSidecardContent from './dashboardSidecardContent'
import DashboardSidecardHeader from './dashboardSidecardHeader'
import styles from './styles/dashboardSidecard.module.css'

interface Props {
  children?: React.ReactNode
  css?: CSS
}

export type DashboardSidecardProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DashboardSidecard = React.forwardRef<
  HTMLDivElement,
  DashboardSidecardProps
>((props, ref) => {
  const {
    children,
    // StyledComponentProps
    css = {},
    // VariantProps
    // HTMLDiv Props
    ...htmlProps
  } = props

  const dashboardSidecardRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <CssInjection css={css}>
      <div
        {...htmlProps}
        ref={dashboardSidecardRef}
        className={classNames(styles.container, 'cdg-dashboard-sidecard')}
      >
        {children}
      </div>
    </CssInjection>
  )
}) as typeof DashboardSidecard & {
  Header: typeof DashboardSidecardHeader
  Content: typeof DashboardSidecardContent
}

export default DashboardSidecard
