import styles from '../styles/status.module.css'

interface Props {}

const Online = () => {
  return <div className={`${styles.statusElement} ${styles.online}`}></div>
}

export default Online
