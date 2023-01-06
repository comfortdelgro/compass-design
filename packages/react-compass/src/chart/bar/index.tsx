import React, {useMemo} from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'
import {useDOMRef} from '../../utils/use-dom-ref'
import Legend from '../legend'
import {Chart, colorsDefault, getColors, getStep, MIN_HEIGHT} from '../utils'
import {
  ChartVariantProps,
  StyledBody,
  StyledBox,
  StyledChart,
  StyledContent,
} from './index.styles'

interface Props extends StyledComponentProps, Chart {}

export type BarChartProps = Props & ChartVariantProps

const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      title,
      dataSet,
      unit = 'Unit',
      legendPosition = 'top',
      hideYAxis = false,
      hideXAxis = false,
      dataColors = [],
      stepHeight = 40,
    } = props

    const chartRef = useDOMRef<HTMLDivElement>(ref)

    const labels = useMemo(() => getStep(dataSet.data), [dataSet])
    const data = useMemo(() => dataSet.data, [dataSet])
    const legends = useMemo(() => dataSet.legends, [dataSet])
    const colors: string[] = useMemo(() => getColors(dataColors), [dataColors])
    const height: number = useMemo(
      () => Math.max(stepHeight, MIN_HEIGHT),
      [stepHeight],
    )

    return (
      <StyledChart ref={chartRef} css={css}>
        {title && <h1>{title}</h1>}
        {legendPosition === 'top' && legends && legends.length > 0 && (
          <Legend position={legendPosition} legends={legends} colors={colors} />
        )}
        <StyledContent hideYAxis={hideYAxis} hideXAxis={hideXAxis}>
          <StyledBox style={{height: `${labels.length * height}px`}}>
            <div className='chart-box-line-kind'>{!hideXAxis ? unit : ''}</div>
            {Array(labels.length)
              .fill(0)
              .map((_, index) => (
                <div
                  key={`${labels[index]}-index`}
                  className='chart-box-line'
                  title={hideXAxis ? '' : `${labels[index]}`}
                />
              ))}
            <StyledBody css={{$$length: `${data.length}`}}>
              {data.map((item, i) => (
                <div
                  title={hideYAxis ? '' : `${item.title}`}
                  key={`chart-bar-column-${i}`}
                >
                  {item.data.map((d, index) => (
                    <div
                      key={`chart-bar-subcolumn-${i}-${index}`}
                      style={{
                        height: `calc(100% / ${item.data.length})`,
                        width: `${(d / Math.max(...labels)) * 100}%`,
                        backgroundColor: colorsDefault[index],
                      }}
                    />
                  ))}
                </div>
              ))}
            </StyledBody>
          </StyledBox>
        </StyledContent>
        {legendPosition === 'bottom' && legends && legends.length > 0 && (
          <Legend position={legendPosition} legends={legends} colors={colors} />
        )}
      </StyledChart>
    )
  },
)

export default BarChart
