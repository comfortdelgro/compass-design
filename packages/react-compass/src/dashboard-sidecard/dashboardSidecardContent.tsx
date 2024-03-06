import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/dashboardSidecard.module.css'

interface Props {
  children?: React.ReactNode
  css?: unknown
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
        className={`${styles.content} cdg-dashboard-sidecard-content`}
        {...htmlProps}
      >
        {children}
      </div>
    </CssInjection>
  )
})

export default DashboardSidecardContent
