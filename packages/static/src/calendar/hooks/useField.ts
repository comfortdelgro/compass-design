/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */

import {
  DOMAttributes,
  HelpTextProps,
  LabelAria,
  LabelAriaProps,
  Validation,
} from '../types'
import {useLabel} from './useLabels'
import {useSlotId} from './useSlotId'

export interface AriaFieldProps
  extends LabelAriaProps,
    HelpTextProps,
    Omit<Validation, 'isRequired'> {}

export interface FieldAria extends LabelAria {
  descriptionProps: DOMAttributes
  errorMessageProps: DOMAttributes
}

export function useField(props: AriaFieldProps): FieldAria {
  const {description, errorMessage, validationState} = props
  // eslint-disable-next-line prefer-const
  let {labelProps, fieldProps} = useLabel(props)

  const descriptionId = useSlotId([
    Boolean(description),
    Boolean(errorMessage),
    validationState,
  ])
  const errorMessageId = useSlotId([
    Boolean(description),
    Boolean(errorMessage),
    validationState,
  ])

  fieldProps = {
    ...fieldProps,
    ...{
      'aria-describedby':
        [descriptionId, errorMessageId, props['aria-describedby']]
          .filter(Boolean)
          .join(' ') || undefined,
    },
  }

  return {
    labelProps,
    fieldProps,
    // @ts-ignore
    descriptionProps: {
      id: descriptionId,
    },
    // @ts-ignore
    errorMessageProps: {
      id: errorMessageId,
    },
  }
}
