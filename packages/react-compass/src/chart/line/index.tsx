import React, {useEffect, useMemo, useState} from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'
import {useDOMRef} from '../../utils/use-dom-ref'
import Legend from '../legend'
import {colors, DataSet, LegendPosition, Line, useWindowSize} from '../utils'
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
  dataSet: DataSet
}

export type LineChartProps = Props & ChartVariantProps

const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      dataSet,
      title,
      legendPosition = 'top',
    } = props
    const {width} = useWindowSize()
    const chartRef = useDOMRef<HTMLDivElement>(ref)
    const [lines, setLines] = useState<Line[][]>()

    const labels = useMemo(() => dataSet.labels, [dataSet])
    const data = useMemo(() => dataSet.data, [dataSet])
    const legends = useMemo(() => dataSet.legends, [dataSet])

    useEffect(() => {
      const box = document.getElementById('chart-line-box')
      const linesResult: Line[][] = []
      data?.[0]?.data.forEach((_, i) => {
        const linesTemp: Line[] = []
        data.forEach((_, j) => {
          const p1 = document.getElementById(`chart-line-point-${j}-${i}`)
          const p2 = document.getElementById(`chart-line-point-${j + 1}-${i}`)
          if (box && p1 && p2) {
            linesTemp.push({
              x1: p1.offsetLeft,
              y1: p1.offsetTop,
              x2: p2.offsetLeft,
              y2: p2.offsetTop,
            })
          }
        })
        linesResult.push(linesTemp)
      })
      setLines(linesResult)
    }, [width])

    return (
      <StyledChart ref={chartRef} css={css}>
        {title && <h1>{title}</h1>}
        {legendPosition === 'top' && legends && legends.length > 0 && (
          <Legend position={legendPosition} legends={legends} />
        )}
        <StyledContent>
          <StyledBox
            style={{height: `${labels.length * 45}px`}}
            id='chart-line-box'
          >
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
                <div title={item.title} key={`chart-line-column-${i}`}>
                  {item.data.map((d, j) => (
                    <div
                      id={`chart-line-point-${i}-${j}`}
                      key={`chart-line-point-${i}-${j}`}
                      style={{
                        bottom: `${(d / Math.max(...labels)) * 100}%`,
                        background: colors[j],
                      }}
                    />
                  ))}
                </div>
              ))}
            </StyledBody>
            <svg style={{width: '100%', height: '100%'}}>
              {lines &&
                lines.length &&
                lines.map((item, i) =>
                  item.map((v, j) => (
                    <line
                      key={`chart-line-segment-${i}-${j}`}
                      x1={v.x1}
                      y1={v.y1}
                      x2={v.x2}
                      y2={v.y2}
                      stroke={colors[i]}
                      strokeWidth={2}
                      strokeLinecap='round'
                    />
                  )),
                )}
            </svg>
          </StyledBox>
        </StyledContent>
        {legendPosition === 'bottom' && legends && legends.length > 0 && (
          <Legend position={legendPosition} legends={legends} />
        )}
      </StyledChart>
    )
  },
)

export default LineChart
