import {theme} from '@comfortdelgro/react-compass/theme'

interface Props {
  size: (typeof theme)['fontSizes'][keyof (typeof theme)['fontSizes']]
  weight: keyof (typeof theme)['fontWeights']
  color: string
  children: React.ReactElement
}
const FontDisplay: React.FC<Props> = ({
  size,
  weight,
  color = '#000000',
}) => {
  return (
    <div
      style={{
        width: '100%',
        borderBottom: '1px gray solid',
        paddingTop: '1.25rem',
        paddingBottom: '1.25rem',
      }}
    >
      <div
        style={{
          fontSize: "0.875rem",
          lineHeight: "1.25rem",
          display: 'flex',
          gap: '2.5rem',
          color: 'rgb(107 114 128)',
          marginBottom: '0.625rem',
        }}
      >
        <span>{size.token}</span>
        <span>size: {size.value}</span>
        <span>
          <span style={{textTransform: 'capitalize'}}>{weight}</span>
        </span>
      </div>

      <div
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          fontSize: size.value,
          lineHeight: 1,
          fontWeight: theme.fontWeights[weight].value,
          color,
        }}
      >
        The quick brown fox jumps over the lazy dog.
      </div>
    </div>
  )
}

export default FontDisplay
