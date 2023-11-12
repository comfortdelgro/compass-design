import Chart from '@comfortdelgro/react-compass-old/chart'
// import {Chart as StaticChart} from '@comfortdelgro/static'

function ChartLine() {
  return (
    <div>
      <Chart.Line
        labels={[
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ]}
        data={[
          {
            label: 'Dataset 1',
            data: new Array(7)
              .fill(0)
              .map(() => Math.floor(Math.random() * 1000)),
          },
          {
            label: 'Dataset 2',
            data: new Array(7)
              .fill(0)
              .map(() => Math.floor(Math.random() * 1000)),
          },
        ]}
        title='Line Chart'
      />

      {/* <StaticChart.Line
        labels={[
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ]}
        data={[
          {
            label: 'Dataset 1',
            data: new Array(7)
              .fill(0)
              .map(() => Math.floor(Math.random() * 1000)),
          },
          {
            label: 'Dataset 2',
            data: new Array(7)
              .fill(0)
              .map(() => Math.floor(Math.random() * 1000)),
          },
        ]}
        title='Line Chart'
      /> */}
    </div>
  )
}

export default ChartLine
