import useLazyCSS from 'utils/useLazyCSS'

export function ThemeProvider(props: {children: React.ReactNode}) {
  const {children} = props

  useLazyCSS('/static/styles/prism-okaidia.css', '#prismjs')

  return <>{children}</>
}
