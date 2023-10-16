import styles from './styles/dropdown.module.css'

export default function DropdownLoading() {
  return (
    <div className={`${styles.dropdownLoading}`}>
      <div className={styles.dropdownLoadingSpinner}>
        <div
          className={`${styles.dropdownLoadingSpinnerItem} ${styles.dropdownLoadingSpinnerItem1}`}
        />
        <div
          className={`${styles.dropdownLoadingSpinnerItem} ${styles.dropdownLoadingSpinnerItem2}`}
        />
        <div
          className={`${styles.dropdownLoadingSpinnerItem} ${styles.dropdownLoadingSpinnerItem3}`}
        />
        <div />
      </div>
    </div>
  )
}
