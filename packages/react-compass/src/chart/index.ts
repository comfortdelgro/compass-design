import AreaChart from './area'
import BarChart from './bar'
import ColumnChart from './column'
import LineChart from './line'

export type {AreaChartProps} from './area'
export type {BarChartProps} from './bar'
export type {ColumnChartProps} from './column'
export type {LineChartProps} from './line'

// Aliases
interface ComposableChart {
  Column: typeof ColumnChart
  Bar: typeof BarChart
  Line: typeof LineChart
  Area: typeof AreaChart
}
const Chart: ComposableChart = {
  Column: ColumnChart,
  Bar: BarChart,
  Line: LineChart,
  Area: AreaChart,
}

Chart.Column.displayName = 'Chart.Column'
Chart.Bar.displayName = 'Chart.Bar'
Chart.Line.displayName = 'Chart.Line'
Chart.Area.displayName = 'Chart.Area'

export default Chart
