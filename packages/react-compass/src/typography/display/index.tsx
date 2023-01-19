import React from 'react'
import {styled} from '../../theme'
import {StyledComponentProps} from '../../utils/stitches.types'
import {Component} from '../utils'

interface Props extends StyledComponentProps {
  variant?: 'display1' | 'display2' | 'display3'
  component?: Component
  children: React.ReactNode
}

const Display: React.FC<Props> = (props) => {
  const {css = {}, children, variant = 'display1', component} = props
  const tag = React.useMemo(() => {
    if (component) return component
    switch (variant) {
      case 'display1':
        return 'h1'
      case 'display2':
        return 'h2'
      case 'display3':
        return 'h3'
    }
  }, [variant])

  const StyledDisplay = styled(tag, {
    width: '100%',
    padding: 0,
    margin: 0,
    variants: {
      variant: {
        display1: {
          fontSize: '$display1',
          fontWeight: '$bold',
          lineHeight: '5.25rem',
        },
        display2: {
          fontSize: '$display2',
          fontWeight: '$bold',
          lineHeight: '4.5rem',
        },
        display3: {
          fontSize: '$display3',
          fontWeight: '$bold',
          lineHeight: '3.75rem',
        },
      },
    },
  })

  return (
    <StyledDisplay css={css} variant={variant}>
      {children}
    </StyledDisplay>
  )
}

export default Display
