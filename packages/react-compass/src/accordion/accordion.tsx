import {faQuestionCircle} from '@fortawesome/free-regular-svg-icons'
import {CSS} from '@stitches/react'
import React, {useState} from 'react'
import {IconProp} from '../icon'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledAccordion} from './accordion.styles'
import AccordionTable from './accordionTable'
import {AccordionTitle} from './accordionTitle'

interface Props extends StyledComponentProps {
  titleCss?: CSS
  icon?: false | IconProp
  title: string | React.ReactNode
  expand?: boolean
  children: React.ReactNode
  defaultExpand?: boolean
  onExpandedChange?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export type AccordionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      titleCss = {},
      // ComponentProps
      title,
      icon = faQuestionCircle,
      expand: controlledExpand, //map the prop to a different name
      defaultExpand = false,
      children,
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

    // Toggle expansion state only if user doesnt control the component
    const setExpandIfUncontrolled = React.useCallback(() => {
      if (!controlledExpand !== undefined) {
        setUncontrolledExpand((prevState) => !prevState)
      }
    }, [])

    const accordionRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <StyledAccordion
        {...delegated}
        expand={expand ? 'open' : 'close'}
        css={css}
        ref={accordionRef}
      >
        <AccordionTitle
          css={titleCss}
          title={title}
          expand={expand}
          icon={icon}
          onExpandedChange={onExpandedChange}
          setExpand={setExpandIfUncontrolled}
        />
        <div className='accordion-body'>{children}</div>
      </StyledAccordion>
    )
  },
)

export default Accordion as typeof Accordion & {Table: typeof AccordionTable}
