import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {Icon} from '../icon'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'

interface Props extends StyledComponentProps {
  children: React.ReactNode
}

export type AccordionExpandIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const AccordionExpandIcon = React.forwardRef<
  HTMLDivElement,
  AccordionExpandIconProps
>((props: AccordionExpandIconProps, ref) => {
  const {children, css = {}} = props

  const expandRef = useDOMRef<HTMLDivElement>(ref)

  function hasClassNameProperty(
    element: React.ReactElement<any>,
  ): element is React.ReactElement<any> & {className?: string} {
    return true
  }

  const renderExpandIcon = () => {
    if (React.isValidElement(children) && hasClassNameProperty(children)) {
      return React.cloneElement(children, {
        className: 'accordion-chevron-icon',
        ref: expandRef,
        css: css,
      })
    }
    return <Icon className='accordion-chevron-icon' icon={faChevronDown} />
  }

  return <>{renderExpandIcon()}</>
})

export default AccordionExpandIcon
