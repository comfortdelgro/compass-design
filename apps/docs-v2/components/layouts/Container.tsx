import {Box} from '@comfortdelgro/react-compass'

interface AppFooterProps {
  children: React.ReactNode
  css?: any
  className?: string
}

export default function Container({
  children,
  css,
  className = '',
}: AppFooterProps) {
  return (
    <Box
      className={`container ${className}`}
      css={{
        '@media (min-width: 1200px)': {
          maxWidth: 1200,
          margin: 'auto',
        },
        '@media (min-width: 600px)': {
          paddingLeft: 24,
          paddingRight: 24,
        },
        '@media (max-width: 599px)': {
          paddingLeft: 16,
          paddingRight: 16,
        },
        ...css,
      }}
    >
      {children}
    </Box>
  )
}
