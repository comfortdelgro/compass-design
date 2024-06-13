import Accordion from './accordion'
import AccordionExpandIcon from './accordion-expandIcon'
import AccordionTable from './accordion-table'
import AccordionTitle from './accordion-title'

export type {AccordionProps} from './accordion'
export type {AccordionExpandIconProps} from './accordion-expandIcon'
export type {AccordionTableProps} from './accordion-table'
export type {AccordionTitleProps} from './accordion-title'

Accordion.Table = AccordionTable
Accordion.Title = AccordionTitle
Accordion.ExpandIcon = AccordionExpandIcon

Accordion.displayName = 'Accordion'
Accordion.Table.displayName = 'Accordion.Table'
Accordion.Title.displayName = 'Accordion.Title'
Accordion.ExpandIcon.displayName = 'Accordion.ExpandIcon'

export default Accordion
