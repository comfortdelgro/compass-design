import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import React, {useMemo} from 'react'
import {Line} from 'react-chartjs-2'
import {useColors} from '../../theme'
import {buildData, Chart, DEFAULT_VERTICAL_OPTIONS} from '../utils'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

export type LineChartProps = Chart

const LineChart: React.FC<LineChartProps> = (props) => {
  const {data = [], labels = [], unit, title, legendPosition = 'top'} = props

  const theme = useColors()

  const mappedData = useMemo(
    () => buildData(labels, data, 'line'),
    [data, labels],
  )

  const options = DEFAULT_VERTICAL_OPTIONS(theme, legendPosition, title, unit)

  return <Line options={options} data={mappedData} />
}

export default LineChart
