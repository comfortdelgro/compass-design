import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import React, {useMemo} from 'react'
import {Bar} from 'react-chartjs-2'
import {useColors} from '../../theme'
import {Chart, DEFAULT_HORIZONTAL_OPTIONS, buildData} from '../utils'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export type BarChartProps = Chart

const BarChart: React.FC<BarChartProps> = (props) => {
  const {data = [], labels = [], unit, title, legendPosition = 'top'} = props

  const theme = useColors()

  const mappedData = useMemo(
    () => buildData(labels, data, 'bar'),
    [data, labels],
  )

  const options = DEFAULT_HORIZONTAL_OPTIONS(theme, legendPosition, title, unit)

  return <Bar options={options} data={mappedData} />
}

export default BarChart
