import {classNames} from '../utils/string'
import styles from './styles/multiple-dropdown.module.css'

export default function DropdownLoading() {
  return (
    <div
      className={classNames(
        styles.multipleDropdownLoading,
        'cdg-multiple-dropdown-loading',
      )}
    >
      <div
        className={classNames(
          styles.multipleDropdownLoadingSpinner,
          'cdg-multiple-dropdown-loading-spinner',
        )}
      >
        <div
          className={classNames(
            styles.multipleDropdownLoadingSpinnerItem,
            styles.multipleDropdownLoadingSpinnerItem1,
            'cdg-multiple-dropdown-loading-spinner-item-1',
          )}
        />
        <div
          className={classNames(
            styles.multipleDropdownLoadingSpinnerItem,
            styles.multipleDropdownLoadingSpinnerItem2,
            'cdg-multiple-dropdown-loading-spinner-item-2',
          )}
        />
        <div
          className={classNames(
            styles.multipleDropdownLoadingSpinnerItem,
            styles.multipleDropdownLoadingSpinnerItem3,
            'cdg-multiple-dropdown-loading-spinner-item-3',
          )}
        />
        <div />
      </div>
    </div>
  )
}
