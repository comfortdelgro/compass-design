import {Box, Typography} from '@comfortdelgro/react-compass-old'

const FontWeightExample = () => {
  return (
    <Box
      css={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      <FontWeightExampleBox title='regular' fontWeight={undefined} />
      <FontWeightExampleBox title='semibold' fontWeight={'semibold'} />
      <FontWeightExampleBox title='bold' fontWeight={'bold'} />
    </Box>
  )
}

type FontWeightExampleBoxProps = {
  title: string
  fontWeight: 'semibold' | 'bold' | undefined
}

const FontWeightExampleBox = (props: FontWeightExampleBoxProps) => {
  const {title, fontWeight} = props

  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '$gray20',
        boxShadow:
          '0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13)',
        width: '9rem',
        height: '6rem',
      }}
    >
      <Typography.Body weight={fontWeight} css={{width: 'unset'}}>
        Aa
      </Typography.Body>
      <Typography.Body weight={fontWeight} css={{width: 'unset'}}>
        {title}
      </Typography.Body>
    </Box>
  )
}

export default FontWeightExample
