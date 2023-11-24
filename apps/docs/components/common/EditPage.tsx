import Github from '@comfortdelgro/compass-icons/react/github'
import {Button} from '@comfortdelgro/react-compass'
import Link from 'next/link'

export default function EditPage(props: {sourceLocation: string}) {
  const {sourceLocation} = props
  return (
    <Link
      href={`https://github.com/comfortdelgro/compass-design/edit/main/apps${sourceLocation}`}
      target='_blank'
    >
      <Button variant='ghost' size='sm' leftIcon={<Github />}>
        Edit page
      </Button>
    </Link>
  )
}
