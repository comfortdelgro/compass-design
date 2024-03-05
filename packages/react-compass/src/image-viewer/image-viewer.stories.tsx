import type {Meta} from '@storybook/react'
import {useState} from 'react'
import Button from '../button'
import Viewer from './Viewer'
const images = Array.from(Array(8).keys()).map((index) => {
  return {
    src: `https://picsum.photos/id/${index + 1}/5000/3333`,
    alt: `Image ${index + 1}`,
    srcPreview: `https://picsum.photos/id/${index + 1}/60/50`,
  }
})

export const Variations: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [isActiveIndex, setIsActiveIndex] = useState<boolean>(false)
  const [isDrag, setIsDrag] = useState<boolean>(false)
  const [isZoomable, setIsZoomable] = useState<boolean>(false)
  const [isRotatable, setIsRotatable] = useState<boolean>(false)
  const [isScalable, setIsScalable] = useState<boolean>(false)
  const [isShowImageInformation, setIsShowImageInformation] =
    useState<boolean>(false)
  const [isShowPreview, setIsShowPreview] = useState<boolean>(false)
  const [isShowToolbar, setIsShowToolbar] = useState<boolean>(false)
  return (
    <div style={{width: '100%', height: '100%', padding: '2rem'}}>
      <h3>Default </h3>
      <Button onClick={() => setVisible(true)}>Open image viewer</Button>
      <Viewer
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        images={images}
        onMaskClick={() => {
          setVisible(false)
        }}
      />
      <h3>Active index</h3>
      <Button onClick={() => setIsActiveIndex(true)}>Open image viewer</Button>
      <Viewer
        visible={isActiveIndex}
        activeIndex={1}
        onClose={() => {
          setIsActiveIndex(false)
        }}
        images={images}
      />
      <h3>Disable drag</h3>
      <Button onClick={() => setIsDrag(true)}>Open image viewer</Button>
      <Viewer
        visible={isDrag}
        drag={false}
        onClose={() => {
          setIsDrag(false)
        }}
        images={images}
      />
      <h3>Disable zoomable</h3>
      <Button onClick={() => setIsZoomable(true)}>Open image viewer</Button>
      <Viewer
        visible={isZoomable}
        zoomable={false}
        onClose={() => {
          setIsZoomable(false)
        }}
        images={images}
      />
      <h3>Disable rotatable</h3>
      <Button onClick={() => setIsRotatable(true)}>Open image viewer</Button>
      <Viewer
        visible={isRotatable}
        zoomable={false}
        disableMouseZoom={true}
        onClose={() => {
          setIsRotatable(false)
        }}
        images={images}
      />
      <h3>Disable scalable</h3>
      <Button onClick={() => setIsScalable(true)}>Open image viewer</Button>
      <Viewer
        visible={isScalable}
        scalable={false}
        onClose={() => {
          setIsScalable(false)
        }}
        images={images}
      />
      <h3>Hidden image information</h3>
      <Button onClick={() => setIsShowImageInformation(true)}>
        Open image viewer
      </Button>
      <Viewer
        visible={isShowImageInformation}
        isShowImageInformation={false}
        onClose={() => {
          setIsShowImageInformation(false)
        }}
        images={images}
      />
      <h3>Hidden preview</h3>
      <Button onClick={() => setIsShowPreview(true)}>Open image viewer</Button>
      <Viewer
        visible={isShowPreview}
        isShowPreview={false}
        onClose={() => {
          setIsShowPreview(false)
        }}
        images={images}
      />
      <h3>Hidden toolbar</h3>
      <Button onClick={() => setIsShowToolbar(true)}>Open image viewer</Button>
      <Viewer
        visible={isShowToolbar}
        isShowToolbar={false}
        onClose={() => {
          setIsShowToolbar(false)
        }}
        images={images}
      />
    </div>
  )
}

const meta = {
  title: 'Example/ImageViewer',
  component: Variations,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Variations>

export default meta
