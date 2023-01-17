import React from 'react'
import {styled} from '../../theme'
import {StyledComponentProps} from '../../utils/stitches.types'

interface Props extends StyledComponentProps {
  variant?: 'link1' | 'link2' | 'link3'
  weight?: 'none' | 'emphasis'
  children: React.ReactNode
}

const Link: React.FC<Props> = (props) => {
  const {css = {}, children, weight = 'none', variant = 'link1'} = props

  const StyledLink = styled('a', {
    width: '100%',
    padding: 0,
    margin: 0,
    color: '#009EDA',
    textDecoration: 'underline',
    variants: {
      weight: {
        none: {},
        emphasis: {
          fontWeight: '$bold',
        },
      },
      variant: {
        link1: {
          fontSize: '1.25rem',
          fontWeight: '$semibold',
          lineHeight: '1.875rem',
        },
        link2: {
          fontSize: '1rem',
          fontWeight: '$medium',
          lineHeight: '1.5rem',
        },
        link3: {
          fontSize: '0.875rem',
          fontWeight: '$medium',
          lineHeight: '1.3125rem',
        },
      },
    },
  })

  return (
    <StyledLink css={css} variant={variant} weight={weight}>
      {children}
    </StyledLink>
  )
}

export default Link
