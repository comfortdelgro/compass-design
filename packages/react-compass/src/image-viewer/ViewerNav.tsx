import {useCallback} from 'react'
import {classNames} from '../utils/string'
import styles from './styles/image-viewer.module.css'
import {ImageDecorator} from './utils/types'

export interface ViewerNavProps {
  images: ImageDecorator[]
  activeIndex: number
  onChangeImg: (index: number) => void
}

export default function ViewerNav(props: ViewerNavProps) {
  const {activeIndex = 0} = props

  const handleChangeImg = useCallback(
    (newIndex: number) => {
      if (activeIndex === newIndex) {
        return
      }
      props.onChangeImg(newIndex)
    },
    [activeIndex, props],
  )

  return (
    <div className={classNames(styles.navbar, 'cdg-image-viewer-nav')}>
      {props.images.map((item, index) => (
        <div
          className={classNames(styles.navbarItem, 'cdg-image-viewer-nav-item')}
          key={index}
          onClick={() => {
            handleChangeImg(index)
          }}
        >
          <img
            className={classNames(
              index === activeIndex && styles.navbarItemActive,
              'cdg-image-viewer-nav-image',
            )}
            src={item?.srcPreview ?? item.src}
            alt={item.alt}
          />
        </div>
      ))}
    </div>
  )
}
