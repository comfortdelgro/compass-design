import {Colors} from '../../theme'
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
  '#3366cc',
  '#dc3912',
  '#ff9900',
  '#109618',
  '#990099',
  '#0099c6',
  '#dd4477',
  '#66aa00',
  '#b82e2e',
  '#3366cc',
  '#994499',
  '#22aa99',
  '#aaaa11',
  '#6633cc',
  '#e67300',
  '#651067',
  '#329262',
  '#3b3eac',
  '#b77322',
  '#f4359e',
  '#16d620',
  '#5574a6',
  '#b91383',
  '#9c5935',
  '#a9c413',
  '#2a778d',
  '#668d1c',
  '#bea413',
  '#0c5922',
  '#743411',
]

export const DEFAULT_PLUGINS = (
  theme: Colors,
  legendPosition: LegendPosition,
  title?: string,
) => {
  return {
    legend: {
      position: legendPosition,
      align: legendPosition === 'top' ? ('end' as const) : ('center' as const),
      labels: {
        usePointStyle: true,
        color: theme.primaryText,
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
      color: theme.primaryText,
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
  theme: Colors,
  legendPosition: LegendPosition,
  title?: string,
  unit?: string,
) => {
  return {
    responsive: true,
    layout: DEFAULT_LAYOUT,
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: theme.info,
          font: {
            size: 12,
            weight: '600',
          },
          padding: 8,
        },
        grid: {
          borderColor: theme.gray60,
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: !!unit,
          title: true,
          color: theme.primaryText,
          text: unit,
          font: {
            size: 12,
            weight: '600',
          },
        },
        ticks: {
          color: theme.gray70,
          padding: 8,
          font: {
            size: 12,
            weight: '600',
          },
        },
        grid: {
          tickColor: 'transparent',
          borderColor: 'transparent',
          color: theme.gray60,
          borderDash: [4, 4],
          borderWidth: 1,
        },
      },
    },
    plugins: DEFAULT_PLUGINS(theme, legendPosition, title),
  }
}

export const DEFAULT_HORIZONTAL_OPTIONS = (
  theme: Colors,
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
        beginAtZero: true,
        ticks: {
          color: theme.gray70,
          font: {
            size: 12,
            weight: '600',
          },
          padding: 8,
        },
        grid: {
          display: false,
          borderColor: theme.gray60,
        },
      },
      x: {
        beginAtZero: true,
        title: {
          display: !!unit,
          title: true,
          color: theme.primaryText,
          text: unit,
          font: {
            size: 12,
            weight: '600',
          },
        },
        ticks: {
          color: theme.info,
          padding: 8,
          font: {
            size: 12,
            weight: '600',
          },
        },
        grid: {
          tickColor: 'transparent',
          borderColor: 'transparent',
          color: theme.gray60,
          borderDash: [4, 4],
          borderWidth: 1,
        },
      },
    },
    plugins: DEFAULT_PLUGINS(theme, legendPosition, title),
  }
}

export const DEFAULT_CIRCULAR_OPTIONS = (
  theme: Colors,
  legendPosition: LegendPosition,
  title?: string,
) => {
  return {
    responsive: true,
    layout: DEFAULT_LAYOUT,
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    plugins: DEFAULT_PLUGINS(theme, legendPosition, title),
  }
}
