import {classNames} from '../../utils/string'
import styles from '../styles/status.module.css'

const Online = () => {
  return <div className={classNames(styles.statusElement, styles.online)}></div>
}

export default Online
