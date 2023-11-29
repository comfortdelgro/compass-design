import {Link} from '@comfortdelgro/react-compass'

function CustomExample() {
  return (
    <Link
      href='https://google.com'
      external
      css={{textDecoration: 'line-through', '&:hover': {color: 'grey'}}}
    >
      Go to Google
    </Link>
  )
}

export default CustomExample
