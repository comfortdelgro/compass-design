import {createContext, PropsWithChildren, useContext, useState} from 'react'
import {TPageProps} from '../types/common'

interface PagePropsContextType {
  pageProps?: TPageProps
  setPageProps?: (pageProps: TPageProps) => void
}

const PagePropsContext = createContext<PagePropsContextType>({})

const PagePropsProvider = (props: PropsWithChildren<unknown>) => {
  const [pageProps, setPageProps] = useState<TPageProps>({})

  return (
    <PagePropsContext.Provider value={{pageProps, setPageProps}}>
      {props.children}
    </PagePropsContext.Provider>
  )
}

export const usePageProps = () => {
  return useContext(PagePropsContext)
}

export default PagePropsProvider
