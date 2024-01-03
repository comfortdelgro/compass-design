import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/footer-nav.module.css'

interface Props {
  css?: unknown
  children?: React.ReactNode
  gridNumber?: number
  tabletGridNumber?: number
  component?: keyof JSX.IntrinsicElements
}

export type FooterNavigationProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FooterNavigation = React.forwardRef<
  HTMLDivElement,
  FooterNavigationProps
>((props, ref) => {
  const {
    children,
    // gridNumber,
    // tablet grid column number will be 3 by default if grid column number is greater than 3
    // tabletGridNumber = gridNumber >= 3 ? 3 : gridNumber,
    css = {},
    ...delegated
  } = props

  // const cssProps = {
  //   $$gridNumber: gridNumber,
  //   $$tabletGridNumber: tabletGridNumber,
  //   ...css as object,
  // }

  return (
    <CssInjection css={css} childrenRef={ref}>
      {React.createElement(
        'div',
        {
          ...delegated,
          className: `${styles.footerNav} cdg-footer-nav`,
          style: {
            // '--gridNumber': gridNumber,
            // '--tabletGridNumber': tabletGridNumber,
          },
          ref: ref,
        },
        children,
      )}
    </CssInjection>
  )
})

export default FooterNavigation
