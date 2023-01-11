import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import DashboardSidecardContent from './dashboardSidecardContent'
import DashboardSidecardHeader from './dashboardSidecardHeader'

import {
  DashboardSidecardVariantProps,
  StyledDashboardSidecardContainer,
} from './dashboardSidecard.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type DashboardSidecardProps = Props &
  DashboardSidecardVariantProps &
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
    ...delegated
  } = props

  const dashboardSidecardRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <StyledDashboardSidecardContainer
      css={css}
      ref={dashboardSidecardRef}
      {...delegated}
    >
      {children}
    </StyledDashboardSidecardContainer>
  )
})

export default DashboardSidecard as typeof DashboardSidecard & {
  Header: typeof DashboardSidecardHeader
  Content: typeof DashboardSidecardContent
}
