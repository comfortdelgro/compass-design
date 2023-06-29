import * as React from 'react'
const FOFlag: React.FC = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    id='flag-icons-fo'
    viewBox='0 0 640 480'
    width='1em'
    height='1em'
  >
    <defs>
      <clipPath id='a'>
        <path fillOpacity={0.7} d='M-78 32h640v480H-78z' />
      </clipPath>
    </defs>
    <g
      fillRule='evenodd'
      strokeWidth={0}
      clipPath='url(#a)'
      transform='translate(78 -32)'
    >
      <path fill='#fff' d='M-78 32h663.9v480H-78z' />
      <path
        fill='#003897'
        d='M-76 218.7h185.9V32H216v186.7h371.8v106.6H216V512H109.9V325.3h-186V218.7z'
      />
      <path
        fill='#d72828'
        d='M-76 245.3h212.4V32h53.1v213.3H588v53.4H189.5V512h-53V298.7H-76v-53.4z'
      />
    </g>
  </svg>
)
export default FOFlag
