import {Badge, Flexbox} from '@comfortdelgro/react-compass'

export default function ComponentLinkHeader() {
  return (
    <Flexbox
      css={{
        marginBottom: '$4',
      }}
    >
      <Badge label='Github' color='info' variant='outline' />
      <Badge label='Figma' color='danger' variant='outline' />
    </Flexbox>
  )
}
