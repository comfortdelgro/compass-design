import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {Icon, IconProp} from '../icon'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledAccordionTitle} from './accordionTitle.styles'

interface Props extends StyledComponentProps {
  title: string | React.ReactNode
  icon: false | IconProp
  expand: boolean
  setExpand: () => void
  onExpandedChange?:
    | ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined
}

export type AccordionTitleProps = Props

export const AccordionTitle = (props: AccordionTitleProps) => {
  const {icon, expand, title, css = {}, onExpandedChange, setExpand} = props

  const renderTitle = () => {
    //render title as h1 if it is a string
    if (typeof title === 'string') {
      return <h1>{title}</h1>
    }
    return title
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
}
