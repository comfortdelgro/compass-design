import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/page-header-description.module.css'

interface Props {
  css?: CSS
  children: React.ReactNode
}

export type PageHeaderDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const PageHeaderDescription = React.forwardRef<
  HTMLDivElement,
  PageHeaderDescriptionProps
>((props, ref) => {
  const {children, css = {}, className, ...delegated} = props

  const rootClasses = classNames(
    styles.pageHeaderDescription,
    className,
    'cdg-page-header-description',
  )

  return (
    <CssInjection css={css} childrenRef={ref}>
      <p {...delegated} className={rootClasses} ref={ref}>
        {children}
      </p>
    </CssInjection>
  )
})

export default PageHeaderDescription
