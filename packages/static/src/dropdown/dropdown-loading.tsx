import styles from './styles/dropdown.module.css'

export default function DropdownLoading() {
  return (
    <div className={`${styles.dropdownLoading}`}>
      <div className='spinner'>
        <div className='spinner-item spinner-1' />
        <div className='spinner-item spinner-2' />
        <div className='spinner-item spinner-3' />
        <div />
      </div>
    </div>
  )
}
