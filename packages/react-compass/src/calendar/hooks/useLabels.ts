/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
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
    'aria-label': label as string,
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
    'aria-label': ariaLabel as string,
    'aria-labelledby': ariaLabelledby,
  })

  return {
    labelProps,
    fieldProps,
  }
}
