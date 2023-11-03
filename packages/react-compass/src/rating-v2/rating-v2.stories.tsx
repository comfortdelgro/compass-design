import React from 'react'
import {Column} from '../utils/components'
import {
  FaceFrown,
  FaceMeh,
  FaceSadTear,
  FaceSmile,
  FaceSmileHeart,
} from './constants'
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
              icon: FaceSadTear('black'),
              filledIcon: FaceSadTear('red'),
            },
            {
              isFilled: false,
              value: 2,
              icon: FaceFrown('black'),
              filledIcon: FaceFrown('red'),
            },
            {
              isFilled: false,
              value: 3,
              icon: FaceMeh('black'),
              filledIcon: FaceMeh('yellow'),
            },
            {
              isFilled: false,
              value: 4,
              icon: FaceSmile('black'),
              filledIcon: FaceSmile('green'),
            },
            {
              isFilled: false,
              value: 5,
              icon: FaceSmileHeart('black'),
              filledIcon: FaceSmileHeart('green'),
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
