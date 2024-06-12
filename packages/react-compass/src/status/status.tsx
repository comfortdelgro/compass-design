import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import {STATUS_SIZE_MAP, StatusSize, StatusType} from './status.const'
import Offline from './status/offline'
import Online from './status/online'
import Verified from './status/verified'
import Zig from './status/zig'
import styles from './styles/status.module.css'

interface Props {
  label?: boolean | string
  css?: CSS
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
        {...delegated}
        tabIndex={-1}
        ref={spinnerRef}
        className={classNames(
          styles.status,
          STATUS_SIZE_MAP[size],
          className,
          'cdg-status',
        )}
        style={style}
      >
        {toStatusElement()}
      </div>
    </CssInjection>
  )
}) as typeof Status & {
  Offline: typeof Offline
  Online: typeof Online
  Verified: typeof Verified
  Zig: typeof Zig
}

export default Status
