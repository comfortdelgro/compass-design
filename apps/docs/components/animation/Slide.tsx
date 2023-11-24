import {Box} from '@comfortdelgro/react-compass-old'

export default function Slide({
  animationName,
  children,
}: {
  animationName: string
  children: React.ReactNode
}) {
  return (
    <Box
      css={{
        display: 'grid',
        gridTemplateRows: 'min-content',
        gap: 8,
        width: 'min-content',
        animation: `${animationName} 30s ease-out forwards`,
        marginLeft: '20px',
        '@media (prefers-reduced-motion)': {
          animation: 'none',
        },
      }}
    >
      {children}
    </Box>
  )
}
