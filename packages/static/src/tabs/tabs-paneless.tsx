import React, { Key } from 'react'
import TabItem from './item'
import Tabs, { TabsProps } from './tabs'
interface ItemProps {
  children?: React.ReactNode
  key: Key
  title: string
}

type TProps = Omit<TabsProps, keyof ItemProps>

interface Props extends TProps {
  items: ItemProps[]
}

export type TabsPanelessProps = Props

const TabsPaneless = React.forwardRef<HTMLDivElement, TabsPanelessProps>(
  (props, ref) => {
    const {
      items = [],
      ...htmlProps
    } = props
    return (
      <Tabs ref={ref} {...htmlProps} hidePanel>
        {[...items].map((item) => (
          <TabItem key={item.key} title={item.title}>
            {item.key}
          </TabItem>
        ))}
      </Tabs>
    )
  },
)

export default TabsPaneless
