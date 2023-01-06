import React from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'
import {useDOMRef} from '../../utils/use-dom-ref'
import {LegendPosition} from '../utils'
import {LegendVariantProps, StyledLegend} from './index.styles'

interface Props extends StyledComponentProps {
  legends: string[]
  position: LegendPosition
  colors: string[]
}

export type LegendProps = Props & LegendVariantProps

const Legend = React.forwardRef<HTMLDivElement, LegendProps>((props, ref) => {
  const {legends = [], colors = [], position = 'top'} = props
  const legendRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <StyledLegend position={position} ref={legendRef}>
      {legends.map((item, index) => (
        <div className='chart-legend-item' key={`${item}-${index}`}>
          <div style={{background: `${colors[index]}`}} />
          <span>{item}</span>
        </div>
      ))}
    </StyledLegend>
  )
})

export default Legend
