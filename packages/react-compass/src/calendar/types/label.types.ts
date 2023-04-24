export interface DOMProps {
  id: string
}

export interface AriaLabeDescriptionProps {
  'aria-describedby'?: string | undefined
}

export interface AriaLabelingProps extends AriaLabeDescriptionProps {
  'aria-label': string
  'aria-labelledby': string | undefined
  'aria-details'?: string
  'aria-disabled'?: boolean | undefined
  'aria-invalid'?: boolean | undefined
  'aria-selected'?: boolean | undefined
}
