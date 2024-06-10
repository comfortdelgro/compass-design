import styles from '../styles/wizard.module.css'

export const Title = ({active, style, children}) => (
  <div
    style={style}
    className={[
      styles.titleItem,
      active && styles.titleItemIsActive,
      'cdg-wizard-title-item',
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {children}
  </div>
)
