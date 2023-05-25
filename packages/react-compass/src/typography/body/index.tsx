import React from 'react'
import {styled} from '../../theme'
import {StyledComponentProps} from '../../utils/stitches.types'
import {Component} from '../utils'

interface Props extends StyledComponentProps {
  variant?: 'body1' | 'body2' | 'body3'
  component?: Component
  weight?: 'none' | 'bold' | 'semibold'
  children: React.ReactNode
}

const Body: React.FC<Props> = (props) => {
  const {
    css = {},
    children,
    variant = 'body1',
    weight = 'none',
    component,
    ...delegated
  } = props
  const tag = React.useMemo(() => {
    if (component) return component
    return 'p'
  }, [variant])

  const StyledHeader = styled(tag, {
    width: '100%',
    padding: 0,
    margin: 0,
    color: '$primaryText',
    variants: {
      weight: {
        none: {},
        bold: {
          fontWeight: '$bold',
        },
        semibold: {
          fontWeight: '$semibold',
        },
      },
      variant: {
        body1: {
          fontSize: '$body1',
          lineHeight: '1.875rem',
        },
        body2: {
          fontSize: '$body2',
          lineHeight: '1.5rem',
        },
        body3: {
          fontSize: '$body3',
          lineHeight: '1.3125rem',
        },
      },
    },
  })

  return (
    <StyledHeader css={css} variant={variant} weight={weight} {...delegated}>
      {children}
    </StyledHeader>
  )
}

export default Body
