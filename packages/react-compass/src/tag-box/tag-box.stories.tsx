import Button from '../button'
import {Column} from '../utils/components'
import TagBox from './index'

const items = [
  {id: 1, value: 'Item 1'},
  {id: 2, value: 'Item 2'},
]

export const TagBoxs: React.FC = () => (
  <Column>
    <h3>Fully Functional</h3>
    <TagBox
      label='Text Label'
      items={items}
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
