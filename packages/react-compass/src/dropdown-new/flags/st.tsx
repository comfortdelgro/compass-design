import * as React from 'react'
const STFlag: React.FC = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    id='flag-icons-st'
    viewBox='0 0 640 480'
    width='1em'
    height='1em'
  >
    <path fill='#12ad2b' d='M0 0h640v480H0z' />
    <path fill='#ffce00' d='M0 137.1h640V343H0z' />
    <path fill='#d21034' d='M0 0v480l240-240' />
    <g id='c' transform='translate(351.6 240) scale(.34286)'>
      <g id='b'>
        <path id='a' d='M0-200V0h100' transform='rotate(18 0 -200)' />
        <use
          xlinkHref='#a'
          width='100%'
          height='100%'
          transform='scale(-1 1)'
        />
      </g>
      <use xlinkHref='#b' width='100%' height='100%' transform='rotate(72)' />
      <use xlinkHref='#b' width='100%' height='100%' transform='rotate(144)' />
      <use xlinkHref='#b' width='100%' height='100%' transform='rotate(-144)' />
      <use xlinkHref='#b' width='100%' height='100%' transform='rotate(-72)' />
    </g>
    <use
      xlinkHref='#c'
      width='100%'
      height='100%'
      x={700}
      transform='translate(-523.2)'
    />
  </svg>
)
export default STFlag
