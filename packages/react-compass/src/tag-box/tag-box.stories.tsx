import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import type {Meta} from '@storybook/react'
import React from 'react'
import Button from '../button'
import Icon from '../icon'
import TagBox from './index'

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

export const TagBoxs: React.FC = () => {
  const [list, setList] = React.useState<Item[]>(items)

  const removeItem = (id: string | number) => onRemove(id, setList)

  const addItem = (value: string) => onAdd(value, setList)

  const editItem = (id: string | number, value: string) =>
    onEdit(id, value, setList)

  return (
    <div>
      <h3>Fully Functional</h3>
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
      <h3>Typeable</h3>
      <TagBox
        label='Text Label'
        items={list}
        typeable
        collaspable
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
      <h3>Error</h3>
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
      <h3>Positioned Label</h3>
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
      <h3>No Action</h3>
      <TagBox
        label='Text Label'
        items={list}
        onAdd={addItem}
        onEdit={editItem}
        onRemove={removeItem}
        helperText='Helper text'
      />
      <h3>No Helper text and Action</h3>
      <TagBox
        label='Text Label'
        items={list}
        onAdd={addItem}
        onEdit={editItem}
        onRemove={removeItem}
      />
    </div>
  )
}

export const Collaspable: React.FC = () => {
  const [list, setList] = React.useState<Item[]>(items)

  const removeItem = (id: string | number) => onRemove(id, setList)

  const addItem = (value: string) => onAdd(value, setList)

  const editItem = (id: string | number, value: string) =>
    onEdit(id, value, setList)

  return (
    <div>
      <h3>Fully Functional</h3>
      <TagBox
        label='Text Label'
        collaspable
        isRequired
        items={list}
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
      <h3>Typeable</h3>
      <TagBox
        label='Text Label'
        collaspable
        typeable
        items={list}
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
      <h3>Error</h3>
      <TagBox
        label='Text Label'
        collaspable
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
      <h3>Positioned Label</h3>
      <TagBox
        collaspable
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
      <h3>No Action</h3>
      <TagBox
        label='Text Label'
        collaspable
        items={list}
        onAdd={addItem}
        onEdit={editItem}
        onRemove={removeItem}
        helperText='Helper text'
      />
      <h3>No Helper text and Action</h3>
      <TagBox
        collaspable
        label='Text Label'
        items={list}
        onAdd={addItem}
        onEdit={editItem}
        onRemove={removeItem}
      />
    </div>
  )
}

const meta = {
  title: 'Example/Tag Box',
  component: TagBoxs,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TagBoxs>

export default meta
