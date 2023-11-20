import Chart from '@comfortdelgro/react-compass-old/chart'
// import {Chart as StaticChart} from '@comfortdelgro/static'

function ChartBar() {
  return (
    <div>
      <Chart.Bar
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
        title='Bar Chart'
      />

      {/* <StaticChart.Bar
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
        title='Bar Chart'
      /> */}
    </div>
  )
}

export default ChartBar
