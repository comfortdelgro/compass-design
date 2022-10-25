import type {StoryDecorator} from '@ladle/react'
import Avatar from './avatar'
import AvatarGroup from './avatar-group'

export const Sizes = () => (
  <tr>
    <td>
      <Avatar label='Albert Einstein' size='lg' />
    </td>
    <td>
      <Avatar label='Albert Einstein' size='md' />
    </td>
    <td>
      <Avatar label='Albert Einstein' size='sm' />
    </td>
    <td>
      <Avatar label='Albert Einstein' size='xs' />
    </td>
  </tr>
)

export const Group = () => (
  <tr>
    <AvatarGroup>
      <Avatar label='Leonhard Euler' />
      <Avatar label='Isaac Newton' />
      <Avatar label='Alan Turing' />
      <Avatar label='David Hilbert' />
      <Avatar label='Edwin Hubble' />
      <Avatar label='Ada Lovelace' />
      <Avatar label='Max Planck' />
    </AvatarGroup>
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
