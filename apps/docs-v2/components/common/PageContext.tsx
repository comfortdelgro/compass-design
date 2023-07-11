import * as React from 'react'

const PageContext = React.createContext<{
  activePage: null
  pages: any
  productId: any
}>(undefined!)

if (process.env.NODE_ENV !== 'production') {
  PageContext.displayName = 'PageContext'
}

export default PageContext
