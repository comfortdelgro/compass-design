import {useCallback} from 'react'
import styles from './styles/image-viewer.module.css'
import {ImageDecorator} from './types'

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
    <div className={styles.navbar}>
      {props.images.map((item, index) => (
        <div
          className={styles.navbarItem}
          key={index}
          onClick={() => {
            handleChangeImg(index)
          }}
        >
          <img
            className={index === activeIndex ? styles.navbarItemActive : ''}
            src={item?.srcPreview ?? item.src}
            alt={item.alt}
          />
        </div>
      ))}
    </div>
  )
}
