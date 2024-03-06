import type {Meta} from '@storybook/react'
import React from 'react'
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

const data2 = [
  {
    label: 'Dataset 1',
    data: labels.map(() => Math.floor(Math.random() * 1000)),
  },
]

export const Areas: React.FC = () => (
  <>
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
  </>
)

export const Columns: React.FC = () => (
  <>
    <h3>Basic usage</h3>
    <Chart.Column labels={labels} data={data} title=' Chart' />
    <h3>With unit</h3>
    <Chart.Column labels={labels} data={data} title=' Chart' unit='unit' />
    <h3>Positioned legends</h3>
    <Chart.Column
      labels={labels}
      data={data}
      title=' Chart'
      legendPosition='bottom'
    />
  </>
)

export const Doughnut: React.FC = () => (
  <>
    <h3>Basic usage</h3>
    <Chart.Doughnut labels={labels} data={data2} title='Doughnut Chart' />
    <h3>Positioned legends</h3>
    <Chart.Doughnut
      labels={labels}
      data={data2}
      title='Area Chart'
      legendPosition='bottom'
    />
  </>
)

export const Lines: React.FC = () => (
  <>
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
  </>
)

export const Bars: React.FC = () => (
  <>
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
  </>
)

const meta = {
  title: 'Example/Chart',
  component: Areas,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Areas>

export default meta
