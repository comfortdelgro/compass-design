import React from 'react'
import styles from './styles/tooltip.module.css'

type Props = {
  text: string
}

const Tooltip: React.FC<Props> = ({text}) => {
  return (
    <div className={styles.tooltip}>
      <Icon />
      <div className={styles.tooltipContent}>{text}</div>
    </div>
  )
}

const Icon = () => (
  <svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
    <path
      d='M7 14C10.8664 14 14 10.8664 14 7C14 3.13359 10.8664 0 7 0C3.13359 0 0 3.13359 0 7C0 10.8664 3.13359 14 7 14ZM7.65625 9.84375C7.65625 10.2047 7.36094 10.5 7 10.5C6.63906 10.5 6.34375 10.2061 6.34375 9.84375V6.34375C6.34375 5.98145 6.6377 5.6875 7 5.6875C7.3623 5.6875 7.65625 5.98008 7.65625 6.34375V9.84375ZM7 3.0625C7.47469 3.0625 7.85969 3.4475 7.85969 3.92219C7.85969 4.39688 7.47496 4.78188 7 4.78188C6.52504 4.78188 6.14031 4.39688 6.14031 3.92219C6.14141 3.44805 6.52422 3.0625 7 3.0625Z'
      fill='currentColor'
    />
  </svg>
)

export default Tooltip
