import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledDivider} from './divider.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

const Divider = React.forwardRef<HTMLDivElement, Props>((_, ref) => {
  return <StyledDivider ref={ref} />
})

export default Divider
