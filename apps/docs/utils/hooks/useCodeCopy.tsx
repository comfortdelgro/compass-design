import React from 'react'
import CodeBlockContext from 'utils/contexts/CodeCopy'

export default function useCodeCopy(): any {
  const rootNode = React.useContext(CodeBlockContext)
  return {
    onMouseEnter: (event: React.MouseEvent) => {
      rootNode.current = event.currentTarget as HTMLDivElement
    },
    onMouseLeave: (event: React.MouseEvent) => {
      if (rootNode.current === event.currentTarget) {
        ;(
          rootNode.current.querySelector(
            '.cdg-copy',
          ) as null | HTMLButtonElement
        )?.blur()
        rootNode.current = null
      }
    },
    onFocus: (event: React.MouseEvent) => {
      rootNode.current = event.currentTarget as HTMLDivElement
    },
    onBlur: (event: React.FocusEvent) => {
      if (rootNode.current === event.currentTarget) {
        rootNode.current = null
      }
    },
  }
}
