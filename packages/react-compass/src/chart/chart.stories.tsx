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
    <h3>Basic usage</h3>
    <Chart.Area labels={labels} data={data} title='Area Chart' />
    <h3>With unit</h3>
    <Chart.Area labels={labels} data={data} title='Area Chart' unit='unit' />
    <h3>Positioned legends</h3>
    <Chart.Area
      labels={labels}
      data={data}
      title='Area Chart'
      legendPosition='bottom'
    />
  </Column>
)

export const Columns: React.FC = () => (
  <Column>
    <h3>Basic usage</h3>
    <Chart.Column labels={labels} data={data} title='Column Chart' />
    <h3>With unit</h3>
    <Chart.Column
      labels={labels}
      data={data}
      title='Column Chart'
      unit='unit'
    />
    <h3>Positioned legends</h3>
    <Chart.Column
      labels={labels}
      data={data}
      title='Column Chart'
      legendPosition='bottom'
    />
  </Column>
)

export const Lines: React.FC = () => (
  <Column>
    <h3>Basic usage</h3>
    <Chart.Line labels={labels} data={data} title='Line Chart' />
    <h3>With unit</h3>
    <Chart.Line labels={labels} data={data} title='Line Chart' unit='unit' />
    <h3>Positioned legends</h3>
    <Chart.Line
      labels={labels}
      data={data}
      title='Line Chart'
      legendPosition='bottom'
    />
    <Chart.Line labels={labels} data={data} title='Line Chart' />
  </Column>
)

export const Bars: React.FC = () => (
  <Column>
    <h3>Basic usage</h3>
    <Chart.Bar labels={labels} data={data} title='Bar Chart' />
    <h3>With unit</h3>
    <Chart.Bar labels={labels} data={data} title='Bar Chart' unit='unit' />
    <h3>Positioned legends</h3>
    <Chart.Bar
      labels={labels}
      data={data}
      title='Bar Chart'
      legendPosition='bottom'
    />
    <Chart.Line labels={labels} data={data} title='Line Chart' />
  </Column>
)
