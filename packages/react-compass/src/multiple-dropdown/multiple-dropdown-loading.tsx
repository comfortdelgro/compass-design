import styles from './styles/multiple-dropdown.module.css'

export default function DropdownLoading() {
  return (
    <div className={`${styles.multipleDropdownLoading}`}>
      <div className={styles.multipleDropdownLoadingSpinner}>
        <div
          className={`${styles.multipleDropdownLoadingSpinnerItem} ${styles.multipleDropdownLoadingSpinnerItem1}`}
        />
        <div
          className={`${styles.multipleDropdownLoadingSpinnerItem} ${styles.multipleDropdownLoadingSpinnerItem2}`}
        />
        <div
          className={`${styles.multipleDropdownLoadingSpinnerItem} ${styles.multipleDropdownLoadingSpinnerItem3}`}
        />
        <div />
      </div>
    </div>
  )
}
