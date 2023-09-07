export const getPathStatic = (path: string) => {
  if (process.env.NODE_ENV === 'production') {
    return `/react-compass${path}`
  } else return path
}
