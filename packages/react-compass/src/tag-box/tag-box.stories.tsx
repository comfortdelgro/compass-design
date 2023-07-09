import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Button from '../button'
import Icon from '../icon'
import {Column} from '../utils/components'
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

export const TagBoxs: React.FC = () => (
  <Column>
    <h3>Fully Functional</h3>
    <TagBox
      label='Text Label'
      items={items}
      icon={<Icon icon={faExclamationTriangle} />}
      isRequired
      onRemove={(e) => console.log(e)}
      onEdit={(i, v) => console.log(i, v)}
      helperText='Helper text'
    >
      <TagBox.Action>
        <Button>Call to action</Button>
      </TagBox.Action>
    </TagBox>
    <h3>Typeable</h3>
    <TagBox
      label='Text Label'
      items={items}
      typeable
      icon={<Icon icon={faExclamationTriangle} />}
      onAdd={(e) => console.log(e)}
      onRemove={(e) => console.log(e)}
      onEdit={(i, v) => console.log(i, v)}
      helperText='Helper text'
    >
      <TagBox.Action>
        <Button>Call to action</Button>
      </TagBox.Action>
    </TagBox>
    <h3>Error</h3>
    <TagBox
      label='Text Label'
      items={items}
      icon={<Icon icon={faExclamationTriangle} />}
      onRemove={(e) => console.log(e)}
      onEdit={(i, v) => console.log(i, v)}
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
      items={items}
      onRemove={(e) => console.log(e)}
      onEdit={(i, v) => console.log(i, v)}
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
      items={items}
      onRemove={(e) => console.log(e)}
      helperText='Helper text'
    />
    <h3>No Helper text and Action</h3>
    <TagBox label='Text Label' items={items} onRemove={(e) => console.log(e)} />
  </Column>
)

export const Collaspable: React.FC = () => (
  <Column>
    <h3>Fully Functional</h3>
    <TagBox
      label='Text Label'
      collaspable
      isRequired
      items={items}
      icon={<Icon icon={faExclamationTriangle} />}
      onRemove={(e) => console.log(e)}
      onEdit={(i, v) => console.log(i, v)}
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
      items={items}
      icon={<Icon icon={faExclamationTriangle} />}
      onAdd={(e) => console.log(e)}
      onRemove={(e) => console.log(e)}
      onEdit={(i, v) => console.log(i, v)}
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
      items={items}
      icon={<Icon icon={faExclamationTriangle} />}
      onRemove={(e) => console.log(e)}
      onEdit={(i, v) => console.log(i, v)}
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
      items={items}
      collaspable
      onRemove={(e) => console.log(e)}
      onEdit={(i, v) => console.log(i, v)}
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
      items={items}
      onRemove={(e) => console.log(e)}
      onEdit={(i, v) => console.log(i, v)}
      helperText='Helper text'
    />
    <h3>No Helper text and Action</h3>
    <TagBox
      collaspable
      label='Text Label'
      items={items}
      onRemove={(e) => console.log(e)}
    />
  </Column>
)
