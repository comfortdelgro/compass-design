import React from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'
import {useDOMRef} from '../../utils/use-dom-ref'
import Legend from '../legend'
import {colors, DataSet, LegendPosition} from '../utils'
import {
  ChartVariantProps,
  StyledBody,
  StyledBox,
  StyledChart,
  StyledContent,
} from './index.styles'

interface Props extends StyledComponentProps {
  legendPosition?: LegendPosition
  title?: string
  unit?: string
  dataSet: DataSet
}

export type ColumnChartProps = Props & ChartVariantProps

const ColumnChart = React.forwardRef<HTMLDivElement, ColumnChartProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      dataSet,
      title,
      unit = 'Unit',
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
            <div className='chart-box-line-kind'>{unit}</div>
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
                <div title={item.title} key={`chart-column-column-${i}`}>
                  {item.data.map((d, index) => (
                    <div
                      key={`chart-column-subcolumn-${i}-${index}`}
                      style={{
                        width: `calc(100% / ${item.data.length})`,
                        height: `${(d / Math.max(...labels)) * 100}%`,
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

export default ColumnChart
