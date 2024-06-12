import {classNames} from '../../utils/string'
import styles from '../styles/status.module.css'

const Offline = () => {
  return (
    <div className={classNames(styles.statusElement, styles.offline)}></div>
  )
}

export default Offline
