import React from 'react'
import {styled} from '../theme'
import {StyledComponentProps} from '../utils/stitches.types'
import {DividerWrapper, StyledDividerRootConfig} from './divider.styles'

interface Props extends StyledComponentProps {
  color?: string
  flexItem?: boolean
  absolute?: boolean
  children?: React.ReactNode
  component?: keyof JSX.IntrinsicElements
  textAlign?: 'center' | 'right' | 'left' | 'top' | 'bottom'
  orientation?: 'vertical' | 'horizontal'
  variant?: 'fullWidth' | 'inset' | 'middle'
}

export type DividerProps = Props

const Divider = React.forwardRef<HTMLElement, DividerProps>((props, ref) => {
  const {
    children,
    css = {},
    absolute = false,
    flexItem = false,
    color = '#0000001f',
    textAlign = 'center',
    variant = 'fullWidth',
    orientation = 'horizontal',
    component = children ? 'div' : 'hr',
    ...delegated
  } = props

  const StyledDividerRoot = styled(component, StyledDividerRootConfig)

  return (
    <StyledDividerRoot
      css={{...css, ...{$$color: color}}}
      ref={ref}
      variant={variant}
      orientation={orientation}
      absolute={absolute}
      flexItem={flexItem}
      textAlign={textAlign}
      hasChildren={!!children}
      {...delegated}
    >
      {children && (
        <DividerWrapper orientation={orientation}>{children}</DividerWrapper>
      )}
    </StyledDividerRoot>
  )
})

export default Divider
