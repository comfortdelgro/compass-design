import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/link.module.css'

interface Props {
  href?: string
  target?: string
  external?: boolean
  children?: React.ReactNode
  css?: CSS
}

export type LinkProps = Props &
  Omit<React.HTMLAttributes<HTMLAnchorElement>, keyof Props>

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // ComponentProps
    href,
    target,
    external,
    children,
    // html props
    ...htmlProps
  } = props

  const linkRef = useDOMRef<HTMLAnchorElement>(ref)

  return (
    <>
      <CssInjection css={css}>
        <a
          {...htmlProps}
          href={href}
          role='link'
          tabIndex={0}
          ref={linkRef}
          className={classNames(styles.link, 'cdg-link')}
          target={target || (external ? '_blank' : undefined)}
          rel={
            target === '_blank' || external ? 'noopener noreferrer' : undefined
          }
        >
          {children}
        </a>
      </CssInjection>
    </>
  )
})

export default Link
