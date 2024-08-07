import {classNames} from '../utils/string'
import styles from './styles/image-viewer.module.css'
import {ToolbarConfig} from './utils/types'

export interface ViewerToolbarProps {
  onAction: (config: ToolbarConfig) => void
  alt: string
  width: number
  height: number
  activeIndex: number
  count: number
  totalName: string
}

export default function ImageInformation(props: ViewerToolbarProps) {
  return (
    <div
      className={classNames(
        styles.imageInformationWrap,
        'cdg-image-viewer-information',
      )}
    >
      <p style={{textAlign: 'center'}}>
        {props.alt && `${props.alt} `}
        {`(${props.width} x ${props.height}) `}
        <b>{`${props.activeIndex + 1} ${props.totalName} ${props.count}`}</b>
      </p>
    </div>
  )
}
