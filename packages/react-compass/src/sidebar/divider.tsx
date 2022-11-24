import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledDivider} from './divider.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type DividerProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Divider = React.forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const {className = '', ...delegated} = props
  return (
    <StyledDivider
      className={`${className} divider`}
      ref={ref}
      {...delegated}
    />
  )
})

export default Divider
