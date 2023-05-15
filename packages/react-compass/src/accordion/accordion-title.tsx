import {faQuestionCircle} from '@fortawesome/free-regular-svg-icons'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import React, {useContext} from 'react'
import {Icon, IconProp} from '../icon'
import {StyledComponentProps} from '../utils/stitches.types'
import AccordionButton from './accordion-button'
import AccordionContext, {AccordionContextType} from './accordion-context'
import {StyledAccordionTitleWrapper} from './accordion-title.styles'

interface Props extends StyledComponentProps {
  icon?: false | IconProp
  children: string | React.ReactNode
}

export type AccordionTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const AccordionTitle = React.forwardRef<HTMLButtonElement, AccordionTitleProps>(
  (props: AccordionTitleProps, ref) => {
    const {icon = faQuestionCircle, children, css = {}} = props

    const contextValue = useContext(AccordionContext) as AccordionContextType

    const {expand, onExpandChange, setExpand} = contextValue

    const renderTitle = () => {
      //render title as h1 if it is a string
      if (typeof children === 'string') {
        return <h1>{children}</h1>
      }
      return children
    }

    const handleOnClick = (e?: unknown) => {
      const event = e as React.MouseEvent<HTMLElement, MouseEvent>
      //will only trigger if accordion is uncontrolled
      setExpand()

      //trigger user callback if exist
      if (onExpandChange) {
        onExpandChange(event)
      }
    }

    const renderLeftIcon = () => {
      if (icon === false) return null
      return (
        <div className='accordion-left-icon-container'>
          <Icon icon={icon} className='accordion-left-icon' />
        </div>
      )
    }

    return (
      <AccordionButton
        ref={ref}
        css={css}
        className={`accordion-title-container ${expand ? 'open' : 'close'}`}
        expand={expand ? 'open' : 'close'}
        onPress={(e) => handleOnClick(e)}
      >
        <StyledAccordionTitleWrapper expand={expand ? 'open' : 'close'}>
          {renderLeftIcon()}
          <div className='accordion-title'>{renderTitle()}</div>
          <div className='accordion-chevron-container'>
            <Icon className='accordion-chevron-icon' icon={faChevronDown} />
          </div>
        </StyledAccordionTitleWrapper>
      </AccordionButton>
    )
  },
)

export default AccordionTitle
