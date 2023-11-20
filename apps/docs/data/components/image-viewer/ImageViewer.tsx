// ImageViewer.tsx
import Button from '@comfortdelgro/react-compass-old/button'
import ImageViewer from '@comfortdelgro/react-compass-old/image-viewer'
import React from 'react'

const images = Array.from(Array(8).keys()).map((index) => {
  return {
    src: `https://picsum.photos/id/${index + 1}/5000/3333`,
    alt: `Image ${index + 1}`,
    srcPreview: `https://picsum.photos/id/${index + 1}/60/50`,
  }
})

const ImageViewerDemo: React.FC = () => {
  const [visible, setVisible] = React.useState(false)
  return (
    <>
      <Button variant='primary' onClick={() => setVisible(true)}>
        Open image viewer
      </Button>
      <ImageViewer
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        images={images}
        onMaskClick={() => {
          setVisible(false)
        }}
      />
    </>
  )
}

export default ImageViewerDemo
