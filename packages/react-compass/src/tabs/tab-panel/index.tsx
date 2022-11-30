import {AriaTabPanelProps, useTabPanel} from '@react-aria/tabs'
import {TabListState} from '@react-stately/tabs'
import React, {useMemo} from 'react'
import {useDOMRef} from '../../utils/use-dom-ref'

interface TabPanelProps extends AriaTabPanelProps {
  state: TabListState<object>
}

const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  ({state, ...props}, ref) => {
    const tabPanelRef = useDOMRef<HTMLDivElement>(ref)
    const {tabPanelProps} = useTabPanel(props, state, tabPanelRef)

    const children = useMemo(() => {
      const item: React.ReactElement<{children: React.ReactChild}> =
        React.cloneElement(
          state.selectedItem as React.ReactElement<{
            children: React.ReactChild
          }>,
          {},
        )
      return item
    }, [])

    return (
      <div {...tabPanelProps} ref={tabPanelRef} className='tab-panel-wrapper'>
        {children.props.children}
      </div>
    )
  },
)

export default TabPanel
