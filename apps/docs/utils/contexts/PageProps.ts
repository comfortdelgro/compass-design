import {createContext} from 'react'
import {TPageProps} from 'utils/types'

interface PagePropsContextType {
  pageProps?: TPageProps
  setPageProps?: (pageProps: TPageProps) => void
}

const PagePropsContext = createContext<PagePropsContextType>({})

export default PagePropsContext
