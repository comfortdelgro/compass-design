import React from 'react'
import {Column} from '../utils/components'
import RatingComponent from './rating-v2'

export const Default: React.FC = () => {
  return (
    <>
      <Column>
        <h3>Default Rating Component</h3>
        <RatingComponent
          onChange={(value) => {
            console.log(value)
          }}
        />
      </Column>
      <Column>
        <h3>Controlled Rating Component</h3>
        <RatingComponent />
      </Column>
      <Column>
        <h3>Read-only Rating Component</h3>
        <RatingComponent readOnly />
      </Column>
      <Column>
        <h3>Disabled Rating Component</h3>
        <RatingComponent disabled />
      </Column>
      <Column>
        <h3>Config Limited rating</h3>
        <RatingComponent
          maxRating={8}
          onChange={(value) => {
            console.log(value)
          }}
        />
      </Column>
      {/* <Column>
        <h3>Custom rating</h3>
        <RatingComponent
          onChange={(value) => {
            console.log(value)
          }}
          renderStar={() => {

          }}
        />
      </Column> */}
    </>
  )
}
