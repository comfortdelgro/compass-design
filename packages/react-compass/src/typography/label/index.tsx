import React from 'react'
import {styled} from '../../theme'
import {StyledComponentProps} from '../../utils/stitches.types'
import {Component} from '../utils'

interface Props extends StyledComponentProps {
  variant?: 'label1' | 'label2' | 'label3'
  component?: Component
  weight?: 'none' | 'bold' | 'emphasis' | 'light'
  children: React.ReactNode
}

const Label: React.FC<Props> = (props) => {
  const {
    css = {},
    children,
    variant = 'label1',
    weight = 'none',
    component,
  } = props
  const tag = React.useMemo(() => {
    if (component) return component
    return 'p'
  }, [variant])

  const StyledLabel = styled(tag, {
    width: '100%',
    padding: 0,
    margin: 0,
    variants: {
      weight: {
        none: {},
        bold: {
          fontWeight: '$bold',
        },
        emphasis: {
          fontWeight: '$semibold',
        },
        light: {
          fontWeight: '$light',
        },
      },
      variant: {
        label1: {
          fontSize: '$label1',
          lineHeight: '1.3125rem',
        },
        label2: {
          fontSize: '$label2',
          lineHeight: '1.125rem',
        },
        label3: {
          fontSize: '$label3',
          lineHeight: '0.9375rem',
        },
      },
    },
  })

  return (
    <StyledLabel css={css} variant={variant} weight={weight}>
      {children}
    </StyledLabel>
  )
}

export default Label
