import React from 'react'
import {styled} from '../../theme'
import {StyledComponentProps} from '../../utils/stitches.types'

interface Props extends StyledComponentProps {
  variant?: 'link1' | 'link2' | 'link3'
  weight?: 'none' | 'semibold' | 'bold'
  children: React.ReactNode
}

export type linkTypographyProps = Props &
  Omit<React.HTMLAttributes<HTMLAnchorElement>, keyof Props>

const Link: React.FC<linkTypographyProps> = (props) => {
  const {
    css = {},
    children,
    weight = 'none',
    variant = 'link1',
    ...delegated
  } = props

  const StyledLink = styled('a', {
    width: '100%',
    padding: 0,
    margin: 0,
    color: '#009EDA',
    textDecoration: 'underline',
    variants: {
      weight: {
        none: {},
        semibold: {
          fontWeight: '$semibold',
        },
        bold: {
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
    <StyledLink css={css} variant={variant} weight={weight} {...delegated}>
      {children}
    </StyledLink>
  )
}

export default Link
