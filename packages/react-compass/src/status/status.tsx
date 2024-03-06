import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import {STATUS_SIZE_MAP, StatusSize, StatusType} from './status.const'
import Offline from './status/offline'
import Online from './status/online'
import Verified from './status/verified'
import Zig from './status/zig'
import styles from './styles/status.module.css'

interface Props {
  label?: boolean | string
  css?: unknown
  className?: string
  size?: StatusSize
  type?: StatusType
  icon?: React.ReactNode
  style?: React.CSSProperties
}

export type StatusProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Status = React.forwardRef<HTMLDivElement, StatusProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // ComponentProps
    label = true,
    type = '',
    // VariantProps
    size = 'md',
    className = '',
    icon,
    style,
    ...delegated
  } = props

  const spinnerRef = useDOMRef<HTMLDivElement>(ref)

  const toStatusElement = () => {
    switch (type) {
      case 'offline':
        return <Offline></Offline>

      case 'online':
        return <Online></Online>

      case 'verified':
        return <Verified></Verified>

      case 'zig':
        return <Zig></Zig>

      case 'icon':
        return icon ? icon : <></>

      default:
        return <></>
    }
  }

  return (
    <CssInjection css={css} childrenRef={spinnerRef}>
      <div
        tabIndex={-1}
        ref={spinnerRef}
        className={`${styles.status} ${STATUS_SIZE_MAP[size]} ${className}`}
        style={style}
        {...delegated}
      >
        {toStatusElement()}
      </div>
    </CssInjection>
  )
})

export default Status as typeof Status & {
  Offline: typeof Offline
  Online: typeof Online
  Verified: typeof Verified
  Zig: typeof Zig
}
