import React, {HTMLAttributes} from 'react'
import CssInjection from '../../../utils/objectToCss/CssInjection'
import {useDOMRef} from '../../../utils/use-dom-ref'
import styles from '../../styles/popover.module.css'

interface Props {
  triggerRef: React.RefObject<HTMLDivElement>
  children: React.ReactNode
  isEmpty: boolean
  type: 'heading' | 'color' | 'alignment'
  handleKeyDown?: (e: KeyboardEvent) => void
  onFocus: () => void
  onBlur: () => void
}

type PopoverProps = Props & Omit<HTMLAttributes<HTMLDivElement>, keyof Props>
const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  (
    {children, handleKeyDown, onFocus, onBlur, type, isEmpty, className = ''},
    ref,
  ) => {
    const popoverRef = useDOMRef(ref)
    React.useEffect(() => {
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    })

    React.useEffect(() => {
      onFocus()
      return () => {
        onBlur()
      }
    }, [onBlur, onFocus])

    const popoverClasses = React.useMemo(() => {
      return [
        styles.rtePopover,
        type === 'color' ? styles.typeColor : '',
        type === 'heading' ? styles.typeHeading : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')
    }, [className, type])

    return (
      <CssInjection childrenRef={popoverRef}>
        <div
          style={{
            display: isEmpty ? 'none' : '',
          }}
          className={popoverClasses}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default Popover
