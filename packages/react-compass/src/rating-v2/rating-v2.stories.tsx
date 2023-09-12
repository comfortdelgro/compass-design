import React from 'react'
import {Column} from '../utils/components'
import RatingComponent from './rating-v2'

export const Default: React.FC = () => {
  return (
    <>
      <Column>
        <h3>Default Rating Component</h3>
        <RatingComponent />
      </Column>
      <Column>
        <h3>Controlled Rating Component</h3>
        <RatingComponent value={2} />
      </Column>
      <Column>
        <h3>Read-only Rating Component</h3>
        <RatingComponent value={1} readOnly />
      </Column>
      <Column>
        <h3>Disabled Rating Component</h3>
        <RatingComponent disabled />
      </Column>
    </>
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
