import {AriaTabPanelProps, useTabPanel} from '@react-aria/tabs'
import {TabListState} from '@react-stately/tabs'
import React from 'react'
import {useDOMRef} from '../../utils/use-dom-ref'

interface TabPanelProps extends AriaTabPanelProps {
  state: TabListState<object>
}

const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  ({state, ...props}, ref) => {
    const tabPanelRef = useDOMRef<HTMLDivElement>(ref)
    const {tabPanelProps} = useTabPanel(props, state, tabPanelRef)

    const children: React.ReactElement<{children: React.ReactChild}> =
      React.cloneElement(
        state.selectedItem as React.ReactElement<{
          children: React.ReactChild
        }>,
        {},
      )

    return (
      <div {...tabPanelProps} ref={tabPanelRef} className='tab-panel-wrapper'>
        {children.props.children}
      </div>
    )
  },
)

export default TabPanel
