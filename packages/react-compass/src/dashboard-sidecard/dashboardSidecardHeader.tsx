import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/dashboardSidecard.module.css'

interface Props {
  children?: React.ReactNode
  css?: unknown
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
      <div ref={ref} className={`${styles.header}`} {...htmlProps}>
        {children}
      </div>
    </CssInjection>
  )
})

export default DashboardSidecardHeader
