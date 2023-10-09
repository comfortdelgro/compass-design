export type ChartType = 'area' | 'line' | 'bar' | 'column' | 'doughnut'

export type LegendPosition = 'top' | 'bottom' | 'right' | 'left'

export interface Dataset {
  label: string
  data: number[]
  backgroundColor?: string | string[]
  borderColor?: string | string[]
}

export interface Chart {
  labels: string[]
  data: Dataset[]
  unit?: string
  title?: string
  hideYAxis?: boolean
  hideXAxis?: boolean
  legendPosition?: LegendPosition
}
