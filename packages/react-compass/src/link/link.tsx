import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {LinkVariantProps, StyledLink} from './link.styles'

interface Props extends StyledComponentProps {
  href?: string
  target?: string
  external?: boolean
  children?: React.ReactNode
}

export type LinkProps = Props & LinkVariantProps

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // ComponentProps
    href,
    target,
    external,
    children,
    // AriaLinkProps
    ...ariaSafeProps
  } = props

  const variantProps = {} as LinkVariantProps
  const linkRef = useDOMRef<HTMLAnchorElement>(ref)

  return (
    <StyledLink
      css={css}
      ref={linkRef}
      href={href}
      target={target || (external ? '_blank' : undefined)}
      rel={target === '_blank' || external ? 'noopener noreferrer' : undefined}
      {...ariaSafeProps}
      {...variantProps}
    >
      {children}
    </StyledLink>
  )
})

export default Link
