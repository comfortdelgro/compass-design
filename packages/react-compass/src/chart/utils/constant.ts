import {LegendPosition} from './type'

export const colorsDefault = [
  '#009EDA',
  '#D83B01',
  '#F8DB96',
  '#D1E8CF',
  '#fd6868',
  '#53cfc9',
  '#a2d925',
  '#decf3f',
  '#734fe9',
  '#cd82ad',
  '#006d92',
  '#de7c00',
  '#f33232',
  '#3f9a80',
  '#53c200',
  '#d7af00',
  '#4c26c9',
  '#d44d99',
]

export const DEFAULT_PLUGINS = (
  legendPosition: LegendPosition,
  title?: string,
) => {
  return {
    legend: {
      position: legendPosition,
      align: legendPosition === 'top' ? ('end' as const) : ('center' as const),
      labels: {
        usePointStyle: true,
        color: '#201F1E',
        font: {
          size: 12,
          weight: '600',
        },
      },
    },
    title: {
      display: !!title,
      padding: 24,
      align: 'start' as const,
      color: '#201F1E',
      font: {
        size: 24,
        weight: '600',
      },
      text: title,
    },
  }
}

export const DEFAULT_LAYOUT = {
  padding: {
    left: 16,
    right: 16,
  },
}

export const DEFAULT_VERTICAL_OPTIONS = (
  legendPosition: LegendPosition,
  title?: string,
  unit?: string,
) => {
  return {
    responsive: true,
    layout: DEFAULT_LAYOUT,
    scales: {
      x: {
        ticks: {
          color: '#009EDA',
          font: {
            size: 12,
            weight: '400',
          },
          padding: 8,
        },
        border: {
          color: '#D2D0CE',
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: !!unit,
          title: true,
          color: '#A19F9D',
          text: unit,
          font: {
            size: 12,
            weight: '600',
          },
        },
        ticks: {
          color: '#A19F9D',
          padding: 8,
          font: {
            size: 12,
            weight: '600',
          },
        },
        grid: {
          tickColor: '#ffffff',
        },
        border: {
          dash: [4, 4],
          color: '#ffffff',
        },
      },
    },
    plugins: DEFAULT_PLUGINS(legendPosition, title),
  }
}

export const DEFAULT_HORIZONTAL_OPTIONS = (
  legendPosition: LegendPosition,
  title?: string,
  unit?: string,
) => {
  return {
    indexAxis: 'y' as const,
    responsive: true,
    layout: DEFAULT_LAYOUT,
    scales: {
      y: {
        ticks: {
          color: '#A19F9D',
          font: {
            size: 12,
            weight: '400',
          },
          padding: 8,
        },
        border: {
          color: '#D2D0CE',
        },
        grid: {
          display: false,
        },
      },
      x: {
        title: {
          display: !!unit,
          title: true,
          color: '#A19F9D',
          text: unit,
          font: {
            size: 12,
            weight: '600',
          },
        },
        ticks: {
          color: '#009EDA',
          padding: 8,
          font: {
            size: 12,
            weight: '600',
          },
        },
        grid: {
          tickColor: '#ffffff',
        },
        border: {
          dash: [4, 4],
          color: '#ffffff',
        },
      },
    },
    plugins: DEFAULT_PLUGINS(legendPosition, title),
  }
}
