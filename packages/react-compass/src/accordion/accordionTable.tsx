import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledAccordionTable} from './accordionTable.styles'

interface Props extends StyledComponentProps {
  children: React.ReactNode
}

export type AccordionTableProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const AccordionTable = React.forwardRef<HTMLDivElement, AccordionTableProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    const accordionTableRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <StyledAccordionTable {...delegated} css={css} ref={accordionTableRef}>
        {children}
      </StyledAccordionTable>
    )
  },
)

export default AccordionTable
