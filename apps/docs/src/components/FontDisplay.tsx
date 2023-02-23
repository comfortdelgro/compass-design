import {theme} from '@comfortdelgro/react-compass/theme'

interface Props {
  size: (typeof theme)['fontSizes'][keyof (typeof theme)['fontSizes']]
  family: string
  weight: keyof (typeof theme)['fontWeights']
  color: string
}

const FontDisplay: React.FC<Props> = ({
  size,
  family,
  weight,
  color = '#000000',
}) => {
  return (
    <div className='w-full border-b last:border-b-0 py-5'>
      <div className='font-mono text-sm flex flex-row space-x-10 text-gray-500 mb-2.5'>
        <span>{size.token}</span>
        <span>size: {size.value}</span>
        <span>
          {family} / <span className='capitalize'>{weight}</span>
        </span>
      </div>

      <div
        className='overflow-hidden overflow-ellipsis max-w-full whitespace-nowrap leading-none'
        style={{
          fontSize: size.value,
          fontFamily: family,
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
