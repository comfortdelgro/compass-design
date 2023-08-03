import React from 'react'
import {Column} from '../utils/components'
import Skeleton from './index'

export const Variants: React.FC = () => (
  <Column>
    <h3>Text</h3>
    <Skeleton variant='text' />
    <h3>Circular</h3>
    <Skeleton variant='circular' width={40} height={40} />
    <h3>Rectangular</h3>
    <Skeleton variant='rectangular' width={210} height={60} />
    <h3>Rounded</h3>
    <Skeleton variant='rounded' width={210} height={60} />
    <h3>Children Shape</h3>
    <Skeleton variant='rectangular'>
      <div style={{width: 210, height: 120}} />
    </Skeleton>
  </Column>
)

export const Animations: React.FC = () => (
  <Column>
    <h3>Pulse</h3>
    <Skeleton />
    <h3>Wave</h3>
    <Skeleton animation='wave' />
    <h3>False</h3>
    <Skeleton animation={false} />
  </Column>
)
