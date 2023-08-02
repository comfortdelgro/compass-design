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
        onCloseClick={() => {
          console.log('Close button click')
        }}
      >
        Close button
      </Chip>
      <h3>Errored Chip</h3>
      <Chip hasCloseButton isErrored>
        Errored Chip
      </Chip>
    </Column>
  )
}
