import {useLayoutEffect, useState} from 'react'
import {AriaLabelingProps} from './useLabels'

let descriptionId = 0
const descriptionNodes = new Map<string, {refCount: number; element: Element}>()

export function useDescription(description: string): AriaLabelingProps {
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
