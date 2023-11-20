import {Button, Column, Pudo} from '@comfortdelgro/react-compass-old'

export default function PudoAlignIconDocs() {
  return (
    <Column>
      <Pudo
        alignIcon='top'
        items={[
          {
            name: 'item1',
            title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          assumenda officiis voluptates quam rem qui libero commodi veritatis.`,
            content: (
              <>
                <p
                  style={{
                    color: 'var(--colors-grayShades60)',
                    fontFamily: 'monospace',
                    fontStyle: 'italic',
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Earum, praesentium. Fuga recusandae maxime molestias velit
                  doloremque soluta modi suscipit quia fugit vitae, non
                  laboriosam perferendis accusantium deserunt officiis eligendi.
                  Dolore!
                </p>
                <Button type='button' variant='secondary' size='sm'>
                  Some action
                </Button>
              </>
            ),
          },
          {
            name: 'item2',
            content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          assumenda officiis voluptates quam rem qui libero commodi veritatis.
          deserunt harum voluptatum beatae perferendis, vitae minus magnam facere
          quidem tempora iusto? Tempore praesentium accusamus mollitia, inventore
          quos tenetur, aspernatur eos, in id corporis veniam blanditiis error. Est
          illo temporibus velit, beatae dolores accusantium quis vel corporis neque
          harum? Accusantium, voluptates consequuntur?`,
          },
          {
            name: 'item3',
            content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          assumenda officiis voluptates quam rem qui libero commodi veritatis.
          deserunt harum voluptatum beatae perferendis, vitae minus magnam facere
          quidem tempora iusto? Tempore praesentium accusamus mollitia, inventore
          quos tenetur, aspernatur eos, in id corporis veniam blanditiis error. Est
          illo temporibus velit, beatae dolores accusantium quis vel corporis neque
          harum? Accusantium, voluptates consequuntur?`,
          },
        ]}
        type='custom'
      />
    </Column>
  )
}
