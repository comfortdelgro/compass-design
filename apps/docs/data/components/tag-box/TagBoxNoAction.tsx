import {Icon, TagBox} from '@comfortdelgro/react-compass'
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

const TagBoxs: React.FC = () => {
  return <TagBox label='Text Label' items={items} helperText='Helper text' />
}

export default TagBoxs
