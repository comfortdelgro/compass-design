import React from 'react'
import {Column} from '../utils/components'
import VideoPlayer from './index'

export const Default: React.FC = () => {
  const src = 'http://techslidesghjghjghj.com/demos/sample-videos/small.webm'

  return (
    <Column>
      <h3>Video Player with default</h3>
      <VideoPlayer src={src} />
      <h3>Video Player with poster</h3>
      <VideoPlayer
        src={src}
        poster='http://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg'
      />
    </Column>
  )
}
