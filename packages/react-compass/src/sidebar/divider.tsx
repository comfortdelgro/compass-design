import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledDivider} from './divider.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type DividerProps = Props

const Divider = React.forwardRef<HTMLDivElement, DividerProps>((_, ref) => {
  return <StyledDivider className='divider' ref={ref} />
})

export default Divider
