import {
  Column,
  Pudo,
  PudoValueChange,
  styled,
  Typography,
} from '@comfortdelgro/react-compass'
import {useState} from 'react'

const exampleItems = [
  {name: 'item1', value: '', placeholder: 'item1'},
  {
    name: 'item2',
    value: '',
    placeholder: 'item2',
    allowSwap: true,
  },
  {
    name: 'item3',
    value: '',
    placeholder: 'item3',
  },
] as const

export default function PudoDocs() {
  const [exampleValues, setExampleValues] = useState<PudoValueChange>()

  return (
    <Column>
      <Typography.Body
        variant='body3'
        css={{color: '$grayShades60', marginBlock: '$2 $4'}}
      >
        Default config: Minlength <strong>2</strong>, Maxlength{' '}
        <strong>3</strong>, Input&#39;s maxlength <strong>255</strong>
      </Typography.Body>
      <Pudo
        items={exampleItems}
        onValuesChange={(value) => setExampleValues(value)}
      />

      {exampleValues && (
        <>
          <Typography.Body variant='body3' css={{marginTop: '$4'}}>
            Values:
          </Typography.Body>
          <PreviewCode>{JSON.stringify(exampleValues, null, 2)}</PreviewCode>
        </>
      )}
    </Column>
  )
}

export const PreviewCode = styled('pre', {
  padding: '$2',
  margin: '0',

  width: '100%',
  minHeight: '$5',
  borderRadius: '$lg',

  backgroundColor: '$gray10',
  fontSize: '$label1',
  whiteSpace: 'pre-wrap',
  overflowWrap: 'anywhere',
})
