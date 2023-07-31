import {styled} from '../theme'

export const StyledLayout = styled('div', {
  display: 'flex',
  overflow: 'auto',
  '&.column': {
    flexDirection: 'column',
  },
  '&.row': {
    flexDirection: 'row',
  },
  '&.start-start': {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  '&.center-start': {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  '&.end-start': {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  '&.start-center': {
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center',
  },
  '&.center-center': {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  '&.end-center': {
    alignItems: 'center',
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
  '&.start-end': {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    textAlign: 'right',
  },
  '&.center-end': {
    alignItems: 'flex-end',
    justifyContent: 'center',
    textAlign: 'center',
  },
  '&.end-end': {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
})
