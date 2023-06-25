import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
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
  Filler,
  Legend,
)

export type AreaChartProps = Chart

const AreaChart: React.FC<AreaChartProps> = (props) => {
  const {data = [], labels = [], unit, title, legendPosition = 'top'} = props

  const theme = useColors()

  const mappedData = useMemo(
    () => buildData(labels, data, 'area'),
    [data, labels],
  )

  const options = DEFAULT_VERTICAL_OPTIONS(theme, legendPosition, title, unit)

  return <Line options={options} data={mappedData} />
}

export default AreaChart
