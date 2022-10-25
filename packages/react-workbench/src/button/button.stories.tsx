import type {StoryDecorator} from '@ladle/react'
import Button from './button'

export const Variants: React.FC = () => (
  <tr>
    <td>
      <Button variant='primary'>Primary</Button>
    </td>
    <td>
      <Button variant='secondary'>Secondary</Button>
    </td>
    <td>
      <Button variant='danger'>Danger</Button>
    </td>
    <td>
      <Button variant='ghost'>Ghost</Button>
    </td>
    <td>
      <Button disabled>Disabled</Button>
    </td>
  </tr>
)

export const Sizes = () => (
  <tr>
    <td>
      <Button size='lg'>Large</Button>
    </td>
    <td>
      <Button size='md'>Medium (Default)</Button>
    </td>
    <td>
      <Button size='sm'>Small</Button>
    </td>
    <td style={{width: '20vw'}}>
      <Button size='md' block>
        Medium (Block)
      </Button>
    </td>
  </tr>
)

export default {
  decorators: [
    (Component) => (
      <table>
        <tbody>
          <Component />
        </tbody>
      </table>
    ),
  ] as StoryDecorator[],
}
