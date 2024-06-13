import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import styles from './styles/dashboardSidecard.module.css'
import { classNames } from '../utils/string'

interface Props {
  children?: React.ReactNode
  css?: CSS
}

export type DashboardSidecardHeaderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DashboardSidecardHeader = React.forwardRef<
  HTMLDivElement,
  DashboardSidecardHeaderProps
>((props, ref) => {
  const {children, css = {}, ...htmlProps} = props

  return (
    <CssInjection css={css}>
      <div
        {...htmlProps}
        ref={ref}
        className={classNames(styles.header, 'cdg-dashboard-sidecard-header')}
      >
        {children}
      </div>
    </CssInjection>
  )
})

export default DashboardSidecardHeader
