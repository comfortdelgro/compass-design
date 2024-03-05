import styles from '../styles/status.module.css'

interface Props {}

const Offline = () => {
  return <div className={`${styles.statusElement} ${styles.offline}`}></div>
}

export default Offline
