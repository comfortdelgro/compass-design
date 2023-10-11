import Chart from '@comfortdelgro/react-compass/chart'
// import {Chart as StaticChart} from '@comfortdelgro/static'

function ChartArea() {
  return (
    <div>
      <Chart.Area
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
        title='Area Chart'
      />

      {/* <StaticChart.Area
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
        title='Area Chart'
      /> */}
    </div>
  )
}

export default ChartArea
