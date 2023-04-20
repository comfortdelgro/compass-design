import {AriaLabelingProps, DOMProps} from '../types'
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
