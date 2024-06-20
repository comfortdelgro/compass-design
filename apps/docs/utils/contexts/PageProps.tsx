import {createContext} from 'react'
import {TPageProps} from 'utils/types/common'

interface PagePropsContextType {
  pageProps?: TPageProps
  setPageProps?: (pageProps: TPageProps) => void
}

const PagePropsContext = createContext<PagePropsContextType>({})

export default PagePropsContext
