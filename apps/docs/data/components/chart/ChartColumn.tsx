import Chart from '@comfortdelgro/react-compass-old/chart'
// import {Chart as StaticChart} from '@comfortdelgro/static'

function ChartColumn() {
  return (
    <div>
      <Chart.Column
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
        title='Column Chart'
      />

      {/* <StaticChart.Column
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
        title='Column Chart'
      /> */}
    </div>
  )
}

export default ChartColumn
