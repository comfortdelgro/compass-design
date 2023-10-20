/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {useLayoutEffect, useState} from 'react'
import {AriaLabeDescriptionProps} from '../types'

let descriptionId = 0
const descriptionNodes = new Map<string, {refCount: number; element: Element}>()

export function useDescription(description: string): AriaLabeDescriptionProps {
  const [id, setId] = useState<string | undefined>(undefined)

  useLayoutEffect(() => {
    if (!description) {
      return
    }

    let desc = descriptionNodes.get(description)
    if (!desc) {
      const id = `react-aria-description-${descriptionId++}`
      setId(id)

      const node = document.createElement('div')
      node.id = id
      node.style.display = 'none'
      node.textContent = description
      document.body.appendChild(node)
      desc = {refCount: 0, element: node}
      descriptionNodes.set(description, desc)
    } else {
      setId(desc.element.id)
    }

    desc.refCount++
    return () => {
      if (desc && --desc.refCount === 0) {
        desc.element.remove()
        descriptionNodes.delete(description)
      }
    }
  }, [description])

  return {
    'aria-describedby': description ? id : undefined,
  }
}
