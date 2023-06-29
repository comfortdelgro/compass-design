import * as React from 'react'
const HNFlag: React.FC = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    id='flag-icons-hn'
    viewBox='0 0 640 480'
    width='1em'
    height='1em'
  >
    <path fill='#18c3df' d='M0 0h640v480H0z' />
    <path fill='#fff' d='M0 160h640v160H0z' />
    <g id='c' fill='#18c3df' transform='translate(320 240) scale(26.66665)'>
      <g id='b'>
        <path id='a' d='m-.3 0 .5.1L0-1z' />
        <use
          xlinkHref='#a'
          width='100%'
          height='100%'
          transform='scale(-1 1)'
        />
      </g>
      <use xlinkHref='#b' width='100%' height='100%' transform='rotate(72)' />
      <use xlinkHref='#b' width='100%' height='100%' transform='rotate(-72)' />
      <use xlinkHref='#b' width='100%' height='100%' transform='rotate(144)' />
      <use xlinkHref='#b' width='100%' height='100%' transform='rotate(-144)' />
    </g>
    <use
      xlinkHref='#c'
      width='100%'
      height='100%'
      transform='translate(133.3 -42.7)'
    />
    <use
      xlinkHref='#c'
      width='100%'
      height='100%'
      transform='translate(133.3 37.3)'
    />
    <use
      xlinkHref='#c'
      width='100%'
      height='100%'
      transform='translate(-133.3 -42.7)'
    />
    <use
      xlinkHref='#c'
      width='100%'
      height='100%'
      transform='translate(-133.3 37.3)'
    />
  </svg>
)
export default HNFlag
