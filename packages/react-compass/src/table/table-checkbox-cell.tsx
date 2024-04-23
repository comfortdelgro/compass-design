import React from 'react'
import Checkbox from '../checkbox'
import {CSS, CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/table-checkbox-cell.module.css'

interface Props {
  css?: CSS
  disabled?: boolean
  checked?: boolean
  indeterminate?: boolean
}

export type TableCheckboxCellProps = Props &
  Omit<React.HTMLAttributes<HTMLInputElement>, keyof Props>

const TableCheckboxCell = React.forwardRef<
  HTMLInputElement,
  TableCheckboxCellProps
>((props, ref) => {
  const {
    css = {},
    className,
    checked = false,
    disabled = false,
    indeterminate = false,
    onChange,
    ...rest
  } = props
  const tableCheckboxCellRef = useDOMRef<HTMLInputElement>(ref)

  const rootClasses = [
    styles.cdgTableCheckboxCell,
    className,
    'cdg-table-checkbox-cell',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css} childrenRef={tableCheckboxCellRef}>
      <Checkbox
        {...rest}
        ref={tableCheckboxCellRef}
        isSelected={checked}
        isDisabled={disabled}
        className={rootClasses}
        isIndeterminate={indeterminate}
        onChangeEvent={onChange}
      />
    </CssInjection>
  )
})

export default TableCheckboxCell
