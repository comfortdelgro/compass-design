import {ActionTypeEnum} from './types'

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
