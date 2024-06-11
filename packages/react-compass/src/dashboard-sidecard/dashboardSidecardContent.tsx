import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/dashboardSidecard.module.css'

interface Props {
  children?: React.ReactNode
  css?: CSS
}

export type DashboardSidecardContentProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DashboardSidecardContent = React.forwardRef<
  HTMLDivElement,
  DashboardSidecardContentProps
>((props, ref) => {
  const {children, css = {}, ...htmlProps} = props

  return (
    <CssInjection css={css}>
      <div
        ref={ref}
        {...htmlProps}
        className={classNames(styles.content, 'cdg-dashboard-sidecard-content')}
      >
        {children}
      </div>
    </CssInjection>
  )
})

export default DashboardSidecardContent
