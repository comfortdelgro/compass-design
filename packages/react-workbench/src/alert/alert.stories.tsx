import type {StoryDecorator} from '@ladle/react'
import Alert from './alert'

const AlertContent: React.FC = () => <>A simple primary alert text.</>

export const Variants: React.FC = () => (
  <>
    <tr>
      <Alert color='info'>
        <AlertContent />
      </Alert>
    </tr>
    <tr>
      <Alert color='success'>
        <AlertContent />
      </Alert>
    </tr>
    <tr>
      <Alert color='danger'>
        <AlertContent />
      </Alert>
    </tr>
    <tr>
      <Alert color='warning'>
        <AlertContent />
      </Alert>
    </tr>
  </>
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
