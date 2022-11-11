import React, {useState} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledAccordion} from './accordion.styles'
import AccordionContext from './accordionContext'
import AccordionTable from './accordionTable'
import {AccordionTitle} from './accordionTitle'

interface Props extends StyledComponentProps {
  expand?: boolean
  defaultExpand?: boolean
  children: React.ReactNode
  onExpandedChange?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export type AccordionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      expand: controlledExpand, //map the prop to a different name
      defaultExpand = false,
      children: childrenProps,
      onExpandedChange,
      // HTML Div props
      ...delegated
    } = props

    const [uncontrolledExpand, setUncontrolledExpand] = useState(defaultExpand)

    // Decide component expansion state managed by its own or by user
    const expand: boolean = (() => {
      if (controlledExpand !== undefined) {
        return controlledExpand
      }
      return uncontrolledExpand
    })()

    // Toggle expansion state only when user doesnt control the component
    const setExpandIfUncontrolled = React.useCallback(() => {
      if (!controlledExpand !== undefined) {
        setUncontrolledExpand((prevState) => !prevState)
      }
    }, [])

    const contextValue = React.useMemo(
      () => ({expand, setExpand: setExpandIfUncontrolled, onExpandedChange}),
      [expand, setExpandIfUncontrolled, onExpandedChange],
    )

    const accordionRef = useDOMRef<HTMLDivElement>(ref)

    //get the first child as an accordion title
    const [accordionTitle, ...children] = React.Children.toArray(childrenProps)

    return (
      <StyledAccordion
        {...delegated}
        expand={expand ? 'open' : 'close'}
        css={css}
        ref={accordionRef}
      >
        <AccordionContext.Provider value={contextValue}>
          {accordionTitle}
          <div className='accordion-body'>{children}</div>
        </AccordionContext.Provider>
      </StyledAccordion>
    )
  },
)

export default Accordion as typeof Accordion & {
  Table: typeof AccordionTable
  Title: typeof AccordionTitle
}
