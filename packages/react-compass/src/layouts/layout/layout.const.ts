import styles from './styles/layout.module.css'

export const LAYOUT_DIRECTION_MAP = {
  row: styles.row,
  column: styles.column,
}

export const LAYOUT_ALIGNMENT_MAP = {
  'start-start': styles.startStart,
  'center-start': styles.centerStart,
  'end-start': styles.endStart,
  'start-center': styles.startCenter,
  'center-center': styles.centerCenter,
  'end-center': styles.endCenter,
  'start-end': styles.startEnd,
  'center-end': styles.centerEnd,
  'end-end': styles.endEnd,
}
