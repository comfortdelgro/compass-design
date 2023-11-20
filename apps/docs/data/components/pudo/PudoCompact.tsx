import {
  Column,
  Pudo,
  Typography,
} from '@comfortdelgro/react-compass-old'

import styles from './styles/CompactExampleContainer.module.css'

export default function PudoCompact() {
  return (
    <Column>
      <Typography.Body variant='body3'>
        Compact size: sm (1st example), md (2nd example)
      </Typography.Body>
      <CompactExampleContainer>
        <Pudo
          items={[
            { name: 'item1', value: '', placeholder: 'item 1' },
            { name: 'item2', value: '', placeholder: 'item 2' },
          ]}
          compact='sm'
        />
        <Pudo
          items={[
            { name: 'item1', value: '', placeholder: 'item 1' },
            { name: 'item2', value: '', placeholder: 'item 2' },
          ]}
          compact='md'
        />
      </CompactExampleContainer>

      <Typography.Header variant='header5' css={{ marginTop: '$4' }}>
        Type <code>custom</code>
      </Typography.Header>
      <Typography.Body variant='body3'>
        Compact size: sm (1st example), md (2nd example)
      </Typography.Body>

      <CompactExampleContainer>
        <Pudo
          items={[
            {
              name: 'item1',
              title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          assumenda officiis voluptates quam rem qui libero commodi veritatis
          deserunt harum voluptatum beatae perferendis, vitae minus magnam facere
          quidem tempora iusto? Tempore praesentium accusamus mollitia, inventore
          quos tenetur, aspernatur eos, in id corporis veniam blanditiis error. Est
          illo temporibus velit, beatae dolores accusantium quis vel corporis neque
          harum? Accusantium, voluptates consequuntur?`,
            },
            { name: 'item2', title: 'Destination' },
          ]}
          type='custom'
          compact='sm'
        />

        <Pudo
          items={[
            {
              name: 'item1',
              title:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum assumenda officiis voluptates quam rem qui libero commodi veritatis?',
            },
            { name: 'item2', title: 'Destination' },
          ]}
          type='custom'
          compact='md'
        />
      </CompactExampleContainer>
    </Column>
  )
}

const CompactExampleContainer = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={styles.compactExampleContainer} {...props}>{props.children}</div>
}