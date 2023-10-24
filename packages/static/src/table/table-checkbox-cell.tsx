// import React from 'react'
// import CssInjection from '../utils/objectToCss/CssInjection'
// import styles from './styles/table-checkbox-cell.module.css'
// import TableV2Checkbox from './table-checkbox'
// interface Props {
//   children?: React.ReactNode
//   indeterminate?: boolean
//   className?: string
//   disabled?: boolean
//   checked?: boolean
//   css?: unknown
// }

// export type TableV2CheckboxCellProps = Props &
//   Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

// const TableV2CheckboxCell = ({
//   indeterminate = false,
//   className,
//   disabled = false,
//   css = {},
//   ...rest
// }: TableV2CheckboxCellProps) => {
//   const checkboxCellClasses = [
//     className,
//     'cdg-table-checkbox-cell',
//   ]
//     .filter(Boolean)
//     .join(' ')

//   return (
//     <CssInjection css={css}>
//       <span>
//         <TableV2Checkbox
//           disabled={disabled}
//           indeterminate={indeterminate}
//           className={className}
//           {...rest}
//         />
//       </span>
//     </CssInjection>
//   )
// }

// export default TableV2CheckboxCell
