import {
  Button,
  Column,
  Icon,
  TagBox,
  Typography,
} from '@comfortdelgro/react-compass'
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const items = [
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
]

type Item = {
  id: string | number
  value: string
  icon?: React.ReactNode
  isDisabled?: boolean
  isError?: boolean
}

const onRemove = (
  id: string | number,
  setState: React.Dispatch<React.SetStateAction<Item[]>>,
) => setState((l) => l.filter((item) => item.id !== id))

const onAdd = (
  value: string,
  setState: React.Dispatch<React.SetStateAction<Item[]>>,
) =>
  setState((l) => [
    ...l,
    {
      id: `cdg-id-${Math.random().toString(36).substring(2)}`,
      value: value,
    },
  ])

const onEdit = (
  id: string | number,
  value: string,
  setState: React.Dispatch<React.SetStateAction<Item[]>>,
) =>
  setState((l) => {
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

const TagBoxs: React.FC = () => {
  const [list, setList] = React.useState<Item[]>(items)

  const removeItem = (id: string | number) => onRemove(id, setList)

  const addItem = (value: string) => onAdd(value, setList)

  const editItem = (id: string | number, value: string) =>
    onEdit(id, value, setList)

  return (
    <Column>
      <Typography.Label>Fully Functional</Typography.Label>
      <TagBox
        label='Text Label'
        items={list}
        icon={<Icon icon={faExclamationTriangle} />}
        isRequired
        onAdd={addItem}
        onEdit={editItem}
        onRemove={removeItem}
        helperText='Helper text'
      >
        <TagBox.Action>
          <Button>Call to action</Button>
        </TagBox.Action>
      </TagBox>
      <Typography.Label>Typeable</Typography.Label>
      <TagBox
        label='Text Label'
        items={list}
        typeable
        icon={<Icon icon={faExclamationTriangle} />}
        onAdd={addItem}
        onEdit={editItem}
        onRemove={removeItem}
        helperText='Helper text'
      >
        <TagBox.Action>
          <Button>Call to action</Button>
        </TagBox.Action>
      </TagBox>
      <Typography.Label>Error</Typography.Label>
      <TagBox
        label='Text Label'
        items={list}
        icon={<Icon icon={faExclamationTriangle} />}
        onAdd={addItem}
        onEdit={editItem}
        onRemove={removeItem}
        isErrored
        errorMessage='Error Message'
        helperText='Helper text'
      >
        <TagBox.Action>
          <Button>Call to action</Button>
        </TagBox.Action>
      </TagBox>
      <Typography.Label>Positioned Label</Typography.Label>
      <TagBox
        items={list}
        onAdd={addItem}
        onEdit={editItem}
        onRemove={removeItem}
        labelPosition='left'
        label='Text Label'
        helperText='Helper text'
      >
        <TagBox.Action>
          <Button>Call to action</Button>
        </TagBox.Action>
      </TagBox>
      <Typography.Label>No Action</Typography.Label>
      <TagBox
        label='Text Label'
        items={list}
        onAdd={addItem}
        onEdit={editItem}
        onRemove={removeItem}
        helperText='Helper text'
      />
      <Typography.Label>No Helper text and Action</Typography.Label>
      <TagBox
        label='Text Label'
        items={list}
        onAdd={addItem}
        onEdit={editItem}
        onRemove={removeItem}
      />
    </Column>
  )
}

export default TagBoxs
