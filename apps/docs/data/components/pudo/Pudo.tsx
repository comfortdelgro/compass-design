import {
  Column,
  Pudo,
  PudoValueChange,
  Typography,
} from '@comfortdelgro/react-compass-old'
import { useState } from 'react'
import styles from './styles/PrewviewCode.module.css'


const exampleItems = [
  { name: 'item1', value: '', placeholder: 'item1' },
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
        css={{ color: '$grayShades60', marginBlock: '$2 $4' }}
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
          <Typography.Body variant='body3' css={{ marginTop: '$4' }}>
            Values:
          </Typography.Body>
          <PreviewCode>{JSON.stringify(exampleValues, null, 2)}</PreviewCode>
        </>
      )}
    </Column>
  )
}


export const PreviewCode = (props: React.HTMLAttributes<HTMLPreElement>) => {
  return <pre className={styles.previewCode} {...props}>{props.children}</pre>
}
