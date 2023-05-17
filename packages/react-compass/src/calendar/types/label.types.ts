import {ElementType, LabelHTMLAttributes, ReactNode} from 'react'
import {DOMAttributes, LabelableProps} from './calendar.types'

export type LabelPosition = 'top' | 'side'
export type Alignment = 'start' | 'end'
export type NecessityIndicator = 'icon' | 'label'

export interface DOMProps {
  id?: string
}

export interface AriaLabeDescriptionProps {
  'aria-describedby'?: string | undefined
}

export interface AriaLabelingProps extends AriaLabeDescriptionProps {
  'aria-label'?: string
  'aria-labelledby'?: string | undefined
  'aria-details'?: string
  'aria-disabled'?: boolean | undefined
  'aria-invalid'?: boolean | undefined
  'aria-selected'?: boolean | undefined
}

export interface LabelAriaProps
  extends LabelableProps,
    DOMProps,
    AriaLabelingProps {
  labelElementType?: ElementType
}

export interface LabelAria {
  labelProps: DOMAttributes | LabelHTMLAttributes<HTMLLabelElement>
  fieldProps: AriaLabelingProps & DOMProps
}

export interface SpectrumLabelableProps extends LabelableProps {
  labelPosition?: LabelPosition
  labelAlign?: Alignment
  necessityIndicator?: NecessityIndicator
  isRequired?: boolean
  contextualHelp?: ReactNode
}
