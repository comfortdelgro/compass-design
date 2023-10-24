import {GutterSide} from '../gutter'

interface IconProps {
  side?: `${GutterSide}`
  isExpand: boolean
}

const Icon = ({side, isExpand}: IconProps) => {
  return (
    <svg viewBox='0 0 320 512' style={{width: 14, height: 14}}>
      {((!isExpand && side === GutterSide.LEFT) ||
        (isExpand && side === GutterSide.RIGHT)) && (
        <path
          fill='currentColor'
          d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z'
        />
      )}
      {((!isExpand && side === GutterSide.RIGHT) ||
        (isExpand && side === GutterSide.LEFT)) && (
        <path
          fill='currentColor'
          d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'
        />
      )}
    </svg>
  )
}

export default Icon
