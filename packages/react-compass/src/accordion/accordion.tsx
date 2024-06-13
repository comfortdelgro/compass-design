import React, {useMemo, useState} from 'react'
import Transitions from '../transitions'
import {CSS, CssInjection} from '../utils/objectToCss'
import {pickChild} from '../utils/pick-child'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import AccordionContext from './accordion-context'
import AccordionExpandIcon from './accordion-expandIcon'
import AccordionTable from './accordion-table'
import AccordionTitle from './accordion-title'
import styles from './styles/accordion.module.css'

interface Props {
  css?: CSS
  expand?: boolean
  defaultExpand?: boolean
  onExpandChange?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export type AccordionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => {
    const {
      css = {},
      children,
      className,
      defaultExpand = false,
      expand: controlledExpand,
      onExpandChange,
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
      pickChild(children, AccordionTitle)

    // pick accordion expand icon from NotAccordionaTitleElement
    const {child: AccordionExpandIconElement, rest: AccordionContent} =
      pickChild(NotAccordionaTitleElement, AccordionExpandIcon)

    const AccordionTitleWithIcon =
      AccordionTitleElement && AccordionExpandIconElement
        ? React.cloneElement(AccordionTitleElement as React.ReactElement, {
            expandIcon: AccordionExpandIconElement,
          })
        : AccordionTitleElement

    const rootClasses = classNames(styles.accordion, className, 'cdg-accordion')

    return (
      <CssInjection css={css} childrenRef={accordionRef}>
        <div {...delegated} ref={accordionRef} className={rootClasses}>
          <AccordionContext.Provider value={contextValue}>
            {AccordionTitleWithIcon}
            <Transitions
              role='region'
              show={expand}
              isLazyMounted={true}
              ref={accordionBodyRef}
              aria-labelledby={props['aria-labelledby']}
            >
              <div
                className={classNames(
                  styles.accordionBodyInner,
                  'cdg-accordion-body',
                )}
              >
                {AccordionContent}
              </div>
            </Transitions>
          </AccordionContext.Provider>
        </div>
      </CssInjection>
    )
  },
) as typeof Accordion & {
  Table: typeof AccordionTable
  Title: typeof AccordionTitle
  ExpandIcon: typeof AccordionExpandIcon
}

export default Accordion
