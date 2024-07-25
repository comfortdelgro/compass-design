'use client'
import React, {FC} from 'react'
import {CSS, objectToCSS} from '.'
import generateRandomString from '../generateRandomString'
import {classNames} from '../string'

export interface Props {
  children?: React.ReactNode
  css?: CSS
  childrenRef?: React.Ref<HTMLElement>
}

const CssInjection: FC<Props> = (props) => {
  const {children, css, childrenRef} = props

  // Generate a unique class name for the children
  const [additionalClasses, setAdditionalClasses] = React.useState('')

  React.useEffect(() => {
    const childClassName: string = generateRandomString('cdg')
    setAdditionalClasses(childClassName)
  }, [childrenRef])

  React.useInsertionEffect(() => {
    if (additionalClasses === '') return
    if (!css) return
    const cssString = objectToCSS(css, [`.${additionalClasses}`])
    const styleElement = document.createElement('style')
    styleElement.setAttribute('data-cdg', 'css')
    styleElement.textContent = cssString
    document.head.appendChild(styleElement)
    return () => {
      document.head.removeChild(styleElement)
    }
  }, [css, additionalClasses])

  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      // Cast child to include className property
      const childWithClassName = child as React.DetailedReactHTMLElement<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
      // Clone the child element and add additional classes
      return React.cloneElement(childWithClassName, {
        className: classNames(
          childWithClassName.props.className,
          additionalClasses,
        ),
      })
    }
    return child as React.ReactNode
  })
}

export default CssInjection
