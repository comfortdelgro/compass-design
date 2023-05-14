import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {Icon} from '../icon'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

interface CustomComponentProps {
  className?: string
}

export type AccordionExpandIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const AccordionExpandIcon = React.forwardRef<
  HTMLDivElement,
  AccordionExpandIconProps
>((props: AccordionExpandIconProps, ref) => {
  const {children, css = {}} = props

  const expandRef = useDOMRef<HTMLDivElement>(ref)

  const renderExpandIcon = () => {
    if (React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: 'accordion-chevron-icon',
        ref: expandRef,
        css: css,
      } as CustomComponentProps)
    }
    return <Icon className='accordion-chevron-icon' icon={faChevronDown} />
  }

  return <>{renderExpandIcon()}</>
})

export default AccordionExpandIcon
