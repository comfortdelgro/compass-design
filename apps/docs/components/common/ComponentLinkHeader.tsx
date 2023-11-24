import {Badge, Flexbox} from '@comfortdelgro/react-compass-old'
import Link from 'next/link'

export default function ComponentLinkHeader() {
  return (
    <Flexbox
      css={{
        marginBottom: '$4',
      }}
    >
      <Link
        href='https://github.com/comfortdelgro/compass-design'
        target='_blank'
        style={{textDecoration: 'none'}}
      >
        <Badge label='Github' color='info' variant='outline' />
      </Link>
      <Link
        href='https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0'
        target='_blank'
        style={{textDecoration: 'none'}}
      >
        <Badge label='Figma' color='danger' variant='outline' />
      </Link>
    </Flexbox>
  )
}
