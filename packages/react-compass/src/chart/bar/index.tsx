import React from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'
import {useDOMRef} from '../../utils/use-dom-ref'
import Legend from '../legend'
import {colors} from '../utils'
import {
  ChartVariantProps,
  StyledBody,
  StyledBox,
  StyledChart,
  StyledContent,
} from './index.styles'

interface Props extends StyledComponentProps {
  legendPosition?: 'top' | 'bottom'
  title?: string
  dataSet: {
    labels: number[]
    data: Array<{
      title: string
      data: number[]
    }>
    legends: string[]
  }
}

export type BarChartProps = Props & ChartVariantProps

const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      title,
      dataSet,
      legendPosition = 'top',
    } = props

    const chartRef = useDOMRef<HTMLDivElement>(ref)

    const labels = dataSet.labels
    const data = dataSet.data
    const legends = dataSet.legends

    return (
      <StyledChart ref={chartRef} css={css}>
        {title && <h1>{title}</h1>}
        {legendPosition === 'top' && legends && legends.length > 0 && (
          <Legend position={legendPosition} legends={legends} />
        )}
        <StyledContent>
          <StyledBox style={{height: `${labels.length * 45}px`}}>
            <div className='chart-box-line-kind'>Unit</div>
            {Array(labels.length)
              .fill(0)
              .map((_, index) => (
                <div
                  key={`${labels[index]}-index`}
                  className='chart-box-line'
                  title={`${labels[index]}`}
                />
              ))}
            <StyledBody css={{$$length: `${data.length}`}}>
              {data.map((item, i) => (
                <div title={item.title} key={`chart-bar-column-${i}`}>
                  {item.data.map((d, index) => (
                    <div
                      key={`chart-bar-subcolumn-${i}-${index}`}
                      style={{
                        height: `calc(100% / ${item.data.length})`,
                        width: `${(d / Math.max(...labels)) * 100}%`,
                        backgroundColor: colors[index],
                      }}
                    />
                  ))}
                </div>
              ))}
            </StyledBody>
          </StyledBox>
        </StyledContent>
        {legendPosition === 'bottom' && legends && legends.length > 0 && (
          <Legend position={legendPosition} legends={legends} />
        )}
      </StyledChart>
    )
  },
)

export default BarChart
