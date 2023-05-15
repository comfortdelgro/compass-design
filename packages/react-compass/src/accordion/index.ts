import Accordion from './accordion'
import AccordionTable from './accordion-table'
import AccordionTitle from './accordion-title'

export type {AccordionProps} from './accordion'
export type {AccordionTableProps} from './accordion-table'
export type {AccordionTitleProps} from './accordion-title'

Accordion.Table = AccordionTable
Accordion.Title = AccordionTitle

Accordion.Table.displayName = 'Accordion.Table'
Accordion.Title.displayName = 'Accordion.Title'
Accordion.displayName = 'Accordion'

export default Accordion
