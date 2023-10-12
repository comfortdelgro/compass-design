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
import {Chart, DEFAULT_VERTICAL_OPTIONS, buildData} from '../utils'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export type ColumnChartProps = Chart

const ColumnChart: React.FC<ColumnChartProps> = (props) => {
  const {data = [], labels = [], unit, title, legendPosition = 'top'} = props

  const theme = useColors()

  const mappedData = useMemo(
    () => buildData(labels, data, 'column'),
    [data, labels],
  )

  const options = DEFAULT_VERTICAL_OPTIONS(theme, legendPosition, title, unit)

  return <Bar options={options} data={mappedData} />
}

export default ColumnChart
