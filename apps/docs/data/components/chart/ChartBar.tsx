import {Chart} from '@comfortdelgro/react-compass'

function ChartBar() {
  return (
    <Chart.Bar
      labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
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
  )
}

export default ChartBar
