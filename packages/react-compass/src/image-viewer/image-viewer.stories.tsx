import React from 'react'
import Button from '../button'
import {Column} from '../utils/components'
import Viewer from './Viewer'

export const Default: React.FC = () => {
  const [visible, setVisible] = React.useState(false)
  return (
    <Column>
      <h3>Default </h3>
      <Button onClick={() => setVisible(true)}>Open</Button>
      <Viewer
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        images={[
          {
            src: 'https://cdn.arstechnica.net/wp-content/uploads/2020/09/macOSBigSur.jpg',
            alt: 'image 1',
          },
          {
            src: 'https://images.hdqwalls.com/wallpapers/iridescence-big-sur-dt.jpg',
            alt: 'image 2',
          },
          {
            src: 'https://wallpapers.com/images/hd/macos-big-sur-layers-0vz216diu4sn9qaq.jpg',
            alt: 'image 2',
          },
          {
            src: 'https://rare-gallery.com/mocahbig/429176-abstract-gradient-Big-Sur-macOS-macOS-Big-Sur-shapes.jpg',
            alt: 'image 2',
          },
        ]}
      />
    </Column>
  )
}
