import {Column} from '../utils/components'
import AreaChart from './area'
import BarChart from './bar'
import ColumnChart from './column'
import LineChart from './line'

const dataSet = {
  labels: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450],
  data: [
    {
      title: '1',
      data: [300, 430],
    },
    {
      title: '2',
      data: [320, 230],
    },
    {
      title: '3',
      data: [260, 370],
    },
    {
      title: '4',
      data: [300, 430],
    },
    {
      title: '5',
      data: [300, 430],
    },
  ],
  legends: ['legend1', 'legend2'],
}

export const Areas: React.FC = () => (
  <Column>
    <div style={{width: '100%'}}>
      <AreaChart dataSet={dataSet} title='Area Chart' />
    </div>
  </Column>
)

export const Columns: React.FC = () => (
  <Column>
    <div style={{width: '100%'}}>
      <ColumnChart dataSet={dataSet} title='Column Chart' />
    </div>
  </Column>
)

export const Lines: React.FC = () => (
  <Column>
    <div style={{width: '100%'}}>
      <LineChart dataSet={dataSet} title='Line Chart' />
    </div>
  </Column>
)

export const Bars: React.FC = () => (
  <Column>
    <div style={{width: '100%'}}>
      <BarChart dataSet={dataSet} title='Bar Chart' />
    </div>
  </Column>
)
