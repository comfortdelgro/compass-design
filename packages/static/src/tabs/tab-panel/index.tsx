import React, {HTMLAttributes} from 'react'
import {useDOMRef} from '../../utils/use-dom-ref'
import {TabItemProps} from '../item'

interface Props {
  selectedItem:
    | React.DetailedReactHTMLElement<TabItemProps, HTMLElement>
    | undefined
}

type TabPanelProps = Props & Omit<HTMLAttributes<HTMLDivElement>, keyof Props>

const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  ({selectedItem, 'aria-labelledby': ariaLabelledBy}, ref) => {
    const tabPanelRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <div
        ref={tabPanelRef}
        aria-labelledby={ariaLabelledBy}
        className='tab-panel-wrapper'
        role='tabpanel'
      >
        {selectedItem?.props.children}
      </div>
    )
  },
)

export default TabPanel
