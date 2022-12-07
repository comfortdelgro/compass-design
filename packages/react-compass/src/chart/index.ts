import AreaChart from './area'
import BarChart from './bar'
import ColumnChart from './column'
import LineChart from './line'

export type {AreaChartProps} from './area'
export type {BarChartProps} from './bar'
export type {ColumnChartProps} from './column'
export type {LineChartProps} from './line'

const Chart = {
  Column: ColumnChart,
  Bar: BarChart,
  Line: LineChart,
  Area: AreaChart,
}

export default Chart
