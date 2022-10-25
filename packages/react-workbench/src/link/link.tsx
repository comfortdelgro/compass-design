import {useLink} from '@react-aria/link'
import type {AriaLinkProps} from '@react-types/link'
import React, {useRef} from 'react'
import {LinkVariantProps, StyledLink} from './link.styles'

interface Props extends LinkVariantProps {
  external?: boolean
}

export type LinkProps = Props &
  Omit<React.ComponentPropsWithoutRef<'a'>, keyof Props>

const Link: React.FC<LinkProps> = ({
  href,
  target,
  external = false,
  children,
  ...ariaProps
}) => {
  const variantProps = {external} as LinkVariantProps

  const ref = useRef<HTMLAnchorElement>(null)
  const {linkProps} = useLink(ariaProps as AriaLinkProps, ref)

  return (
    <StyledLink
      ref={ref}
      href={href}
      target={target}
      rel={target === '_blank' || external ? 'noopener noreferrer' : undefined}
      {...linkProps}
      {...variantProps}
    >
      {children}
    </StyledLink>
  )
}

export default Link
