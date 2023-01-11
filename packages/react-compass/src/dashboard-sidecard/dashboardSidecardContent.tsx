import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledDashboardContent} from './dashboardSidecard.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type DashboardSidecardContentProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DashboardSidecardContent = React.forwardRef<
  HTMLDivElement,
  DashboardSidecardContentProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props

  return (
    <StyledDashboardContent css={css} ref={ref} {...delegated}>
      {children}
    </StyledDashboardContent>
  )
})

export default DashboardSidecardContent
