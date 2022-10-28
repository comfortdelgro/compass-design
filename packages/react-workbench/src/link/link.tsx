import {useLink} from '@react-aria/link'
import type {AriaLinkProps} from '@react-types/link'
import type {CSS} from '@stitches/react'
import React, {useRef} from 'react'
import {LinkVariantProps, StyledLink} from './link.styles'

interface Props extends LinkVariantProps {
  css?: CSS
  external?: boolean
}

export type LinkProps = Props &
  Omit<React.ComponentPropsWithoutRef<'a'>, keyof Props>

const Link: React.FC<LinkProps> = ({
  css = {},
  href,
  target,
  external,
  children,
  ...delegated
}) => {
  const variantProps = {external} as LinkVariantProps

  const ref = useRef<HTMLAnchorElement>(null)
  const {linkProps} = useLink(delegated as AriaLinkProps, ref)

  return (
    <StyledLink
      ref={ref}
      css={css}
      href={href}
      target={target}
      rel={target === '_blank' || external ? 'noopener noreferrer' : undefined}
      {...delegated}
      {...linkProps}
      {...variantProps}
    >
      {children}
    </StyledLink>
  )
}

export default Link
