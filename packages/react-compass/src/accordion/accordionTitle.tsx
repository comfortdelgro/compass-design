import {faQuestionCircle} from '@fortawesome/free-regular-svg-icons'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import React, {useContext} from 'react'
import {Icon, IconProp} from '../icon'
import {StyledComponentProps} from '../utils/stitches.types'
import AccordionContext, {AccordionContextType} from './accordionContext'
import {StyledAccordionTitle} from './accordionTitle.styles'

interface Props extends StyledComponentProps {
  icon?: false | IconProp
  children: string | React.ReactNode
}

export type AccordionTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

export const AccordionTitle = React.forwardRef<
  HTMLDivElement,
  AccordionTitleProps
>((props: AccordionTitleProps, ref) => {
  const {icon = faQuestionCircle, children, css = {}} = props

  const contextValue = useContext(AccordionContext) as AccordionContextType

  const {expand, onExpandedChange, setExpand} = contextValue

  const renderTitle = () => {
    //render title as h1 if it is a string
    if (typeof children === 'string') {
      return <h1>{children}</h1>
    }
    return children
  }

  const handleOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    //will only trigger if accordion is uncontrolled
    setExpand()

    //trigger user callback if exist
    if (onExpandedChange) {
      onExpandedChange(e)
    }
  }

  const renderIcon = () => {
    if (icon === false) return null
    return (
      <div className='accordion-left-icon-container'>
        <Icon icon={icon} className='accordion-left-icon' />
      </div>
    )
  }

  return (
    <StyledAccordionTitle
      className={`accordion-title-wrapper ${expand ? 'open' : 'close'}`}
      expand={expand ? 'open' : 'close'}
      ref={ref}
      css={css}
      onClick={handleOnClick}
    >
      {renderIcon()}
      <div className='accordion-title'>{renderTitle()}</div>
      <div className='accordion-chevron-container'>
        <Icon className='accordion-chevron-icon' icon={faChevronDown} />
      </div>
    </StyledAccordionTitle>
  )
})
