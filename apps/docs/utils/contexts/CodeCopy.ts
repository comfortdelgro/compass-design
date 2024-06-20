import React from 'react'

const CodeBlockContext = React.createContext<
  React.MutableRefObject<HTMLDivElement | null>
>({
  current: null,
})

export default CodeBlockContext
