import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js'
import React, {useMemo} from 'react'
import {Doughnut} from 'react-chartjs-2'
import {useColors} from '../../theme'
import {Chart, DEFAULT_CIRCULAR_OPTIONS, buildData} from '../utils'

ChartJS.register(ArcElement, Tooltip, Legend)

export type DoughnutChartProps = Chart

const DoughnutChart: React.FC<DoughnutChartProps> = (props) => {
  const {data = [], labels = [], title, legendPosition = 'top'} = props

  const theme = useColors()

  const mappedData = useMemo(
    () => buildData(labels, data, 'doughnut'),
    [data, labels],
  )

  const options = DEFAULT_CIRCULAR_OPTIONS(theme, legendPosition, title)

  return <Doughnut options={options} data={mappedData} />
}

export default DoughnutChart
