import React, { useMemo, useState } from "react"
import { useDOMRef } from "../utils/use-dom-ref"
import CssInjection from "../utils/objectToCss/CssInjection"
import styles from './styles/accordion.module.css'
import AccordionContext from "./accordion-context"
import AccordionTitle, { AccordionTitleProps } from "./accordion-title"
import { pickChild } from "../utils/pick-child"
import AccordionExpandIcon, { AccordionExpandIconProps } from "./accordion-expandIcon"

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

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
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
  console.log(uncontrolledExpand)
  const accordionRef = useDOMRef<HTMLDivElement>(ref)

  const expand: boolean = useMemo((() => {
    if (controlledExpand !== undefined) {
      return controlledExpand
    }
    return uncontrolledExpand
  }), [controlledExpand, uncontrolledExpand])


  // Toggle expansion state only when user doesnt control the component
  const setExpandIfUncontrolled = React.useCallback(() => {
    if (!controlledExpand !== undefined) {
      setUncontrolledExpand((prevState) => !prevState)
    }
  }, [])

  const contextValue = React.useMemo(
    () => ({ expand, setExpand: setExpandIfUncontrolled, onExpandChange }),
    [expand, setExpandIfUncontrolled, onExpandChange],
  )

  const { child: AccordionTitleElement, rest: NotAccordionaTitleElement } =
    pickChild<React.ReactElement<AccordionTitleProps>>(
      children,
      AccordionTitle,
    )

  // pick accordion expand icon from NotAccordionaTitleElement
  const { child: AccordionExpandIconElement, rest: AccordionContent } =
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

  return <CssInjection css={css} childrenRef={accordionRef}>
    <div className={`${className} ${styles.accordion}`} {...delegated} ref={accordionRef}>
      <AccordionContext.Provider value={contextValue}>
        {AccordionTitleWithIcon}
        <div className={`${styles['accordion-body-inner']}`}>{AccordionContent}</div>
      </AccordionContext.Provider>
    </div>
  </CssInjection>
})


export default Accordion
