import {AriaLabelingProps, DOMProps, LabelAria, LabelAriaProps} from '../types'
import {useId} from './useId'

export function useLabels(
  props: DOMProps & AriaLabelingProps,
  defaultLabel?: string,
): DOMProps & AriaLabelingProps {
  let {id, 'aria-label': label, 'aria-labelledby': labelledBy} = props

  id = useId(id)
  if (labelledBy && label) {
    const ids = new Set([...labelledBy.trim().split(/\s+/), id])
    labelledBy = [...ids].join(' ')
  } else if (labelledBy) {
    labelledBy = labelledBy.trim().split(/\s+/).join(' ')
  }

  if (!label && !labelledBy && defaultLabel) {
    label = defaultLabel
  }

  return {
    id,
    'aria-label': label,
    'aria-labelledby': labelledBy,
  }
}

export function useLabel(props: LabelAriaProps): LabelAria {
  const {label, 'aria-label': ariaLabel, labelElementType = 'label'} = props
  let {id, 'aria-labelledby': ariaLabelledby} = props

  id = useId(id)
  const labelId = useId()
  let labelProps = {}
  if (label) {
    ariaLabelledby = ariaLabelledby ? `${ariaLabelledby} ${labelId}` : labelId
    labelProps = {
      id: labelId,
      htmlFor: labelElementType === 'label' ? id : undefined,
    }
  } else if (!ariaLabelledby && !ariaLabel) {
    console.warn(
      'If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility',
    )
  }

  const fieldProps = useLabels({
    id,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
  })

  return {
    labelProps,
    fieldProps,
  }
}
