import {classNames} from '../../utils/string'
import styles from '../styles/wizard.module.css'

export const Title = ({active, style, children}) => (
  <div
    style={style}
    className={classNames(
      styles.titleItem,
      active && styles.titleItemIsActive,
      'cdg-wizard-title-item',
    )}
  >
    {children}
  </div>
)
