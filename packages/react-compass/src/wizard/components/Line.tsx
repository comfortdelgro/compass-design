import styles from '../styles/wizard.module.css'

export const Line = ({side, bordered, active, error}) => (
  <div
    className={[
      styles.line,
      active && styles.lineIsActive,
      bordered && side === 'left' && styles.lineSideLeftBordered,
      bordered && side === 'right' && styles.lineSideRightBordered,
      active && error && styles.lineIsActiveIsErrored,
      'cdg-wizard-line',
    ]
      .filter(Boolean)
      .join(' ')}
  />
)
