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
