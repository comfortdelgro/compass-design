import * as React from 'react'
const BJFlag: React.FC = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    id='flag-icons-bj'
    viewBox='0 0 640 480'
    width='1em'
    height='1em'
  >
    <defs>
      <clipPath id='a'>
        <path fill='gray' d='M67.6-154h666v666h-666z' />
      </clipPath>
    </defs>
    <g clipPath='url(#a)' transform='matrix(.961 0 0 .7207 -65 111)'>
      <g fillRule='evenodd' strokeWidth='1pt'>
        <path fill='#319400' d='M0-154h333v666H0z' />
        <path fill='#ffd600' d='M333-154h666v333H333z' />
        <path fill='#de2110' d='M333 179h666v333H333z' />
      </g>
    </g>
  </svg>
)
export default BJFlag
