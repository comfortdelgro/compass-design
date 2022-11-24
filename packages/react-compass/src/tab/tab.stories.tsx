import {Column} from '../utils/components'
import Link from './tab'

export const Links: React.FC = () => (
  <Column>
    <Link href='/#page'>Go to another page</Link>
    <Link href='https://google.com' external>
      Go to Google
    </Link>
  </Column>
)
