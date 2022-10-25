import type {StoryDecorator} from '@ladle/react'
import Link from './link'

export const Links: React.FC = () => (
  <>
    <tr>
      <Link href='/#page'>Go to another page</Link>
    </tr>
    <tr>
      <Link href='https://google.com' external>
        Go to Google
      </Link>
    </tr>
  </>
)

export default {
  decorators: [
    (Component) => (
      <table
        style={{
          fontFamily: 'Poppins',
        }}
      >
        <tbody>
          <Component />
        </tbody>
      </table>
    ),
  ] as StoryDecorator[],
}
