export interface DOMProps {
  id?: string
}

export interface AriaLabeDescriptionProps {
  'aria-describedby'?: string | undefined
}

export interface AriaLabelingProps extends AriaLabeDescriptionProps {
  'aria-label': string
  'aria-labelledby': string | undefined
  'aria-details'?: string
}
