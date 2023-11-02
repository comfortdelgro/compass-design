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
        <RatingComponent currentRating={3} />
      </Column>
      <Column>
        <h3>Read-only Rating Component</h3>
        <RatingComponent currentRating={3} readOnly />
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
      <Column>
        <h3>Custom rating</h3>
        <RatingComponent
          renderStarList={[
            {
              isFilled: false,
              value: 1,
              icon: <div>Empty 1</div>,
              filledIcon: <div>Filled 1</div>,
            },
            {
              isFilled: false,
              value: 2,
              icon: <div>Empty 2</div>,
              filledIcon: <div>Filled 2</div>,
            },
            {
              isFilled: false,
              value: 3,
              icon: <div>Empty 3</div>,
              filledIcon: <div>Filled 3</div>,
            },
            {
              isFilled: false,
              value: 4,
              icon: <div>Empty 4</div>,
              filledIcon: <div>Filled 4</div>,
            },
            {
              isFilled: false,
              value: 5,
              icon: <div>Empty 5</div>,
              filledIcon: <div>Filled 5</div>,
            },
          ]}
          onChange={(value) => {
            console.log('Star rating changed to:', value)
          }}
        />
      </Column>
    </>
  )
}
