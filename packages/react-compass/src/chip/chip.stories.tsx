import React from 'react'
import {Column} from '../utils/components'
import Chip from './index'

export const Default: React.FC = () => {
  return (
    <Column>
      <h3>Chip</h3>
      <Chip
        hasCloseButton
        onCloseClick={() => {
          console.log('Close button click')
        }}
      >
        Option 2
      </Chip>
    </Column>
  )
}
