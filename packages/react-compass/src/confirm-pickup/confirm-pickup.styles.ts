import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledConfirmPUPoint = styled('div', {
  padding: '$4_5',
  backgroundColor: '$background',
  borderRadius: '$xl $xl 0px 0px',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  '.pu-point-label': {
    fontSize: '$label3',
    lineHeight: '16px',
    fontWeight: 500,
    height: '$5',

    '> div': {
      marginBottom: '5px',
    },
  },
  '.pu-point-address': {
    backgroundColor: '$grayShades10',
    padding: '$3',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '> div': {
      maxWidth: '80%',
    },
  },

  '.pu-point-address__title': {
    fontSize: '$label1',
    fontWeight: 600,
    lineHeight: '20px',
    color: '$cdgBlue100',
    overflowX: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  '.pu-point-address__description': {
    fontSize: '$label2',
    fontWeight: 500,
    lineHeight: '18px',
    color: '$grayShades60',
    overflowX: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  '.pu-point-address__icon': {
    cursor: 'pointer',
    padding: 0,
    width: '$6',
    height: '$6',
    border: 'none',
    backgroundColor: 'transparent',
  },
  '.pu-specific-location': {
    backgroundColor: '$blueShades10',
    height: '40px',
    padding: '$3',
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
    color: '$blueShades120',
    '.pu-specific-location__name': {
      maxWidth: '90%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  },
})

export type ConfirmPUPointVariantProps = VariantProps<
  typeof StyledConfirmPUPoint
>
