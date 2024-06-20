import {PropsWithChildren, useState} from 'react'
import {TPageProps} from '../utils/types/common'
import PagePropsContext from 'utils/contexts/PageProps'

const PagePropsProvider = (props: PropsWithChildren<unknown>) => {
  const [pageProps, setPageProps] = useState<TPageProps>({})

  return (
    <PagePropsContext.Provider value={{pageProps, setPageProps}}>
      {props.children}
    </PagePropsContext.Provider>
  )
}

export default PagePropsProvider
