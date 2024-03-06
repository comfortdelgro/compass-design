export enum ActionTypeEnum {
  zoomIn = 1,
  zoomOut = 2,
  prev = 3,
  next = 4,
  rotateLeft = 5,
  rotateRight = 6,
  reset = 7,
  close = 8,
  scaleX = 9,
  scaleY = 10,
}

export interface IconProps {
  type: ActionTypeEnum
}

export default function Icon(props: IconProps) {
  const prefixCls = 'react-viewer-icon'

  return (
    <i
      className={`${prefixCls} ${prefixCls}-${ActionTypeEnum[props.type]}`}
    ></i>
  )
}
