import React, {useMemo, useState} from 'react'
import {Transitions} from '..'
import CssInjection from '../utils/objectToCss/CssInjection'
import {pickChild} from '../utils/pick-child'
import {useDOMRef} from '../utils/use-dom-ref'
import AccordionContext from './accordion-context'
import AccordionExpandIcon, {
  AccordionExpandIconProps,
} from './accordion-expandIcon'
import AccordionTable from './accordion-table'
import AccordionTitle, {AccordionTitleProps} from './accordion-title'
import styles from './styles/accordion.module.css'

interface Props {
  css?: unknown
  expand?: boolean
  defaultExpand?: boolean
  children: React.ReactNode
  onExpandChange?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  'aria-labelledby'?: string
}

export type AccordionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

// eslint-disable-next-line react-refresh/only-export-components
const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      expand: controlledExpand, //map the prop to a different name
      defaultExpand = false,
      children,
      className,
      onExpandChange,
      // HTML Div props
      ...delegated
    } = props

    const [uncontrolledExpand, setUncontrolledExpand] = useState(defaultExpand)
    const accordionRef = useDOMRef<HTMLDivElement>(ref)
    const accordionBodyRef = useDOMRef<HTMLDivElement>(null)

    const expand: boolean = useMemo(() => {
      if (controlledExpand !== undefined) {
        return controlledExpand
      }
      return uncontrolledExpand
    }, [controlledExpand, uncontrolledExpand])

    // Toggle expansion state only when user doesnt control the component
    const setExpandIfUncontrolled = React.useCallback(() => {
      if (!controlledExpand !== undefined) {
        setUncontrolledExpand((prevState) => !prevState)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const contextValue = React.useMemo(
      () => ({expand, setExpand: setExpandIfUncontrolled, onExpandChange}),
      [expand, setExpandIfUncontrolled, onExpandChange],
    )

    const {child: AccordionTitleElement, rest: NotAccordionaTitleElement} =
      pickChild<React.ReactElement<AccordionTitleProps>>(
        children,
        AccordionTitle,
      )

    // pick accordion expand icon from NotAccordionaTitleElement
    const {child: AccordionExpandIconElement, rest: AccordionContent} =
      pickChild<React.ReactElement<AccordionExpandIconProps>>(
        NotAccordionaTitleElement,
        AccordionExpandIcon,
      )

    const AccordionTitleWithIcon =
      AccordionTitleElement && AccordionExpandIconElement
        ? React.cloneElement(AccordionTitleElement, {
            expandIcon: AccordionExpandIconElement,
          })
        : AccordionTitleElement

    return (
      <CssInjection css={css} childrenRef={accordionRef}>
        <div
          className={`${styles.accordion} ${className}`}
          {...delegated}
          ref={accordionRef}
        >
          <AccordionContext.Provider value={contextValue}>
            {AccordionTitleWithIcon}
            <Transitions
              role='region'
              aria-labelledby={props['aria-labelledby']}
              ref={accordionBodyRef}
              isLazyMounted={true}
              show={expand}
            >
              <div className={`${styles.accordionBodyInner}`}>
                {AccordionContent}
              </div>
            </Transitions>
          </AccordionContext.Provider>
        </div>
      </CssInjection>
    )
  },
)

export default Accordion as typeof Accordion & {
  Table: typeof AccordionTable
  Title: typeof AccordionTitle
  ExpandIcon: typeof AccordionExpandIcon
}
