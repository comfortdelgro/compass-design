import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

const calculateCols = (breakpoint: string) => {
  const cols = {
    1: {
      [`@media ${breakpoint}`]: {
        flexBasis: `${(1 / 12) * 100}%`,
      },
    },
    2: {
      [`@media ${breakpoint}`]: {
        flexBasis: `${(2 / 12) * 100}%`,
      },
    },
    3: {
      [`@media ${breakpoint}`]: {
        flexBasis: `${(3 / 12) * 100}%`,
      },
    },
    4: {
      [`@media ${breakpoint}`]: {
        flexBasis: `${(4 / 12) * 100}%`,
      },
    },
    5: {
      [`@media ${breakpoint}`]: {
        flexBasis: `${(5 / 12) * 100}%`,
      },
    },
    6: {
      [`@media ${breakpoint}`]: {
        flexBasis: `${(6 / 12) * 100}%`,
      },
    },
    7: {
      [`@media ${breakpoint}`]: {
        flexBasis: `${(7 / 12) * 100}%`,
      },
    },
    8: {
      [`@media ${breakpoint}`]: {
        flexBasis: `${(8 / 12) * 100}%`,
      },
    },
    9: {
      [`@media ${breakpoint}`]: {
        flexBasis: `${(9 / 12) * 100}%`,
      },
    },
    10: {
      [`@media ${breakpoint}`]: {
        flexBasis: `${(10 / 12) * 100}%`,
      },
    },
    11: {
      [`@media ${breakpoint}`]: {
        flexBasis: `${(11 / 12) * 100}%`,
      },
    },
    12: {
      [`@media ${breakpoint}`]: {
        flexBasis: `${(12 / 12) * 100}%`,
      },
    },
  }
  return cols
}

export const StyledGridItem = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // styling
  display: 'block',
  variants: {
    xs: {...calculateCols('(min-width: 0px) and (max-width: 600px)')},
    sm: {...calculateCols('(min-width: 600px) and (max-width: 900px)')},
    md: {...calculateCols('(min-width: 900px) and (max-width: 1200px)')},
    lg: {...calculateCols('(min-width: 1200px) and (max-width: 1536px)')},
    xl: {...calculateCols('(min-width: 1536px) and (max-width: 1920px)')},
    xxl: {...calculateCols('(min-width: 1920px)')},
  },
})

export const StyledGridContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // styling
  display: 'flex',
  flexWrap: 'wrap',
  height: '100%',

  variants: {
    spacing: {
      sm: {
        margin: '-8px',
        [`& ${StyledGridItem}`]: {
          padding: '8px',
        },
      },
      md: {
        margin: '-16px',
        [`& ${StyledGridItem}`]: {
          padding: '16px',
        },
      },
      lg: {
        margin: '-24px',
        [`& ${StyledGridItem}`]: {
          padding: '24px',
        },
      },
    },
    justifyContent: {
      flexStart: {
        justifyContent: 'flex-start',
      },
      flexEnd: {
        justifyContent: 'flex-end',
      },
      center: {
        justifyContent: 'center',
      },
      spaceBetween: {
        justifyContent: 'space-between',
      },
      spaceAround: {
        justifyContent: 'space-around',
      },
      spaceEvenly: {
        justifyContent: 'space-evenly',
      },
    },
    alignItems: {
      flexStart: {
        alignItems: 'flex-start',
      },
      flexEnd: {
        alignItems: 'flex-end',
      },
      center: {
        alignItems: 'center',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
  },
})

export type GridContainerVariantProps = VariantProps<typeof StyledGridContainer>
export type GridItemVariantProps = VariantProps<typeof StyledGridItem>
