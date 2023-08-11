import {Button, TagBox, TagBoxProps} from '@comfortdelgro/react-compass'
import Icon from '@comfortdelgro/react-compass/icon'
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

type Item = {
  id: string | number
  value: string
  icon?: React.ReactNode
  isDisabled?: boolean
  isError?: boolean
}

export function TabBoxComponent(props: TagBoxProps) {
  const [list, setList] = React.useState<Item[]>([
    {
      id: `cdg-id-${Math.random().toString(36).substring(2)}`,
      value: 'Item 1',
      icon: <Icon icon={faExclamationTriangle} />,
    },
    {
      id: `cdg-id-${Math.random().toString(36).substring(2)}`,
      value: 'Item 2',
      isDisabled: true,
    },
    {
      id: `cdg-id-${Math.random().toString(36).substring(2)}`,
      value: 'Item 3',
      icon: <Icon icon={faExclamationTriangle} />,
    },
    {
      id: `cdg-id-${Math.random().toString(36).substring(2)}`,
      value: 'Item 4',
      isDisabled: true,
    },
    {
      id: `cdg-id-${Math.random().toString(36).substring(2)}`,
      value: 'Item 5',
      icon: <Icon icon={faExclamationTriangle} />,
      isError: true,
    },
    {
      id: `cdg-id-${Math.random().toString(36).substring(2)}`,
      value: 'Item 6',
      isDisabled: true,
    },
    {
      id: `cdg-id-${Math.random().toString(36).substring(2)}`,
      value: 'Item 7',
      icon: <Icon icon={faExclamationTriangle} />,
    },
    {
      id: `cdg-id-${Math.random().toString(36).substring(2)}`,
      value: 'Item 8',
      isDisabled: true,
    },
    {
      id: `cdg-id-${Math.random().toString(36).substring(2)}`,
      value: 'Item 9',
      icon: <Icon icon={faExclamationTriangle} />,
    },
    {
      id: `cdg-id-${Math.random().toString(36).substring(2)}`,
      value: 'Item 10',
      isDisabled: true,
    },
  ])

  const removeItem = (id: string | number) =>
    setList((l) => l.filter((item) => item.id !== id))

  const addItem = (value: string) =>
    setList((l) => [
      ...l,
      {
        id: `cdg-id-${Math.random().toString(36).substring(2)}`,
        value: value,
      },
    ])

  const editItem = (id: string | number, value: string) =>
    setList((l) => {
      const items = [...l]
      items.forEach((item, index) => {
        if (item.id === id) {
          const item = {...items[index]} as Item
          item.value = value
          items[index] = item
        }
      })
      return items
    })

  return (
    <TagBox
      {...props}
      items={list}
      onAdd={addItem}
      onEdit={editItem}
      onRemove={removeItem}
    >
      <TagBox.Action>
        <Button className='c-hKssGC-hYGuEl-variant-primary'>
          Call to action
        </Button>
      </TagBox.Action>
    </TagBox>
  )
}
