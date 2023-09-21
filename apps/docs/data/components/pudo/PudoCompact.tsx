import {Column, Pudo, styled, Typography} from '@comfortdelgro/react-compass'

export default function PudoCompact() {
  return (
    <Column>
      <Pudo
        items={[
          {name: 'item1', value: '', placeholder: 'item 1'},
          {name: 'item2', value: '', placeholder: 'item 2'},
        ]}
        compact='md'
      />

      <Typography.Body variant='body3' css={{marginTop: '$4'}}>
        Compact size: sm (left), md (right)
      </Typography.Body>

      <CompactExampleContainer>
        <Pudo
          items={[
            {
              name: 'item1',
              value: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          assumenda officiis voluptates quam rem qui libero commodi veritatis
          deserunt harum voluptatum beatae perferendis, vitae minus magnam facere
          quidem tempora iusto? Tempore praesentium accusamus mollitia, inventore
          quos tenetur, aspernatur eos, in id corporis veniam blanditiis error. Est
          illo temporibus velit, beatae dolores accusantium quis vel corporis neque
          harum? Accusantium, voluptates consequuntur?`,
            },
            {name: 'item2', value: 'Destination'},
          ]}
          type='label'
          compact='sm'
        />

        <Pudo
          items={[
            {
              name: 'item1',
              value:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum assumenda officiis voluptates quam rem qui libero commodi veritatis?',
            },
            {name: 'item2', value: 'Destination'},
          ]}
          type='label'
          compact='md'
        />
      </CompactExampleContainer>
    </Column>
  )
}

const CompactExampleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  '@sm': {
    flexDirection: 'row',

    '& > .pudo-container': {
      width: 'calc(100% / 2 - $2)',
    },
  },
})
