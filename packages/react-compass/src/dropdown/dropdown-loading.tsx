import {classNames} from '../utils/string'
import styles from './styles/dropdown.module.css'

export default function DropdownLoading() {
  return (
    <div className={classNames(styles.dropdownLoading, 'cdg-dropdown-loading')}>
      <div
        className={classNames(
          styles.dropdownLoadingSpinner,
          'cdg-dropdown-loading-spinner',
        )}
      >
        <div
          className={classNames(
            styles.dropdownLoadingSpinnerItem,
            styles.dropdownLoadingSpinnerItem1,
            'cdg-dropdown-loading-spinner-item-1',
          )}
        />
        <div
          className={classNames(
            styles.dropdownLoadingSpinnerItem,
            styles.dropdownLoadingSpinnerItem2,
            'cdg-dropdown-loading-spinner-item-2',
          )}
        />
        <div
          className={classNames(
            styles.dropdownLoadingSpinnerItem,
            styles.dropdownLoadingSpinnerItem3,
            'cdg-dropdown-loading-spinner-item-3',
          )}
        />
        <div />
      </div>
    </div>
  )
}
