import * as React from 'react'
import {StyledNavbar, StyledNavbarItem} from './image-viewer.styles'
import {ImageDecorator} from './types'

export interface ViewerNavProps {
  images: ImageDecorator[]
  activeIndex: number
  onChangeImg: (index: number) => void
}

export default function ViewerNav(props: ViewerNavProps) {
  const {activeIndex = 0} = props

  function handleChangeImg(newIndex: number) {
    if (activeIndex === newIndex) {
      return
    }
    props.onChangeImg(newIndex)
  }

  return (
    <StyledNavbar>
      {props.images.map((item, index) => (
        <StyledNavbarItem
          key={index}
          onClick={() => {
            handleChangeImg(index)
          }}
        >
          <img
            className={index === activeIndex ? 'active' : ''}
            src={item?.srcPreview ?? item.src}
            alt={item.alt}
          />
        </StyledNavbarItem>
      ))}
    </StyledNavbar>
  )
}
