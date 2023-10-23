import React, {Key} from 'react'
import TabItem from './item'
import Tabs, {TabsProps} from './tabs'
interface ItemProps {
  key: Key
  title: string
}

type TProps = Omit<TabsProps, 'children'>

interface Props extends TProps {
  items: ItemProps[]
}

export type TabsPanelessProps = Props

const TabsPaneless = React.forwardRef<HTMLDivElement, TabsPanelessProps>(
  (props, ref) => {
    return (
      <Tabs ref={ref} {...props} hidePanel>
        {[...props.items].map((item) => (
          <TabItem key={item.key} title={item.title}>
            {item.key}
          </TabItem>
        ))}
      </Tabs>
    )
  },
)

export default TabsPaneless
