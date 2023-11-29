import {Column, Pudo, Typography} from '@comfortdelgro/react-compass'

export default function PudoCompact() {
  return (
    <Column>
      <Typography.Body variant='body3'>
        Compact size: sm (1st example), md (2nd example)
      </Typography.Body>
      <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
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
      </div>

      <Typography.Header variant='header5' css={{ marginTop: '$4' }}>
        Type <code>custom</code>
      </Typography.Header>
      <Typography.Body variant='body3'>
        Compact size: sm (1st example), md (2nd example)
      </Typography.Body>

      <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
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
      </div>
    </Column>
  )
}

// const CompactExampleContainer = styled('div', {
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '$4',

//   '@sm': {
//     flexDirection: 'row',

//     '& > .cdg-pudo-container': {
//       width: 'calc(100% / 2 - $2)',
//     },
//   },
// })
