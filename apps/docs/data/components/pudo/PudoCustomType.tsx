import {Button, Column, Pudo, SlideAction} from '@comfortdelgro/react-compass'

export default function PudoCustomTypeDocs() {
  return (
    <Column>
      <Pudo
        items={[
          {
            name: 'item1',
            title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          assumenda officiis voluptates quam rem qui libero commodi veritatis.`,
            content: (
              <>
                <p style={{color: 'var(--colors-grayShades60)'}}>
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
            title: (
              <>
                <p style={{marginBlock: '0 1rem', color: 'blueviolet'}}>
                  <strong>Title only:</strong> Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Laborum assumenda officiis
                  voluptates quam rem qui libero commodi veritatis.
                </p>
                <SlideAction
                  css={{marginBlock: '0.5rem'}}
                  label='Some danger action on title'
                  labelType='slide'
                />
              </>
            ),
          },
          {
            name: 'item3',
            content: (
              <p style={{marginBlock: '0'}}>
                This item has <strong>content only</strong> ✨. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Laborum assumenda
                officiis voluptates quam rem qui libero commodi veritatis.
                deserunt harum voluptatum beatae perferendis, vitae minus magnam
                facere quidem tempora iusto?{' '}
                <del>
                  Tempore praesentium accusamus mollitia, inventore quos
                  tenetur, aspernatur eos, in id corporis veniam blanditiis
                  error.
                </del>{' '}
                Est illo temporibus velit, beatae dolores accusantium quis vel
                corporis neque harum? Accusantium, voluptates consequuntur?
              </p>
            ),
          },
        ]}
        type='custom'
      />
    </Column>
  )
}
