import React from 'react'
import {Column} from '../utils/components'
import RatingComponent from './rating'

export const Default: React.FC = () => {
  return (
    <Column>
      <h3>Default Rating Component</h3>
      <RatingComponent />
    </Column>
  )
}
export const UsingIcons: React.FC = () => {
  return (
    <Column>
      <h3>Rating Component with icons</h3>
      <RatingComponent useIcons />
    </Column>
  )
}
