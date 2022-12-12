import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledItemContentWrapper = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  height: 'fit-content',
  width: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginBottom: '$6',
  marginTop: '$6',
})

export const StyledItemDot = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  //styling
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '$6_5',
  height: '$6_5',
  borderRadius: '$full',
  backgroundColor: '$cdgBlue',
})

export const StyledItemLabel = styled('h3', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  //styling
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '$6_5',
  height: '$6_5',
  fontFamily: '$sans',
  fontWeight: '$bold',
  fontSize: '$header5',
})

export const StyledItemHeaderContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  //styling
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  gap: '$6',
  position: 'relative',
  right: '$12_5',
})

export const StyledItemContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  //styling
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const StyledTimelineContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // styling
  // overflow: 'hidden',
  boxShadow: '-1px 0 0 0 #D2D0CE',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '$4',
  paddingLeft: '$9_25',
  paddingRight: '$9_25',
  width: 'fit-content',

  variants: {
    mode: {
      vertical: {},
      horizontal: {},
    },
    labelAlignment: {
      right: {},
      left: {},
      top: {},
      bottom: {},
      alternate: {},
    },
    itemAlignment: {
      right: {},
      left: {},
      top: {},
      bottom: {},
      alternate: {},
    },
  },

  compoundVariants: [
    // Default compound
    {
      mode: 'vertical',
      labelAlignment: 'right',
      itemAlignment: 'right',
      css: {},
    },
    // compound with: vertical left-side label & left-side items
    {
      mode: 'vertical',
      labelAlignment: 'left',
      itemAlignment: 'left',
      css: {
        boxShadow: '1px 0 0 0 #D2D0CE',

        [`${StyledItemHeaderContainer}`]: {
          flexDirection: 'row-reverse',

          gap: '$6',
          position: 'relative',
          left: '$12_5',
        },
        [`${StyledItemLabel}`]: {
          justifyContent: 'flex-end',
        },
      },
    },

    // compound with: vertical left-side label & right-side items
    {
      mode: 'vertical',
      labelAlignment: 'left',
      itemAlignment: 'right',
      css: {
        [`${StyledItemHeaderContainer}`]: {
          flexDirection: 'row-reverse',
          justifyContent: 'flex-end',
          gap: '$6',
          position: 'relative',
          right: '6.3rem',
        },
        [`${StyledItemLabel}`]: {
          justifyContent: 'flex-end',
        },
      },
    },

    // compound with: vertical right-side label & left-side items
    {
      mode: 'vertical',
      labelAlignment: 'right',
      itemAlignment: 'left',
      css: {
        boxShadow: '1px 0 0 0 #D2D0CE',

        [`${StyledItemHeaderContainer}`]: {
          position: 'relative',
          left: '7rem',
        },
        [`${StyledItemLabel}`]: {
          //justifyContent: 'flex-end',
        },
      },
    },

    // compound with: vertical alternate
    {
      mode: 'vertical',
      labelAlignment: 'alternate',
      itemAlignment: 'alternate',
      css: {
        [`${StyledItemHeaderContainer}`]: {},
        [`${StyledItemLabel}`]: {},
        '& .header-even': {},
        '& .header-odd': {
          display: 'flex',
          flexDirection: 'row-reverse',
          position: 'relative',
          right: '7rem',
        },
        '& .label-odd': {
          display: 'flex',
          justifyContent: 'flex-end',
        },
        '& .content-even': {
          position: 'relative',
          right: '10.1rem',
        },
      },
    },

    // compount with: horizontal top label & bottom items
    {
      mode: 'horizontal',
      labelAlignment: 'top',
      itemAlignment: 'bottom',
      css: {
        boxShadow: '0 -1px 0 0 #D2D0CE',
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'flex-start',
        padding: '0',
        gap: '$39',
        [`${StyledItemHeaderContainer}`]: {
          display: 'flex',
          flexDirection: 'column-reverse',
          right: '0',
        },
        [`${StyledItemContainer}`]: {
          position: 'relative',
          bottom: '4rem',
          display: 'flex',
          justifyContent: 'flex-start',
        },
        [`${StyledItemContentWrapper}`]: {
          // display: 'flex',
          // justifyContent: 'flex-start',
        },
      },
    },
    {
      mode: 'horizontal',
      labelAlignment: 'bottom',
      itemAlignment: 'top',
      css: {
        boxShadow: '0 1px 0 0 #D2D0CE',
        display: 'flex',
        flexDirection: 'row',
        padding: '0',
        gap: '$39',
        [`${StyledItemHeaderContainer}`]: {
          display: 'flex',
          flexDirection: 'column',
          right: '0',
        },
        [`${StyledItemContainer}`]: {
          position: 'relative',
          top: '3.95rem',
          display: 'flex',
          justifyContent: 'flex-start',
          flexDirection: 'column-reverse',
        },
        [`${StyledItemContentWrapper}`]: {},
      },
    },
    {
      mode: 'horizontal',
      labelAlignment: 'alternate',
      itemAlignment: 'alternate',
      css: {
        boxShadow: '0 1px 0 0 #D2D0CE',
        display: 'flex',
        flexDirection: 'row',
        padding: '0',
        gap: '$39',
        [`${StyledItemHeaderContainer}`]: {
          display: 'flex',
          flexDirection: 'column',
          right: '0',
        },
        [`${StyledItemContainer}`]: {
          position: 'relative',
          top: '3.95rem',
          display: 'flex',
          justifyContent: 'flex-start',
          flexDirection: 'column-reverse',
        },
        [`${StyledItemContentWrapper}`]: {},
        '& .itemContainer-even': {
          flexDirection: 'column',
          top: '9.2rem',
        },
        '& .header-even': {
          flexDirection: 'column-reverse',
        },
      },
    },
  ],

  defaultVariants: {
    mode: 'vertical',
    labelAlignment: 'right',
    itemAlignment: 'right',
  },
})

export type TimelineVariantProps = VariantProps<typeof StyledTimelineContainer>
