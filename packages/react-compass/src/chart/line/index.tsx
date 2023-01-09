import React, {useEffect, useMemo, useState} from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'
import {useDOMRef} from '../../utils/use-dom-ref'
import Legend from '../legend'
import {
  Chart,
  colorsDefault,
  getColors,
  getStep,
  Line,
  MIN_HEIGHT,
  useWindowSize,
} from '../utils'
import {
  ChartVariantProps,
  StyledBody,
  StyledBox,
  StyledChart,
  StyledContent,
} from './index.styles'

interface Props extends StyledComponentProps, Chart {}

export type LineChartProps = Props & ChartVariantProps

const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      dataSet,
      title,
      unit = 'Unit',
      legendPosition = 'top',
      hideYAxis = false,
      hideXAxis = false,
      dataColors = [],
      stepHeight = 40,
    } = props
    const {width} = useWindowSize()
    const chartRef = useDOMRef<HTMLDivElement>(ref)
    const [lines, setLines] = useState<Line[][]>()

    const labels = useMemo(() => getStep(dataSet.data), [dataSet])
    const data = useMemo(() => dataSet.data, [dataSet])
    const legends = useMemo(() => dataSet.legends, [dataSet])
    const colors: string[] = useMemo(() => getColors(dataColors), [dataColors])
    const height: number = useMemo(
      () => Math.max(stepHeight, MIN_HEIGHT),
      [stepHeight],
    )

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
          <Legend position={legendPosition} legends={legends} colors={colors} />
        )}
        <StyledContent hideYAxis={hideYAxis} hideXAxis={hideXAxis}>
          <StyledBox
            style={{height: `${labels.length * height}px`}}
            id='chart-line-box'
          >
            <div className='chart-box-line-kind'>{!hideYAxis ? unit : ''}</div>
            {Array(labels.length)
              .fill(0)
              .map((_, index) => (
                <div
                  key={`${labels[index]}-index`}
                  className='chart-box-line'
                  title={hideYAxis ? '' : `${labels[index]}`}
                />
              ))}
            <StyledBody css={{$$length: `${data.length}`}}>
              {data.map((item, i) => (
                <div
                  title={hideXAxis ? '' : `${item.title}`}
                  key={`chart-line-column-${i}`}
                >
                  {item.data.map((d, j) => (
                    <div
                      id={`chart-line-point-${i}-${j}`}
                      key={`chart-line-point-${i}-${j}`}
                      style={{
                        bottom: `${(d / Math.max(...labels)) * 100}%`,
                        background: colorsDefault[j],
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
                      stroke={colorsDefault[i]}
                      strokeWidth={2}
                      strokeLinecap='round'
                    />
                  )),
                )}
            </svg>
          </StyledBox>
        </StyledContent>
        {legendPosition === 'bottom' && legends && legends.length > 0 && (
          <Legend position={legendPosition} legends={legends} colors={colors} />
        )}
      </StyledChart>
    )
  },
)

export default LineChart
