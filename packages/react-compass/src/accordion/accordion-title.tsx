import React, {useContext} from 'react'
import {EKeyboardKey} from '../utils/keyboard.enum'
import AccordionButton from './accordion-button'
import AccordionContext, {AccordionContextType} from './accordion-context'
import styles from './styles/accordion-title.module.css'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  css?: unknown
  icon?: false | React.ReactNode
  children?: string | React.ReactNode
  expandIcon?: React.ReactNode
  'aria-expanded'?: boolean
  'aria-controls'?: string
}

export type AccordionTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const AccordionTitle = React.forwardRef<HTMLButtonElement, AccordionTitleProps>(
  (props, ref) => {
    const {
      icon = <DefaultIcon />,
      children,
      expandIcon,
      css = {},
      className,
      'aria-controls': ariaControls,
      ...delegated
    } = props

    const contextValue = useContext(AccordionContext) as AccordionContextType

    const {expand, onExpandChange, setExpand} = contextValue

    const renderTitle = () => {
      //render title as h1 if it is a string
      if (typeof children === 'string') {
        return <h1>{children}</h1>
      }
      return children
    }

    const handleKeyDown = (e?: unknown) => {
      const event = e as React.KeyboardEvent<HTMLElement>
      const {key} = event
      switch (key) {
        case EKeyboardKey.Spacebar:
        case EKeyboardKey.Enter:
          setExpand()
          if (onExpandChange) {
            onExpandChange(event)
          }
          break
        default:
          break
      }
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
      return <div className={styles.accordionLeftIconContainer}>{icon}</div>
    }

    return (
      <AccordionButton
        aria-controls={ariaControls}
        ref={ref}
        css={css}
        className={`accordion-title-container ${
          expand ? styles.open : ''
        } ${className}`}
        expand={expand}
        onMouseDown={(e) => handleOnClick(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      >
        <div className={`${styles.accordionTitleWrapper}`} {...delegated}>
          {renderLeftIcon()}
          <div className={`${styles.accordionTitle}`}>{renderTitle()}</div>
          <div className={styles.accordionChevronContainer}>
            {expandIcon ? expandIcon : <ChevronIcon />}
          </div>
        </div>
      </AccordionButton>
    )
  },
)

export default AccordionTitle

const DefaultIcon = () => (
  <svg viewBox='0 0 512 512'>
    <path
      fill='currentColor'
      d='M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z'
    />
  </svg>
)

const ChevronIcon = () => {
  return (
    <svg viewBox='0 0 512 512' className={styles.accordionChevronIcon}>
      <path
        fill='currentColor'
        d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'
      />
    </svg>
  )
}
