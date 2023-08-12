import React from 'react'
import {Column} from '../utils/components'
import Chip from './index'

export const Default: React.FC = () => {
  return (
    <Column>
      <h3>Basic Chip</h3>
      <Chip>Basic Chip</Chip>
      <h3>Close button</h3>
      <Chip
        hasCloseButton
        onClose={() => {
          console.log('Close button click')
        }}
      >
        Close button
      </Chip>
      <h3>Errored Chip</h3>
      <Chip hasCloseButton isErrored>
        Errored Chip
      </Chip>
      <h3>Custom Styling</h3>
      <Chip
        hasCloseButton
        css={{
          color: 'purple',
          border: '1px solid purple',
          '& .cdg-chip-close-icon': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& svg': {
              height: '2rem',
              width: '2rem',
            },
          },
        }}
      >
        Close button
      </Chip>
    </Column>
  )
}
