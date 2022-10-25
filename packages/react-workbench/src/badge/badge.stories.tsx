import type {StoryDecorator} from '@ladle/react'
import Badge from './badge'

export const Variants: React.FC = () => (
  <tr>
    <td>
      <Badge label='Primary' color='info' variant='primary' />
    </td>
    <td>
      <Badge label='Secondary' color='success' variant='secondary' />
    </td>
    <td>
      <Badge label='Outline' color='danger' variant='outline' />
    </td>
  </tr>
)

export const Colors: React.FC = () => (
  <tr>
    <td>
      <Badge label='Info' color='info' />
    </td>
    <td>
      <Badge label='Success' color='success' />
    </td>
    <td>
      <Badge label='Danger' color='danger' />
    </td>
    <td>
      <Badge label='Warning' color='warning' />
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
