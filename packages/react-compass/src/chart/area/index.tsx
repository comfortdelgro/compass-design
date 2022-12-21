import React, {useEffect, useMemo, useState} from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'
import {useDOMRef} from '../../utils/use-dom-ref'
import Legend from '../legend'
import {
  colors,
  DataSet,
  getStep,
  LegendPosition,
  Line,
  Point,
  useWindowSize,
} from '../utils'
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

export type AreaChartProps = Props & ChartVariantProps

const AreaChart = React.forwardRef<HTMLDivElement, AreaChartProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      dataSet,
      title,
      unit = 'Unit',
      legendPosition = 'top',
    } = props
    const {width} = useWindowSize()
    const chartRef = useDOMRef<HTMLDivElement>(ref)
    const [lines, setLines] = useState<Line[][]>()
    const [paths, setPaths] = useState<string[]>()

    const labels = useMemo(() => getStep(dataSet.data), [dataSet])
    const data = useMemo(() => dataSet.data, [dataSet])
    const legends = useMemo(() => dataSet.legends, [dataSet])

    useEffect(() => {
      const box = document.getElementById('chart-line-box')
      const linesResult: Line[][] = []
      const pointsResult: Point[][] = []
      data?.[0]?.data.forEach((_, i) => {
        const linesTemp: Line[] = []
        const pointsTemp: Point[] = []
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
          if (box && p1) {
            pointsTemp.push({
              x: p1.offsetLeft,
              y: p1.offsetTop,
            })
          }
        })
        pointsResult.push(pointsTemp)
        linesResult.push(linesTemp)
      })
      setLines(linesResult)

      const path: string[] = []
      pointsResult.forEach((item) => {
        let str = `M ${item?.[0]?.x} ${box?.offsetHeight} `
        item.map((i) => {
          str += `L ${i.x} ${i.y} `
        })
        str += `L ${item?.[item.length - 1]?.x} ${box?.offsetHeight}`
        path.push(str)
      })
      setPaths(path)
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
                <div title={item.title} key={`chart-line-column-${i}`}>
                  {item.data.map((d, j) => (
                    <div
                      id={`chart-line-point-${i}-${j}`}
                      key={`chart-line-point-${i}-${j}`}
                      style={{
                        bottom: `${(d / Math.max(...labels)) * 100}%`,
                        backgroundColor: colors[j],
                      }}
                    />
                  ))}
                </div>
              ))}
            </StyledBody>
            <svg style={{width: '100%', height: '100%'}}>
              {colors.map((item, i) => (
                <linearGradient
                  key={`grad${i}`}
                  id={`grad${i}`}
                  x1='0%'
                  y1='0%'
                  x2='0%'
                  y2='100%'
                >
                  <stop
                    offset='0%'
                    style={{stopColor: item, stopOpacity: '0.3'}}
                  />
                  <stop
                    offset='70%'
                    style={{stopColor: item, stopOpacity: '0.2'}}
                  />
                  <stop
                    offset='90%'
                    style={{stopColor: item, stopOpacity: '0.1'}}
                  />
                  <stop
                    offset='100%'
                    style={{stopColor: '#FFFFFF', stopOpacity: 0}}
                  />
                </linearGradient>
              ))}
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
              {paths &&
                paths.length &&
                paths.map((item, i) => (
                  <path
                    key={`grad${i}`}
                    d={item}
                    fillOpacity='0.2'
                    fill={`url(#grad${i})`}
                  />
                ))}
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

export default AreaChart
