import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import Button from '../button'
import Icon from '../icon'
import {Column} from '../utils/components'
import TagBox from './index'

const items = [
  {id: 1, value: 'Item 1', icon: <Icon icon={faExclamationTriangle} />},
  {id: 2, value: 'Item 2', isDisabled: true},
  {id: 3, value: 'Item 3', icon: <Icon icon={faExclamationTriangle} />},
  {id: 4, value: 'Item 4', isDisabled: true},
  {id: 5, value: 'Item 5', icon: <Icon icon={faExclamationTriangle} />},
  {id: 6, value: 'Item 6', isDisabled: true},
  {id: 7, value: 'Item 7', icon: <Icon icon={faExclamationTriangle} />},
  {id: 8, value: 'Item 8', isDisabled: true},
  {id: 9, value: 'Item 9', icon: <Icon icon={faExclamationTriangle} />},
  {id: 10, value: 'Item 10', isDisabled: true},
]

export const TagBoxs: React.FC = () => (
  <Column>
    <h3>Fully Functional</h3>
    <TagBox
      label='Text Label'
      items={items}
      icon={<Icon icon={faExclamationTriangle} />}
      onRemove={(e) => console.log(e)}
      helperText='Helper text'
    >
      <TagBox.Action>
        <Button>Call to action</Button>
      </TagBox.Action>
    </TagBox>
    <h3>No Label</h3>
    <TagBox
      items={items}
      onRemove={(e) => console.log(e)}
      helperText='Helper text'
    >
      <TagBox.Action>
        <Button>Call to action</Button>
      </TagBox.Action>
    </TagBox>
    <h3>No Action</h3>
    <TagBox
      label='Text Label'
      items={items}
      onRemove={(e) => console.log(e)}
      helperText='Helper text'
    />
    <h3>No Helper text and Action</h3>
    <TagBox label='Text Label' items={items} onRemove={(e) => console.log(e)} />
  </Column>
)
