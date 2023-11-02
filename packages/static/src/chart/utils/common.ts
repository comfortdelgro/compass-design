import {colorsDefault} from './constant'
import {ChartType, Dataset} from './type'

export function hexToRGB(hex: string | undefined, alpha: number) {
  if (!hex) return undefined
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  } else {
    return `rgba(${r}, ${g}, ${b}`
  }
}

export function buildData(labels: string[], data: Dataset[], type: ChartType) {
  return {
    labels,
    datasets: data.map((item, index) => {
      const fill = type === 'area'
      let backgroundColor
      let pointBackgroundColor
      let borderColor
      switch (type) {
        case 'line':
        case 'area':
          backgroundColor =
            item.backgroundColor ?? hexToRGB(colorsDefault[index], 0.1)

          borderColor =
            item.borderColor ?? item.backgroundColor ?? colorsDefault[index]

          pointBackgroundColor = borderColor

          break
        case 'bar':
        case 'column':
          backgroundColor = item.backgroundColor ?? colorsDefault[index]
          break
        case 'doughnut':
          backgroundColor = item.backgroundColor
            ? [...item.backgroundColor, ...colorsDefault]
            : colorsDefault
          break
        default:
          backgroundColor = colorsDefault[index]
      }
      return {
        ...item,
        fill,
        backgroundColor,
        pointBackgroundColor,
        borderColor,
      }
    }),
  }
}
