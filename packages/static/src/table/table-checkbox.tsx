import React from 'react'

import checkboxStyles from '../checkbox/styles/checkbox.module.css'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/table-checkbox.module.css'

interface Props {
  children?: React.ReactNode
  indeterminate?: boolean
  css?: unknown
  className: string
  disabled?: boolean
}

export type TableCheckboxProps = Props
// Omit<HTMLAttributes<HTMLInputElement>, keyof Props>

const TableCheckbox = ({
  indeterminate,
  className = '',
  disabled = false,
  css = {},
  ...rest
}: TableCheckboxProps) => {
  const ref = React.useRef<HTMLInputElement>(null!)
  const checkboxRef = useDOMRef<HTMLInputElement>(ref)
  const checkboxInputClasses = [
    styles.cdgTableCheckbox,
    className,
    'cdg-table-cell',
    'cursor-pointer',
  ]
    .filter(Boolean)
    .join(' ')

  const checkboxBoxClass = [styles.checkboxBox, className]
    .filter(Boolean)
    .join(' ')

  React.useEffect(() => {
    if (typeof indeterminate === 'boolean' && ref.current) {
      ref.current.indeterminate =
        !(rest as HTMLInputElement).checked && indeterminate
    }
  }, [ref, indeterminate])

  return (
    <CssInjection css={css} childrenRef={checkboxRef}>
      <label className={checkboxStyles.label}>
        <input
          type='checkbox'
          ref={checkboxRef}
          disabled={disabled}
          className={checkboxInputClasses}
          {...rest}
        />
        <div
          tabIndex={0}
          role='checkbox'
          aria-checked={(rest as HTMLInputElement).checked}
          className={checkboxBoxClass}
          // onKeyDown={handleKeyDown}
        >
          <span className={`cdg-checkbox-checkmark ${styles.checkmark}`}>
            {indeterminate ? <InterminateIcon /> : <TickIcon />}
          </span>
        </div>
      </label>
    </CssInjection>
  )
}

const InterminateIcon = () => (
  <svg
    className={`cdg-checkbox-checkmarkIcon ${styles.checkmarkIcon}`}
    viewBox='0 0 448 512'
  >
    <path
      fill='currentColor'
      d='M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z'
    ></path>
  </svg>
)

const TickIcon = () => (
  <svg
    className={`cdg-checkbox-checkmarkIcon ${styles.checkmarkIcon}`}
    viewBox='0 0 448 512'
  >
    <path
      fill='currentColor'
      d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z'
    ></path>
  </svg>
)

export default TableCheckbox
