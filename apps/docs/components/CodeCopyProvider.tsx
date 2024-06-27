import React from 'react'
import CodeCopyContext from 'utils/contexts/CodeCopy'
import useCodeCopyEvent from 'utils/hooks/useCodeCopyEvent'

interface CodeCopyProviderProps {
  children: React.ReactNode
}

/**
 * Place <CodeCopyProvider> at the page level. It will check the keydown event and try to initiate copy click if rootNode exist.
 * Any code block inside the tree can set the rootNode when mouse enter to leverage keyboard copy.
 */
export default function CodeCopyProvider({children}: CodeCopyProviderProps) {
  const rootNode = React.useRef<HTMLDivElement | null>(null)
  useCodeCopyEvent()
  return (
    <CodeCopyContext.Provider value={rootNode}>
      {children}
    </CodeCopyContext.Provider>
  )
}
