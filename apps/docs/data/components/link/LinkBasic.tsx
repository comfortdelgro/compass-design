import {Link} from '@comfortdelgro/react-compass-old'

function BasicExample() {
  return (
    <div style={{gap: '1rem', display: 'flex'}}>
      <Link href='/#page'>Go to another page</Link>
      <Link href='https://google.com' external>
        Go to Google
      </Link>
    </div>
  )
}

export default BasicExample
