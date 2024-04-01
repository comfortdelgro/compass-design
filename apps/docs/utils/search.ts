import routes from 'constants/routes'
import {TSearchItem} from 'types/common'

export const getDataSearch = (): TSearchItem[] => {
  const result: TSearchItem[] = []
  routes.forEach((route) => {
    if (route.children) {
      const childrenRoutes = route.children.map((childrenRoute) => {
        return {
          parent: route.title,
          title: childrenRoute.title,
          pathname: `${route.pathname}${childrenRoute.pathname}`,
          description: childrenRoute.description,
        }
      })
      result.push(...childrenRoutes)
    }
  })
  return result
}
