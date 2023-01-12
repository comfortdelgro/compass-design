import {Column} from '../utils/components'
import Chart from './index'

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const data = [
  {
    label: 'Dataset 1',
    data: labels.map(() => Math.floor(Math.random() * 1000)),
  },
  {
    label: 'Dataset 2',
    data: labels.map(() => Math.floor(Math.random() * 1000)),
  },
]

export const Areas: React.FC = () => (
  <Column>
    <div style={{width: '100%'}}>
      <Chart.Area labels={labels} data={data} title='Area Chart' />
    </div>
  </Column>
)

export const Columns: React.FC = () => (
  <Column>
    <div style={{width: '100%'}}>
      <Chart.Column labels={labels} data={data} title='Column Chart' />
    </div>
  </Column>
)

export const Lines: React.FC = () => (
  <Column>
    <div style={{width: '100%'}}>
      <Chart.Line labels={labels} data={data} title='Line Chart' />
    </div>
  </Column>
)

export const Bars: React.FC = () => (
  <Column>
    <div style={{width: '100%'}}>
      <Chart.Bar labels={labels} data={data} title='Bar Chart' />
    </div>
  </Column>
)
