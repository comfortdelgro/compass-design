import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledDashboardHeader} from './dashboardSidecard.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type DashboardSidecardHeaderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DashboardSidecardHeader = React.forwardRef<
  HTMLDivElement,
  DashboardSidecardHeaderProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props

  return (
    <StyledDashboardHeader css={css} ref={ref} {...delegated}>
      {children}
    </StyledDashboardHeader>
  )
})

export default DashboardSidecardHeader
