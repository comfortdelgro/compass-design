import {Column} from '../utils/components'
import Dialog from './index'

export const Default: React.FC = () => {
  return (
    <Column>
      <h3>Default dialog</h3>
      <Dialog.Trigger label='Open dialog'>
        <Dialog title='My title' confirmLabel='Do it'>
          Are you sure you want to do this?
        </Dialog>
      </Dialog.Trigger>
    </Column>
  )
}
