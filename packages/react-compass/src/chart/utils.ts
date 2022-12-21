import {useEffect, useState} from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export const colors = ['#009EDA', '#D83B01', '#F8DB96', '#D1E8CF']

type Data = Array<{
  title: string
  data: number[]
}>
export interface DataSet {
  data: Data
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

const getMaxValueOfYAxis = (x: number) => {
  if (x < 10) return 10
  const divider = +`5${Array(Math.max(x.toString().length - 2, 1))
    .fill(0)
    .join('')}`
  if (x % divider === 0) x = x + 1
  return Math.ceil(x / divider) * divider
}

export const getStep = (data: Data) => {
  const arr = []
  for (const i of data) {
    for (const j of i.data) {
      arr.push(j)
    }
  }
  const x = Math.max(...arr)
  const result = []
  const max = getMaxValueOfYAxis(x)
  console.log(max)
  const step = max / 10
  for (let i = 0; i <= 10; i++) {
    result.push(i * step)
  }
  return result
}
