export const colors = ['#009EDA', '#D83B01', '#F8DB96', '#D1E8CF']
export interface DataSet {
  labels: number[]
  data: Array<{
    title: string
    data: number[]
  }>
  legends?: string[]
}

export interface Line {
  x1: number
  y1: number
  x2: number
  y2: number
}

export interface Point {
  x: number
  y: number
}

export type LegendPosition = 'top' | 'bottom'
