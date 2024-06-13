import {classNames} from '../../utils/string'
import styles from '../styles/wizard.module.css'

interface Props extends React.HTMLProps<HTMLElement> {
  active: boolean
  error: boolean
}

export const Item = ({
  active,
  error,
  onKeyDown,
  onClick,
  style,
  children,
}: Props) => (
  <div
    tabIndex={0}
    className={classNames(
      styles.item,
      active && styles.itemIsActive,
      active && error && styles.itemIsActiveIsErrored,
      'cdg-wizard-item',
    )}
    onKeyDown={onKeyDown}
    onClick={onClick}
    style={style}
  >
    {children}
  </div>
)
