export const getStaticPath = (path: string) => {
  if (process.env.NODE_ENV === 'production') {
    return `/compass-design${path}`
  } else return path
}
