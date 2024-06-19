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
          maxWidth: '1200px',
          margin: 'auto',
        },
        '@media (min-width: 600px)': {
          paddingLeft: '24px',
          paddingRight: '24px',
        },
        '@media (max-width: 599px)': {
          paddingLeft: '16px',
          paddingRight: '16px',
        },
        ...css,
      }}
    >
      {children}
    </Box>
  )
}
