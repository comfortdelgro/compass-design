import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/footer-nav.module.css'

interface Props {
  css?: CSS
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
          className: classNames(styles.footerNav, 'cdg-footer-nav'),
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
