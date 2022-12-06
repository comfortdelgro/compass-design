import React from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'
import {useDOMRef} from '../../utils/use-dom-ref'
import {
  ChartVariantProps,
  StyledBody,
  StyledBox,
  StyledChart,
  StyledLabelColumn,
  StyledLegend,
} from './index.styles'

interface Props extends StyledComponentProps {
  legendPosition: 'top' | 'bottom'
}

export type ColumnChartProps = Props & ChartVariantProps

const lableColumn = [1000, 800, 600, 400, 200, 0]
const data = [
  {
    title: '1',
    data: [700, 400],
  },
  {
    title: '2',
    data: [700, 400],
  },
  {
    title: '3',
    data: [700, 400],
  },
  {
    title: '4',
    data: [700, 400],
  },
  {
    title: '5',
    data: [700, 400],
  },
  {
    title: '6',
    data: [700, 400],
  },
  {
    title: '7',
    data: [700, 400],
  },
  {
    title: '8',
    data: [700, 400],
  },
  {
    title: '9',
    data: [700, 400],
  },
  {
    title: '10',
    data: [700, 400],
  },
]
const legends = ['legend1', 'legend2']

const colors = ['#009EDA', '#D83B01', '#F8DB96', '#D1E8CF']

const ColumnChart = React.forwardRef<HTMLDivElement, ColumnChartProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      legendPosition = 'top',
    } = props
    console.log(legendPosition)
    const chartRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <StyledChart ref={chartRef} css={css}>
        <div>
          <StyledLabelColumn>
            <span>Unit</span>
            <div>
              {lableColumn.map((item) => (
                <span>{item}</span>
              ))}
            </div>
          </StyledLabelColumn>
          <StyledBox style={{height: `${lableColumn.length * 45}px`}}>
            {Array(lableColumn.length)
              .fill(0)
              .map(() => (
                <div className='chart-box-line' />
              ))}
            <StyledBody css={{$$length: `${data.length}`}}>
              {data.map((item) => (
                <div title={item.title}>
                  {item.data.map((d, index) => (
                    <div
                      style={{
                        width: `calc(100% / ${item.data.length})`,
                        height: `${(d / Math.max(...lableColumn)) * 100}%`,
                        backgroundColor: colors[index],
                      }}
                    />
                  ))}
                </div>
              ))}
            </StyledBody>
          </StyledBox>
        </div>
        <LegendDisplay position={legendPosition} legends={legends} />
      </StyledChart>
    )
  },
)

const LegendDisplay = ({
  legends,
  position,
}: {
  legends: string[]
  position: 'top' | 'bottom'
}) => (
  <StyledLegend position={position}>
    {legends.map((item, index) => (
      <div className='chart-legend-item'>
        <div style={{background: `${colors[index]}`}} />
        <span>{item}</span>
      </div>
    ))}
  </StyledLegend>
)

export default ColumnChart
