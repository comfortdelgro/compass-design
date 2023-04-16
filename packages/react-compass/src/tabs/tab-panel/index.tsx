import React from 'react'
import {useDOMRef} from '../../utils/use-dom-ref'
import {TabItemProps} from '../item'

interface TabPanelProps {
  selectedItem:
    | React.DetailedReactHTMLElement<TabItemProps, HTMLElement>
    | undefined
}

const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  ({selectedItem}, ref) => {
    const tabPanelRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <div ref={tabPanelRef} className='tab-panel-wrapper'>
        {selectedItem?.props.children}
      </div>
    )
  },
)

export default TabPanel
