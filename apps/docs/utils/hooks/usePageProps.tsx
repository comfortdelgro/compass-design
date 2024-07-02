import {useContext} from 'react'
import PagePropsContext from 'utils/contexts/PageProps'

export const usePageProps = () => {
  return useContext(PagePropsContext)
}

export default usePageProps
