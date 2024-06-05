import React, {FC, useEffect, useState} from 'react'

interface NoSsrProps {
  children: React.ReactNode
  defer?: boolean
}

const NoSsr: FC<NoSsrProps> = (props) => {
  const {children, defer = false} = props
  const [shouldRender, setShouldRender] = useState(!defer)

  useEffect(() => {
    if (defer) {
      setShouldRender(true)
    }
  }, [defer])

  return shouldRender ? <>{children}</> : null
}

export default NoSsr
