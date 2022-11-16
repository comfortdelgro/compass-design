import React, {useContext} from 'react'
import type {StyledComponentProps} from '../../utils/stitches.types'
import {TabContext} from '../tab'

interface Props extends StyledComponentProps {
  className?: string
  children: React.ReactNode
  value: string | number
}

export type TabPanelProps = Props

const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  (props, ref) => {
    const {children, value, ...ariaSafeProps} = props
    const context = useContext(TabContext)

    if (context?.selectedTab === value)
      return (
        <div ref={ref} {...ariaSafeProps}>
          {children}
        </div>
      )
    return null
  },
)

export default TabPanel
